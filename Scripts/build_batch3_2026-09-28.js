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
  // Article 012 — Strong thematic / Brief Mention (expanded)
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "012_What_Is_a_Regulatory_Moat.docx"),
    titleH1: "What Is a Regulatory Moat",
    bodyBlocks: [
      p(
        "A regulatory moat is a competitive advantage that exists because a government, not the market, has limited how many companies are allowed to compete. Where most moats are earned through better products, brands, or cost structures, a regulatory moat is granted, or at least permitted, by law, which makes it one of the more durable protections a business can have, and one of the least connected to how well the business is actually run."
      ),
      h2("How Regulatory Moats Form"),
      p(
        "The mechanism is usually one of three things: a required license that's difficult or capped in number, a compliance burden expensive enough that only large, well-capitalized players can absorb it, or a designation that becomes a de facto requirement for doing business even though it was never legally mandatory. Banking charters, utility franchises, and broadcast licenses are examples of the first. Pharmaceutical manufacturing and financial services compliance are examples of the second. The third is subtler and easy to overlook."
      ),
      h2("A Case Study in the Third Kind: Credit Rating Agencies"),
      p(
        "In 1975, the SEC created the \"nationally recognized statistical rating organization,\" or NRSRO, designation for a narrow, technical purpose: determining capital charges on bonds held by broker-dealers. The SEC staff at the time judged that Standard & Poor's, Moody's, and Fitch were the ratings agencies in national use, and designated them accordingly. That narrow designation has since become embedded across financial regulation, legislation, and private contracts as a de facto stamp of credibility. As of March 2024, there were 10 NRSROs in total, but S&P, Moody's, and Fitch, the three the SEC happened to designate first, still generated 91% of NRSRO revenue between them."
      ),
      ...chartImage(
        path.join(OUT, "charts", "012_nrsro_concentration.png"),
        { widthIn: 6, caption: "Nearly a century-old regulatory designation still concentrates credit rating revenue among three firms." }
      ),
      h2("Why This Kind of Moat Is Different"),
      p(
        "A product-based moat, brand, network effects, cost advantage, can in principle be challenged by a competitor with enough skill, capital, or patience. A regulatory moat generally can't be, not through competition anyway. A new credit rating agency can be more accurate, cheaper, or faster than the incumbents and still struggle to gain traction, because the incumbents' designation, not their accuracy, is what the market and regulators have built their processes around. That also makes regulatory moats a specific kind of fragile: they can be legislated away as easily as they were created. Congress passed the Credit Rating Agency Reform Act in 2006 specifically to try to foster more competition in this market, an explicit acknowledgment that the regulatory structure itself, not any company's product quality, was the barrier."
      ),
      h2("How MPLY's Screen Treats Regulatory Exclusivity"),
      p(
        "Regulatory exclusivity is named directly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, and the credit rating agency example above is close to a textbook illustration of what that criterion is looking for: durable market position that persists independent of ongoing product superiority. The fund's process also has to weigh the fragility this article describes, a regulatory moat can be a company's strongest protection right up until the regulation itself changes, which is a different risk profile than a brand or a technology barrier eroding gradually."
      ),
      p([
        run("Readers can check MPLY's current holdings and how the fund weighs this characteristic on its "),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Congress.gov, Congressional Research Service, \"Credit Rating Agencies: Background and Regulatory Issues\" (NRSRO history, 1975 designation, 2024 revenue concentration)", url: "https://www.congress.gov/crs-product/IF11916" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#RegulatoryMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#BarriersToEntry", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 014 — Moderate / Brief Mention
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "014_Economies_of_Scale_vs_Competitive_Advantage.docx"),
    titleH1: "Economies of Scale vs Competitive Advantage",
    bodyBlocks: [
      p(
        "Economies of scale and a competitive advantage get used almost interchangeably in casual investing commentary, big usually gets read as protected. The two ideas are related but not the same: economies of scale describe a cost structure, unit costs falling as volume rises. A competitive advantage describes whether that lower cost structure actually keeps a company ahead of rivals over time. A company can have real economies of scale and still have little to no durable advantage."
      ),
      h2("When Scale Becomes an Advantage: Amazon's Fulfillment Network"),
      p(
        "Amazon's logistics and fulfillment network is a useful example of scale genuinely converting into advantage. Decades of investment in warehouses, delivery infrastructure, and logistics software mean that each additional unit shipped costs less to fulfill than it would for a smaller competitor building the equivalent network from scratch today. That lower cost structure supports faster delivery promises and thinner margins on individual items, both of which are hard for a new entrant to match without a comparable, multi-year infrastructure investment. Here, scale reinforces a broader position: faster delivery attracts more customers, more customers justify more warehouses, and the cycle compounds."
      ),
      h2("When Scale Doesn't Become an Advantage: Commodity Production"),
      p(
        "Steel and aluminum production tell a different story. Producers in these industries can reach enormous scale, some of the largest industrial operations in the world, and still earn thin, cyclical margins with little pricing power. The reason is that steel and aluminum are commodities: one producer's output is largely interchangeable with another's, so scale lowers a producer's own costs without giving it the ability to charge more than a competitor selling an equivalent product. Scale here reduces cost, which matters for survival during downturns, but it doesn't create the kind of differentiated position that lets a company hold pricing power the way Amazon's fulfillment advantage supports its broader customer proposition."
      ),
      h2("What Separates the Two Cases"),
      p(
        "The difference isn't the size of the scale advantage; it's what the scale is attached to. Amazon's fulfillment scale is bundled with a differentiated customer experience, speed and selection that customers actually value and will pay for indirectly through loyalty and spend. Commodity producers' scale is attached to an undifferentiated product that customers buy on price alone, which means the cost savings from scale gets competed away in the price rather than captured as margin. Scale without differentiation tends to benefit the customer, not the company holding it."
      ),
      h2("The Practical Test"),
      p(
        "Before treating scale as a moat, the useful question is whether the scale supports something a customer would actually pay a premium for, faster service, a wider selection, a better experience, or whether the scale only lowers costs on a product customers would buy from whoever's cheapest. The first case can be a real, durable advantage. The second is a cost efficiency that competitors of similar size can often replicate, and that customers rarely reward with loyalty."
      ),
      h2("MPLY's Screening Approach and Scale"),
      p([
        run(
          "Scale on its own isn't named in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, which is consistent with the distinction above: the fund's process looks at industry concentration and durable market dominance, outcomes that scale can support but doesn't automatically produce. A scale advantage attached to genuine differentiation, the way Amazon's fulfillment network is, fits the fund's broader thesis far more naturally than scale in a commodity market where pricing power doesn't follow. MPLY's "
        ),
        link("official page", MPLY_URL),
        run(" lays out the fund's full investment approach for anyone testing a candidate against that distinction."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#EconomiesOfScale", "#CompetitiveAdvantage", "#EconomicMoat", "#MPLY", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 015 — Moderate / Brief Mention (Business Economics cluster)
  // Archetype: Checklist / Research Guide
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "015_Economies_of_Scope_vs_Economies_of_Scale.docx"),
    titleH1: "Economies of Scope vs Economies of Scale",
    bodyBlocks: [
      p(
        "Economies of scale and economies of scope both describe a company saving money as it grows, but they describe two different kinds of growth. Economies of scale come from producing more of the same thing. Economies of scope come from producing several different things that share the same underlying resources. Telling them apart matters because they point to different kinds of durability, and confusing the two can lead to overestimating how protected a diversified business actually is."
      ),
      h2("What to Check First: Is the Growth in Volume or in Variety?"),
      p(
        "Scale is about volume of a single product line, a factory running at higher utilization, a retailer with more stores selling the same catalog. Scope is about variety across related product lines that draw on the same fixed investment. Procter & Gamble is the standard example: its research labs, retail relationships, and distribution network serve dozens of household and personal care brands at once, so the fixed cost of maintaining those relationships and that R&D capability is spread across a wide product range rather than concentrated in one."
      ),
      h2("Indicators of a Genuine Scope Advantage"),
      ...bullets([
        "Shared infrastructure across product lines: the same factories, sales force, or distribution network serving multiple, related categories.",
        "Cross-selling that meaningfully lowers customer acquisition cost for newer product lines by leveraging existing retail or customer relationships.",
        "R&D or brand investments that generate spillover value across categories, rather than benefiting only the product they were made for.",
      ]),
      h2("Where the Two Concepts Can Be Confused"),
      p(
        "A company that simply owns many unrelated businesses isn't automatically capturing scope economies; the businesses have to actually share resources for the cost savings to be real. A conglomerate that owns a food company and an unrelated industrial parts manufacturer, with no shared distribution, brand, or expertise between them, isn't demonstrating economies of scope just because it's diversified. The test is whether the shared resource genuinely lowers the combined cost structure below what two separate, focused companies would spend, not whether the businesses happen to sit under one corporate parent."
      ),
      h2("Questions to Ask When Evaluating Either"),
      ...bullets([
        "For scale: does unit cost meaningfully decline as this specific product's volume grows, and has that decline actually shown up in margins?",
        "For scope: is there a genuine shared resource, R&D, distribution, brand, customer relationships, being spread across multiple product lines?",
        "For both: could a smaller, more focused competitor replicate the cost advantage without needing the same breadth, or does the breadth itself matter?",
      ]),
      h2("Why This Distinction Matters to MPLY-Style Research"),
      p(
        "Neither economies of scale nor economies of scope are named directly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, but both can feed into criteria that are, industry concentration and durable market dominance, when the cost advantage they create is genuinely hard for a competitor to replicate."
      ),
      p([
        run(
          "A diversified company benefiting from real economies of scope, shared distribution and brand investment across many related products, can be harder to displace than a single-product competitor with comparable scale, because a challenger would need to match not just one product's economics but the whole shared infrastructure behind it. See MPLY's "
        ),
        link("current holdings and investment approach", MPLY_URL),
        run(" to see how this plays out in practice."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#EconomiesOfScope", "#EconomiesOfScale", "#BusinessEconomics", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 016 — Moderate / Brief Mention
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "016_What_Is_a_Learning_Curve_Advantage.docx"),
    titleH1: "What Is a Learning Curve Advantage",
    bodyBlocks: [
      p(
        "A learning curve advantage exists when a company's costs fall not because it's producing more units this year than last year, but because it has produced more units cumulatively over its entire history. The distinction is subtle but important: it's a function of accumulated experience, not current output, which means a company that got an early start can hold a cost advantage over a competitor with identical current-year volume."
      ),
      h2("The Problem: Not All Cost Advantages Come From Current Scale"),
      p(
        "Standard economies-of-scale thinking asks how big a company is right now. Learning curve thinking asks how much practice a company has accumulated over time, refining a manufacturing process, training a workforce, and discovering efficiencies that only reveal themselves after building the product many times. Two companies can have identical factories and identical current output and still have very different costs, because one has been doing this for twenty years and the other for two."
      ),
      h2("The Mechanism: Wright's Law"),
      p(
        "The pattern was first documented by Theodore Wright, an aeronautical engineer, who studied aircraft manufacturing costs in the 1920s and 1930s. He found that every time cumulative aircraft production doubled, the labor time required to build the next plane fell by about 20%, a relationship now called Wright's Law or the experience curve. The same pattern has since shown up across other industries at varying rates: for more than four decades, solar panel prices fell by roughly 20% with each doubling of cumulative global production."
      ),
      ...chartImage(
        path.join(OUT, "charts", "016_learning_curve.png"),
        { widthIn: 6, caption: "The general shape of a learning curve: cost declines with cumulative experience, not with calendar time." }
      ),
      h2("Why This Creates a Moat, Not Just a Cost Saving"),
      p(
        "A pure economies-of-scale advantage can, in principle, be matched by any competitor willing to build an equally large operation today. A learning curve advantage is harder to close quickly, because it isn't just about size, it's about accumulated repetition, which takes time to build regardless of how much capital a new entrant is willing to spend. A well-funded competitor entering an industry with strong learning-curve dynamics still has to go through its own early, less-efficient production runs to catch up, and the incumbent keeps accumulating more experience, and a lower cost position, in the meantime."
      ),
      h2("Where the Advantage Weakens"),
      p(
        "Learning curve effects flatten over time; the 20% cost reduction from doubling production the first time is easier to achieve than the same percentage reduction after a hundred doublings, since most of the obvious efficiencies have already been captured. A genuinely disruptive new technology can also reset the curve entirely, making an incumbent's decades of accumulated process knowledge on an old method far less valuable once the industry shifts to a fundamentally different approach."
      ),
      h2("How This Connects to MPLY's Screening Approach"),
      p([
        run(
          "Learning effects aren't named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, but they're one of the mechanisms behind a durable cost advantage that can support pricing power and industry concentration over time, particularly in capital- and process-intensive industries where accumulated experience is genuinely hard for a new entrant to buy or copy quickly. MPLY's official page describes "
        ),
        link("the fund's full investment approach", MPLY_URL),
        run(" for readers who want the underlying detail."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Our World in Data, \"Learning curves: What does it mean for a technology to follow Wright's Law?\" (Theodore Wright's 1936 aircraft study, solar panel price decline)", url: "https://ourworldindata.org/learning-curve" },
        { label: "Wikipedia, \"Experience curve effect\"", url: "https://en.wikipedia.org/wiki/Experience_curve_effect" },
      ]),
    ],
    hashtags: ["#LearningCurve", "#ExperienceCurve", "#CompetitiveAdvantage", "#EconomicMoat", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 017 — Strong thematic / Brief Mention (expanded)
  // Archetype: Case Study / Examples
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "017_What_Is_a_Distribution_Moat.docx"),
    titleH1: "What Is a Distribution Moat",
    bodyBlocks: [
      p(
        "A distribution moat is a competitive advantage built on access to customers that a competitor can't easily replicate, shelf space, delivery infrastructure, sales relationships, or physical reach that took years or decades to build. A better product doesn't matter much if a competitor can't actually get it in front of the customers who would buy it, which is what makes distribution one of the more overlooked moat types relative to brand or technology."
      ),
      h2("Coca-Cola's Bottling and Distribution Network"),
      p(
        "Coca-Cola is usually discussed as a brand moat, and it is, but its distribution network is arguably just as important to its durability. The company built out a global system of bottling partners and direct-store-delivery relationships over more than a century, reaching remote retailers and small outlets that a new beverage brand, even one with a genuinely appealing product, would take years and enormous capital to match. A competitor can formulate a comparable drink relatively easily; matching Coca-Cola's shelf presence in tens of millions of retail locations worldwide is a fundamentally harder problem, and it's the harder problem that protects the business."
      ),
      h2("Why Distribution Is Hard to Replicate Quickly"),
      p(
        "Unlike a patent or a brand, which can in theory be built through enough marketing spend, a distribution network requires physical infrastructure, accumulated relationships with retailers and logistics partners, and time. A new entrant can't simply buy its way into decades of retailer trust and delivery route optimization; it has to build both from scratch, which means even a well-funded challenger with a superior product often has to accept years of limited reach while it builds out comparable access, time during which the incumbent keeps its existing customer relationships largely intact."
      ),
      h2("Where Distribution Moats Weaken"),
      p(
        "E-commerce has narrowed some distribution advantages that used to depend entirely on physical shelf space, a new brand can now reach customers directly online without needing traditional retail placement. But that shift hasn't eliminated distribution as a moat source so much as changed what it looks like: warehouse and delivery network density, search and marketplace placement, and logistics speed have become the new version of the same underlying advantage, still expensive and slow for a new entrant to replicate quickly."
      ),
      h2("Where MPLY's Screen Applies to Distribution"),
      p(
        "Distribution strength isn't named as its own separate line in the Strategy Shares Monopoly ETF's (MPLY) stated criteria, but it overlaps directly with two that are: industry concentration and control of the supply chain. A company with a distribution network competitors can't quickly replicate is, by definition, harder to dislodge from its market position, which is the durable dominance the fund's broader thesis is built around identifying."
      ),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" shows how the fund weighs this kind of advantage across its current holdings."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#DistributionMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#SupplyChain", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 018 — Strong thematic / Contextual Section
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "018_What_Is_an_Ecosystem_Moat.docx"),
    titleH1: "What Is an Ecosystem Moat",
    bodyBlocks: [
      p(
        "An ecosystem moat is a competitive advantage built from multiple connected products and services that work better together than any one of them works alone. The advantage doesn't come from any single product being unbeatable; it comes from the accumulated cost of leaving the whole system once a customer is using several of its pieces at once."
      ),
      h2("How an Ecosystem Moat Is Built"),
      p(
        "Apple's product lineup is the example most often used to explain the mechanism. A customer who owns an iPhone, uses iMessage to stay in touch with other Apple users, syncs photos and files through iCloud, and pairs an Apple Watch and AirPods to the same account isn't locked in by any single device. They're locked in by the accumulated convenience of everything working together, and by the friction of unwinding all of it at once to switch to a different platform. Losing iMessage's blue-bubble group threads, iCloud photo history, or cross-device handoff isn't a single deciding factor, but stacked together, they add up to a meaningfully higher switching cost than any one Apple product would create on its own."
      ),
      ...chartImage(
        path.join(OUT, "charts", "018_ecosystem_moat.png"),
        { widthIn: 6, caption: "Each additional connected layer around a core product raises the cost of leaving the whole system." }
      ),
      h2("Why This Is a Different Mechanism Than a Single Switching Cost"),
      p(
        "A single-product switching cost, enterprise software lock-in, for instance, is about one specific migration being expensive. An ecosystem moat compounds several smaller switching costs simultaneously: leaving isn't one hard decision, it's several moderately inconvenient decisions that all have to happen at once. That compounding effect is why ecosystem moats can hold even when a single competing product is objectively better than its Apple equivalent; the cost isn't losing to a better product, it's losing all the connected convenience built around the ecosystem as a whole."
      ),
      h2("Where Ecosystem Moats Are Vulnerable"),
      p(
        "The mechanism depends on customers actually adopting multiple connected pieces; a customer who owns only one device in the ecosystem gets none of the compounding benefit and faces the same switching decision as if the ecosystem didn't exist. Regulation is also a live risk specific to this moat type: interoperability requirements, like rules forcing cross-platform messaging compatibility, are explicitly designed to reduce the friction that makes ecosystem lock-in work, similar to how number portability weakened a switching cost tied to phone carriers."
      ),
      h2("How MPLY's Criteria Capture Ecosystem Effects"),
      p([
        run(
          "An ecosystem moat maps onto several of the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated screening criteria at once, network effects, since the ecosystem gets more valuable as a customer adopts more of it, vertical integration, since the pieces are typically built and controlled by the same company, and industry concentration, since a well-executed ecosystem tends to concentrate customer spending around one provider rather than splitting it across specialists. The fund's process treats this kind of compounding advantage as a stronger signal than any single switching cost in isolation, which is consistent with why ecosystem-style businesses often show up prominently in funds built around durable competitive positioning."
        ),
      ]),
      p([
        run("MPLY's current holdings and investment approach are published on its "),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "Is an ecosystem moat the same thing as a network effect?",
        "Related, but not identical. A network effect specifically means the product gets more valuable as more separate users join it. An ecosystem moat is about one customer's own accumulated switching costs across multiple connected products, which can exist even for a customer who never interacts with any other user of the ecosystem."
      ),
      ...faqItem(
        "Can a company with only one or two products have an ecosystem moat?",
        "Generally no, in the full sense described here. The mechanism depends on stacking several moderate switching costs across genuinely connected products; one or two products create ordinary switching costs, not the compounding effect that makes an ecosystem moat distinct."
      ),
      ...faqItem(
        "Does buying into an ecosystem guarantee a company has a durable advantage?",
        "No. The ecosystem still has to deliver enough genuine value that customers keep adopting more of it. A company can build a wide product lineup without the pieces actually reinforcing each other, in which case it has many separate products, not a compounding ecosystem moat."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#EcosystemMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#SwitchingCosts", "#MPLY", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 019 — Moderate / Brief Mention
  // Archetype: Investor Framework
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "019_What_Is_a_Data_Moat.docx"),
    titleH1: "What Is a Data Moat",
    bodyBlocks: [
      p(
        "A data moat is a competitive advantage built from proprietary data that improves a product faster than a competitor without equivalent data can match. The idea has become popular alongside the rise of machine learning, but the underlying logic predates it: a company that has watched more customer behavior than anyone else has more raw material to work with, and in some businesses, more raw material genuinely produces a better product."
      ),
      h2("What to Look For: Does More Data Actually Improve the Product?"),
      p(
        "Google's search engine is the cleanest example of the mechanism working as intended. Every query and the results users click on generates information about which pages actually answer which questions, information Google has accumulated at a scale competitors starting later simply don't have access to. That accumulated signal feeds back into ranking quality, which keeps search results useful, which keeps people using the product, which generates more query data. The loop is the advantage, not the raw volume of data sitting in storage."
      ),
      h2("Key Indicators of a Genuine Data Moat"),
      ...bullets([
        "A measurable feedback loop: does more data demonstrably improve the product's output, not just accumulate as an unused asset?",
        "Proprietary access: is the data something competitors could purchase or replicate, or is it uniquely generated by this company's own product usage?",
        "Compounding advantage: does the gap between the leader and a challenger widen over time as more data accumulates, or does it plateau once a \"good enough\" dataset is reached?",
      ]),
      h2("The Common Mistake: Assuming Any Data Is a Moat"),
      p(
        "Plenty of companies collect large amounts of customer data without it translating into any meaningful advantage, because the data either doesn't feed back into product quality, is available to competitors through third-party data brokers, or has diminishing returns past a certain volume. A retailer's purchase history data, for instance, can inform marketing decisions without giving it anything close to the compounding advantage a search engine gets from query-and-click feedback. The presence of data isn't the moat; the feedback loop between data and product improvement is."
      ),
      h2("How to Evaluate the Durability"),
      p(
        "The practical test is whether a well-funded new entrant, starting today with unlimited capital but zero historical data, could catch up within a reasonable timeframe by simply buying data or running the product long enough to generate their own. If yes, the data advantage is more of a head start than a moat. If the leader's data advantage keeps compounding regardless of a challenger's spending, because the feedback loop itself takes years of real usage to replicate, the advantage is closer to durable."
      ),
      h2("Where MPLY's Screen Treats Data-Driven Advantages"),
      p([
        run(
          "Proprietary data isn't named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, but a genuine data feedback loop is one of the more modern mechanisms behind industry concentration and network effects, two categories that are named. A company whose data advantage compounds the way Google's search-quality loop does fits the fund's broader thesis more naturally than one whose data sits unused. The fund's "
        ),
        link("official page", MPLY_URL),
        run(" details its investment approach for readers who want to check current holdings against this test."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#DataMoat", "#CompetitiveAdvantage", "#EconomicMoat", "#MachineLearning", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 020 — Strong thematic / Brief Mention (expanded)
  // Archetype: Timeline / Evolution
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "020_What_Is_an_Intellectual_Property_Moat.docx"),
    titleH1: "What Is an Intellectual Property Moat",
    bodyBlocks: [
      p(
        "An intellectual property moat is a competitive advantage protected by law: a patent, trademark, copyright, or trade secret that legally blocks competitors from copying a specific invention, brand, or process. Unlike most moat types, which have to be continually defended through execution, an IP moat is explicitly, formally exclusive for as long as the underlying protection lasts, which is also exactly what makes its expiration date the central risk to understand."
      ),
      h2("Origin: A Deliberate Trade-Off"),
      p(
        "Patent systems exist as a bargain: an inventor discloses how something works in exchange for a temporary legal monopoly on using it, typically twenty years from filing in most jurisdictions. The logic is that without that exclusivity period, companies would have less incentive to invest in expensive research, since a competitor could simply copy a successful invention immediately. The moat is intentional and time-limited by design, not an accident of market structure."
      ),
      h2("The Protected Period: Where the Moat Is Strongest"),
      p(
        "During a patent's active life, particularly in industries like pharmaceuticals, where a single drug can represent a decade of research and clinical trial investment, the legal exclusivity is close to absolute. Generic manufacturers cannot legally produce a chemically identical version, which lets the patent holder set prices well above what a competitive market with multiple producers would support. This period is when an IP moat most resembles other moat types in terms of financial impact, sustained pricing power protected by something other than customer preference or switching costs."
      ),
      h2("The Turning Point: The Patent Cliff"),
      p(
        "The exclusivity period ends on a specific, known date, and what happens next is dramatic and well documented across the pharmaceutical industry: once a drug's patent expires, generic competitors can enter with a chemically equivalent version at a fraction of the price, and the original manufacturer typically loses the large majority of that drug's sales within roughly a year, a pattern well known enough in the industry to have its own name, the \"patent cliff.\" Unlike most moats, which erode gradually as circumstances shift, an IP moat's expiration is knowable in advance, which makes it one of the more predictable risks in the category, not one of the more surprising ones."
      ),
      h2("Current State: Beyond Patents"),
      p(
        "Trade secrets offer a different, potentially longer-lasting version of the same protection, since they never legally expire, but they only work as long as the secret stays secret, and they offer no legal recourse if a competitor discovers the same process independently rather than through theft. Trademarks can, in principle, last indefinitely as long as they're actively used and defended, which is part of why brand protection and IP protection sometimes overlap in practice even though they're legally distinct categories."
      ),
      h2("Lessons for Evaluating an IP Moat"),
      p(
        "The practical research question isn't just whether a company holds valuable IP, it's when the protection expires and what the business looks like afterward. A company whose competitive position depends heavily on a small number of patents nearing expiration carries a different, more time-bound risk than one continuously generating new intellectual property faster than its older protections lapse."
      ),
      h2("Where MPLY's Screen Treats IP Protection"),
      p(
        "Protected intellectual property is named directly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, alongside high barriers to market entry, a closely related category. The fund's process has to weigh the same patent-cliff dynamic this article describes: a company's current IP protection is a snapshot, not a permanent characteristic, and its durability depends on the pipeline of new protection behind it, not just what's currently in force."
      ),
      p([
        run("The fund publishes its "),
        link("full methodology and current holdings", MPLY_URL),
        run(" for readers who want to check a specific patent situation against it."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "How long does a patent actually last?",
        "Typically around 20 years from the filing date in most jurisdictions, though the effective period of market exclusivity is usually shorter once time spent on development and regulatory approval, common in pharmaceuticals, is subtracted from that window."
      ),
      ...faqItem(
        "What happens to a company's revenue when a key patent expires?",
        "In pharmaceuticals specifically, a drug typically loses the large majority of its sales within about a year of losing patent protection, as generic competitors enter at much lower prices. This pattern is well documented enough in the industry to have its own name, the patent cliff."
      ),
      ...faqItem(
        "Is a trade secret a stronger moat than a patent?",
        "It can last longer, since trade secrets don't legally expire, but they carry a different risk: they offer no legal protection if a competitor discovers the same method independently, and the entire advantage disappears immediately if the secret leaks. A patent trades a fixed expiration date for stronger legal enforcement while it lasts."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#IntellectualProperty", "#PatentMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 021 — Moderate / Brief Mention
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "021_What_Is_a_Scale_Moat.docx"),
    titleH1: "What Is a Scale Moat",
    bodyBlocks: [
      p(
        "A scale moat is what happens when getting bigger doesn't just lower a company's costs, it makes the company harder to compete with in a way that keeps reinforcing itself. That's a narrower claim than \"this company has economies of scale,\" and the distinction matters: a genuine scale moat is self-reinforcing, not just cost-reducing."
      ),
      h2("The Mechanism: A Self-Reinforcing Loop"),
      p(
        "Amazon's own internal description of its business, widely known as the \"flywheel,\" illustrates the mechanism cleanly. Lower costs from greater scale support lower prices. Lower prices and wider selection attract more customers. More customers attract more third-party sellers, widening selection further and generating more data on what customers want. That growth supports further infrastructure investment, which lowers costs again. Each part of the loop feeds the next, which is what separates a scale moat from ordinary economies of scale: the advantage doesn't just sit still once achieved, it keeps compounding as long as the loop keeps turning."
      ),
      h2("Why This Differs From a Static Cost Advantage"),
      p(
        "A company with ordinary economies of scale has lower unit costs today because it produces more units today; if a competitor matches that volume, the advantage narrows. A scale moat built on a genuine flywheel is harder to close even at equal volume, because the compounding effects, data, selection, seller network, customer trust, take years of repeated cycles to build, not just capital deployed in one large investment. A well-funded competitor can build an equally large warehouse network faster than it can replicate years of accumulated flywheel momentum."
      ),
      h2("Where Scale Moats Break Down"),
      p(
        "The loop only compounds as long as each link actually holds. If lower costs don't translate into genuinely better prices or service, if growth outpaces the company's ability to maintain quality, or if a disruptive new distribution model bypasses the advantage entirely, a scale moat can stop compounding and start behaving like ordinary economies of scale, vulnerable to any competitor willing to match the current size."
      ),
      h2("How MPLY's Screen Relates to Scale Moats"),
      p([
        run(
          "Scale on its own isn't named in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, but a genuinely self-reinforcing scale advantage is one of the clearer real-world paths to industry concentration and durable market dominance, both of which are. The fund's process would need to distinguish a company still early in a compounding flywheel from one whose scale has plateaued into a simple, matchable cost advantage, the same distinction this article draws between a scale moat and ordinary economies of scale. That distinction is worth checking directly against MPLY's "
        ),
        link("current holdings", MPLY_URL),
        run(" on its official page."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#ScaleMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 022 — Strong thematic / Brief Mention (expanded)
  // Archetype: Myth vs. Reality
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "022_What_Is_a_Market_Share_Moat.docx"),
    titleH1: "What Is a Market Share Moat",
    bodyBlocks: [
      p(
        "The common belief is that dominant market share is itself a moat, the biggest player in a market should be the hardest to displace. The reality is that market share is an outcome, not a cause. It tells you a company has been winning, not why, and not whether that winning position is protected against the kind of shift that can erase a commanding lead within a few years."
      ),
      h2("The Myth: Leading Share Is Inherently Defensible"),
      p(
        "It's intuitive to assume the largest company in a market has the most resources, the best distribution, and the strongest customer relationships, and therefore the least to fear from a smaller challenger. Under that view, market share itself does the protecting."
      ),
      h2("The Reality: Nokia"),
      p(
        "In 2007, Nokia held 51% of the global mobile phone market, a commanding lead built over roughly a decade of manufacturing scale, brand recognition, and carrier relationships. By 2013, its smartphone market share had fallen below 3%. The company that had shipped 463 million phones in 2007 shipped 4.4 million in 2013. Nokia's dominant share in 2007 didn't protect it, because the market shifted underneath it: touchscreen smartphones and app ecosystems redefined what customers wanted, and Nokia's leadership in the old category, physical keypads, carrier-specific hardware deals, didn't transfer to the new one. Nokia sold its handset business to Microsoft in 2013."
      ),
      ...chartImage(
        path.join(OUT, "charts", "022_nokia_collapse.png"),
        { widthIn: 6, caption: "A dominant market position in one product category didn't transfer when the category itself changed." }
      ),
      h2("What Actually Determines Whether Share Is Defensible"),
      p(
        "The share itself isn't the moat; whatever is causing customers to keep choosing the market leader is. If that reason is a durable structural advantage, network effects, switching costs, a cost structure competitors can't match, high share reflects and reinforces a real moat. If the leading share exists mainly because the leader was first, or because the underlying product category hasn't yet been disrupted, the share can evaporate as fast as Nokia's did once a better alternative exists and customers have a reason to move."
      ),
      h2("How to Tell the Difference in Practice"),
      p(
        "The useful question isn't how large a company's market share is, it's whether that share has been tested by a genuinely capable challenger and held, the same kind of evidence that separates Visa and Mastercard's decades-long dominance in payments, repeatedly tested by well-funded fintech challengers and still standing, from Nokia's share, which looked equally commanding right up until it wasn't."
      ),
      h2("Where MPLY's Screen Applies This Lesson"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria explicitly favor durable competitive advantages and market dominance over a snapshot of current position, which is consistent with the Nokia lesson above: the fund's process has to ask whether a company's current market leadership is protected by something structural, or whether it's a lead in a category that could shift the way mobile phones did. "
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" shows how current holdings are evaluated against that distinction."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"The Decline and Fall of Nokia\" (2007 market share, 2013 smartphone share, Microsoft sale)", url: "https://en.wikipedia.org/wiki/The_Decline_and_Fall_of_Nokia" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#MarketShare", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing", "#Fundamentals"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
