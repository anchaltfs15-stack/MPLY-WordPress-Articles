const path = require("path");
const { buildArticle, h2, h3, p, link, run, bullets, chartImage, faqItem, sourceBullets } = require("./wp_docx_helpers");

const OUT = path.join(
  "C:", "Users", "SrimanNarayan", "OneDrive - TransForm Solutions (P) Limited",
  "MFunds_WP Articles", "Articles", "2026-09-28_Set_01"
);
require("fs").mkdirSync(OUT, { recursive: true });

const MPLY_URL = "https://strategysharesetfs.com/mply/";

async function main() {
  // ==================================================================
  // Article 023 — Strong thematic / Contextual Section
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "023_How_Switching_Costs_Protect_Recurring_Revenue.docx"),
    titleH1: "How Switching Costs Protect Recurring Revenue",
    bodyBlocks: [
      p(
        "Recurring revenue and switching costs get discussed separately often enough that it's easy to miss how directly one depends on the other. A subscription is just a billing pattern; what actually keeps that billing pattern intact quarter after quarter is whatever makes canceling harder than renewing. Switching costs are the mechanism, and recurring revenue is the outcome, not the other way around."
      ),
      h2("The Problem: A Subscription Alone Doesn't Protect Itself"),
      p(
        "Any company can set up recurring billing. Doing so doesn't create durability on its own; it just changes how a customer's decision to leave gets triggered, from an active purchase decision to an active cancellation decision. If nothing else is holding the customer in place, that's a weaker form of retention than it looks like on a revenue chart, because a competitor only has to make canceling and switching easy enough to convert a passive subscriber."
      ),
      h2("The Mechanism: Cloud Infrastructure as a Clean Example"),
      p(
        "Enterprise cloud infrastructure shows the mechanism at full strength. A company that has built its applications around a specific cloud provider's architecture, storage formats, networking setup, and proprietary services has created technical dependencies that go well beyond a monthly bill. Migrating to a different provider means rewriting integrations, re-testing performance, retraining engineers, and accepting real operational risk during the transition. That technical entanglement is what converts a recurring bill into recurring revenue a competitor can't easily take away, the switching cost is doing the actual protective work, not the billing cycle."
      ),
      h2("Why the Distinction Changes How You'd Evaluate the Business"),
      p(
        "A company whose recurring revenue rests on genuine switching costs should show retention that holds up even when a customer is unhappy with pricing, because the alternative, migrating away, carries its own cost regardless of price. A company whose recurring revenue rests only on subscription inertia should show retention that's more sensitive to price increases and competitor promotions, since there's nothing beyond the billing habit standing between the customer and a cheaper alternative."
      ),
      h2("Where the Protection Weakens"),
      p(
        "Switching costs erode when an industry standardizes: if data formats, APIs, or integration patterns become portable across providers, through open standards or third-party migration tools, the technical lock-in that used to protect a recurring revenue base can shrink even while the subscription itself keeps billing normally, right up until a competitor's migration offer makes leaving easy enough to actually take."
      ),
      h2("How This Connects to MPLY's Screening Approach"),
      p([
        run(
          "Switching costs and recurring revenue durability both feed into criteria named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated approach, industry concentration and pricing power specifically. The fund's process is consistent with the mechanism described above: a recurring-revenue business is evaluated on what's actually protecting the relationship, not on the existence of a subscription model itself. A billing pattern by itself doesn't indicate the kind of durable position the fund's screen is built to identify; the underlying switching cost does."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" publishes the fund's current holdings and investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#SwitchingCosts", "#RecurringRevenue", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 024 — Strong thematic / Contextual Section
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "024_How_Pricing_Power_Protects_Profit_Margins.docx"),
    titleH1: "How Pricing Power Protects Profit Margins",
    bodyBlocks: [
      p(
        "Rising costs hit every company eventually, materials, labor, energy, shipping. What separates companies whose margins survive that pressure from companies whose margins collapse under it is whether they can raise their own prices in response. That ability, pricing power, is the mechanism specifically protecting margins, as distinct from the broader competitive-advantage question of why a company has pricing power in the first place."
      ),
      h2("The Mechanic: Passing Costs Through Without Losing Volume"),
      p(
        "When an input cost rises, a company has two basic options: absorb it, letting margins compress, or pass it along through higher prices. Passing it through only works without losing meaningful volume if customers have limited alternatives or are willing to pay more rather than switch. Airlines' historical use of fuel surcharges shows this mechanic directly: when jet fuel prices spike, airlines have repeatedly added surcharges tied to the higher cost, passing the increase through to ticket prices rather than absorbing it into thinner margins, a practice that only works because switching to a different airline over a modest fare increase is inconvenient enough that most passengers don't bother."
      ),
      h2("Gross Margin Is Where This Shows Up First"),
      p(
        "The clearest place to see pricing power working is gross margin during a period of input cost inflation. If a company's cost of goods sold rises 8% and its gross margin percentage holds steady or improves, it has priced ahead of or in line with its own cost increases. If gross margin compresses meaningfully during the same period, the company is absorbing cost pressure rather than passing it through, evidence of weaker pricing power regardless of what management says on an earnings call."
      ),
      h2("Why Margin Protection Compounds Over Time"),
      p(
        "A single successful price increase protects one period's margin. Durable pricing power protects margins across multiple inflationary periods and multiple competitive cycles, which is a meaningfully higher bar. Companies that can only pass through costs during periods when the whole industry is raising prices together, and lose that ability the moment competitors hold prices steady to gain share, have weaker, more conditional pricing power than companies that can raise prices independent of what competitors are doing."
      ),
      h2("Where Margin Protection Fails"),
      p(
        "Pricing power protects margins only up to the point customers' patience or alternatives run out. A company that raises prices repeatedly without a corresponding increase in perceived value eventually pushes even loyal customers toward substitutes, or invites regulatory scrutiny if the price increases look coordinated with competitors rather than independently justified. Margin protection through pricing is a lever, not a guarantee, and it has diminishing returns the more it's used."
      ),
      h2("How MPLY's Screen Applies to Margin Durability"),
      p([
        run(
          "Pricing power is named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, and margin behavior during cost pressure is one of the more concrete, testable ways to evaluate whether a candidate actually has it, rather than simply appearing to based on brand reputation or market position alone."
        ),
      ]),
      p([
        run("The fund's "),
        link("official page", MPLY_URL),
        run(" details its full investment approach and current holdings."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#PricingPower", "#ProfitMargins", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 025 — Strong thematic / Contextual Section
  // Archetype: Checklist / Research Guide
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "025_How_to_Identify_a_Durable_Economic_Moat.docx"),
    titleH1: "How to Identify a Durable Economic Moat",
    bodyBlocks: [
      p(
        "Identifying a moat isn't the same exercise as identifying a good company. A profitable, well-run business can still lack a durable advantage, and a company going through a rough patch can still have a real moat protecting its long-term economics. This is a practical checklist for separating the two, built around what to actually check, not just what to believe."
      ),
      h2("Start With the Financial Signature"),
      ...bullets([
        "Gross margin trend over 5-10 years: stable or expanding margins through multiple cost cycles suggest pricing power; steadily compressing margins suggest the opposite.",
        "Return on invested capital versus cost of capital: a sustained, wide spread indicates real economic profit; a spread near zero suggests no durable advantage regardless of headline profitability.",
        "Market share trend over a full economic cycle, not just the past year or two: share that holds or grows through both expansions and downturns is a stronger signal than share that only grows in good times.",
      ]),
      h2("Then Check for a Specific, Nameable Source"),
      p(
        "A moat should be traceable to a specific mechanism, cost advantage, switching costs, network effects, brand, efficient scale, or a regulatory or IP barrier, not just asserted as \"strong competitive position.\" If the answer to \"why can't a well-funded competitor take this company's customers\" is vague, the moat claim is probably vague too. Naming the actual mechanism also tells you what to monitor: a brand-based moat needs different tracking than a switching-cost-based one."
      ),
      h2("Stress-Test It Against a Real or Hypothetical Challenger"),
      ...bullets([
        "Has a well-capitalized competitor actually tried to take share in this market, and what happened when they did?",
        "If no one has seriously tried, is that because the moat is strong, or because the market hasn't looked attractive enough yet to draw a serious challenger?",
        "What would a challenger with unlimited capital but no existing customer relationships need to do to compete meaningfully within three to five years?",
      ]),
      h2("Watch for Common False Positives"),
      p(
        "High current market share without evidence of why it's protected. A well-known brand without current evidence of pricing power. Consistent recent profitability that hasn't yet been tested by a downturn or a serious competitor. Each of these can look like a moat on a surface read of the numbers while actually reflecting a temporary or untested advantage rather than a durable one."
      ),
      ...chartImage(
        path.join(OUT, "charts", "026_roic_wacc_spread.png"),
        { widthIn: 6, caption: "The ROIC-versus-WACC spread is one of the more concrete financial signals in this checklist. See No. 026 for the full quantitative framework." }
      ),
      h2("How This Checklist Relates to MPLY's Screening Approach"),
      p([
        run(
          "This practical checklist overlaps closely with how the Strategy Shares Monopoly ETF ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") describes its own process: evaluating brand dominance, regulatory exclusivity, industry concentration, barriers to entry, pricing power, supply-chain control, network effects, and protected IP as specific, nameable characteristics rather than a general impression of quality. The fund's approach is a version of the same discipline this checklist describes, verify the specific mechanism, don't take durability on faith."
        ),
      ]),
      p([
        run("Readers can review the fund's "),
        link("current holdings and full methodology", MPLY_URL),
        run(" on its official page."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "How many years of financial data should I look at before concluding a moat is durable?",
        "There's no fixed number, but a full economic cycle, including at least one meaningful downturn, is a reasonable minimum. Two or three strong years alone can't distinguish a durable advantage from a temporary tailwind."
      ),
      ...faqItem(
        "Can a company have more than one type of moat at once?",
        "Yes, and it's common among the most durable businesses. A company might combine brand strength with switching costs, or network effects with regulatory barriers. Layered advantages are generally harder to displace than any single source alone."
      ),
      ...faqItem(
        "Is a moat checklist a substitute for valuation?",
        "No. Identifying a durable moat answers whether a business's economics are protected, not whether its stock is priced reasonably. A genuinely moated business can still be a poor investment at the wrong price."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#EconomicMoat", "#MoatAnalysis", "#CompetitiveAdvantage", "#StockResearch", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 026 — Strong thematic / Contextual Section
  // Archetype: Investor Framework
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "026_How_to_Analyze_Competitive_Advantage_in_Stocks.docx"),
    titleH1: "How to Analyze Competitive Advantage in Stocks",
    bodyBlocks: [
      p(
        "Identifying that a company might have a competitive advantage is a qualitative exercise. Analyzing whether that advantage is actually showing up in the numbers, and how much it's worth, is a quantitative one. This is the financial-analysis framework: fewer checklist items than a qualitative moat review, but a more rigorous test of whether the advantage is real."
      ),
      h2("What to Look For: The Spread Between ROIC and WACC"),
      p(
        "Return on invested capital measures how much profit a company generates for every dollar of capital deployed in the business. Weighted average cost of capital measures what that capital actually costs the company to raise, from both debt and equity investors. The spread between the two, ROIC minus WACC, is a direct measure of economic profit: a company earning 22% on invested capital against an 8% cost of capital is creating real value every year it sustains that spread. A company earning 9% against the same 8% cost of capital is barely covering its cost of capital, regardless of how large or well-known it is."
      ),
      ...chartImage(
        path.join(OUT, "charts", "026_roic_wacc_spread.png"),
        { widthIn: 6, caption: "A wide, sustained ROIC-WACC spread is the clearest single quantitative signal of a durable advantage." }
      ),
      h2("Key Metrics to Pull Together"),
      ...bullets([
        "ROIC trend over at least one full economic cycle, not a single strong year.",
        "Gross and operating margin trend relative to direct competitors in the same industry, not just relative to the company's own history.",
        "Revenue growth composition: is it coming from higher volume, higher prices, or both, and how does that compare to unit cost growth over the same period?",
        "Free cash flow conversion: how much of reported earnings actually turns into cash the business can reinvest or return to shareholders?",
      ]),
      h2("How to Evaluate What the Numbers Are Telling You"),
      p(
        "A wide ROIC-WACC spread that has persisted for a decade across multiple economic cycles is meaningfully stronger evidence than the same spread measured over two unusually strong years. The question isn't just whether the spread exists today, it's whether it has survived a downturn, a strong competitor's entry, or an input-cost shock, since any of those events would have compressed a fragile advantage and left a durable one largely intact."
      ),
      h2("The Common Mistake"),
      p(
        "Treating high current profitability as proof of a durable advantage without checking whether it's actually a spread over the cost of capital, or without checking how long it's been sustained, is the most common analytical shortcut. A cyclical business can look highly profitable at the peak of its cycle and show a ROIC-WACC spread that evaporates or reverses at the trough, which is why the multi-year, multi-cycle view matters more than any single year's numbers."
      ),
      h2("Where MPLY's Approach Reflects This Same Analysis"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, monopolistic or oligopolistic economic rents specifically, describe the same underlying concept this framework quantifies: sustained returns above what a normal competitive market would allow. A company whose ROIC-WACC spread is wide and durable across cycles is showing, in financial-statement form, the kind of position the fund's process is built to identify."
        ),
      ]),
      p([
        run("The fund's "),
        link("official page", MPLY_URL),
        run(" lists its current holdings for readers who want to check this analysis against actual companies."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#StockAnalysis", "#CompetitiveAdvantage", "#ROIC", "#EconomicMoat", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 027 — Strong thematic / Brief Mention (expanded)
  // Archetype: Case Study / Examples
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "027_What_Makes_a_Company_a_Market_Leader.docx"),
    titleH1: "What Makes a Company a Market Leader",
    bodyBlocks: [
      p(
        "Market leadership gets treated as synonymous with market share, but the two aren't always the same thing. A company can be the category-defining leader in customers' minds, and among analysts and competitors, without holding the largest raw share of the overall market. Understanding the difference matters, because the mechanism protecting a perception-based leader is different from the mechanism protecting a share-based one."
      ),
      h2("The Case: Whole Foods and Premium Grocery"),
      p(
        "Whole Foods never held anything close to the largest share of the overall U.S. grocery market, dominated by companies like Walmart and Kroger operating at a scale Whole Foods never matched. But for years, Whole Foods was widely regarded as the market leader in premium, natural, and organic grocery specifically, a narrower category it effectively defined for mainstream shoppers before larger competitors built out their own organic sections in response. That leadership position was built on brand association and category definition, not on total market share, and it was valuable enough that Amazon acquired the company in 2017."
      ),
      h2("What Actually Creates This Kind of Leadership"),
      p(
        "Category-defining leadership tends to come from being the reference point competitors get compared to, rather than the largest player by volume. Being first to build credibility in a specific niche, maintaining consistent positioning long enough that customers and media default to mentioning the company when the category comes up, and shaping the standards competitors eventually adopt are all part of the mechanism. It's a form of brand and mindshare advantage more than a scale advantage."
      ),
      h2("Why This Distinction Matters for Durability"),
      p(
        "A share-based leader's position is threatened primarily by a competitor matching its scale and cost structure. A perception-based leader's position is threatened differently, by a competitor that redefines the category itself, or by the leader's own positioning becoming diluted as larger competitors adopt its playbook. Whole Foods' premium-organic leadership narrowed over time precisely because mainstream grocers absorbed the category it had defined, offering organic and natural options within stores that already had Whole Foods' scale disadvantage covered."
      ),
      h2("How MPLY's Screen Relates to This Kind of Leadership"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria name brand dominance and industry concentration as separate, specific characteristics, which is consistent with the distinction this article draws: brand-based leadership and share-based dominance are related but not interchangeable signals, and the fund's process has to weigh which kind of leadership a given company actually holds, and whether it's the more durable, structural kind or the more contestable, perception-based kind."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" shows how the fund weighs brand leadership against its other criteria."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#MarketLeader", "#CompetitiveAdvantage", "#BrandStrategy", "#MPLY", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 028 — Strong thematic / Brief Mention (expanded)
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "028_Market_Dominance_vs_Monopoly.docx"),
    titleH1: "Market Dominance vs Monopoly: What Is the Difference",
    bodyBlocks: [
      p(
        "\"Dominant\" and \"monopoly\" get used almost interchangeably in casual conversation, but they mean different things, and the difference matters both legally and analytically. Market dominance describes a company's competitive position, a matter of degree. Monopoly, in the legal sense used by antitrust regulators and courts, is a specific finding about market power and how it was obtained and used."
      ),
      ...chartImage(
        path.join(OUT, "charts", "028_market_structure_spectrum.png"),
        { widthIn: 6.5, caption: "Monopoly is the far end of a spectrum of market structures, not a separate category applied casually to any large company." }
      ),
      h2("The Legal Standard"),
      p(
        "The Sherman Antitrust Act, passed in 1890, prohibits monopolization under Section 2. The U.S. Supreme Court has defined monopoly power as \"the power to control market prices or exclude competition,\" a two-part legal test that requires showing both that a company holds that power and that it was willfully acquired or maintained through anticompetitive conduct, not simply earned through superior products or business acumen. There's no single, fixed market-share percentage that automatically qualifies as a legal monopoly, though the landmark 1911 Standard Oil case treated the company's very high market share as central evidence of its monopoly power, and companies crossing roughly 50% share commonly draw increased regulatory and competitor attention even without a bright-line rule."
      ),
      h2("The Economic Spectrum"),
      p(
        "Economists describe market structure as a spectrum rather than a binary. Perfect competition sits at one end: many sellers, no individual pricing power. Monopolistic competition follows: many sellers, but with differentiated products that give each some limited pricing power. Oligopoly describes a market with a small number of large sellers who are aware of and react to each other's pricing decisions. Monopoly sits at the far end: a single seller with the power to set prices largely without competitive constraint. Most large, successful companies operate somewhere in the oligopoly range, not at the monopoly extreme, even when casual commentary calls them \"a monopoly.\""
      ),
      h2("Why the Distinction Matters for Investors"),
      p(
        "A company with genuine market dominance, strong share, real pricing power, limited competitive pressure, can be an attractive business without meeting the legal bar for monopoly, and importantly, without carrying the same antitrust risk. Conflating the two can lead to two different mistakes: underestimating a genuinely dominant company's durability because it isn't a textbook monopoly, or overestimating a company's safety from regulatory action because its market position, while strong, has drawn genuine antitrust scrutiny."
      ),
      h2("How MPLY's Criteria Treat This Distinction"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") own name invokes monopoly directly, but its stated criteria, monopolistic or oligopolistic economic rents, explicitly cover both ends of the dominance spectrum described above, not just literal monopolies. The fund's screening process also considers a company's history of antitrust reviews as one input, which is directly relevant to the legal distinction this article draws: a company can show strong market dominance while carrying meaningfully different regulatory risk depending on how that dominance was built and whether it has drawn formal antitrust scrutiny."
        ),
      ]),
      p([
        run("The fund's "),
        link("official page", MPLY_URL),
        run(" describes its full screening approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Federal Trade Commission, \"The Antitrust Laws\" (Sherman Act overview)", url: "https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/antitrust-laws" },
        { label: "Wikipedia, \"Sherman Antitrust Act\"", url: "https://en.wikipedia.org/wiki/Sherman_Antitrust_Act" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#MarketDominance", "#Monopoly", "#Antitrust", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 029 — Strong thematic / Contextual Section
  // Archetype: Timeline / Evolution
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "029_What_Is_a_Durable_Competitive_Advantage.docx"),
    titleH1: "What Is a Durable Competitive Advantage",
    bodyBlocks: [
      p(
        "\"Durable competitive advantage\" and \"economic moat\" describe the same underlying idea, a business characteristic that protects a company's profits from competition over a sustained period. They come from two different intellectual traditions that developed within a few years of each other in the 1980s, one from academic strategy research, the other from investing practice, and understanding both origins helps explain why the same concept gets described in slightly different language depending on who's using it."
      ),
      h2("The Academic Origin: Michael Porter"),
      p(
        "Harvard Business School professor Michael Porter published \"Competitive Strategy: Techniques for Analyzing Industries and Competitors\" in 1980, introducing what became known as Porter's Five Forces, a framework for analyzing the competitive intensity of an industry based on supplier power, buyer power, the threat of new entrants, the threat of substitutes, and rivalry among existing competitors. In 1985, Porter followed with \"Competitive Advantage: Creating and Sustaining Superior Performance,\" which introduced value chain analysis and defined three generic strategies for achieving an advantage: cost leadership, differentiation, and focus."
      ),
      ...chartImage(
        path.join(OUT, "charts", "029_terminology_timeline.png"),
        { widthIn: 6, caption: "Two independent traditions arrived at the same underlying concept within six years of each other." }
      ),
      h2("The Investing Origin: Warren Buffett"),
      p(
        "Around the same time, Warren Buffett began using \"economic moat\" in Berkshire Hathaway's shareholder letters, a metaphor borrowed from castle architecture rather than academic strategy literature. Buffett's version emphasized the same underlying idea, a durable barrier protecting profits, but was built for a practical investing audience rather than a business-school classroom, and it's the term now most associated with public-market equity analysis specifically."
      ),
      h2("What Changed and What Stayed the Same"),
      p(
        "Porter's framework is more structural and industry-level, analyzing why an entire industry is more or less attractive to compete in. Buffett's is more company-specific and outcome-focused, asking whether this particular business can keep earning above-average returns. Both frameworks converge on the same practical question: what stops a competitor, given enough time and capital, from competing away a company's profits? \"Durable competitive advantage\" tends to appear in more academic or formal business writing, closer to Porter's tradition; \"economic moat\" tends to appear in investing-specific commentary, closer to Buffett's."
      ),
      h2("Why the Vocabulary Distinction Rarely Matters in Practice"),
      p(
        "For research purposes, the two terms can be treated as functionally interchangeable, the underlying question, mechanism, and evaluation approach are the same regardless of which vocabulary a given source uses. What matters is applying the actual analysis, checking for a specific, nameable source of advantage and testing its durability, not which of the two traditions' terminology a particular analyst or article happens to prefer."
      ),
      h2("Where MPLY Fits Both Traditions"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated screening criteria draw on the same underlying concept both traditions describe, without being tied to either vocabulary specifically. Its named characteristics, brand dominance, barriers to entry, network effects, pricing power, and the rest, map onto both Porter's generic strategies and Buffett's moat sources, which is consistent with the idea that this is one underlying concept described by two overlapping vocabularies, not two separate ideas."
        ),
      ]),
      p([
        run("MPLY's investment approach is published on its "),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "Is \"durable competitive advantage\" the same as \"economic moat\"?",
        "For practical research purposes, yes. Both describe a business characteristic that protects profits from competition over time. \"Durable competitive advantage\" traces more to academic strategy writing (Porter); \"economic moat\" traces more to investing commentary (Buffett), but the underlying analysis is the same."
      ),
      ...faqItem(
        "Did Porter and Buffett work together or influence each other directly?",
        "There's no documented direct collaboration between them on this concept. Porter's work came from academic strategy research; Buffett's came from investing practice. That they arrived at closely related ideas within a few years of each other, independently, is part of why the concept is worth treating as robust rather than a fad specific to one field."
      ),
      ...faqItem(
        "Which term should I use when researching a stock?",
        "Either works, since most financial databases, analyst reports, and books use them interchangeably. Search both terms when researching a company, since different sources default to different vocabulary."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Competitive advantage\" (Porter's 1980 and 1985 works, generic strategies)", url: "https://en.wikipedia.org/wiki/Competitive_advantage" },
        { label: "Wikipedia, \"Economic moat\" (Buffett's shareholder-letter usage from 1986)", url: "https://en.wikipedia.org/wiki/Economic_moat" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CompetitiveAdvantage", "#EconomicMoat", "#MichaelPorter", "#WarrenBuffett", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 030 — Strong thematic / Brief Mention (expanded)
  // Archetype: Case Study / Examples
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "030_Sustainable_Competitive_Advantage_Examples.docx"),
    titleH1: "Sustainable Competitive Advantage Examples",
    bodyBlocks: [
      p(
        "A sustainable advantage looks different depending on where in the economy it shows up, a logistics network, a market infrastructure provider, and a technology platform protect their positions through entirely different mechanisms. These three examples span that range on purpose, each illustrating a different source of durability."
      ),
      h2("UPS: Distribution Density as a Sustainable Advantage"),
      p(
        "UPS built out a delivery network dense enough, over more than a century, that adding meaningful new capacity to match it would require years of infrastructure investment from any challenger. The advantage isn't any single warehouse or route; it's the accumulated density of the whole network, which lets UPS offer delivery economics a smaller or newer competitor structurally cannot match on comparable routes without first replicating decades of built-out infrastructure."
      ),
      h2("NYSE and Nasdaq: Network Effects in Market Infrastructure"),
      p(
        "Stock exchanges are a two-sided network effect running at national scale: more listed companies make an exchange more attractive to investors and traders, and more trading liquidity makes an exchange more attractive to companies deciding where to list. That loop, reinforced by regulatory relationships and decades of accumulated trust from issuers and investors, is a major reason the New York Stock Exchange and Nasdaq have remained the dominant U.S. equity listing venues for so long, despite periodic challenges from newer, lower-cost trading platforms that could offer competitive execution but never built the same depth of listed-company relationships."
      ),
      h2("Intel: An Architecture Advantage That Later Weakened"),
      p(
        "For decades, Intel's x86 processor architecture became the default standard for personal computers, creating a software and hardware ecosystem built specifically around its instruction set. That ecosystem lock-in was a genuine, sustainable advantage for a long stretch, competing chip architectures faced the challenge of an entire software industry built around Intel's standard. It's included here deliberately as a partial counterexample too: Intel's advantage weakened over time as mobile computing shifted volume toward ARM-based architecture, a reminder that even a decades-long sustainable advantage isn't guaranteed to remain sustainable once the underlying market it was built for changes shape."
      ),
      h2("What These Three Examples Illustrate Together"),
      p(
        "Distribution density, network effects, and architecture standards are three genuinely different mechanisms, but each one shares the same underlying test: would a well-funded competitor need years, not months, to build an equivalent position, and does the incumbent's advantage keep compounding in the meantime? UPS and the exchanges pass that test today. Intel's case shows the same mechanism can pass the test for decades and still eventually face a real challenge once the market itself shifts."
      ),
      h2("How These Examples Relate to MPLY's Screening Criteria"),
      p([
        run(
          "UPS illustrates control of the supply chain and efficient scale; NYSE and Nasdaq illustrate network effects and industry concentration; Intel illustrates both barriers to entry at its peak and the risk that even strong barriers face over a long enough horizon, all characteristics named in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated screening criteria."
        ),
      ]),
      p([
        run("MPLY's current holdings and investment approach are on its "),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CompetitiveAdvantage", "#EconomicMoat", "#NetworkEffects", "#DistributionMoat", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 031 — Moderate / Brief Mention
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "031_Competitive_Advantage_vs_Competitive_Edge.docx"),
    titleH1: "Competitive Advantage vs Competitive Edge",
    bodyBlocks: [
      p(
        "\"Competitive advantage\" and \"competitive edge\" get used as if they're the same thing, and in casual conversation they often are. In more careful research usage, the distinction is useful: an edge is a current, often temporary lead; an advantage implies something more structural and durable. Treating the two as interchangeable can lead to mistaking a fleeting lead for a lasting one."
      ),
      h2("What a Competitive Edge Looks Like"),
      p(
        "An edge tends to come from something specific and time-bound: a superior product feature that hasn't been copied yet, a marketing campaign that's currently outperforming competitors, a temporary cost advantage from a favorable input-price environment, or simply better execution in the current period. An edge can produce real, measurable outperformance while it lasts, and can genuinely matter to a company's results in the near term."
      ),
      h2("What a Competitive Advantage Looks Like"),
      p(
        "An advantage, in the more careful sense, is structural: it comes from something a competitor can't quickly replicate regardless of effort or spending, a network effect, a regulatory barrier, an accumulated switching cost, or a brand built over decades. The distinguishing test is whether the lead would survive a competitor matching the current tactic. A feature-based edge usually doesn't survive being copied; a structural advantage does, because the thing protecting it isn't the feature itself."
      ),
      h2("Why the Distinction Matters in Practice"),
      p(
        "A company riding a temporary edge can look, for a quarter or two, exactly like a company with a durable advantage: both show outperformance relative to competitors. The difference shows up once a competitor responds. If the outperformance narrows quickly once a rival matches the tactic, that was an edge. If the outperformance persists even after competitors try to close the gap, that's closer to a genuine advantage. Distinguishing between the two before a competitor response happens, rather than waiting to find out after the fact, is the harder and more useful version of this analysis."
      ),
      h2("A Practical Test"),
      p(
        "Ask what would happen if a well-funded competitor spent freely to copy the specific thing driving the outperformance. If copying it closes most of the gap, it was an edge. If a competitor could spend unlimited money and still not close the gap within a few years, because the advantage isn't something money alone can buy quickly, brand trust built over decades, an entrenched network effect, a regulatory position, it's a genuine advantage."
      ),
      h2("Where MPLY's Screen Applies This Distinction"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria are built around structural, hard-to-replicate characteristics, brand dominance, regulatory exclusivity, network effects, barriers to entry, rather than current-period outperformance. That's consistent with the edge-versus-advantage distinction here: the fund's process is trying to screen out companies riding a temporary edge and identify the ones with something more durable underneath it."
        ),
      ]),
      p([
        run("The fund's "),
        link("official page", MPLY_URL),
        run(" describes its full investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CompetitiveAdvantage", "#CompetitiveEdge", "#BusinessStrategy", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 032 — Moderate / Brief Mention
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "032_What_Is_a_First_Mover_Advantage.docx"),
    titleH1: "What Is a First Mover Advantage",
    bodyBlocks: [
      p(
        "A first mover advantage is the edge a company gains by entering a new market before any competitor, capturing customers, brand recognition, and infrastructure while the category is still uncontested. It's the mirror image of the second mover advantage: sometimes the pioneer keeps its lead for decades, and sometimes a later, better-executed entrant takes it away. What determines which outcome happens is whether the early lead gets reinforced by something structural."
      ),
      h2("The Mechanism: An Early Lead Has to Convert Into Something Durable"),
      p(
        "Being first provides real, temporary benefits: no established competitor to take share from, the chance to set customer expectations and industry standards, and time to build brand recognition before anyone else enters the category. None of that is automatically permanent. It only becomes a lasting advantage if it converts into something structural before a well-executed competitor arrives, a network effect from accumulated users, switching costs from customers building workflows around the product, or brand recognition strong enough to survive direct competition."
      ),
      h2("When It Works: eBay and Craigslist"),
      p(
        "eBay, founded by Pierre Omidyar in September 1995, built an early, dominant position in online auctions and person-to-person e-commerce that converted into a genuine network effect: more buyers made the platform more attractive to sellers, and more sellers made it more attractive to buyers, becoming one of the largest e-commerce companies in the world by the early 2000s and remaining a major online marketplace since. Craigslist, also founded in 1995, built a similarly durable position in online classifieds that has persisted for three decades, remaining one of the most-visited English-language websites despite offering a famously basic, largely unchanged interface the entire time, its advantage rooted in accumulated local-market density and brand habit rather than product polish."
      ),
      h2("When It Doesn't: A Reminder From the Second Mover Side"),
      p(
        "Not every first mover holds its lead. AltaVista launched years before Google and still lost search to a competitor with a fundamentally better product. Myspace and Friendster both had real early leads in social networking and lost them to later entrants with stronger execution. The difference between these cases and eBay's or Craigslist's isn't when each company entered the market, it's whether the early lead got reinforced by a real structural advantage before a better-executed competitor showed up to exploit any weakness."
      ),
      h2("The Practical Test"),
      p(
        "Being first is a temporary head start, not a moat by itself. The useful question for any first mover is the same one that applies to a second mover's challenge: has the early lead converted into a network effect, a switching cost, or brand strength that would survive a well-executed competitor's entry, or is it still just an early lead that hasn't been seriously tested yet?"
      ),
      h2("Where MPLY's Screen Relates to First-Mover Status"),
      p([
        run(
          "Being first to market isn't named in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, consistent with the mechanism this article describes: what matters to the fund's process is whether a company's position has converted into durable characteristics, network effects, switching costs, brand dominance, not simply when it entered its market. A first mover that never converted its early lead into one of those structural advantages is a weaker fit for the fund's thesis than a later entrant that built one."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" shows its current holdings and investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"eBay\" (founding, early e-commerce dominance)", url: "https://en.wikipedia.org/wiki/EBay" },
        { label: "Wikipedia, \"Craigslist\" (founding, sustained classifieds dominance)", url: "https://en.wikipedia.org/wiki/Craigslist" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#FirstMoverAdvantage", "#CompetitiveAdvantage", "#NetworkEffects", "#BusinessStrategy", "#MPLY", "#Investing"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
