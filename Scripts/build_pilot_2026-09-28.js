const path = require("path");
const { buildArticle, h2, p, link, run, bullets, chartImage } = require("./wp_docx_helpers");

const OUT = path.join(
  "C:", "Users", "SrimanNarayan", "OneDrive - TransForm Solutions (P) Limited",
  "MFunds_WP Articles", "Articles", "2026-09-28_Set_01"
);
require("fs").mkdirSync(OUT, { recursive: true });

async function main() {
  // ------------------------------------------------------------------
  // Article 001 (brief No. 1) — Strong thematic / Brief Mention
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "001_What_Is_Pricing_Power.docx"),
    seoTitle: "What Is Pricing Power? Why It Matters for Investors",
    metaDescription:
      "Pricing power lets a company raise prices without losing customers. Here's how it works, how to spot it, and why investors track it closely.",
    titleH1: "What Is Pricing Power and Why It Matters for Investors",
    bodyBlocks: [
      p(
        "Pricing power is a company's ability to raise prices without a corresponding drop in demand. It sounds simple, but it is one of the more reliable signals investors use to judge how defensible a business really is. A company that can pass along higher costs, or charge more simply because customers have few alternatives, tends to protect its profit margins in ways a company without that ability cannot."
      ),
      h2("Why Pricing Power Exists"),
      p(
        "Pricing power rarely comes from a single source. It tends to build from some combination of weak substitutes, high switching costs, brand loyalty, or genuine product differentiation. A utility can raise rates because customers have nowhere else to go. A luxury brand can raise prices because part of what customers are buying is the exclusivity itself. A dominant software platform can raise subscription fees because migrating a company's data and workflows elsewhere is expensive and disruptive."
      ),
      p(
        "Demand elasticity is the underlying economic concept. When demand for a product is inelastic, meaning volume does not fall much even as price rises, a business has room to push prices higher. When demand is elastic, price increases chase customers away faster than they add to revenue, and pricing power disappears."
      ),
      h2("How Investors Look for It"),
      p(
        "Gross margin trends are one of the more direct tells. A company sustaining or expanding gross margins during a period of rising input costs is passing those costs on to customers, which is pricing power in action. Revenue growth that outpaces unit or volume growth points the same direction: the company is selling roughly the same amount for more money, not simply selling more."
      ),
      p(
        "Earnings calls and investor letters are also useful, if read skeptically. Management teams that can describe specific price increases and the retention of customers through them are demonstrating something concrete, not just asserting brand strength."
      ),
      h2("Where Pricing Power Breaks Down"),
      p(
        "Pricing power is not permanent. Regulation can cap what a utility or a pharmaceutical company charges. A well-funded competitor can undercut a brand's premium. A macroeconomic downturn can push even loyal customers toward cheaper alternatives once their own budgets tighten. And elasticity is rarely fixed: a company can raise prices once without losing customers and still find the second increase is the one that finally pushes buyers away."
      ),
      p(
        "Durable pricing power, sustained over many years and multiple price increases, is a different and rarer thing than a single successful price hike. That durability is part of what separates a business with a genuine competitive advantage from one simply benefiting from a temporary supply shortage or a one-time product cycle. It is also one of the characteristics that actively managed funds screening for monopolistic or oligopolistic business traits, such as the MPLY ETF, look for when evaluating whether a company's advantage is likely to hold up over time."
      ),
    ],
    mply: {
      decision: "Brief Mention",
      placement: "Brief Mention",
      note:
        "One sentence in the closing paragraph connects sustained pricing power to the type of durable-advantage screening MPLY performs, without a dedicated section or heading. Matches the brief's 'Strong thematic / Brief Mention' guidance.",
    },
    visual: {
      decision: "No",
      brief: null,
    },
    internalLinks: [
      "Anchor: 'economic moat' -> Target article: What Is a Competitive Moat in Investing",
      "Anchor: 'switching costs' -> Target article: What Are Switching Costs and Why Do They Matter",
    ],
    externalSources: [
      "Concepts described (demand elasticity, gross margin analysis) reflect standard microeconomic and equity-analysis framing; no proprietary data or statistics were cited.",
    ],
    hashtags: ["#PricingPower", "#InvestingBasics", "#CompetitiveAdvantage"],
  });

  // ------------------------------------------------------------------
  // Article 002 (brief No. 13) — Moderate / Brief Mention
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "002_What_Is_a_Cost_Advantage_Moat.docx"),
    seoTitle: "What Is a Cost Advantage Moat in Investing?",
    metaDescription:
      "A cost advantage moat lets a company underprice competitors and still turn a profit. Learn how it forms, real examples, and its limits.",
    titleH1: "What Is a Cost Advantage Moat",
    bodyBlocks: [
      p(
        "A cost advantage moat exists when a company can produce or deliver a product for meaningfully less than its competitors, and use that gap either to undercut rivals on price or to earn a fatter margin at the same price. It is one of the more common types of competitive advantage, and one of the easier ones to measure, because it shows up directly in unit economics."
      ),
      h2("How a Cost Advantage Forms"),
      p(
        "Scale is the most familiar driver. A retailer with thousands of stores can negotiate better terms from suppliers than a regional chain can. A chipmaker running its factories at higher utilization spreads fixed costs over more units. Proprietary process or technology is another route: a company that has spent years refining a manufacturing process may simply produce more efficiently than a competitor trying to catch up from scratch."
      ),
      p(
        "Access to cheaper inputs matters too. A company with a long-term contract locking in lower raw material costs, or with a logistics network built years ago at lower cost than a new entrant could replicate today, carries a structural cost edge that has nothing to do with current operational skill."
      ),
      h2("Cost Advantage Moat in Practice"),
      p(
        "Discount retailers built around scale purchasing and lean store formats are a textbook example. Low-cost airlines built around single aircraft types, tight turnaround times, and no-frills service are another. In both cases, the advantage is visible in the income statement: lower cost of goods sold or lower operating expense per unit of revenue than the rest of the industry."
      ),
      h2("Why This Moat Type Is Often Fragile"),
      p(
        "Cost advantages can erode faster than advantages built on brand or switching costs. A competitor that scales up eventually captures similar purchasing power. A new manufacturing technology can wipe out years of process refinement overnight. And a pure cost advantage, without something else layered on top of it such as a distribution network or brand recognition, invites a price war that can compress margins for everyone in the industry, including the low-cost leader."
      ),
      p(
        "That is why investors and analysts typically look past whether a cost advantage exists at all and ask how it was built, and whether a well-capitalized competitor could replicate it within a few years. Cost efficiency by itself is common; cost efficiency that is genuinely hard to copy is rarer, and it's that second, durability-focused question that overlaps with how funds built around identifying durable competitive advantages, including MPLY, frame their own screening process."
      ),
    ],
    mply: {
      decision: "Brief Mention",
      placement: "Brief Mention",
      note:
        "A single closing-paragraph sentence ties the durability question back to advantage-screening funds generally, naming MPLY once, without overstating relevance for a moderate-fit topic. Matches the brief's 'Moderate / Brief Mention' guidance.",
    },
    visual: {
      decision: "No",
      brief: null,
    },
    internalLinks: [
      "Anchor: 'economies of scale' -> Target article: Economic Moat Examples: How Durable Advantages Work",
    ],
    externalSources: [
      "General cost-structure and moat-durability framing follows standard equity-research practice; no proprietary statistics were cited.",
    ],
    hashtags: ["#EconomicMoat", "#CostAdvantage", "#InvestingBasics"],
  });

  // ------------------------------------------------------------------
  // Article 003 (brief No. 33) — Indirect / None (MPLY fully omitted)
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "003_What_Is_a_Second_Mover_Advantage.docx"),
    seoTitle: "What Is a Second Mover Advantage in Business?",
    metaDescription:
      "Being first to market isn't always the winning move. Here's how second movers use a pioneer's mistakes to build a stronger, longer-lasting business.",
    titleH1: "What Is a Second Mover Advantage",
    bodyBlocks: [
      p(
        "A second mover advantage is the edge a company gains by entering a market after a pioneer has already tested it, rather than being first. It runs against the common assumption that being first is always best. In practice, the first company into a market often absorbs the cost of educating customers, working out product flaws, and building infrastructure that a later entrant can simply copy, improve, or avoid rebuilding from scratch."
      ),
      h2("What Second Movers Get for Free"),
      p(
        "A pioneer's mistakes are often the most valuable thing a second mover inherits. The first company has already found out which features customers ignore, which pricing model fails, and which technical approach does not scale. A second entrant can skip that trial-and-error phase entirely and launch with a more refined product on the first attempt."
      ),
      p(
        "Market education is another cost the pioneer usually pays alone. Convincing customers that a new category of product is worth buying at all takes marketing spend and time. Once that education has happened, later entrants can compete on quality and execution rather than spending resources explaining why the category matters in the first place."
      ),
      h2("Real Examples of Second Movers Winning"),
      p(
        "Search engines existed years before a dominant one emerged; the eventual market leader was not first, but built a faster, simpler, more accurate product once the category's problems were well understood. Social networks followed a similar pattern: earlier platforms proved that people wanted to connect online, and a later entrant won by fixing the design and privacy issues those earlier platforms struggled with. Smartphones followed the same arc. Touchscreen phones existed before the device that came to define the category; what changed was execution, not the underlying idea."
      ),
      h2("When Being Second Does Not Work"),
      p(
        "The advantage is not automatic. If the pioneer builds strong network effects, meaning the product gets more valuable as more people use it, or locks customers in through high switching costs, a second mover can arrive with a technically superior product and still lose, because customers have little incentive to switch. Patents and regulatory approvals can also block a second mover from copying the parts of the pioneer's approach that mattered most."
      ),
      p(
        "The practical takeaway is that neither position, first or second, guarantees success. What tends to matter more is execution: whether a company can turn the lessons of an earlier entrant, or the ground that entrant already broke, into a genuinely better product, and whether the market's dynamics (network effects, switching costs, patents) leave room for a later arrival to catch up at all."
      ),
    ],
    mply: null,
    visual: {
      decision: "No",
      brief: null,
    },
    internalLinks: [
      "Anchor: 'network effects' -> Target article: Economic Moat Examples: How Durable Advantages Work",
      "Anchor: 'switching costs' -> Target article: What Are Switching Costs and Why Do They Matter",
    ],
    externalSources: [
      "Historical pattern of later entrants overtaking early pioneers in search, social networking, and smartphones is widely documented business history; no specific performance statistics or company financials were cited.",
    ],
    hashtags: ["#BusinessStrategy", "#CompetitiveAdvantage", "#Innovation"],
  });

  // ------------------------------------------------------------------
  // Article 004 (brief No. 71) — Direct / Primary Subject
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "004_What_Is_MPLY_ETF.docx"),
    seoTitle: "What Is MPLY ETF? Strategy Shares Monopoly ETF Explained",
    metaDescription:
      "MPLY is an actively managed ETF that screens for companies with monopoly-like traits. Here's what it holds, what it costs, and how it's built.",
    titleH1: "What Is MPLY ETF",
    bodyBlocks: [
      p([
        run(
          "The Strategy Shares Monopoly ETF, traded under the ticker MPLY, is an actively managed fund that looks for companies with what its issuer calls "
        ),
        run('"Monopolistic Attributes."', { italics: true }),
        run(
          " Rather than tracking a fixed index, the fund's managers select individual holdings based on a defined set of business characteristics associated with market dominance, then adjust the portfolio over time as that assessment changes."
        ),
      ]),
      h2("What the Fund Screens For"),
      p(
        'MPLY\'s stated methodology looks for brand dominance, regulatory exclusivity, industry concentration, a history of antitrust scrutiny, monopolistic or oligopolistic economic rents, high barriers to market entry, pricing power, vertical integration and control of the supply chain, benefits from network effects, and protected intellectual property or patents. A company does not need every trait; the fund considers businesses that hold these characteristics individually, effectively a monopoly, or collectively with a small number of competitors, effectively an oligopoly.'
      ),
      h2("Fund Basics"),
      p([run("MPLY launched on May 15, 2025, giving it a track record of roughly a year as of late 2026. That is a meaningfully shorter operating history than most established equity ETFs, and it means the fund has not yet been tested through a full market cycle, including a sustained downturn.", {})]),
      p([
        run("The fund carries an expense ratio of 0.79%, both gross and net, and had roughly "),
        run("$18 million", { bold: true }),
        run(
          " in assets under management as of late September 2026, according to the issuer's own site. That places it well below the size of most large, established sector or thematic ETFs, which can mean lower average daily trading volume and wider bid-ask spreads than an investor would see in a more heavily traded fund."
        ),
      ]),
      p(
        "The portfolio held 100 positions as of the most recent public data, with its ten largest holdings, including Nvidia, Alphabet, Apple, Microsoft, and Amazon, making up roughly 64% of total assets. That level of concentration in mega-cap technology names means the fund's performance leans heavily on how a small group of dominant companies perform, more so than a broad-market index fund would."
      ),
      ...chartImage(
        path.join(OUT, "charts", "004_mply_top10_holdings.png"),
        { widthIn: 6, caption: "MPLY's ten largest holdings by portfolio weight. Source: stockanalysis.com, fetched 2026-09-23." }
      ),
      h2("How It Has Performed So Far"),
      p(
        "As of August 31, 2026, the fund's trailing one-year return stood at 20.23% on a net asset value basis and 20.21% on market price, according to the issuer. Because the fund launched in May 2025, this figure reflects a single, specific market period rather than a return pattern proven across multiple years or market conditions. Investors researching the fund should treat any short-term performance figure as a snapshot rather than evidence of a repeatable strategy."
      ),
      h2("What to Weigh Before Researching Further"),
      ...bullets([
        "Short operating history: inception in mid-2025 means no full market cycle has been observed yet.",
        "Concentration risk: roughly two-thirds of assets sit in ten holdings, most of them large technology companies.",
        "Smaller fund size: lower AUM than established ETFs can mean thinner trading liquidity.",
        "Active management: returns depend on the manager's ongoing judgment about which companies meet the monopoly/oligopoly screen, not a fixed, rules-based index.",
      ]),
      p([
        run(
          "MPLY is one option among several actively managed funds built around competitive-advantage or moat-style investing themes. Investors researching the space can review "
        ),
        link("MPLY's investment approach", "https://strategysharesetfs.com/mply/"),
        run(
          " directly through the issuer's site, which publishes current holdings, performance, and fund documents."
        ),
      ]),
    ],
    mply: {
      decision: "Primary Subject",
      placement: "Primary Subject",
      note:
        "MPLY is the article's subject. All fund facts (inception date, expense ratio, AUM, holdings count, top-10 concentration, trailing return) were verified against the official issuer page (strategysharesetfs.com/mply) on 2026-09-23 and cross-checked against stockanalysis.com; see MPLY Information/mply_fund_facts.md. No investment recommendation made; risk factors (short track record, concentration, small AUM) stated plainly rather than as a caveat.",
    },
    visual: {
      decision: "Yes",
      brief:
        "Simple horizontal bar chart of MPLY's top 10 holdings by portfolio weight (NVDA 10.65%, GOOG 9.31%, AAPL 9.21%, MSFT 8.15%, AMZN 6.04%, TSM 5.01%, SPCX 4.84%, META 3.96%, AVGO 3.82%, TSLA 3.40%), sourced from stockanalysis.com (2026-09-23), with a caption noting these ten holdings represent about 64% of total fund assets. Purpose: let the reader see concentration at a glance rather than read ten percentages in a sentence. Design note: sort bars descending by weight; label each bar with ticker and percentage; no color-coding needed beyond a single accent color.",
    },
    internalLinks: [
      "Anchor: 'competitive moat' -> Target article: What Is a Competitive Moat in Investing",
      "Anchor: 'pricing power' -> Target article: What Is Pricing Power and Why It Matters for Investors",
    ],
    externalSources: [
      "https://strategysharesetfs.com/mply/ (official issuer page: inception date, expense ratio, AUM, trailing return, screening methodology; fetched 2026-09-23)",
      "https://stockanalysis.com/etf/mply/ (secondary verification: holdings count, top-10 weights, AUM cross-check; fetched 2026-09-23)",
    ],
    hashtags: ["#MPLY", "#ETFResearch", "#ActiveManagement"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
