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
    dict(no=34, seo="How Brand Strength Creates Pricing Power",
         meta="Brand-driven pricing power is a specific mechanism, not just customer loyalty. Veblen goods and risk-reduction pricing explain how it works.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="No", visual_brief="Evaluated; no verified numeric dataset available without fabricating price-premium figures.",
         internal_links="Anchor 'brand loyalty' -> Brand Loyalty as a Competitive Advantage (No.7); Anchor 'pricing power' -> What Is Pricing Power (No.1)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#BrandStrength #PricingPower #EconomicMoat #CompetitiveAdvantage #MPLY #Investing",
         filename="034_How_Brand_Strength_Creates_Pricing_Power.docx", qc="PASS", notes="Mechanism-Based archetype; Veblen goods angle distinct from No.7's brand loyalty and No.1's general pricing power."),
    dict(no=35, seo="How Customer Lock-In Creates a Moat",
         meta="Not all customer lock-in is equal. A taxonomy of four types, contractual, technical, data, and habit, and why the distinction changes how durable it is.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="No", visual_brief="Reused No.026's ROIC-WACC chart as supporting evidence rather than building a duplicate.",
         internal_links="Anchor 'switching costs' -> What Are Switching Costs (No.4)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#CustomerLockIn #SwitchingCosts #EconomicMoat #CompetitiveAdvantage #MPLY #Investing",
         filename="035_How_Customer_Lock_In_Creates_a_Moat.docx", qc="PASS", notes="Checklist/Research Guide archetype; lock-in taxonomy distinct from prior single-mechanism switching-cost articles."),
    dict(no=36, seo="How Network Effects Create Market Dominance",
         meta="VHS beat Betamax despite a one-year head start and worse picture quality. The format war shows how fast a network effect can tip a market.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="Yes", visual_brief="VHS vs Betamax market share chart, verified data (1980/1981/1987).",
         internal_links="Anchor 'network effects' -> Network Effects Explained (No.5)",
         ext_sources="en.wikipedia.org/wiki/Videotape_format_war; strategysharesetfs.com/mply",
         hashtags="#NetworkEffects #MarketDominance #EconomicMoat #CompetitiveAdvantage #MPLY #Investing",
         filename="036_How_Network_Effects_Create_Market_Dominance.docx", qc="PASS", notes="Case Study/Examples archetype; VHS/Betamax fresh example distinct from Friendster (No.11) and prior network-effect articles."),
    dict(no=37, seo="How Barriers to Entry Protect Incumbent Companies",
         meta="Heathrow operates at 99% capacity and British Airways holds 51% of its slots. When a resource is physically capped, incumbency becomes the barrier.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="Yes", visual_brief="Heathrow slot concentration bar chart, verified data.",
         internal_links="Anchor 'barriers to entry' -> What Are Barriers to Entry in Business (No.6)",
         ext_sources="iba.aero; commonslibrary.parliament.uk; strategysharesetfs.com/mply",
         hashtags="#BarriersToEntry #EconomicMoat #CompetitiveAdvantage #MarketStructure #MPLY #Investing",
         filename="037_How_Barriers_to_Entry_Protect_Incumbent_Companies.docx", qc="PASS", notes="Explainer archetype; scarce-resource/airport-slot angle distinct from No.6's general capital/regulatory barriers."),
    dict(no=38, seo="What Is a High Quality Business",
         meta="A three-pillar test for business quality: profitability, capital efficiency, and balance sheet strength, and why all three need to hold together.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="No", visual_brief="Evaluated; conceptual framework already clear in prose, no chart warranted.",
         internal_links="Anchor 'competitive moat' -> What Is a Competitive Moat in Investing (No.2)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#QualityInvesting #BusinessQuality #ROIC #EconomicMoat #MPLY #Investing",
         filename="038_What_Is_a_High_Quality_Business.docx", qc="PASS", notes="Explainer archetype; FAQ included (broad definitional topic, new Quality Investing cluster)."),
    dict(no=39, seo="What Is Quality Investing",
         meta="Quality investing traces from Graham's 1949 deep-value approach through Buffett and Munger's 1959 shift to Novy-Marx's 2013 academic validation.",
         mply_decision="Contextual Section", mply_placement="Contextual Section",
         visual="Yes", visual_brief="Quality investing history timeline (1949/1959/2013), verified dates.",
         internal_links="Anchor 'high quality business' -> What Is a High Quality Business (No.38)",
         ext_sources="acquirersmultiple.com; top1000funds.com; strategysharesetfs.com/mply",
         hashtags="#QualityInvesting #WarrenBuffett #ValueInvesting #EconomicMoat #MPLY #Investing",
         filename="039_What_Is_Quality_Investing.docx", qc="PASS", notes="Timeline/Evolution archetype; genuinely new content (investing-style history) distinct from No.38's business-characteristics framing."),
    dict(no=40, seo="What Is Return on Invested Capital",
         meta="ROIC measures how efficiently a company turns invested capital into profit. The formula, what counts as strong, and its key limitation.",
         mply_decision="Brief Mention", mply_placement="Brief Mention",
         visual="No", visual_brief="Reused No.026's ROIC-WACC chart concept in prose; no new chart needed for a pure definitional piece.",
         internal_links="Anchor 'how to analyze competitive advantage' -> How to Analyze Competitive Advantage in Stocks (No.26)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#ROIC #QualityInvesting #CapitalEfficiency #Investing #Fundamentals",
         filename="040_What_Is_Return_on_Invested_Capital.docx", qc="PASS", notes="Explainer archetype; pure definition/formula, distinct from No.26's application-focused ROIC-WACC framework."),
    dict(no=41, seo="Why High ROIC Matters for Investors",
         meta="High ROIC compounds shareholder value faster when reinvested. Why growth without checking the return it earns can mislead investors.",
         mply_decision="Brief Mention", mply_placement="Brief Mention",
         visual="No", visual_brief="Evaluated; reinvestment-multiplier concept adequately conveyed in prose.",
         internal_links="Anchor 'what is ROIC' -> What Is Return on Invested Capital (No.40)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#ROIC #QualityInvesting #CompoundingReturns #Investing #Fundamentals",
         filename="041_Why_High_ROIC_Matters_for_Investors.docx", qc="PASS", notes="Investor Framework archetype; \"why it matters\" angle distinct from No.40's definitional piece."),
    dict(no=42, seo="What Is Free Cash Flow and Why Does It Matter",
         meta="Free cash flow is the actual cash a business generates after capital expenditures. The formula and why it can tell a different story than earnings.",
         mply_decision="Brief Mention", mply_placement="Brief Mention",
         visual="No", visual_brief="Reused No.043's FCF waterfall chart concept; kept this article text-only to avoid duplicating the visual.",
         internal_links="Anchor 'free cash flow vs net income' -> Free Cash Flow vs Net Income (No.43)",
         ext_sources="strategysharesetfs.com/mply",
         hashtags="#FreeCashFlow #QualityInvesting #CashFlow #Investing #Fundamentals",
         filename="042_What_Is_Free_Cash_Flow_and_Why_Does_It_Matter.docx", qc="PASS", notes="Explainer archetype."),
    dict(no=43, seo="Free Cash Flow vs Net Income",
         meta="Net income follows accrual accounting; free cash flow tracks actual cash. Where the two diverge, and what that gap signals.",
         mply_decision="Omit", mply_placement="None (per brief; respected, no genuine incidental connection found)",
         visual="Yes", visual_brief="FCF-from-net-income waterfall bridge chart, illustrative.",
         internal_links="Anchor 'what is free cash flow' -> What Is Free Cash Flow and Why Does It Matter (No.42)",
         ext_sources="",
         hashtags="#FreeCashFlow #NetIncome #Accounting #QualityInvesting #Investing",
         filename="043_Free_Cash_Flow_vs_Net_Income.docx", qc="PASS", notes="Comparison archetype. Brief tagged Indirect/None and, unlike No.3/No.33, no genuine incidental MPLY connection was found in the body; Omit respected as the correct call, with one brief acknowledging sentence rather than a full section or hashtag."),
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
