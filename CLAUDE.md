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
- Reference/approved sample articles: `Reference Articles/`
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
in...", "Whether you're a seasoned investor or just starting out..."), "In
conclusion," empty summaries, repetitive definitions, excessive bullets/headings,
corporate jargon, marketing language, unnecessary disclaimers, anything that
reads machine-generated.

## Structure
No universal template. Options (use what the intent calls for, not all of them
every time): strong opening, direct answer, definition/context, mechanism, why it
matters, examples, metrics, limitations/failure cases, practical research
considerations, MPLY connection where relevant, FAQ where useful. Don't add an
"Introduction" or "Key Takeaways" heading, or an FAQ, unless it genuinely earns
its place.

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

### MPLY placement (per brief's `MPLY Placement` field)
- **No MPLY** — don't mention it.
- **Brief Mention** — a short contextual reference.
- **Contextual Section** — a meaningful, article-specific passage on the
  relationship.
- **Primary Subject** — the article can focus substantially on MPLY when the
  keyword/intent is directly about the fund.
Never turn an informational article into an MPLY advertisement.

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

## Visuals
Claude decides per article, not as a default. Only include one when it genuinely
improves understanding (comparison table, framework/process diagram, timeline,
flowchart, verified-data chart). Never invent numbers to produce a chart. If
included, the chart/table appears directly in the article as ordinary content
(with a normal caption, not a labeled production field). The decision itself
(`Visual Decision: Yes/No`) and the designer-usable brief go in the tracker,
not the DOCX.

## Internal links
Only when a genuine contextual relationship exists. Use real URLs if available in
this project's files; otherwise give suggested anchor text + target article title
in the tracker (never an invented URL). Don't force a link into every article. A
suggested internal link is tracker-only unless a real destination URL exists, in
which case it may be incorporated as a natural hyperlink directly in the article
text.

## External sources / reader-facing Sources section
Record every source actually used in the tracker's `External Sources` column,
real citations only, never fabricated. Separately, if the article genuinely
benefits from a reader-facing "Sources" or "Further Reading" section (for
example, a fact readers would want to verify themselves), add it directly in
the article, right before the hashtags — only sources actually used, never a
generic list appended by default.

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

## Per-article QC (before marking Final QC Status: PASS)
Search intent answered directly; primary/secondary/related keywords covered
naturally with no stuffing; writing sounds human, non-repetitive, no generic AI
phrases, no em dash; factual claims and current facts verified, sources genuine;
MPLY genuinely relevant (not forced), connection specific to this article, not
reused verbatim from a prior one, official URL only; no investment
recommendations made; visual (if any) uses only verified data; internal/external
links genuine, no invented URLs. **Plus the DOCX-purity checks:** article
begins with the title itself (no "SEO Title"/"Meta Description" label, no
"Article" label); no production-metadata banner or section anywhere in the
file; no "MPLY Decision"/"MPLY Section / Placement" text; no "Visual Decision"
text; no "Internal Link Suggestions" block; no generic disclaimer; hashtags
present and are the literal last content in the document, nothing after them.
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
**2026-09-23 — project skeleton created; one 4-article pilot batch produced
and approved for content/voice, but built under an earlier DOCX format that
included production-metadata labels and an SEO Title/Meta Description header
in the file itself.** That format is now superseded by the publication-only
format specified above (title → body → optional MPLY/FAQ/Sources → hashtags,
nothing else, all metadata tracker-only). The pilot DOCX files were not
regenerated as part of this format update; the next batch built should use
the corrected format. The user will supply further keyword brief file(s) in
the `Production Briefs/_TEMPLATE_Set_XX.xlsx` format as needed.
