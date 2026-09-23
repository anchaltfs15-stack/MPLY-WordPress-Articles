import openpyxl
from openpyxl.styles import Font, Alignment

BRIEF = r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Production Briefs\2026-09-28_Set_01.xlsx"
TRACKER = r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Production Trackers\MPLY_Article_Production.xlsx"

wb_brief = openpyxl.load_workbook(BRIEF)
ws_brief = wb_brief["Set 01"]
brief_rows = {}
for r in range(2, ws_brief.max_row + 1):
    no = ws_brief.cell(row=r, column=1).value
    brief_rows[no] = {
        "title": ws_brief.cell(row=r, column=2).value,
        "primary_kw": ws_brief.cell(row=r, column=3).value,
        "secondary_kw": ws_brief.cell(row=r, column=4).value,
        "related": ws_brief.cell(row=r, column=5).value,
        "cluster": ws_brief.cell(row=r, column=6).value,
        "intent": ws_brief.cell(row=r, column=7).value,
        "relevance": ws_brief.cell(row=r, column=8).value,
        "connection_logic": ws_brief.cell(row=r, column=9).value,
        "placement_brief": ws_brief.cell(row=r, column=10).value,
    }

PROD = [
    dict(no=23, seo="How Switching Costs Protect Recurring Revenue",
         meta="A subscription is just a billing pattern. Switching costs are what actually protect recurring revenue, illustrated with cloud infrastructure lock-in.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="No", visual_brief="Evaluated; no verified numeric dataset available without fabricating churn/migration-cost figures.",
         internal_links="Anchor 'switching costs' -> What Are Switching Costs and Why Do They Matter (No.4); Anchor 'recurring revenue moat' -> How Recurring Revenue Creates a Business Moat (No.9)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#SwitchingCosts #RecurringRevenue #EconomicMoat #CompetitiveAdvantage #MPLY #Investing",
         filename="023_How_Switching_Costs_Protect_Recurring_Revenue.docx", qc="PASS", notes="Mechanism-Based archetype; fresh AWS/cloud example distinct from prior SAP/Adobe examples."),
    dict(no=24, seo="How Pricing Power Protects Profit Margins",
         meta="Pricing power is the specific mechanism that protects margins during cost inflation. Airline fuel surcharges show how the pass-through works.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="No", visual_brief="Evaluated; no verified numeric dataset available without fabricating margin figures.",
         internal_links="Anchor 'pricing power' -> What Is Pricing Power and Why It Matters for Investors (No.1)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#PricingPower #ProfitMargins #EconomicMoat #CompetitiveAdvantage #MPLY #Investing",
         filename="024_How_Pricing_Power_Protects_Profit_Margins.docx", qc="PASS", notes="Explainer archetype; margin-mechanics angle distinct from No.1's general definition."),
    dict(no=25, seo="How to Identify a Durable Economic Moat",
         meta="A practical checklist for identifying a durable moat: financial signals, naming the specific mechanism, stress-testing against a real challenger.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="No", visual_brief="Reused No.026's ROIC-WACC chart as a supporting visual rather than building a duplicate.",
         internal_links="Anchor 'competitive moat' -> What Is a Competitive Moat in Investing (No.2)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#EconomicMoat #MoatAnalysis #CompetitiveAdvantage #StockResearch #MPLY #Investing",
         filename="025_How_to_Identify_a_Durable_Economic_Moat.docx", qc="PASS", notes="Checklist/Research Guide archetype; FAQ included (broad how-to topic)."),
    dict(no=26, seo="How to Analyze Competitive Advantage in Stocks",
         meta="A quantitative framework for analyzing competitive advantage: the ROIC-WACC spread, margin trends, and free cash flow conversion.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="Yes", visual_brief="Illustrative ROIC vs WACC spread bar chart.",
         internal_links="Anchor 'how to identify a moat' -> How to Identify a Durable Economic Moat (No.25)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#StockAnalysis #CompetitiveAdvantage #ROIC #EconomicMoat #MPLY #Investing",
         filename="026_How_to_Analyze_Competitive_Advantage_in_Stocks.docx", qc="PASS", notes="Investor Framework archetype (quantitative), distinct from No.25's qualitative checklist."),
    dict(no=27, seo="What Makes a Company a Market Leader",
         meta="Market leadership isn't always the same as market share. Whole Foods' premium-grocery leadership shows how perception-based leadership works.",
         mply_decision="Contextual Section", mply_placement="Brief Mention (per brief; expanded per Strong-thematic depth rule)",
         visual="No", visual_brief="Evaluated; no verified numeric dataset available without fabricating share figures.",
         internal_links="Anchor 'market share moat' -> What Is a Market Share Moat (No.22)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#MarketLeader #CompetitiveAdvantage #BrandStrategy #MPLY #Investing #Fundamentals",
         filename="027_What_Makes_a_Company_a_Market_Leader.docx", qc="PASS", notes="Case Study/Examples archetype; Whole Foods angle distinct from No.22's Nokia share-collapse case."),
    dict(no=28, seo="Market Dominance vs Monopoly: What Is the Difference",
         meta="Market dominance and monopoly aren't the same. The Sherman Act's legal standard and the economic spectrum from competition to monopoly, explained.",
         mply_decision="Contextual Section", mply_placement="Brief Mention (per brief; expanded per Strong-thematic depth rule)",
         visual="Yes", visual_brief="Market structure spectrum conceptual diagram (perfect competition to monopoly).",
         internal_links="",
         ext_sources="ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/antitrust-laws; en.wikipedia.org/wiki/Sherman_Antitrust_Act; strategysharesetfs.com/mply",
         hashtags="#MarketDominance #Monopoly #Antitrust #CompetitiveAdvantage #MPLY #Investing",
         filename="028_Market_Dominance_vs_Monopoly.docx", qc="PASS", notes="Comparison archetype; direct legal/economic content given MPLY's own monopoly/oligopoly framing."),
    dict(no=29, seo="What Is a Durable Competitive Advantage",
         meta="Durable competitive advantage and economic moat are the same idea from two traditions. Porter's 1980s strategy work and Buffett's moat term, compared.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="Yes", visual_brief="Porter/Buffett terminology timeline (1980, 1985, 1986), verified dates.",
         internal_links="Anchor 'competitive moat' -> What Is a Competitive Moat in Investing (No.2)",
         ext_sources="en.wikipedia.org/wiki/Competitive_advantage; en.wikipedia.org/wiki/Economic_moat; strategysharesetfs.com/mply",
         hashtags="#CompetitiveAdvantage #EconomicMoat #MichaelPorter #WarrenBuffett #MPLY #Investing",
         filename="029_What_Is_a_Durable_Competitive_Advantage.docx", qc="PASS", notes="Timeline/Evolution archetype; terminology-history angle distinct from No.2's definitional treatment. FAQ included."),
    dict(no=30, seo="Sustainable Competitive Advantage Examples",
         meta="Three genuinely different sources of sustainable advantage: UPS's distribution density, NYSE/Nasdaq's network effects, and Intel's architecture lock-in.",
         mply_decision="Contextual Section", mply_placement="Brief Mention (per brief; expanded per Strong-thematic depth rule)",
         visual="No", visual_brief="Evaluated; no verified numeric dataset available without fabricating market-share figures.",
         internal_links="Anchor 'economic moat examples' -> Economic Moat Examples (No.3)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#CompetitiveAdvantage #EconomicMoat #NetworkEffects #DistributionMoat #MPLY #Investing",
         filename="030_Sustainable_Competitive_Advantage_Examples.docx", qc="PASS", notes="Case Study/Examples archetype; UPS/NYSE-Nasdaq/Intel fresh examples distinct from No.3's Coca-Cola/Visa/ASML."),
    dict(no=31, seo="Competitive Advantage vs Competitive Edge",
         meta="An edge is a current, often temporary lead. An advantage is structural and durable. Here's the practical test for telling them apart.",
         mply_decision="Brief Mention", mply_placement="Brief Mention",
         visual="No", visual_brief="Evaluated; conceptual, not numeric topic, no chart warranted.",
         internal_links="",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#CompetitiveAdvantage #CompetitiveEdge #BusinessStrategy #MPLY #Investing",
         filename="031_Competitive_Advantage_vs_Competitive_Edge.docx", qc="PASS", notes="Comparison archetype; Moderate relevance."),
    dict(no=32, seo="What Is a First Mover Advantage",
         meta="Being first is a temporary head start, not a moat by itself. eBay and Craigslist show when it converts into something durable, and when it doesn't.",
         mply_decision="Brief Mention", mply_placement="Brief Mention",
         visual="No", visual_brief="Evaluated; the pioneer-vs-second-mover timeline chart on No.33 already covers this angle visually.",
         internal_links="Anchor 'second mover advantage' -> What Is a Second Mover Advantage (No.33)",
         ext_sources="en.wikipedia.org/wiki/EBay; en.wikipedia.org/wiki/Craigslist; strategysharesetfs.com/mply",
         hashtags="#FirstMoverAdvantage #CompetitiveAdvantage #NetworkEffects #BusinessStrategy #MPLY #Investing",
         filename="032_What_Is_a_First_Mover_Advantage.docx", qc="PASS", notes="Mechanism-Based archetype; direct complement to No.33 (second mover), fresh eBay/Craigslist examples."),
]

wb_t = openpyxl.load_workbook(TRACKER)
ws = wb_t["Production Tracker"]
start_row = ws.max_row + 1

BODY_FONT = Font(name="Arial")
WRAP = Alignment(wrap_text=True, vertical="top")

for i, item in enumerate(PROD):
    r = start_row + i
    b = brief_rows[item["no"]]
    row_vals = [
        "2026-09-28", "Set 01", item["no"], b["title"], b["primary_kw"], b["secondary_kw"],
        b["related"], b["cluster"], b["intent"], b["relevance"], b["connection_logic"],
        item["seo"], item["meta"], item["mply_decision"], item["mply_placement"],
        item["visual"], item["visual_brief"], item["internal_links"], item["ext_sources"],
        item["hashtags"], item["filename"], item["qc"], item["notes"],
    ]
    for c, v in enumerate(row_vals, start=1):
        cell = ws.cell(row=r, column=c, value=v)
        cell.font = BODY_FONT
        cell.alignment = WRAP
    ws.row_dimensions[r].height = 30

wb_t.save(TRACKER)
print(f"Appended {len(PROD)} rows starting at row {start_row} to {TRACKER}")
