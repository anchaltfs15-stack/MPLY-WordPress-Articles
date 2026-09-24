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
heading. A section should earn its heading — don't create one merely to
break up text. Concretely avoid this pattern:

```
## Why It Matters
Two sentences.
## How It Works
Three sentences.
## What Investors Should Know
Two sentences.
```

Instead, combine related ideas into fewer, stronger sections and develop
each one properly: what does the concept mean economically, why does it
matter, what changes when the underlying conditions shift, what evidence
would an investor look for, what examples or comparisons make it concrete,
what could make the conclusion wrong. Depth depends on the subject; avoid
artificial padding, but don't under-explain an important concept just to
keep sections short, and don't multiply short headings just for the
appearance of structure.

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

## Structure — rotate archetypes, don't repeat a sequence
No universal template. Reference articles (once supplied) are quality/style
benchmarks, never a fixed template every article must follow. For each
article, understand the search intent and topic first, then pick the
editorial archetype that actually fits — don't default to the same section
sequence article after article. Rotate naturally across a batch between
formats such as:
1. **Explainer** — definition → how it works → why it matters → examples →
   limitations → MPLY.
2. **Investor Framework** — what to look for → key indicators → metrics →
   how to evaluate → common mistakes → MPLY.
3. **Comparison** — Concept A vs. Concept B → key differences → where each
   matters → examples → investor implications → MPLY.
4. **Case Study / Examples** — concept → real-world examples → what
   happened → why it worked/failed → lessons → MPLY.
5. **Mechanism-Based** — problem → mechanism → economics → evidence →
   failure points → MPLY.
6. **Myth vs. Reality** — common belief → what's actually true → evidence →
   exceptions → investor implications → MPLY.
7. **Timeline / Evolution** — origin → major developments → turning points
   → current state → lessons → MPLY.
8. **Checklist / Research Guide** — what to examine → indicators →
   questions to ask → warning signs → MPLY research lens.
9. **Product Research** (for MPLY-direct topics) — what it is → strategy →
   methodology → portfolio/holdings → costs → performance → risks → what to
   examine → official MPLY resources.
10. **Hybrid** — combine two or more when the subject genuinely needs it.

Never announce which archetype was chosen inside the article — it should
just read as one coherent piece of financial journalism. Within an
archetype, use only the elements that genuinely improve this specific
article (examples, metrics, comparisons, misconceptions, limitations, MPLY
connection, FAQ, sources); don't add a section, an "Introduction"/"Key
Takeaways" heading, or an FAQ, just because another article had one. The
goal across a batch is structural variety with editorial purpose, not
variety for its own sake — the archetype should fit the search intent, not
be picked at random.

## MPLY integration — the most important rule in this project
MPLY is **not required in every article.** Use the brief's `MPLY Relevance` and
`MPLY Connection Logic` fields to decide whether and how MPLY appears.
`MPLY Connection Logic` is guidance for understanding the relationship, never
copy to reproduce verbatim — write an article-specific connection instead.

**Adequate coverage means genuine explanation, not a mention count.** A
nonzero MPLY mention count is not sufficient QC on its own. Before calling
an article done, read the actual MPLY sentence(s): does it explain a
specific mechanism connecting the topic to one of MPLY's real screening
criteria (brand dominance, regulatory exclusivity, industry concentration,
barriers to entry, pricing power, supply-chain control, network effects,
protected IP), or is it a name-drop, a throwaway trailing clause like
"...including MPLY, frame their own screening process" that names MPLY
without explaining anything? This exact failure mode slipped through twice
in the pilot batch even after other MPLY-depth fixes had already landed —
see the standing memory note on this. Check every MPLY sentence for
substance, not just presence, in every batch.

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

**Cap: 1-2 new charts per 10-article batch, not 3-4.** Confirmed 2026-09-24
after token-cost review: each chart is a full round trip (write the Python
script, run it, read the rendered PNG back to check it, often a second pass
to fix a label collision), and 3-4 per batch was a major cost driver
without a proportional quality gain over 1-2 well-chosen ones. Prioritize a
chart for the article where the visual genuinely carries information text
can't (a real, verified data comparison, a non-obvious conceptual
framework) over one that's merely nice-to-have. Reusing an existing chart
across articles (see `chartImage()` calls that point at another article's
chart file) is a good option when two articles genuinely share the same
underlying data point — do this before building a new one.

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

### Chart and visual style guide — one consistent look, not ad hoc per chart
Every chart in this project uses a single shared visual style, not colors
and fonts picked independently inside each chart script. The pilot batch's
first charts used an ad hoc blue (`#2E5FA3`) that didn't match the docx
template's own heading color; that's the mistake this section exists to
prevent.

