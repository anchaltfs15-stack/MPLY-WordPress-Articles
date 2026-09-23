const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, ExternalHyperlink,
  AlignmentType, BorderStyle, Bookmark, ImageRun,
} = require("docx");
const fs = require("fs");

const FONT = "Georgia";

function label(text) {
  return new Paragraph({
    spacing: { before: 200, after: 60 },
    children: [new TextRun({ text, bold: true, font: FONT, size: 20, color: "444444" })],
  });
}

function meta(text) {
  return new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({ text, italics: true, font: FONT, size: 22 })],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 240, after: 200 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 32 })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 260, after: 140 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 26 })],
  });
}

function p(runsOrText) {
  const children = typeof runsOrText === "string"
    ? [new TextRun({ text: runsOrText, font: FONT, size: 23 })]
    : runsOrText;
  return new Paragraph({ spacing: { after: 200 }, children });
}

function link(text, url) {
  return new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text, font: FONT, size: 23, color: "1155CC", underline: {} })],
  });
}

function run(text, opts = {}) {
  return new TextRun({ text, font: FONT, size: 23, ...opts });
}

function bullets(items) {
  return items.map(
    (t) =>
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 100 },
        children: [new TextRun({ text: t, font: FONT, size: 23 })],
      })
  );
}

function chartImage(imgPath, { widthIn = 6, caption } = {}) {
  const buf = fs.readFileSync(imgPath);
  // matplotlib figures here are saved at a fixed 8x5in / 200dpi aspect (1.6:1)
  const heightIn = widthIn / 1.6;
  const children = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: caption ? 80 : 200 },
      children: [
        new ImageRun({
          type: "png",
          data: buf,
          transformation: { width: widthIn * 96, height: heightIn * 96 },
        }),
      ],
    }),
  ];
  if (caption) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [new TextRun({ text: caption, italics: true, font: FONT, size: 19, color: "666666" })],
      })
    );
  }
  return children;
}

function divider() {
  return new Paragraph({
    spacing: { before: 300, after: 300 },
    border: { bottom: { color: "AAAAAA", space: 1, style: BorderStyle.SINGLE, size: 6 } },
    children: [],
  });
}

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 100, after: 120 },
    children: [new TextRun({ text, bold: true, font: FONT, size: 24, color: "1F4E78" })],
  });
}

async function buildArticle({
  outPath,
  seoTitle,
  metaDescription,
  titleH1,
  bodyBlocks, // array of Paragraph
  mply, // null or { decision, placement, note }
  visual, // { decision: 'Yes'|'No', brief: string|null }
  internalLinks, // array of strings
  externalSources, // array of strings
  hashtags, // array of strings
}) {
  const children = [];

  children.push(label("SEO Title"));
  children.push(p(seoTitle));

  children.push(label("Meta Description"));
  children.push(p(metaDescription));

  children.push(label("Article"));
  children.push(h1(titleH1));
  children.push(...bodyBlocks);

  children.push(new Paragraph({ pageBreakBefore: true, children: [] }));
  children.push(
    new Paragraph({
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: "PRODUCTION METADATA (not part of the published article)",
          bold: true,
          italics: true,
          font: FONT,
          size: 22,
          color: "888888",
        }),
      ],
    })
  );

  children.push(sectionHeading("MPLY Section / Placement"));
  if (mply) {
    children.push(p(`MPLY Decision: ${mply.decision}`));
    children.push(p(`Placement: ${mply.placement}`));
    children.push(p(mply.note));
  } else {
    children.push(p("MPLY Decision: Omit. No MPLY mention in this article."));
  }

  children.push(sectionHeading("Visual Decision"));
  children.push(p(`Visual Decision: ${visual.decision}`));
  if (visual.decision === "Yes" && visual.brief) {
    children.push(p(visual.brief));
  }

  children.push(sectionHeading("Internal Link Suggestions"));
  if (internalLinks && internalLinks.length) {
    children.push(...bullets(internalLinks));
  } else {
    children.push(p("None."));
  }

  children.push(sectionHeading("External Sources"));
  children.push(...bullets(externalSources));

  children.push(sectionHeading("Social Hashtags"));
  children.push(p(hashtags.join(" ")));

  const doc = new Document({
    sections: [
      {
        properties: {
          page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
        },
        children,
      },
    ],
  });

  const buf = await Packer.toBuffer(doc);
  require("fs").writeFileSync(outPath, buf);
  console.log("wrote", outPath);
}

module.exports = { buildArticle, h2, p, link, run, bullets, divider, chartImage };
