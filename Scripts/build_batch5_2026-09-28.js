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
  // Article 034 — Strong thematic / Contextual Section
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "034_How_Brand_Strength_Creates_Pricing_Power.docx"),
    titleH1: "How Brand Strength Creates Pricing Power",
    bodyBlocks: [
      p(
        "Brand and pricing power get connected constantly in investing commentary, but the actual mechanism linking them is more specific than \"customers like the brand, so they'll pay more.\" What a strong brand does economically is change how customers respond to price itself, sometimes reversing the normal relationship between price and demand entirely."
      ),
      h2("The Normal Relationship, and Where Brand Breaks It"),
      p(
        "For most goods, demand falls as price rises, the basic logic of a downward-sloping demand curve. Strong brands can weaken or even invert that relationship within a range: economists call goods where higher prices can coexist with, or even support, demand Veblen goods, named after economist Thorstein Veblen, who described conspicuous consumption in the late 19th century. Luxury goods are the clearest case. A handbag or watch priced meaningfully higher than a functionally similar alternative isn't losing customers to the price gap, for part of the target customer base, the price is part of what's being purchased, a costly, visible signal of status that a cheaper equivalent couldn't provide."
      ),
      h2("The Mechanism Isn't Limited to Luxury"),
      p(
        "Outside true luxury, brand strength still shifts pricing behavior through a less extreme version of the same logic: perceived risk reduction and habit. A well-established brand reduces a customer's uncertainty about quality, which lets it charge a premium over an unfamiliar alternative even when the actual product difference is modest. That premium isn't about status signaling, it's about customers paying to avoid the risk and research cost of trying something unproven."
      ),
      h2("Why the Distinction From Loyalty Matters"),
      p(
        "Brand loyalty, covered elsewhere, describes why customers keep coming back. Brand-driven pricing power is a narrower, more specific claim: that the brand itself lets a company charge more than an equivalent competitor, not just retain customers at a given price. A brand can support strong loyalty at a low price point without demonstrating pricing power at all, and distinguishing the two prevents overestimating what a well-liked brand is actually worth financially."
      ),
      h2("Evidence to Look For"),
      p(
        "The clearest test is a direct price comparison against a functionally similar competitor: does the branded product sustain a meaningfully higher price while maintaining or growing volume? A brand that can only compete at parity pricing, matching competitors despite stronger recognition, is demonstrating loyalty or awareness without the specific pricing-power component this mechanism describes."
      ),
      h2("How MPLY's Screen Applies This Mechanism"),
      p([
        run(
          "Brand dominance and pricing power are both named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, and the fund's process treats them as related but separately testable characteristics, consistent with the distinction this article draws. A brand that has demonstrated an actual price premium, not just recognition or loyalty, is a stronger fit for the fund's thesis than one whose strength hasn't been tested against a direct pricing comparison."
        ),
      ]),
      p([
        run("The fund's "),
        link("official page", MPLY_URL),
        run(" describes its current holdings and full investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#BrandStrength", "#PricingPower", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 035 — Strong thematic / Contextual Section
  // Archetype: Checklist / Research Guide
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "035_How_Customer_Lock_In_Creates_a_Moat.docx"),
    titleH1: "How Customer Lock-In Creates a Moat",
    bodyBlocks: [
      p(
        "Customer lock-in is an umbrella term that covers several genuinely different mechanisms, and they don't all protect a business equally well. Sorting lock-in into its actual types is more useful than treating it as one undifferentiated concept, because the type determines both how durable the lock-in is and what would actually break it."
      ),
      h2("Contractual Lock-In"),
      p(
        "The most straightforward type: a customer is bound by a multi-year agreement, an early-termination fee, or a minimum-commitment contract. This is real, but it's also the weakest form of lock-in over the long run, because it has a fixed expiration date. Once the contract term ends, the customer's decision resets entirely to whatever the underlying product and price actually offer relative to alternatives."
      ),
      h2("Technical Lock-In"),
      p(
        "Covered in more depth elsewhere as switching costs, technical lock-in comes from integration depth: a customer's systems, workflows, or data are built around a specific product in ways that make migration genuinely costly and risky, independent of any contract. This type tends to be more durable than contractual lock-in because it doesn't expire on a schedule, it persists as long as the technical dependency does."
      ),
      h2("Data Lock-In"),
      p(
        "A customer who has accumulated years of historical data, records, files, project history, inside a specific product faces a distinct cost: not just relearning a new tool, but potentially losing or having to migrate that accumulated history. This is especially strong when the data format is proprietary or when exporting loses fidelity, structure, or metadata that doesn't transfer cleanly to a competitor's system."
      ),
      h2("Psychological and Habit Lock-In"),
      p(
        "The weakest and most easily broken type: a customer stays mainly out of familiarity or inertia, not because switching carries a real technical or financial cost. This is the same mechanism discussed in the recurring-revenue and retention context elsewhere, it can look identical to stronger lock-in on a retention chart while actually being far more fragile once a competitor makes switching easy or a customer has a specific reason to reassess."
      ),
      h2("Why Sorting Lock-In Into Types Matters"),
      ...bullets([
        "Contractual lock-in tells you when the real test comes: at contract renewal, not before.",
        "Technical and data lock-in tell you the advantage is structural and won't simply expire, but also that it could weaken if industry standards make migration easier over time.",
        "Habit lock-in tells you the retention number is less trustworthy than it looks, and deserves more scrutiny, not less, than the other types.",
      ]),
      ...chartImage(
        path.join(OUT, "charts", "026_roic_wacc_spread.png"),
        { widthIn: 5.5, caption: "A business protected by structural lock-in should show this kind of sustained ROIC-WACC spread, not just low churn. See No. 026 for the full framework." }
      ),
      h2("How MPLY's Screen Weighs Different Lock-In Types"),
      p([
        run(
          "Customer lock-in isn't named as a single category in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, but it's a common mechanism behind pricing power and industry concentration, both of which are. The fund's process would reasonably weigh technical and data lock-in more heavily than contractual or habit-based lock-in, since the first two are structural and the second two are more easily reversed."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" lists its current holdings and investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CustomerLockIn", "#SwitchingCosts", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 036 — Strong thematic / Contextual Section
  // Archetype: Case Study / Examples
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "036_How_Network_Effects_Create_Market_Dominance.docx"),
    titleH1: "How Network Effects Create Market Dominance",
    bodyBlocks: [
      p(
        "Network effects don't just protect an existing position, in the right conditions, they can flip an entire market from one leader to another with surprising speed once a competing product crosses a critical threshold of adoption. The videotape format war between VHS and Betamax is one of the clearest, best-documented examples of that tipping dynamic in action."
      ),
      h2("The Setup: A Genuine Head Start"),
      p(
        "Sony launched Betamax in Japan in May 1975, roughly a year before JVC brought VHS to market in 1976 and 1977. Betamax also had real technical advantages in picture quality. On paper, the pioneer with the better product should have won."
      ),
      h2("The Mechanism That Flipped It"),
      p(
        "JVC licensed the VHS format openly to other manufacturers, while Sony required licensing fees and kept tighter control over Betamax production. That single decision mattered enormously once network effects entered the picture: more manufacturers building VHS players meant more players in stores, which meant more content available on VHS as the video rental industry took off, which made VHS more attractive to the next buyer, who then had access to a larger rental library, reinforcing the cycle further."
      ),
      ...chartImage(
        path.join(OUT, "charts", "036_vhs_betamax.png"),
        { widthIn: 6, caption: "A one-year head start and better picture quality weren't enough once VHS's open licensing tipped the network effect." }
      ),
      h2("How Fast the Tip Happened"),
      p(
        "By 1980, VHS already held roughly 60% of the North American market. By 1981, Betamax's share of US VCR sales had fallen to around 25%. By 1987, VHS commanded roughly 90% of the US market, and Betamax was effectively finished as a consumer format. The entire reversal, from Betamax's early lead to VHS's near-total dominance, played out over about a decade, most of the damage done within the first five years."
      ),
      h2("Why This Case Generalizes"),
      p(
        "The specific mechanism, open licensing driving hardware availability, which drove content availability, which drove consumer adoption, is a version of a pattern that recurs whenever a market has genuine network effects: the format, platform, or standard that reaches critical mass first in terms of ecosystem breadth, not necessarily product quality or launch date, tends to win the whole market rather than splitting it, because each additional adopter makes the leading option more attractive relative to the alternative, not just proportionally more popular."
      ),
      h2("How MPLY's Screen Applies This Lesson"),
      p([
        run(
          "Network effects and industry concentration are both named in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, and the VHS-Betamax case is a useful historical illustration of how quickly those two characteristics can combine: a market that looks competitive can tip toward near-total concentration once a network effect passes its critical threshold, which is part of why the fund's process treats network effects as a potentially rapid path to durable market dominance, not just a slow-building advantage."
        ),
      ]),
      p([
        run("MPLY's current holdings and investment approach are on its "),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Videotape format war\" (launch dates, licensing strategy, market share data)", url: "https://en.wikipedia.org/wiki/Videotape_format_war" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#NetworkEffects", "#MarketDominance", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 037 — Strong thematic / Contextual Section
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "037_How_Barriers_to_Entry_Protect_Incumbent_Companies.docx"),
    titleH1: "How Barriers to Entry Protect Incumbent Companies",
    bodyBlocks: [
      p(
        "Barriers to entry are usually described as passive, structural features of a market: high capital requirements, regulation, scale. But incumbents don't just benefit from these barriers passively; in markets with genuinely scarce, physically limited resources, the incumbent's existing claim on that resource actively locks out new competition in a way that keeps reinforcing itself."
      ),
      h2("The Clearest Example: Airport Slots"),
      p(
        "Heathrow Airport, one of the world's busiest, operates at roughly 99% of its physical runway capacity. There's essentially no room left to add new flights without an airline giving up existing slots, the specific, scheduled landing and takeoff rights airlines need to operate there. British Airways alone holds roughly 51% of Heathrow's total slot capacity, a position built up over decades that a new airline cannot simply out-compete its way into, no matter how good its service or how low its fares, because the physical capacity to operate more flights at that airport doesn't exist to be won."
      ),
      ...chartImage(
        path.join(OUT, "charts", "037_heathrow_slots.png"),
        { widthIn: 5.5, caption: "When the underlying resource is physically capped, incumbent share becomes a barrier in itself, not just a byproduct of one." }
      ),
      h2("Why This Kind of Barrier Compounds"),
      p(
        "Regulatory reviews of the EU's slot allocation system found that under one percent of slots at major congested airports were being redistributed to new entrants each year, meaning the incumbent's position from a decade ago is still close to its position today. That's a meaningfully different, more durable kind of protection than a barrier built on temporary capital advantage: an incumbent doesn't need to keep outspending challengers to defend a scarce-resource position, it just needs to keep holding what it already has, since the resource itself isn't being created fast enough for a challenger to compete for a meaningful share of it."
      ),
      h2("Where This Type of Barrier Generalizes"),
      p(
        "The same logic applies wherever a business depends on a genuinely scarce, non-reproducible resource, broadcast spectrum, certain mineral rights, prime retail real estate in a supply-constrained city, or a limited number of gaming or banking licenses in a jurisdiction. In each case, the barrier isn't really about what it costs to compete, it's that there's a hard physical or regulatory ceiling on how much of the resource exists at all, and the incumbent already holds a share of a fixed pie a new entrant can only get by taking it directly from someone who already has it."
      ),
      h2("The Limit of This Protection"),
      p(
        "Scarce-resource barriers protect against direct competition within the same resource, but not against a shift that makes the resource itself less relevant. A dominant position in airport slots doesn't protect an airline if travel demand shifts to a different hub, or if a fundamentally different mode of transportation reduces the value of any given slot. The barrier is close to absolute within its category and largely irrelevant outside it."
      ),
      h2("How MPLY's Criteria Reflect This Kind of Barrier"),
      p([
        run(
          "High barriers to market entry are named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, and scarce, physically or legally capped resources represent one of the more durable versions of that characteristic the fund's process can identify, closer to an absolute protection than a barrier built purely on capital or execution advantage."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" describes its full investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "IBA.aero, \"What is an airport slot, and how much are they worth?\"", url: "https://www.iba.aero/resources/articles/what-is-an-airport-slot-and-how-much-are-they-worth/" },
        { label: "UK House of Commons Library, \"Airport slots: A short explainer\"", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-11460/" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#BarriersToEntry", "#EconomicMoat", "#CompetitiveAdvantage", "#MarketStructure", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 038 — Strong thematic / Contextual Section
  // Archetype: Explainer + FAQ
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "038_What_Is_a_High_Quality_Business.docx"),
    titleH1: "What Is a High Quality Business",
    bodyBlocks: [
      p(
        "A high quality business, in the investing sense, is one whose economics, not just its current profitability, are built to persist. Quality is a narrower, more testable claim than \"good company\": it's specifically about the combination of profitability, capital efficiency, and balance sheet strength that lets a business keep compounding value over time without needing constantly favorable conditions to do it."
      ),
      h2("The Three Pillars"),
      p(
        "Profitability: consistently strong margins relative to the industry, not just a single strong year. Capital efficiency: high returns on the capital actually invested in the business, measured through return on invested capital, rather than raw profit dollars that could simply reflect a large asset base. Balance sheet strength: manageable debt levels and enough cash generation that the business isn't dependent on favorable credit markets or external financing to keep operating and reinvesting."
      ),
      h2("Why All Three Matter Together"),
      p(
        "A business can score well on one pillar and poorly on the others. A highly leveraged company can show strong returns on equity while carrying real balance sheet risk. A high-margin business with poor capital efficiency might be reinvesting heavily in low-return growth. A company can be reliably profitable this way, this quarter, while a weak balance sheet leaves it exposed to any disruption in financing. Quality, in the fuller sense, requires the combination holding up together, not just one metric looking impressive in isolation."
      ),
      h2("How Quality Relates to a Moat"),
      p(
        "A durable competitive advantage is usually the underlying reason a business can sustain quality economics over time, rather than seeing margins and returns compete away as rivals catch up. Quality is more the financial signature; a moat is more the structural explanation for why that signature persists. The two concepts overlap heavily in practice: identifying a business's moat is one of the more reliable ways to predict whether its current quality metrics will hold up."
      ),
      h2("Where the Concept Gets Misapplied"),
      p(
        "High quality gets conflated with \"popular\" or \"well known\" often enough that it's worth separating explicitly. A widely recognized company can have mediocre capital efficiency; a little-known company in an unglamorous industry can score strongly across all three pillars. The three-pillar test is meant to replace impression-based judgments with something closer to a checklist, not to formalize whatever a company's public reputation already suggests."
      ),
      h2("How MPLY's Screening Approach Relates to Business Quality"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, monopolistic or oligopolistic economic rents specifically, describe a version of sustained quality economics: returns durable enough to persist because competition is structurally limited, not because a business happens to be having a strong period. A company that scores well across the three pillars above, and can explain why through one of the fund's named characteristics, is a stronger fit for its thesis than one whose quality metrics lack an identifiable structural cause."
        ),
      ]),
      p([
        run("The fund's "),
        link("official page", MPLY_URL),
        run(" lists its current holdings and full investment approach."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "Is a high quality business always a good investment?",
        "No. Quality describes the underlying business economics, not the price of the stock. A genuinely high quality business bought at too high a valuation can still be a poor investment."
      ),
      ...faqItem(
        "Can a business become high quality over time?",
        "Yes, though it's less common than quality eroding. A business can improve its quality profile by paying down debt, improving capital allocation discipline, or building a genuine competitive advantage it previously lacked."
      ),
      ...faqItem(
        "Does a high quality business need to be large?",
        "No. Company size and business quality are different dimensions. A small company with strong margins, high ROIC, and a clean balance sheet can score well on all three pillars; a large company with weak capital efficiency or heavy debt may not."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#QualityInvesting", "#BusinessQuality", "#ROIC", "#EconomicMoat", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 039 — Strong thematic / Contextual Section
  // Archetype: Timeline / Evolution
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "039_What_Is_Quality_Investing.docx"),
    titleH1: "What Is Quality Investing",
    bodyBlocks: [
      p(
        "Quality investing is an approach built around buying strong, durable businesses rather than simply buying whatever is statistically cheapest. It sounds obvious in hindsight, but it represents a real shift from investing's earlier dominant philosophy, and understanding that shift, and the decades it took to become academically validated, explains why quality investing looks the way it does today."
      ),
      h2("The Starting Point: Deep Value"),
      p(
        "Benjamin Graham's 1949 book \"The Intelligent Investor\" established what became known as deep-value or \"cigar-butt\" investing: buying statistically cheap stocks, companies trading below the liquidation value of their assets, largely regardless of the underlying business's long-term quality. The metaphor was a discarded cigar butt with one puff left in it, worthless as a business, but still worth picking up for that last bit of value."
      ),
      ...chartImage(
        path.join(OUT, "charts", "039_quality_investing_timeline.png"),
        { widthIn: 6, caption: "The practitioner shift toward quality preceded formal academic validation by more than fifty years." }
      ),
      h2("The Shift: Buffett and Munger"),
      p(
        "Warren Buffett met Charlie Munger in 1959, and Munger's influence gradually pushed Buffett away from Graham's deep-value approach toward buying durable, well-run businesses even at less statistically extreme prices. Buffett later credited Munger directly with the shift, summarizing the resulting philosophy as preferring \"a wonderful business at a fair price\" over \"a fair business at a wonderful price.\" That reframing, emphasizing the business's durability over the statistical cheapness of the stock, is the practical origin of what's now called quality investing."
      ),
      h2("The Academic Validation: Decades Later"),
      p(
        "It took until 2013 for the approach to receive rigorous academic validation. Robert Novy-Marx's research on the profitability factor showed that gross profitability, a measurable proxy for business quality, predicted stock returns with roughly the same power as the traditional value factor, and that highly profitable companies significantly outperformed unprofitable ones even after accounting for valuation. The academic finding arrived more than fifty years after Buffett and Munger's practitioner shift, a reminder that investing approaches can work in practice well before there's formal research explaining why."
      ),
      h2("What Quality Investing Looks For Today"),
      p(
        "In practice, quality investing screens for strong and stable profitability, high returns on invested capital, manageable debt, and often a durable competitive advantage that explains why those characteristics are likely to persist rather than mean-revert. It doesn't ignore price entirely, buying an excellent business at an absurd valuation is still a poor decision, but it treats business durability as the primary filter, with valuation as a secondary discipline layered on top."
      ),
      h2("Where MPLY Fits Within This Tradition"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated approach sits within this same quality tradition, screening for durable competitive characteristics, brand dominance, barriers to entry, network effects, and the rest, rather than simply for statistical cheapness. Its focus on monopolistic and oligopolistic economic rents is a more specific version of the durable-profitability thesis both Munger's practitioner intuition and Novy-Marx's later research pointed toward."
        ),
      ]),
      p([
        run("The fund's current holdings and investment approach are on its "),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Acquirer's Multiple, \"Value Investing Reimagined: How Buffett Moved Beyond Cigar Butt Stocks\" (Munger's influence, 1959 meeting)", url: "https://acquirersmultiple.com/2025/02/value-investing-reimagined-how-buffett-moved-beyond-cigar-butt-stocks/" },
        { label: "Top1000Funds, \"Quality factor explained by profitability: Robert Novy-Marx\"", url: "https://www.top1000funds.com/2015/06/quality-factor-explained-by-profitability-robert-novy-marx/" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#QualityInvesting", "#WarrenBuffett", "#ValueInvesting", "#EconomicMoat", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 040 — Moderate / Brief Mention
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "040_What_Is_Return_on_Invested_Capital.docx"),
    titleH1: "What Is Return on Invested Capital",
    bodyBlocks: [
      p(
        "Return on invested capital, ROIC, measures how efficiently a company turns the capital invested in it, both debt and equity, into profit. It answers a specific question: for every dollar tied up in this business, how much operating profit does the business generate? That's a different, and often more useful, question than simply asking how large a company's profits are."
      ),
      h2("The Formula"),
      p(
        "ROIC is generally calculated as net operating profit after tax (NOPAT) divided by invested capital, the sum of a company's debt and equity capital, net of excess cash not needed to run the business. A company with $2 billion in invested capital that generates $300 million in NOPAT has an ROIC of 15%. A larger company with $10 billion in invested capital generating the same $300 million has an ROIC of just 3%, despite identical absolute profit, a meaningfully worse use of the capital actually deployed."
      ),
      h2("Why Invested Capital Matters More Than Total Assets"),
      p(
        "ROIC deliberately excludes non-operating assets and excess cash that isn't actually being used to generate the company's core profits, which is what separates it from simpler measures like return on assets. A company sitting on a large cash pile isn't necessarily using that cash efficiently, including it in the denominator would understate how well the company's actual operating capital is performing."
      ),
      h2("What Counts as a Strong ROIC"),
      p(
        "There's no single universal threshold, since capital intensity varies enormously by industry, but the more informative comparison is ROIC against the company's cost of capital, its weighted average cost of capital, or WACC. A company earning 15% ROIC against an 8% WACC is creating real economic value with every dollar of capital it deploys. A company earning 9% ROIC against the same 8% WACC is barely covering its cost of capital and creating very little value despite technically being profitable."
      ),
      h2("The Limitation"),
      p(
        "A high ROIC in a single year, or even several years, doesn't by itself prove a durable advantage; it could reflect a temporary favorable cycle, an unusually good product launch, or an industry-wide tailwind that will fade. ROIC is a measurement of current economic performance, not a guarantee about the future, which is why it's typically paired with an analysis of why the return is high, not treated as sufficient evidence on its own."
      ),
      h2("How MPLY's Screen Relates to ROIC"),
      p([
        run(
          "ROIC isn't named directly as a criterion in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated approach, consistent with the limitation above: a high ROIC alone doesn't demonstrate the kind of durable, structurally protected position the fund's process is built to identify. The fund's named characteristics, brand dominance, barriers to entry, and the rest, describe the reasons a high ROIC might actually persist, which is the more useful question than the ROIC figure by itself."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" describes its full investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#ROIC", "#QualityInvesting", "#CapitalEfficiency", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 041 — Moderate / Brief Mention
  // Archetype: Investor Framework
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "041_Why_High_ROIC_Matters_for_Investors.docx"),
    titleH1: "Why High ROIC Matters for Investors",
    bodyBlocks: [
      p(
        "Knowing what ROIC measures is one question; knowing why it should actually change how an investor evaluates a company is a separate, more practical one. The short version: ROIC tells you what happens to every additional dollar a company reinvests, which compounds into a very different long-term outcome depending on whether that number is high or low."
      ),
      h2("What to Look For: The Reinvestment Multiplier"),
      p(
        "A company earning 25% ROIC that reinvests its earnings back into the business at that same rate compounds shareholder value far faster than a company earning 8% ROIC reinvesting at that lower rate, even if both companies grow revenue at similar speeds. High-ROIC reinvestment is doing more with the same dollar; low-ROIC reinvestment is doing less, which is why two companies with similar growth headlines can produce very different long-term shareholder outcomes depending entirely on the return their reinvested capital actually earns."
      ),
      h2("Key Indicators to Check"),
      ...bullets([
        "Consistency of ROIC across at least one full economic cycle, not just recent strong years.",
        "How much of earnings the company is actually reinvesting, versus returning to shareholders, since a high ROIC only compounds value if capital keeps getting redeployed at that rate.",
        "Whether ROIC is trending up, flat, or declining as the company scales, since some businesses see returns compress as they grow into a larger, more competitive footprint.",
      ]),
      h2("How to Evaluate Whether High ROIC Will Persist"),
      p(
        "The reinvestment math only matters if the high return is durable. A company that can identify a specific structural reason for its ROIC, a moat source that limits competition from bidding down its returns, is a better candidate for sustained compounding than one whose high ROIC has no clear explanation beyond a currently strong market."
      ),
      h2("The Common Mistake"),
      p(
        "Focusing on revenue growth rates while ignoring the ROIC those growth dollars are actually earning is one of the more common analytical shortcuts. Fast growth funded by capital earning a low or negative return can destroy shareholder value even while headline revenue numbers look impressive, which is why growth and ROIC need to be evaluated together, not as separate, independently positive signals."
      ),
      h2("Where MPLY's Approach Reflects This Reasoning"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated focus on monopolistic or oligopolistic economic rents is directly related to sustained high ROIC: rents, in the economic sense, describe returns above what a normal competitive market would allow, the same underlying condition that produces a durable, high ROIC rather than a temporary one. The fund's process is, in effect, screening for the structural reasons a high ROIC might actually hold up."
        ),
      ]),
      p([
        run("MPLY's "),
        link("official page", MPLY_URL),
        run(" shows its current holdings and full investment approach."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#ROIC", "#QualityInvesting", "#CompoundingReturns", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 042 — Moderate / Brief Mention
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "042_What_Is_Free_Cash_Flow_and_Why_Does_It_Matter.docx"),
    titleH1: "What Is Free Cash Flow and Why Does It Matter",
    bodyBlocks: [
      p(
        "Free cash flow is the actual cash a business generates after covering the capital expenditures needed to maintain and grow its operations, the money genuinely available to pay down debt, return to shareholders, or reinvest at management's discretion. It's cash-based rather than accounting-based, which is precisely why it often tells a different, and arguably more honest, story than reported earnings."
      ),
      h2("The Formula"),
      p(
        "Free cash flow is typically calculated as operating cash flow minus capital expenditures. Operating cash flow starts from net income and adjusts for non-cash items, like depreciation and amortization, and changes in working capital, the cash tied up in or freed from inventory, receivables, and payables. Capital expenditures are then subtracted because that cash is required just to sustain and grow the business, not genuinely free for other uses."
      ),
      h2("Why Cash Differs From Reported Earnings"),
      p(
        "Net income includes non-cash charges like depreciation, and it can be affected by accounting choices, revenue recognition timing, and estimates that don't correspond to actual cash changing hands in a given period. A company can report solid net income while consuming cash if its receivables are growing faster than its earnings, or while capital expenditures are quietly consuming most of its operating cash flow. Free cash flow strips out those accounting effects and measures what actually happened to the company's cash position."
      ),
      h2("What a Growing Free Cash Flow Trend Signals"),
      p(
        "Consistent, growing free cash flow relative to revenue suggests a business that's becoming more efficient at converting sales into cash it can actually deploy, whether that's paying dividends, buying back stock, paying down debt, or funding further growth without needing external financing. It's also a harder number to manipulate through accounting choices than reported earnings, which is part of why it gets used as a cross-check against net income rather than a replacement for it."
      ),
      h2("The Limitation"),
      p(
        "Free cash flow can be volatile in businesses with lumpy capital expenditure cycles, a company investing heavily in a new factory or major infrastructure project can show weak free cash flow in the investment years and strong free cash flow once that spending tapers off, even though nothing about the underlying business quality changed. Looking at free cash flow trends over several years, rather than a single period, avoids mistaking a temporary investment cycle for a structural problem."
      ),
      h2("How MPLY's Screen Relates to Cash Generation"),
      p([
        run(
          "Free cash flow isn't named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, but strong, durable cash generation is generally a downstream signal of the kind of pricing power and industry concentration the fund's process does name explicitly. A company with real structural advantages should show that strength in its cash flow statement, not just its income statement."
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
    hashtags: ["#FreeCashFlow", "#QualityInvesting", "#CashFlow", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 043 — Indirect / None
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "043_Free_Cash_Flow_vs_Net_Income.docx"),
    titleH1: "Free Cash Flow vs Net Income",
    bodyBlocks: [
      p(
        "Net income and free cash flow can tell noticeably different stories about the same company in the same period, and the gap between them is usually where the more useful information lives. Both are legitimate measures; they're just answering different questions."
      ),
      h2("What Net Income Measures"),
      p(
        "Net income follows accrual accounting: revenue is recognized when it's earned, not necessarily when cash is received, and expenses are matched to the period they relate to, not necessarily when cash is paid out. It includes non-cash charges like depreciation and amortization, and it can be shaped by accounting estimates and choices that are legitimate but don't always track cash movements directly."
      ),
      h2("What Free Cash Flow Measures"),
      p(
        "Free cash flow starts from actual cash generated by operations and subtracts the capital expenditures needed to sustain the business, arriving at a cash-based figure less exposed to accounting judgment. It answers a narrower, more concrete question: how much cash did this business actually generate and have available, after the reinvestment required just to keep running?"
      ),
      ...chartImage(
        path.join(OUT, "charts", "043_fcf_waterfall.png"),
        { widthIn: 6, caption: "The bridge from net income to free cash flow, adding back non-cash charges and subtracting the capital actually reinvested." }
      ),
      h2("Where the Two Diverge, and What It Signals"),
      p(
        "When free cash flow runs persistently below net income, it's often because capital expenditures or working capital needs are consuming more cash than the non-cash addbacks like depreciation provide, worth investigating rather than assuming it's simply a growth phase. When free cash flow runs persistently above net income, it often reflects a business with low capital intensity relative to its earnings, generating more actual cash than its accounting profit alone would suggest, generally viewed as a favorable characteristic."
      ),
      h2("Why Neither Number Alone Is Sufficient"),
      p(
        "Net income smooths out lumpy cash events through accrual accounting, which is useful for comparing profitability across periods, but it can mask real cash problems, or overstate them, in ways free cash flow reveals. Free cash flow is more resistant to accounting manipulation but can be genuinely volatile due to timing of capital projects or working capital swings that don't reflect the underlying business changing at all. Looking at both together, and understanding why they diverge in a specific period, gives a more complete picture than either number in isolation."
      ),
      h2("A Brief Note on Where This Connects to MPLY"),
      p(
        "This distinction is primarily an accounting and analysis question rather than a competitive-advantage one, and the Strategy Shares Monopoly ETF's stated screening criteria don't address it directly. To the extent it matters at all here, understanding the net income-to-cash-flow bridge is a useful general research skill for evaluating any company, including ones being assessed against MPLY's criteria, but it isn't itself one of the fund's named characteristics."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#FreeCashFlow", "#NetIncome", "#Accounting", "#QualityInvesting", "#Investing"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