- **Primary accent color:** `#1F4E78` (the same blue already used for H2
  headings and the "Sources"/hashtag styling in `wp_docx_helpers.js`), so
  text and visuals read as one product. Use a muted gray (`#8A9199`) for
  secondary/annotation elements, consistent with existing chart captions.
- **Typography:** a clean sans-serif for chart titles/labels/legends
  (distinct from the docx body's Georgia serif — sans-serif holds up
  better at small chart label sizes). Use matplotlib's default sans-serif
  (DejaVu Sans) unless the user specifies an actual brand font.
- **Consistency:** every chart built through one shared style module,
  `Scripts/chart_style.py` — import its constants/helpers rather than
  hardcoding hex colors or font choices in each new chart script.
- **Technical minimums:** 200+ DPI, consistent figure sizing (default
  8x5in) and margins, consistent caption placement and styling (italic,
  muted gray, below the chart) so a reader doesn't feel a style shift
  between articles.
- **Palette validation:** run any categorical (multi-hue) palette through
  the `dataviz` skill's `validate_palette.js` before shipping, even though
  most charts here are single-hue and don't need it.

If the user supplies an actual MPLY brand palette or font, that supersedes
`#1F4E78`/DejaVu Sans as the default and this section should be updated to
match.

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
section near the end, before the hashtags. **Sources must be actual
clickable hyperlinks, not a bare domain name or a plain-text citation** —
build them with `wp_docx_helpers.js`'s `link()` helper (see
`Scripts/wp_docx_helpers.js`) pointing at the real URL that was actually
fetched, not just written as "strategysharesetfs.com/mply" or "Simple
Flying, [article title]" in plain text. Never write a vague line like
"Sources: company filings and industry research" — name the actual source
and link it.

## FAQ — don't forget it
FAQ isn't automatic, but it also isn't rare: **for broad, high-intent, or
MPLY-specific articles, a useful FAQ section is normally expected**, not
just occasionally appropriate. Include it whenever the search intent
naturally raises follow-up questions — normally 3-6 genuinely useful ones,
drawn from obvious follow-ups, related search intent, common
misconceptions, practical investor questions, or questions the article's
own body raises without fully answering. Never generic filler written to
hit a number, and never a question that just repeats what the body already
fully explained. For a genuinely narrow topic, fewer questions or no FAQ
section is fine if more wouldn't add value — but check for that explicitly
rather than skipping FAQ by default. When included, it's ordinary
reader-facing content (an `## FAQ` heading with question/answer pairs),
placed after the body and any MPLY discussion, before Sources and hashtags.

