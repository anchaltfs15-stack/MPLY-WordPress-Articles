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
        "Durable pricing power, sustained over many years and multiple price increases, is a different and rarer thing than a single successful price hike. That durability is part of what separates a business with a genuine competitive advantage from one simply benefiting from a temporary supply shortage or a one-time product cycle."
      ),
      h2("Why MPLY Treats Pricing Power as a Core Signal"),
      p(
        "Pricing power is not a side note in how the Strategy Shares Monopoly ETF (MPLY) selects holdings. It is one of the specific characteristics named in the fund's stated screening criteria, alongside brand dominance, regulatory exclusivity, industry concentration, high barriers to market entry, and network effects. The fund's managers are actively looking for businesses that can set or hold prices with limited competitive pushback, on the theory that this kind of position tends to accompany the broader monopolistic or oligopolistic characteristics the fund targets."
      ),
      p(
        "In practice, pricing power rarely shows up alone in MPLY's evaluation. A company that can raise prices today but faces easy substitution, low switching costs, or an absence of real barriers to entry does not fit the fund's broader thesis, even if a temporary price increase looks impressive on paper. What the fund's approach is built around is the combination: pricing power that coexists with the structural advantages that make it durable, such as a dominant market position, control over a supply chain, or intellectual property that a competitor cannot simply replicate."
      ),
      p([
        run(
          "Some of MPLY's largest current holdings illustrate the kind of pricing behavior the fund's screen is designed to capture. "
        ),
        run("Nvidia", { bold: true }),
        run(
          ", the fund's largest position, has been able to sustain premium pricing on its data-center GPUs through a period of surging AI infrastructure demand, a position reinforced by its dominant share of AI accelerator hardware. "
        ),
        run("Apple", { bold: true }),
        run(
          ", also among the fund's top holdings, has maintained premium iPhone pricing for years despite the availability of far cheaper Android alternatives, a pattern generally attributed to brand loyalty and ecosystem lock-in rather than any single feature advantage. Neither company qualifies for MPLY's portfolio on pricing power alone, but pricing power is part of the case for both."
        ),
      ]),
      p(
        "A reader researching MPLY through this lens should look past the price increase itself and ask what is protecting it: a patent, a network effect, a regulatory position, a brand that customers will pay to stay loyal to. Pricing power without one of those underlying protections tends to be temporary, and MPLY's methodology is built around finding the more durable version. This is also a limitation worth being direct about: pricing power is evidence of a possible moat, not proof of one, and the fund's own selection process relies on the manager's active judgment about which companies clear that bar, not a mechanical rule."
      ),
      p([
        run(
          "Readers who want to see how this criterion plays out across a full portfolio can review "
        ),
        link("MPLY's current holdings and investment approach", "https://strategysharesetfs.com/mply/"),
        run(
          " on the fund's official page."
        ),
      ]),
      h2("Sources"),
      ...bullets([
        "Strategy Shares Monopoly ETF official fund page (screening criteria, current holdings): strategysharesetfs.com/mply",
        "stockanalysis.com/etf/mply (holdings weights, fetched 2026-09-23)",
      ]),
    ],
    hashtags: ["#PricingPower", "#CompetitiveAdvantage", "#EconomicMoat", "#MPLY", "#Investing", "#QualityInvesting", "#Fundamentals"],
  });

  // ------------------------------------------------------------------
  // Article 002 (brief No. 13) — Moderate / Brief Mention
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "002_What_Is_a_Cost_Advantage_Moat.docx"),
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
      ...chartImage(
        path.join(OUT, "charts", "002_economies_of_scale.png"),
        { widthIn: 6, caption: "A conceptual illustration of how fixed costs spread over more units as volume grows; not derived from any specific company's figures." }
      ),
      h2("Cost Advantage Moat in Practice"),
      p(
        "Walmart is the standard reference case for purchasing-scale cost advantage: its size lets it negotiate supplier terms that a regional chain cannot match, and that gap shows up directly in everyday shelf prices. Costco takes a related but distinct approach, using a membership-fee model to run merchandise at thin, sometimes near-breakeven margins while the fee itself carries the profit, which lets it undercut competitors that need to price for margin on every item sold."
      ),
      p(
        "Southwest Airlines is the clearer example on the operating side. Since its founding, it has flown a single aircraft family, the Boeing 737, rather than a mixed fleet. That choice simplifies pilot and mechanic training, lets crews and aircraft be swapped between routes without aircraft-specific requalification, and speeds up how quickly a plane can be turned around at the gate. The airline has said the practice saves hundreds of millions of dollars a year compared with operating a mixed fleet, the kind of structural cost gap that is hard for a competitor to close without rebuilding its own fleet strategy from scratch."
      ),
      h2("Why This Moat Type Is Often Fragile"),
      p(
        "Cost advantages can erode faster than advantages built on brand or switching costs. A competitor that scales up eventually captures similar purchasing power. A new manufacturing technology can wipe out years of process refinement overnight. And a pure cost advantage, without something else layered on top of it such as a distribution network or brand recognition, invites a price war that can compress margins for everyone in the industry, including the low-cost leader."
      ),
      p(
        "That is why investors and analysts typically look past whether a cost advantage exists at all and ask how it was built, and whether a well-capitalized competitor could replicate it within a few years. Cost efficiency by itself is common; cost efficiency that is genuinely hard to copy is rarer, and it's that second, durability-focused question that overlaps with how funds built around identifying durable competitive advantages, including MPLY, frame their own screening process."
      ),
      h2("Sources"),
      ...bullets([
        "Southwest Airlines single-fleet strategy and its reported cost savings: Simple Flying, \"Why One Of The World's Biggest Airlines Bet Its Future On A Single Aircraft Family\" (simpleflying.com)",
      ]),
    ],
    hashtags: ["#CostAdvantageMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#Investing", "#ValueInvesting", "#Fundamentals"],
  });

  // ------------------------------------------------------------------
  // Article 003 (brief No. 33) — Indirect / None (MPLY fully omitted)
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "003_What_Is_a_Second_Mover_Advantage.docx"),
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
        "Search engines are the clearest case. AltaVista launched in December 1995 and became one of the dominant search tools of the mid-1990s, alongside Yahoo, Excite, and Lycos. Google did not launch until 1998, three years later, but its PageRank algorithm ranked pages by link popularity rather than raw keyword matching, and it did not suffer from the spam-cluttered results that increasingly plagued AltaVista as webmasters learned to game keyword-based rankings. By 2001, Google had captured roughly 85% of search market share. AltaVista, the pioneer, was acquired by Yahoo in 2003 and shut down in 2013."
      ),
      p(
        "Social networks followed a similar, faster-moving pattern. Myspace, founded in 2003, was the dominant social network in the United States for several years. Facebook launched in 2004, a year later, and overtook Myspace in global unique visitors by April 2008 and in US users by May 2009. Facebook's advantage was largely about design and control: a simpler, more consistent profile format and a tighter approach to how content spread, at a point when Myspace's freeform customization had become cluttered and harder to navigate."
      ),
      p([
        run(
          "Smartphones show the longest runway between pioneer and winner. IBM's Simon Personal Communicator, released in 1994, is generally credited as the first touchscreen smartphone, and later devices like the Palm Treo, Nokia 7710, and BlackBerry line built on that category through the 2000s. Apple's "
        ),
        run("iPhone", { bold: true }),
        run(
          " did not arrive until June 2007, thirteen years after IBM Simon, but it combined a capacitive multi-touch screen, a full mobile web browser, and, a year later, an app store into one product. What made the iPhone the category-defining device was not the idea of a touchscreen phone, which had existed for over a decade, but execution: interface design, developer ecosystem, and integration that the earlier entrants had not put together."
        ),
      ]),
      ...chartImage(
        path.join(OUT, "charts", "003_pioneer_vs_second_mover.png"),
        { widthIn: 6, caption: "Launch or founding years for each pioneer and the second mover that overtook it. See Sources below." }
      ),
      h2("When Being Second Does Not Work"),
      p(
        "The advantage is not automatic. If the pioneer builds strong network effects, meaning the product gets more valuable as more people use it, or locks customers in through high switching costs, a second mover can arrive with a technically superior product and still lose, because customers have little incentive to switch. Patents and regulatory approvals can also block a second mover from copying the parts of the pioneer's approach that mattered most."
      ),
      p([
        run(
          "That same list, network effects, switching costs, patents, regulatory approvals, is close to what the Strategy Shares Monopoly ETF ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") screens for when it evaluates whether a company's market position is durable rather than temporary. The fund's process is not concerned with who entered a market first; it is concerned with whether a company's current position would actually survive a well-executed challenger, which is the same question this section is really asking about any pioneer facing a second mover. Readers interested in how a fund weighs that kind of durability can review "
        ),
        link("MPLY's investment approach", "https://strategysharesetfs.com/mply/"),
        run(" on the fund's official page."),
      ]),
      p(
        "The practical takeaway is that neither position, first or second, guarantees success. What tends to matter more is execution: whether a company can turn the lessons of an earlier entrant, or the ground that entrant already broke, into a genuinely better product, and whether the market's dynamics (network effects, switching costs, patents) leave room for a later arrival to catch up at all."
      ),
      h2("Sources"),
      ...bullets([
        "AltaVista launch and Google's rise, including 2001 search share: Cybercultural, \"Search Engines in 1998, Before Google Takes the Spotlight,\" and Wikipedia, \"AltaVista\"",
        "Facebook overtaking Myspace in 2008-2009: PCWorld, \"Facebook Overtakes MySpace in U.S.\"",
        "IBM Simon (1994) and the iPhone's June 2007 launch: AppleInsider, \"The story of the original iPhone, that nobody thought was possible,\" and SimpleTexting, \"Smartphone history\"",
      ]),
    ],
    hashtags: ["#SecondMoverAdvantage", "#BusinessStrategy", "#CompetitiveAdvantage", "#Innovation", "#MarketStrategy", "#Investing"],
  });

  // ------------------------------------------------------------------
  // Article 004 (brief No. 71) — Direct / Primary Subject
  // ------------------------------------------------------------------
  await buildArticle({
    outPath: path.join(OUT, "004_What_Is_MPLY_ETF.docx"),
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
      p("MPLY launched on May 15, 2025, giving it a track record of roughly a year as of late 2026. That is a meaningfully shorter operating history than most established equity ETFs, and it means the fund has not yet been tested through a full market cycle, including a sustained downturn."),
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
      h2("Sources"),
      ...bullets([
        "Strategy Shares Monopoly ETF official fund page: strategysharesetfs.com/mply",
        "stockanalysis.com/etf/mply (holdings breakdown and secondary data verification)",
      ]),
    ],
    hashtags: ["#MPLY", "#MPLYETF", "#ETFResearch", "#MonopolyInvesting", "#CompetitiveAdvantage", "#ActiveManagement", "#Investing"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
