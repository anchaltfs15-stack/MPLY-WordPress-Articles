# MPLY WordPress Article Production — Project Handoff

This file is read automatically by Claude Code at the start of every session in this
folder. It exists so a new session can pick up this project without re-deriving
context.

## What this project is
A content pipeline producing SEO-driven WordPress articles (docx) for MPLY (Strategy
Shares Monopoly ETF), built from production brief spreadsheets. The objective chain:

**INTENTIONAL SEARCHER → RELEVANT ARTICLE → NATURAL MPLY CONNECTION → MPLY WEBSITE**

Not: maximize word count. Not: force MPLY into every article. Not: generic content
because a keyword exists. The goal is useful, credible, search-intent-focused
articles that give the right reader a natural reason to explore MPLY — never a
manufactured one.

**This project is intentionally separate from:**
- The `MFunds-Claude` repo's ETF-listicle Batch pipeline (paused since 2026-09-15,
  see that repo's own `CLAUDE.md`).
- That repo's `Articles for WP-Blogger` project (per-set hardcoded Python builders,
  no cross-date tracker, different Keywords xlsx schema). That project is left
  as-is; nothing here reuses its scripts, folders, or git history.

Everything for this project — briefs, articles, tracker, reference material, git
history — lives inside this folder and its own repository.