## Social hashtags
**Normally 5-8 highly relevant hashtags, not just two or three.** Mix
categories: the primary topic, an investing concept, a relevant investment
theme, an industry/topic category, and MPLY where genuinely relevant (never
force an MPLY hashtag onto an article that didn't earn one in the body).
For example, a pricing-power article might use `#PricingPower
#CompetitiveAdvantage #EconomicMoat #Investing #QualityInvesting
#Fundamentals`; a second-mover article `#SecondMoverAdvantage
#BusinessStrategy #CompetitiveAdvantage #Innovation #MarketStrategy
#Investing`; an MPLY-direct article `#MPLY #MPLYETF #ETFResearch
#MonopolyInvesting #CompetitiveAdvantage #ActiveManagement #Investing`. No
irrelevant trending tags, no stuffing beyond what's genuinely relevant.
**Hashtags are the literal last thing in the DOCX** — nothing (no
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
searcher's intent. Then run the full editorial checklist:
1. Does the chosen structure/archetype actually fit the search intent?
2. Does this article feel structurally different from the others in the
   same batch, not the same section sequence again?
3. Are the sections substantial enough (see "Section depth")?
4. Does the reader learn something useful from the examples (see
   "Examples and evidence")?
5. Is there a meaningful visual, or a genuine, evaluated reason there isn't
   one?
6. Is the MPLY connection sufficiently developed for its relevance tier
   (see "MPLY section depth")?
7. Are useful follow-up questions answered in the FAQ, if one's included
   (see "FAQ")?
8. Are the references actual clickable sources, not bare domain names or
   plain-text citations (see "External sources")?
9. Are there 5-8 relevant hashtags (see "Social hashtags"), not just two
   or three?
10. Does the article end naturally with the hashtags, nothing after?

The goal is structural variety with editorial purpose, not randomness for
its own sake. This human read-through is a check in addition to, not a
replacement for, the per-article QC below.

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
  MPLY's boilerplate description? **For every tier, including Moderate and
  a brief mention: read the actual MPLY sentence(s) — is it a real,
  specific mechanism, or a name-drop/throwaway clause?** Does it read as
  useful, not promotional? Is the official MPLY link included where it
  makes sense, with non-aggressive CTA language?
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

## Production efficiency (confirmed 2026-09-24, after a token-cost review)
Three changes to how a batch gets verified, adopted because visual/manual
QC steps were consuming tokens disproportionate to what they caught beyond
the programmatic checks already in place:

1. **No PDF/screenshot rendering step.** Don't convert articles to PDF and
   read back rendered page images to visually inspect layout, chart
   placement, or hyperlink appearance. The programmatic checks (word count,
   em dash count, banned-phrase grep, hyperlink-count via
   `word/_rels/document.xml.rels`, hashtags-last check, n-gram repetition
   audit) already catch the failure modes that actually recur. Reserve a
   visual render for a specific, concrete doubt about one file (e.g. "does
   this chart's label actually fit"), not as a routine per-batch step.
2. **Chart cap of 1-2 per batch** (see "Visuals" above) — fewer, more
   load-bearing charts instead of 3-4 built and rendered every batch.
3. **Vary CTA sentence phrasing on the first draft, not in a fix-up pass.**
   The reused-CTA-sentence skeleton ("Readers can review MPLY's investment
   approach on the fund's official page") got caught and fixed after the
   fact in four batches running, each fix costing its own Read/Edit/rebuild
   cycle across several files. Keep a mental (or literal) rotation of
   openings while drafting instead: "MPLY's official page shows...",
   "The fund's official page describes...", "Readers who want to check
   this can review...", "See MPLY's [holdings/methodology/approach] on
   its official page for...", varying which noun phrase becomes the actual
   hyperlink each time. The repetition audit (still run every batch, across
   the full completed set) is the backstop, not the primary defense.
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

For a reader-facing Sources section, use `sourceBullet(label, url)` /
`sourceBullets([{label, url}, ...])`, not `bullets()` with plain-text
citations — Sources must be actual clickable hyperlinks (see "External
sources" above). `bullets()` stays correct for any other plain bulleted
list (e.g. "What to Weigh Before Researching Further").

## Current status
**2026-09-28 — 54 of 100 rows in `Production Briefs/2026-09-28_Set_01.xlsx` completed**
(rows 1-53, plus 71), all compliant with every rule in this file
(publication-only DOCX, adequate MPLY coverage, 5-8 hashtags, hyperlinked
Sources, archetype variety, FAQ where earned). All 54 rows are logged in
`Production Trackers/MPLY_Article_Production.xlsx`. 46 rows remain
unprocessed in this brief. The brief's `Content Cluster` continued through
"Quality Investing" (rows 38-53) — rows 44-46 and 52 were correctly Omitted
(no forced MPLY connection), and row 53 (What Is a Monopoly Business — the
De Beers case) got a full Contextual Section, a verified chart, and an FAQ.
Batch 6 confirmed the token-efficiency fixes are holding: zero CTA-skeleton
repeats needed fixing on the first draft, and only 1 new chart was built
(the batch cap).

**File naming:** `NNN` matches the brief's own `No.` column (zero-padded),
not build order. The pilot's first 4 articles were originally misnamed by
build order (001-004) and renamed to their actual row numbers (001/013/
033/071) before row 2 onward was processed, to avoid collisions.

**Chart style guide:** `Scripts/chart_style.py` (primary `#1F4E78`,
matching the docx's own heading color) is used by every chart script since
rows 2-11. The pilot's original 3 charts (articles 001, 013, 033) still use
the earlier ad hoc blue (`#2E5FA3`) and haven't been restyled retroactively.

**Two standing per-batch steps, confirmed necessary in every batch
processed so far, not optional extras:**
1. **Repetition audit against the full completed set** (not just the new
   batch) — the same reused-CTA-sentence pattern has recurred in four
   batches running, each time caught only by the n-gram audit.
2. **Overlap check against already-completed titles before drafting** —
   topical overlap increased steadily through the Economic Moats/
   Competitive Advantage rows (1-37), requiring deliberately distinct
   mechanisms and non-overlapping real-world examples each time (VHS/
   Betamax, Heathrow slots, Veblen goods, Porter/Buffett/Novy-Marx
   timeline, among others already used). Expect this to ease somewhat now
   that the brief has moved into the Quality Investing cluster, but keep
   checking.

**Standing corrections already folded into the rules above, not repeated
here:** the MPLY-tag-as-guidance rule (`## MPLY integration`), the
adequate-coverage-means-explanation rule (same section), and the
publication-only DOCX format all trace back to specific fixes made across
the pilot batch and this one. See git history for the detailed narrative
if needed; this section stays current-state only so it doesn't grow
unbounded as more batches complete.

The user will supply further keyword brief files in the
`Production Briefs/_TEMPLATE_Set_XX.xlsx` format as needed, or give the
go-ahead to continue through the remaining rows of this same brief.