## File locations
- Production briefs (source of truth, one file per set): `Production Briefs/YYYY-MM-DD_Set_XX.xlsx`
- Articles: `Articles/YYYY-MM-DD_Set_XX/NNN_Short_Article_Title.docx`
- Production tracker (single appendable workbook, never overwritten): `Production Trackers/MPLY_Article_Production.xlsx`
- Reference/approved sample articles (quality benchmark only — see "Editorial
  depth standard" below; empty as of 2026-09-23, awaiting user upload): `Reference Articles/`
- Verified current MPLY facts (expense ratio, holdings, AUM, etc.): `MPLY Information/`
- Templates for the brief and tracker schema: `Production Briefs/_TEMPLATE_Set_XX.xlsx`,
  `Production Trackers/_TEMPLATE_MPLY_Article_Production.xlsx`
- Git remote: standalone repo, private, `MPLY-WordPress-Articles` on GitHub — this
  folder's own history, not the ETF pipeline repo's.

## Brief schema (Production Briefs/*.xlsx)
One row per article:

`No. | Article Title | Primary Keyword | Secondary Keywords | Related Terms | Content Cluster | Search Intent | MPLY Relevance | MPLY Connection Logic | MPLY Placement`

The brief is the source of truth for topic, keywords, and MPLY guidance. Do not
silently replace or rewrite it. If it doesn't support a claim, don't invent one.

## Core principle
The Excel tells you WHAT to write. Research determines WHAT IS TRUE. Search intent
determines HOW TO STRUCTURE IT. The topic determines WHETHER MPLY BELONGS. The
reader determines HOW MUCH IS ENOUGH. The tracker records WHAT WAS CREATED. The
DOCX is the final deliverable.

## Input handling
- Identify the correct brief file for the requested date/set from its filename.
- Read the complete worksheet; process every row; preserve original article number,
  title, and keyword structure unless there's a genuine SEO/editorial reason for a
  minor adjustment.
- One DOCX per article. Never silently skip a row. Record every completed article
  in the tracker.
- If a tracker already exists, append the new set's rows — never overwrite or
  delete previously completed sets/records.
- If multiple brief files exist, don't assume which to process — use the one the
  user names, or the clearly-latest one only if the user explicitly asks for
  "the latest set."

## Article objective
Write for the actual person who searched the keyword, not for an algorithm.
Address the search intent directly, explain clearly, use terminology naturally,
go as deep as the topic actually needs. No mandatory word count — a simple topic
gets a shorter article, a complex one gets more depth. Never pad to hit a length
target.

## Editorial depth standard
Approved articles in `Reference Articles/` (once supplied) are quality
benchmarks, not templates: use them to calibrate writing quality, depth,
analytical thinking, natural flow, use of examples, use of distinctions and
comparisons, discussion of limitations/failure cases, appropriate MPLY
integration, appropriate FAQ use, appropriate source use, and hashtag
placement. **Never copy their wording, paragraph structure, headings,
section count, or length.** Every article is independently structured around
its own search intent.

"No mandatory word count" is not permission to write thin or superficial
articles. Before finishing an article, check it against these questions:
1. Has the searcher's main question been answered directly?
2. Have the important mechanisms behind the concept been explained?
3. Have important distinctions or misconceptions been addressed?
4. Have relevant examples been provided where they improve understanding?
5. Have limitations, failure cases, or risks been addressed where relevant?
6. Are there practical indicators or metrics where appropriate?
7. Would a reader searching this topic feel the subject was actually covered?
8. Is anything important missing simply because the article was kept short?

If something important is missing, keep developing the article — but never
add filler purely to increase length. A short article is correct when the
topic is genuinely narrow; a longer one is required when the topic has
multiple dimensions that matter. The target is "complete enough to satisfy
the search intent without filler," never "minimum possible length" and
never a word-count target.

## Section depth and reader engagement
Avoid shallow sections: a heading like "Why It Matters" followed by one
generic sentence ("Pricing power matters because it helps companies
maintain margins") before jumping to the next heading under-serves the
heading. Develop the idea: what does it mean economically, why does it
matter, what changes when the underlying conditions shift, what evidence
would an investor look for, what could make the conclusion wrong. Depth
depends on the subject; avoid artificial padding, but don't under-explain
an important concept just to keep sections short.

The article should read as one coherent argument, not a set of disconnected
mini-answers: definition flows into mechanism, mechanism into evidence,
evidence into practical evaluation, evaluation into limitations, limitations
into MPLY relevance where applicable. Use transitions that connect
consecutive sections rather than restarting the reader's attention at every
heading.

## Examples and evidence — specificity requirement
When a section calls for examples, give actual, specific ones. If a
"Real Examples" section exists, name the real companies/products/events and
explain the example accurately, researched, not invented. Don't write
"Search engines existed before a dominant one emerged" when the actual
company names materially improve the explanation, and don't write "Discount
retailers are examples" when naming one is more useful to the reader.

Every specific company, historical, financial, regulatory, market, or
statistical claim needs actual research behind it, not a hedge phrase.
Don't substitute sourcing with "widely documented," "well known," "commonly
accepted," or "industry experts agree" unless the claim is genuinely common
knowledge that doesn't need a citation. When a claim is specific enough to
need a source, either find and use one, or don't make the claim.

## SEO keyword usage
- Primary keyword: appears naturally in title, opening, relevant headings, body,
  meta description where appropriate. No forced exact-match repetition.
- Secondary keywords: only where they genuinely fit the explanation.
- Related terms: only where they improve topical completeness, never a dedicated
  keyword-stuffing section.
- Never write "If you are looking for X, X can help you understand X..." or other
  obvious SEO patterns. Should read as a knowledgeable financial writer wrote it
  for a real reader.

## Search intent drives structure
Match structure to what the searcher actually wants (definition, examples,
comparison, evaluation, how-to, product research, etc.). Different intents get
different structures — don't reuse one template. "What is pricing power?" answers
the concept directly; "pricing power examples" prioritizes examples; "MPLY ETF"
is directly, substantially about MPLY.

## Writing style
Clear, natural, analytical, confident, human, specific, evidence-led, accessible
without being simplistic.

**Never use the em dash character (—). This is mandatory.** Use commas,
parentheses, colons, semicolons, or separate sentences instead.

**Avoid:** generic AI openers ("In today's rapidly evolving world...", "Let's dive
in...", "Whether you're a seasoned investor or just starting out...",
"Understanding this concept is crucial...", "At the end of the day..."), "In
conclusion," empty summaries, repetitive definitions, repetitive AI-style
transitions, excessive bullets/headings, corporate jargon, marketing language,
unnecessary disclaimers, anything that reads machine-generated.

## Financial writing standard
Write for an intelligent investor: explain the economics, don't just define
the term. Where the topic calls for it, draw real distinctions instead of
treating related-but-different ideas as interchangeable: temporary advantage
vs. durable advantage, correlation vs. causation, revenue growth vs.
profitable growth, high margin vs. pricing power, market share vs.
competitive moat, recurring revenue vs. durable retention, short-term
performance vs. long-term evidence. Where a conclusion depends on evidence,
say what evidence would actually support it, rather than asserting the
conclusion alone.

## Structure
No universal template. Options (use what the intent calls for, not all of them
every time): direct definition, mechanism, why it matters, examples, metrics,
how to evaluate it, comparisons, misconceptions, limitations/failure cases,
investor considerations, MPLY connection where relevant, FAQ, sources. Use
only the elements that genuinely improve this specific article. Don't add a
section, an "Introduction"/"Key Takeaways" heading, or an FAQ, just because
another article had one.

## MPLY integration — the most important rule in this project
MPLY is **not required in every article.** Use the brief's `MPLY Relevance` and
`MPLY Connection Logic` fields to decide whether and how MPLY appears.
`MPLY Connection Logic` is guidance for understanding the relationship, never
copy to reproduce verbatim — write an article-specific connection instead.

**Do not** reuse the same MPLY paragraph, the same "Where MPLY Connects to
[Topic]" heading, the same characteristics list, or the same risk paragraph
across articles. Ask: why is MPLY relevant to *this* article specifically? If
there's no genuine connection, the correct outcome is:

**MPLY Decision: Omit** (recorded in the tracker, never written into the DOCX
itself — see "DOCX output format" below) — this is a valid, expected, and
preferred outcome over a forced connection. A forced mention damages article
quality and reader trust. When MPLY is included, it must read as ordinary
editorial content woven into the article, never as a labeled section.

**The brief's `MPLY Relevance`/`MPLY Placement` tags are a starting point,
not a ceiling or a floor.** Before finalizing either an Omit or a one-line
Brief Mention, check whether the article's own content independently turns
on one of MPLY's actual screening criteria (brand dominance, regulatory
exclusivity, industry concentration, barriers to entry, pricing power,
supply-chain control, network effects, protected IP). If it does, even on a
row tagged Indirect or Moderate, that's a genuine connection worth a brief,
specific paragraph, not an artificial one — found in Article 003 ("Second
Mover Advantage," tagged Indirect/Omit, but the article's own "When Being
Second Does Not Work" section already discussed network effects, switching
costs, patents, and regulatory approvals, MPLY's own screening categories).
The reverse also applies: a "Strong thematic" tag doesn't excuse a
one-sentence treatment (see "MPLY section depth" below). Let the article's
actual content decide, with the brief's tags as guidance in both directions.

### MPLY placement (per brief's `MPLY Placement` field)
- **No MPLY** — don't mention it.
- **Brief Mention** — a short contextual reference.
- **Contextual Section** — a meaningful, article-specific passage on the
  relationship.
- **Primary Subject** — the article can focus substantially on MPLY when the
  keyword/intent is directly about the fund.
Never turn an informational article into an MPLY advertisement.

### MPLY section depth — Strong thematic defaults to substantial, not one sentence
"MPLY is not mandatory" does not mean a Strong-thematic connection should
normally get only one sentence. **For `MPLY Relevance = Strong thematic`,
the default expectation is a dedicated, multi-paragraph MPLY section**,
unless researching the specific topic actually shows the connection is
weaker than the brief's relevance tag suggests. Treat the brief's
`MPLY Placement` value as the starting guidance, but let the relevance tag
set the depth floor: a "Strong thematic" row whose `MPLY Placement` says
"Brief Mention" still deserves reconsideration if a real, substantive
connection exists (as it usually will, since "Strong thematic" is the
brief's own signal that it does) — one sentence under-serves that row, and
the placement label is guidance, not a hard cap. "Moderate" relevance is
normally satisfied by a paragraph or brief contextual reference, not a full
section. "Indirect" and "None" stay brief-mention-or-omit as before.

A substantial MPLY section explains, in the article's own words, not a
reused paragraph:
1. Why the article's concept matters to MPLY specifically.
2. Which part of MPLY's stated investment approach relates to the concept.
3. How the concept can show up in the types of businesses MPLY evaluates.
4. What a reader researching MPLY should actually look at.
5. A specific, verified MPLY characteristic, holding, or methodology detail,
   when it's genuinely relevant (not a mandatory recitation).
6. Appropriate limitations or distinctions (for example: pricing power
   alone doesn't prove a durable moat).
7. A natural path to the official MPLY page.

Never let the section collapse into MPLY's boilerplate description
("MPLY invests in companies with brand dominance, pricing power, network
effects, regulatory exclusivity and high barriers to entry") repeated
verbatim as the entire section — that sentence may appear as one fact among
several, never as the whole explanation. Write the specific mechanism for
this topic instead (e.g. pricing power: durable economic rents and market
dominance; switching costs: retention and position protection; network
effects: how participation growth builds barriers to entry; recurring
revenue: not itself a moat, examine what makes the retention durable).

### MPLY CTA / reader path
No aggressive promotional language: never "Buy MPLY now," "Best ETF,"
"Invest in MPLY," "Don't miss MPLY." The goal is to move an interested
reader toward research, not to close a sale. Adapt language like: "Readers
who want to examine how this approach is applied in an actual portfolio can
review MPLY's current investment approach and holdings on the fund's
official page," or "To see how these characteristics are reflected in the
fund's current portfolio, readers can review MPLY's latest holdings and
fund documents." Vary the exact phrasing per article; don't reuse one CTA
sentence everywhere.

### MPLY link
Official page only: `https://strategysharesetfs.com/mply/`. Natural anchor text,
varied across articles ("MPLY ETF", "MPLY", "MPLY fund", "MPLY's investment
approach"). Never OneDrive URLs, relative URLs, placeholder URLs, or invented
URLs. Only link when it actually makes sense to the reader.

### MPLY product facts
Never invent holdings, AUM, expense ratio, performance, yield, distributions,
portfolio companies, strategy details, dates, or fees. Verify against
`MPLY Information/` or the official MPLY source before using a current figure.
If it can't be verified, don't use it.

## Financial content accuracy — no fabrication (overrides all other goals)
Never fabricate statistics, market share, company financials, historical returns,
ETF holdings, valuation figures, economic data, research findings, quotes,
sources, or URLs. Prefer, in order: official government/regulatory sources, SEC/
company filings, official fund issuer sources, academic research, established
financial institutions, high-quality financial publications, other reputable
specialist sources. Never treat an issuer's marketing claim as independent
analysis. If something can't be verified, research further or omit the claim,
never fill the gap with something plausible-sounding.

## Investment language
Research content, not personalized advice. Never tell readers to buy/sell/hold
MPLY or avoid/buy a specific security. Never call MPLY "the best," "the safest,"
"superior," "guaranteed." No return promises. Use neutral research framing, e.g.:
"Investors researching businesses with durable competitive advantages may also
encounter MPLY, an actively managed ETF whose stated approach focuses on
companies with characteristics such as brand dominance, pricing power, network
effects, regulatory exclusivity, and high barriers to entry."

## Risk framing
Include risk discussion when relevant to the specific article; never paste the
same generic risk block into every piece. A conceptual article's risks relate to
the concept (e.g. pricing power: customer resistance, competitive response,
regulation, substitution, demand elasticity); an MPLY-specific article's risks
are fund-level (liquidity, short track record, small-fund closure risk, etc.).
State risk facts plainly as part of the article's own analysis; never append a
generic boilerplate disclaimer (see "Disclaimers" below).

## Disclaimers — do not auto-append
Never append a generic disclaimer to an article just because it's financial
content: no "Educational content only, not investment advice," no "Investing
involves risk, including possible loss of principal," no "Read the prospectus
and consider objectives, risks, charges and expenses before investing," no
boilerplate of that kind. Neutral, non-recommending language (see "Investment
language" above) is what keeps the article appropriate, not a disclaimer
paragraph. Only include disclaimer language if the user explicitly supplies it
as a project requirement for a specific batch.

## Visuals — evaluate every article, don't default to none
Visuals are not optional-by-default the way an FAQ is. **Every article must
be evaluated for at least one meaningful visual opportunity** before it's
considered done; the outcome of that evaluation can still be "no visual
belongs here," but skipping the evaluation itself is not acceptable. The
goal is comprehension, engagement, and scanability, not decoration.

Possible visual types: editorial hero image, data chart, comparison table,
framework diagram, process diagram, economic model, timeline, competitive-
moat diagram, portfolio/holdings chart, flow diagram, conceptual
illustration. Pick per article, not the same type every time — a pricing-
power article might warrant a price-growth-vs-volume chart or a conceptual
pricing-power framework; a cost-advantage article a unit-cost comparison or
economies-of-scale diagram; a second-mover article a first-mover-vs-second-
mover framework or timeline; an MPLY-specific article a holdings-
concentration chart, portfolio-composition chart, or strategy framework.

**Data rule:** every number in a chart must come from a verified source,
with the source recorded. Never invent values or present illustrative data
as real data; if an explanatory chart genuinely needs an illustrative
example, label it clearly as illustrative. When reliable numerical data
isn't available, use a conceptual visual instead of forcing a data chart,
and never manufacture a chart just to satisfy the evaluation requirement.

**Visuals must actually be produced, not just described.** Don't stop at
"Visual Decision: Yes" with a vague brief — generate the chart/diagram when
the production environment supports it (see `Scripts/wp_docx_helpers.js`'s
`chartImage()` and the `dataviz` skill for chart work). If a visual must
instead be handed off as a designer/AI-image prompt, the brief needs to be
production-ready detail, not a one-line description.

**Placement follows the content it supports** — not automatically at the
bottom. A typical flow: intro → explanation → the relevant chart/diagram →
interpretation → further analysis. Place the visual where the surrounding
text actually needs it.

The decision (`Visual Decision: Yes/No`) and the designer-usable brief go in
the tracker; the visual itself (if Yes) appears directly in the article as
ordinary content with a normal caption, never a labeled production field.

## Internal links
Only when a genuine contextual relationship exists. Use real URLs if available in
this project's files; otherwise give suggested anchor text + target article title
in the tracker (never an invented URL). Don't force a link into every article. A
suggested internal link is tracker-only unless a real destination URL exists, in
which case it may be incorporated as a natural hyperlink directly in the article
text.

## External sources / reader-facing Sources section
Sourcing is part of research, not an afterthought, and reference links are
required whenever an article contains claims that need verification, not
optional polish. Specific examples and historical, financial, company,
regulatory, market, or statistical claims need an actual credible source
behind them, found and checked before the claim is made, never after. By
topic, consider: SEC, Federal Reserve, Bureau of Labor Statistics, company
investor-relations pages, annual reports, 10-K/10-Q filings, official ETF
issuer pages, other official government sources, academic research,
reputable financial publications, industry sources. For MPLY-specific
information, prioritize: (1) official Strategy Shares/MPLY sources, (2) fund
documents, (3) SEC filings where applicable, (4) reliable secondary sources
for cross-checking. Never fabricate a source or write a URL from memory;
only use real, working URLs.

Record every source actually used in the tracker's `External Sources`
column regardless of whether a Sources section appears in the article, and
never claim something was verified unless it actually was. Separately, when
sources materially support the article, include a reader-facing "Sources"
section near the end, before the hashtags, with the actual references
(hyperlinked where appropriate) rather than a vague line like "Sources:
company filings and industry research."

## FAQ
Only when it genuinely serves additional search intent — 0, 2, 4, or more
questions, never a fixed count because "every article has one." When included,
it's ordinary reader-facing content inside the article (an `## FAQ` heading
with question/answer pairs), placed after the body and any MPLY discussion,
before Sources and hashtags.

## Social hashtags
A small number, relevant to the actual subject. No stuffing, no generic viral
tags. **Hashtags are the literal last thing in the DOCX** — nothing (no
disclaimer, no production note, no metadata) follows them.

## DOCX output format — publication-only, nothing else
File naming: `NNN_Short_Article_Title.docx` (zero-padded 3-digit number).

**The DOCX contains only what a reader/publisher should see.** No labels, no
production commentary, no metadata of any kind. Structure:

1. **Article title** — the article heading itself (an H1), never prefixed with
   "Article", "Title:", or any label.
2. **Article body** — H2/H3 sections as the search intent actually calls for.
3. **MPLY discussion**, if genuinely relevant — woven into the body as normal
   editorial content, not a separate labeled section, not introduced by any
   "MPLY Section" or "MPLY Decision" heading.
4. **FAQ**, if genuinely useful — plain `## FAQ` heading with question/answer
   pairs.
5. **Sources**, if genuinely useful — plain `## Sources` heading, reader-facing
   citations only.
6. **Social hashtags** — the final line of the document. Nothing follows it.

**Never write any of the following into a DOCX:** an "SEO Title" or "Meta
Description" label/value pair, "PRODUCTION METADATA" or any similar banner,
"MPLY Decision: ...", "MPLY Section / Placement", "Visual Decision: ...",
"Visual Brief", "Internal Link Suggestions", "Final QC Status", production
notes, editor/publisher instructions, AI-generation notices ("This article was
generated...", "According to your content brief..."), or a generic investment
disclaimer. All of that belongs only in the production tracker (see below);
build scripts must never pass it into the DOCX-writing step.

## Production tracker (Production Trackers/MPLY_Article_Production.xlsx)
One row per article, columns:
`Date | Set | No. | Article Title | Primary Keyword | Secondary Keywords |
Related Terms | Content Cluster | Search Intent | MPLY Relevance | MPLY
Connection Logic | SEO Title | Meta Description | MPLY Decision | MPLY Placement
| Visual Decision | Visual Brief | Internal Link Suggestions | External Sources |
Social Hashtags | Article DOCX Filename | Final QC Status | Notes`

**This is the only place SEO Title, Meta Description, MPLY Decision/Placement,
Visual Decision/Brief, Internal Link Suggestions, and Final QC Status live.**
None of them belong in the DOCX. Keep these three layers separate and never
mix them:
- **Input brief** = what to write + SEO/MPLY guidance.
- **Article DOCX** = the publication-ready article, for the reader/publisher.
- **Production tracker** = SEO + MPLY + visual + source + QC metadata, for the
  production team.

Always append new sets; never delete or overwrite prior rows. Preserve the
original brief fields even after an article is finished.

## Final article test
Before completing an article, read it as the real searcher would and ask:
did this article actually answer what I searched for? If not, revise it.
Don't optimize for a word count, for inserting MPLY, or for inserting
keywords — optimize for a complete, credible, natural answer to the
searcher's intent. This human read-through is a check in addition to,
not a replacement for, the per-article QC below.

## Per-article QC (before marking Final QC Status: PASS)
Run through every category before marking PASS:

- **Search intent** — Does the opening answer the query? Is the article
  actually useful to the searcher?
- **Depth** — Are important concepts properly explained? Are sections
  substantive, not shallow? Are examples used where helpful, and are they
  specific/named rather than vague? Are limitations addressed? Is the
  article complete without filler?
- **MPLY** — Is the relevance decision correct for this topic? If Strong
  thematic, is there a substantive, multi-paragraph MPLY section (not one
  sentence)? Does it explain the specific connection rather than reusing
  MPLY's boilerplate description? Does it read as useful, not promotional?
  Is the official MPLY link included where it makes sense, with non-
  aggressive CTA language?
- **Evidence** — Are factual claims supported? Are named examples sourced?
  Are current MPLY figures verified against `MPLY Information/` or the
  official source? Are URLs real, not invented?
- **Visuals** — Was the article actually evaluated for a meaningful visual
  (not skipped by default)? If included, does it improve comprehension, is
  every figure verified with the source recorded, and is it placed where
  the surrounding text needs it (not dumped at the bottom by default)?
- **SEO** — Primary keyword, secondary keywords, and related terms covered
  naturally; search intent satisfied; no keyword stuffing.
- **Publishing / DOCX purity** — Clean article title with no label; no
  production metadata anywhere in the file ("SEO Title"/"Meta Description"
  labels, "PRODUCTION METADATA" banner, "MPLY Decision"/"MPLY Section /
  Placement" text, "Visual Decision" text, "Internal Link Suggestions"
  block, "Final QC Status"); no generic disclaimer; reader-facing
  references included where useful; hashtags present as the literal last
  content, nothing after them; no em dash anywhere.

DOCX exists and is recorded in the tracker with the correct Set number.
Anything unresolved → `Final QC Status: NEEDS REVIEW` with the issue explained
in Notes, not PASS.

## Batch completion check (after processing a full set)
Row count in = article count out. Every row has a DOCX, every DOCX is in the
tracker, every article has a QC status, nothing silently skipped, no duplicates,
MPLY not force-inserted, sources recorded, no invented URLs, no em dashes
anywhere, no article contains production metadata, no article contains a
generic disclaimer unless explicitly required for that batch, every article
ends with hashtags and nothing after them, tracker preserves all previously
completed sets. If numbers don't match, find the discrepancy before calling
the batch done.

## Final production summary (after each batch)
Report: input file processed, date, set number, articles processed, DOCX files
created, MPLY-included count, MPLY-omitted count, articles needing review,
tracker created/updated. Don't paste full article text into chat once DOCX files
exist — the files are the deliverable.

## Build helper
`Scripts/wp_docx_helpers.js` (`buildArticle`) writes publication-only DOCX
output: title, body, hashtags, nothing else. It takes `{ outPath, titleH1,
bodyBlocks, hashtags }` — no `seoTitle`, `metaDescription`, `mply`, `visual`,
or `internalLinks` parameters exist on it (an earlier version had them and
wrote them into the DOCX as labeled sections; that version is superseded).
Any MPLY discussion, FAQ, or Sources section is composed by the caller into
`bodyBlocks` as ordinary article content; SEO Title, Meta Description, MPLY
Decision/Placement, Visual Decision/Brief, Internal Link Suggestions, and
Final QC Status are assembled separately into the tracker row and never
passed to `buildArticle`.

## Current status
**2026-09-23 — project skeleton created; one 4-article pilot batch (from
`Production Briefs/2026-09-28_Set_01.xlsx`, rows 1/13/33/71) produced,
approved for content/voice, regenerated in the publication-only DOCX format,
and revised against the full editorial standard.** All four articles now
comply with every rule in this file:
- **Article 001** ("What Is Pricing Power") gained a substantial,
  multi-paragraph "Why MPLY Treats Pricing Power as a Core Signal" section
  (Strong thematic relevance, per the MPLY section depth rule), naming
  Nvidia and Apple as verified current top holdings whose pricing behavior
  illustrates the screen, plus a Sources section. No visual: evaluated, but
  no verified numeric dataset supports one for this topic, so the honest
  call was "no chart" rather than a fabricated one.
- **Article 002** ("What Is a Cost Advantage Moat") replaced vague examples
  ("discount retailers," "low-cost airlines") with named, researched ones
  (Walmart, Costco, Southwest Airlines' single-737-fleet strategy, sourced
  to Simple Flying), and added an illustrative (clearly labeled, not
  company-specific) economies-of-scale chart.
- **Article 003** ("What Is a Second Mover Advantage") replaced its vague
  "a dominant one emerged" language with three researched, named, dated
  examples (AltaVista 1995 to Google 1998; Myspace 2003 to Facebook 2004;
  IBM Simon 1994 to iPhone 2007), a factual pioneer-vs-second-mover
  timeline chart, and a Sources section citing the articles used. The brief
  tagged this row Indirect/Omit, but on review the article's own "When
  Being Second Does Not Work" section already turned on network effects,
  switching costs, patents, and regulatory approvals, the same category of
  durable barrier MPLY's own screen is built to identify, so a brief,
  specific MPLY paragraph was added there rather than treating "Indirect"
  as a hard omit. This is the mirror case of the Article 001 correction:
  the brief's `MPLY Relevance`/`MPLY Placement` tags are a starting point,
  not a ceiling or a floor. Always check whether the article's own content
  independently surfaces one of MPLY's actual screening criteria before
  finalizing an Omit decision.
- **Article 004** ("What Is MPLY ETF") was already compliant (Primary
  Subject, verified holdings chart, Sources section) and is unchanged.

Verified after rebuild: 0 em dashes, 0 banned production-metadata strings,
every file starts with its title and ends with hashtags as the last
content, and MPLY now appears (at appropriate depth) in 3 of the 4
articles, with the 4th (Article 003) genuinely earning a brief mention
rather than an artificial one.

The production tracker (`Production Trackers/MPLY_Article_Production.xlsx`)
has not yet been populated with the pilot's 4 rows. The user will supply
further keyword brief file(s) in the `Production Briefs/_TEMPLATE_Set_XX.xlsx`
format as needed.
