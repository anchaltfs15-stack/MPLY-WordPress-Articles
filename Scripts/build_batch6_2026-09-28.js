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
  // Article 044 — Indirect / None
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "044_What_Is_Earnings_Quality.docx"),
    titleH1: "What Is Earnings Quality",
    bodyBlocks: [
      p(
        "Earnings quality asks a question net income alone doesn't answer: how much of this profit is backed by real, collected cash, and how much depends on accounting estimates that could still reverse. Two companies can report identical net income and have very different earnings quality underneath it."
      ),
      h2("The Core Signal: Accruals"),
      p(
        "Accrual accounting recognizes revenue when it's earned and expenses when they're incurred, not necessarily when cash moves. Accruals are the gap between reported earnings and actual operating cash flow. A company with earnings consistently close to its operating cash flow has high-quality, cash-backed earnings. A company where reported earnings run well ahead of operating cash flow, quarter after quarter, is relying more heavily on accounting estimates and non-cash items, which is worth investigating rather than assuming away."
      ),
      h2("Where Weak Earnings Quality Shows Up"),
      ...bullets([
        "Revenue recognized well before cash is collected, growing receivables faster than revenue itself.",
        "Aggressive or changing estimates for bad debt, warranty reserves, or returns that flatter current-period earnings.",
        "One-time gains, asset sales, or non-operating items propping up otherwise weak operating results.",
        "Frequent restatements or changes in accounting policy that coincide with earnings just meeting analyst targets.",
      ]),
      h2("Why This Matters More Than It Sounds"),
      p(
        "Low earnings quality doesn't necessarily mean fraud, it often just means the reported number is more sensitive to management judgment and less repeatable than it looks. That matters for anyone using current earnings to estimate what a business is worth: a valuation built on earnings that won't recur, or that reverse once the underlying accruals unwind, is a valuation built on a number that isn't going to hold up."
      ),
      h2("The Practical Check"),
      p(
        "Comparing several years of net income against operating cash flow over the same period is the simplest version of this analysis. Persistent, unexplained gaps deserve a closer look at what's actually driving the difference before taking a reported earnings number at face value."
      ),
      h2("A Brief Note on MPLY"),
      p(
        "Earnings quality is a general fundamental-research tool rather than a competitive-advantage signal, and it isn't addressed in the Strategy Shares Monopoly ETF's stated screening criteria. It's a useful check on any company's numbers, including ones evaluated against MPLY's criteria, but it isn't itself one of those criteria."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#EarningsQuality", "#QualityInvesting", "#Accounting", "#FundamentalAnalysis", "#Investing"],
  });

  // ==================================================================
  // Article 045 — Indirect / None
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "045_What_Is_a_Cash_Conversion_Cycle.docx"),
    titleH1: "What Is a Cash Conversion Cycle",
    bodyBlocks: [
      p(
        "The cash conversion cycle measures how many days pass between a company spending cash on inventory and collecting cash from the sale of that inventory. A shorter cycle means a business gets its cash back faster, which reduces how much external financing it needs to fund day-to-day operations."
      ),
      h2("The Formula"),
      p(
        "Cash conversion cycle equals days inventory outstanding, plus days sales outstanding, minus days payable outstanding. Days inventory outstanding measures how long inventory sits before it's sold. Days sales outstanding measures how long it takes to collect cash after a sale. Days payable outstanding measures how long the company takes to pay its own suppliers, which works in the opposite direction, since a longer payment period keeps cash in the business longer."
      ),
      h2("What a Negative Cycle Means"),
      p(
        "Some businesses achieve a negative cash conversion cycle: they collect cash from customers before they have to pay suppliers, effectively getting funded by their own operating cycle rather than needing external capital. This is common in businesses with fast inventory turnover and favorable supplier payment terms, and it's a genuinely favorable working-capital position, since growth doesn't require proportional new financing the way it does for a business with a long, cash-consuming cycle."
      ),
      h2("Why This Matters Beyond the Number Itself"),
      p(
        "A shortening cash conversion cycle over time can signal improving operational efficiency, better inventory management, faster collections, or stronger supplier leverage. A lengthening cycle can signal the opposite, inventory building up, customers taking longer to pay, or weakening leverage over suppliers, sometimes ahead of a broader earnings problem becoming visible in the income statement."
      ),
      h2("The Limitation"),
      p(
        "The cycle varies enormously by industry and business model, a grocery retailer and an industrial equipment manufacturer will have structurally different cycles for reasons that have nothing to do with which is better run. Comparisons are most useful within the same industry, or for the same company across time, rather than across unrelated sectors."
      ),
      h2("A Brief Note on MPLY"),
      p(
        "Working capital efficiency is a useful operating-quality metric, but it isn't named in the Strategy Shares Monopoly ETF's stated screening criteria and doesn't by itself indicate a durable competitive advantage. It's a research tool that sits alongside, not inside, MPLY's stated approach."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CashConversionCycle", "#WorkingCapital", "#BusinessEconomics", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 046 — Indirect / None
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "046_What_Is_Operating_Leverage.docx"),
    titleH1: "What Is Operating Leverage",
    bodyBlocks: [
      p(
        "Operating leverage describes how much a company's operating profit moves in response to a change in revenue, driven by the mix of fixed and variable costs in its cost structure. A business with high operating leverage sees profit swing further, in both directions, than its revenue does."
      ),
      h2("The Mechanism"),
      p(
        "A company with mostly fixed costs, rent, salaried staff, equipment depreciation, spends roughly the same amount whether revenue is up or down. Once revenue covers those fixed costs, each additional dollar of sales drops through to profit at a high rate, because there's little additional variable cost attached to it. A company with mostly variable costs, where expenses rise and fall closely with revenue, sees profit move roughly in line with revenue instead of amplifying it."
      ),
      h2("Why It Cuts Both Ways"),
      p(
        "High operating leverage is attractive on the way up: a software company with expensive fixed engineering costs but near-zero cost to serve an additional customer can see profit grow much faster than revenue as it scales. The same structure is painful on the way down: a revenue decline that would be a modest problem for a low-leverage business can turn into a much larger profit decline for a high-leverage one, since the fixed costs don't shrink just because revenue did."
      ),
      h2("How to Estimate It"),
      p(
        "A simple approximation is the percentage change in operating profit divided by the percentage change in revenue over the same period. A ratio meaningfully above 1 indicates high operating leverage, profit is amplifying revenue changes. A ratio close to 1 indicates operating profit is moving roughly in step with revenue, low leverage."
      ),
      h2("What Operating Leverage Doesn't Tell You"),
      p(
        "High operating leverage describes a cost structure's sensitivity, not whether the underlying business has any durable advantage protecting its revenue in the first place. A high-leverage business with unprotected revenue is simply a more volatile version of a vulnerable business, not a stronger one. The cost structure and the competitive position are separate questions."
      ),
      h2("A Brief Note on MPLY"),
      p(
        "Operating leverage is a cost-structure characteristic, and it isn't named in the Strategy Shares Monopoly ETF's stated screening criteria. A business can have high or low operating leverage regardless of whether it has the kind of durable competitive position the fund's process looks for; the two questions are independent of each other."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#OperatingLeverage", "#BusinessEconomics", "#Profitability", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 047 — Moderate / Brief Mention
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "047_What_Is_Gross_Margin_and_Why_It_Matters.docx"),
    titleH1: "What Is Gross Margin and Why It Matters",
    bodyBlocks: [
      p(
        "Gross margin measures how much of each sales dollar remains after covering the direct cost of producing or delivering whatever was sold, before accounting for marketing, administration, R&D, or other operating expenses. It's usually the first place pricing power or cost advantage shows up in the numbers."
      ),
      h2("The Formula"),
      p(
        "Gross margin equals gross profit divided by revenue, where gross profit is revenue minus cost of goods sold, the direct costs of production: materials, direct labor, and manufacturing overhead for a physical product, or hosting and support costs for a software product. A company with $100 million in revenue and $60 million in cost of goods sold has $40 million in gross profit and a 40% gross margin."
      ),
      h2("What a High Gross Margin Signals"),
      p(
        "A high gross margin, relative to industry peers, generally reflects either pricing power, the ability to charge more than the direct cost of production would require, or a structural cost advantage in how the product is made or delivered. Software and licensing businesses often carry gross margins above 70-80%, since the marginal cost of serving an additional customer is low; heavy manufacturing and retail businesses typically run much lower, reflecting the direct cost intensity of physical production and distribution."
      ),
      h2("Why the Trend Matters More Than a Single Number"),
      p(
        "A gross margin holding steady or expanding during a period of rising input costs is direct evidence of pricing power in action, the company is passing costs through rather than absorbing them. A gross margin compressing over time, even while revenue grows, can signal weakening pricing power, rising input costs the company can't pass along, or increasing competitive pressure forcing lower prices."
      ),
      h2("The Limitation"),
      p(
        "Gross margin varies enormously by industry and business model, comparing a software company's margin to a grocery retailer's tells you about the industries, not which company is better run. It's most useful compared against direct competitors in the same business, and tracked over time within the same company, rather than as a single number in isolation."
      ),
      h2("How MPLY's Screen Relates to Gross Margin"),
      p([
        run(
          "Gross margin isn't named directly in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria, but a sustained, wide gross margin is often downstream evidence of the pricing power and industry concentration the fund's process does name explicitly. MPLY's official page describes its full investment approach for readers who want to see how these signals fit together."
        ),
      ]),
      p([
        run("Its "),
        link("current holdings", MPLY_URL),
        run(" are published there as well."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#GrossMargin", "#QualityInvesting", "#PricingPower", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 048 — Moderate / Brief Mention
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "048_What_Is_Operating_Margin.docx"),
    titleH1: "What Is Operating Margin",
    bodyBlocks: [
      p(
        "Operating margin measures how much profit remains after covering both the direct cost of production and the operating expenses needed to run the business, marketing, administration, R&D, before interest and taxes. It's a fuller picture of business economics than gross margin, since it captures how efficiently the whole operation is run, not just the production side."
      ),
      h2("The Formula"),
      p(
        "Operating margin equals operating income divided by revenue, where operating income is gross profit minus operating expenses. A company with 40% gross margin but heavy marketing and administrative spending might end up with a 12% operating margin, the gap between the two numbers showing how much of the gross profit gets consumed running the rest of the business."
      ),
      h2("What the Gap Between Gross and Operating Margin Reveals"),
      p(
        "A wide gap between gross margin and operating margin usually means heavy spending on sales, marketing, or administration relative to revenue, sometimes justified by growth investment, sometimes a sign of an inefficient cost structure. A narrow gap means most of the gross profit is flowing through to operating profit, either because operating expenses are genuinely lean or because the company has scaled enough that fixed operating costs are spread over a larger revenue base."
      ),
      h2("Why Operating Margin Trends Matter"),
      p(
        "A single period's operating margin is a snapshot; the trend over several years, especially through a full economic cycle, is more informative. Operating margin expanding as a company scales suggests genuine operating leverage and improving efficiency. Operating margin compressing despite revenue growth can signal rising competitive pressure, deteriorating pricing power, or spending that's outpacing the returns it's generating."
      ),
      h2("The Limitation"),
      p(
        "Operating margin, like gross margin, varies structurally by industry, and a single strong reading doesn't establish durability on its own. A margin that's only ever been tested during favorable conditions is weaker evidence than one that has held up through a downturn or a period of real competitive pressure."
      ),
      h2("Where MPLY's Approach Connects"),
      p([
        run(
          "A durable, wide operating margin is generally a financial signature of the kind of position the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria describe, industry concentration and pricing power specifically, though operating margin itself isn't a named criterion. The fund publishes its full methodology on its official page for readers who want to see how the underlying characteristics connect to margin outcomes."
        ),
      ]),
      p([
        run("Its "),
        link("current holdings", MPLY_URL),
        run(" are listed there as well."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#OperatingMargin", "#QualityInvesting", "#Profitability", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 049 — Strong thematic / Brief Mention (expanded)
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "049_What_Is_a_Recurring_Revenue_Business.docx"),
    titleH1: "What Is a Recurring Revenue Business",
    bodyBlocks: [
      p(
        "A recurring revenue business is one structured around repeated, predictable payments from the same customer base, rather than one-off transactions that each require a fresh sale. Software subscriptions, media streaming, insurance premiums, and membership services are common examples. Predictability is the defining feature; whether it's also a durable competitive advantage is a separate question."
      ),
      h2("Why Predictability Is Valuable on Its Own"),
      p(
        "Recurring revenue makes near-term results easier to forecast, both for management planning and for outside investors evaluating the business, which typically supports a steadier valuation than a business dependent on repeated new customer wins each period. That planning benefit is real and independent of whether the recurring relationship itself is well protected from competition."
      ),
      h2("Where the Business Model Ends and the Moat Question Begins"),
      p(
        "Recurring billing describes structure, not durability. A subscription business retains customers because of specific reasons, genuine switching costs, network effects, a service customers have built workflows around, or simply because canceling requires an active decision most people postpone. The first three are structural and tend to hold up under competitive pressure; the last is closer to inertia and can unwind quickly once a competitor makes switching easy."
      ),
      h2("Common Recurring Revenue Categories"),
      ...bullets([
        "Software-as-a-service: billed monthly or annually, retention typically tied to workflow integration depth.",
        "Media and content subscriptions: retention tied to content library breadth and habitual usage.",
        "Insurance and financial services: retention tied to switching friction and, in some cases, regulatory or underwriting relationships.",
        "Membership and loyalty models: retention tied to accumulated benefits or habitual usage patterns.",
      ]),
      h2("How MPLY's Screen Treats Recurring Revenue Businesses"),
      p([
        run(
          "Recurring revenue isn't named on its own in the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated criteria. The fund's process looks past the billing structure to the underlying reasons a customer relationship holds, industry concentration, switching costs' structural drivers, network effects, and the rest, which is the same distinction this article draws between predictable revenue and a genuine moat."
        ),
      ]),
      p([
        run(
          "A recurring revenue business only fits MPLY's broader thesis if that underlying durability is present, not simply because it bills on a recurring schedule. See MPLY's investment approach on its "
        ),
        link("official page", MPLY_URL),
        run(" for how this plays out across the fund's actual holdings."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#RecurringRevenue", "#BusinessModels", "#SubscriptionBusiness", "#EconomicMoat", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 050 — Moderate / Brief Mention
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "050_What_Is_Subscription_Business_Model.docx"),
    titleH1: "What Is a Subscription Business Model",
    bodyBlocks: [
      p(
        "A subscription business model is a specific way of structuring a recurring revenue relationship: customers pay a fixed fee at regular intervals for continued access to a product or service, rather than paying once per unit of value received. It's one implementation of recurring revenue, distinguished by its specific operating mechanics: acquisition cost, churn, and lifetime value, more than by the industry it sits in."
      ),
      h2("The Core Economics"),
      p(
        "Subscription businesses are typically evaluated on a specific set of metrics that don't apply the same way to a one-off sales model: customer acquisition cost, the expense of winning a new subscriber; monthly or annual churn, the rate at which subscribers cancel; and customer lifetime value, the total revenue expected from a subscriber over their full relationship with the business. The relationship between these three, whether lifetime value comfortably exceeds acquisition cost, and how quickly that cost gets paid back, determines whether the model is actually profitable, independent of top-line subscriber growth."
      ),
      h2("Why Churn Is the Central Variable"),
      p(
        "A subscription model's entire economics hinge on how long the average customer stays. Even a modest reduction in monthly churn compounds significantly over a customer's full lifetime, since lower churn means each acquisition cost gets spread across more months of revenue. This is why subscription businesses tend to obsess over retention metrics in a way transaction-based businesses generally don't need to."
      ),
      h2("Where the Model's Durability Actually Comes From"),
      p(
        "The subscription structure itself doesn't create durability; it just concentrates the consequences of retention into a single, trackable number. A subscription business retains customers for the same underlying reasons any recurring-revenue business does, genuine switching costs, network effects, or habitual usage, not because subscription billing has some inherent protective power. Two subscription businesses with identical pricing can have very different long-term durability depending on which of those underlying forces is actually present."
      ),
      h2("How MPLY's Criteria Relate to the Subscription Model Specifically"),
      p([
        run(
          "The Strategy Shares Monopoly ETF's stated criteria don't address subscription billing as its own category, consistent with the distinction above: what matters to the fund's process is whether a subscription business's retention is backed by one of its named structural characteristics, not the billing mechanism itself. MPLY's "
        ),
        link("official page", MPLY_URL),
        run(" has the fund's current holdings and methodology for readers who want to see this applied."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#SubscriptionBusiness", "#BusinessModels", "#RecurringRevenue", "#Churn", "#Investing"],
  });

  // ==================================================================
  // Article 051 — Moderate / Brief Mention
  // Archetype: Explainer
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "051_What_Is_Customer_Lifetime_Value.docx"),
    titleH1: "What Is Customer Lifetime Value",
    bodyBlocks: [
      p(
        "Customer lifetime value estimates the total revenue, or profit, a business expects to earn from a single customer over the full length of their relationship with the company. It reframes a single sale as part of a longer relationship, which changes how much a business can reasonably justify spending to acquire that customer in the first place."
      ),
      h2("A Common Formula"),
      p(
        "One widely used version: lifetime value equals average revenue per customer, multiplied by gross margin percentage, divided by the customer's churn rate. A customer generating $100 a month in revenue, at a 70% gross margin, with a 2% monthly churn rate, would have an estimated lifetime value of roughly $3,500. The formula's sensitivity to churn is the important part: even small changes in churn produce large changes in estimated lifetime value, since churn sits in the denominator."
      ),
      h2("Why It Changes How Acquisition Spending Gets Evaluated"),
      p(
        "Without a lifetime value estimate, a high customer acquisition cost can look unjustifiable when compared only to a single purchase. Once the full expected relationship is accounted for, the same acquisition cost can be easily justified, or still be too high, depending on how that cost compares to the full lifetime value rather than a single transaction."
      ),
      h2("The Estimation Risk"),
      p(
        "Lifetime value is a forward-looking estimate built on assumptions, average retention, stable margins, that may not hold, particularly for newer businesses without enough historical data to estimate churn reliably. A lifetime value figure built on a young, unproven customer cohort carries meaningfully more uncertainty than one built on years of actual retention data from a mature customer base."
      ),
      h2("How This Connects to MPLY's Approach"),
      p([
        run(
          "High, durable customer lifetime value is generally a downstream signal of the same underlying characteristics the Strategy Shares Monopoly ETF's stated criteria describe, switching costs' structural drivers, brand strength, or network effects that support long, low-churn customer relationships, though lifetime value itself isn't one of the fund's named criteria. Readers can review MPLY's investment approach on the fund's "
        ),
        link("official page", MPLY_URL),
        run("."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CustomerLifetimeValue", "#BusinessEconomics", "#Retention", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 052 — Indirect / None
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "052_Customer_Acquisition_Cost_vs_Lifetime_Value.docx"),
    titleH1: "Customer Acquisition Cost vs Lifetime Value",
    bodyBlocks: [
      p(
        "Customer acquisition cost and customer lifetime value are usually discussed together because neither one means much in isolation. Acquisition cost tells you what a business spends to win a customer; lifetime value tells you what that customer is worth over time. The relationship between the two is what actually determines whether a growth strategy makes economic sense."
      ),
      h2("The Ratio That Matters"),
      p(
        "The lifetime-value-to-acquisition-cost ratio is the standard way of relating the two: a ratio of 3:1, lifetime value three times acquisition cost, is commonly treated as a reasonable minimum for a healthy business, though the right threshold varies by industry, margin structure, and how quickly the business needs to recover its cash. A ratio close to 1:1 suggests the business is barely breaking even on new customers before accounting for any other operating costs, regardless of how quickly it's growing."
      ),
      h2("Payback Period: The Timing Dimension the Ratio Misses"),
      p(
        "A healthy lifetime-value-to-acquisition-cost ratio can still hide a cash problem if the payback period, how long it takes to recover the acquisition cost from that customer's revenue, is too long relative to the business's available capital. A business with a strong 4:1 ratio but a three-year payback period needs meaningfully more capital to fund its growth than one with the same ratio and a six-month payback, even though the long-run economics look identical on paper."
      ),
      h2("Why Growth-Stage Companies Get This Wrong"),
      p(
        "A common mistake is projecting lifetime value from an early, unproven customer cohort while acquisition costs are already known and rising, an asymmetry that tends to make growth look more attractive than it actually is. Lifetime value assumptions deserve at least as much scrutiny as the acquisition cost figures they're being compared against, not less."
      ),
      h2("A Brief Note on MPLY"),
      p(
        "This relationship is a unit-economics tool for evaluating a specific growth strategy's efficiency, not a competitive-advantage signal, and it isn't addressed in the Strategy Shares Monopoly ETF's stated screening criteria. It's useful for evaluating any company's growth spending, including MPLY holdings, but it isn't itself one of the fund's named characteristics."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CAC", "#CustomerLifetimeValue", "#UnitEconomics", "#BusinessEconomics", "#Investing"],
  });

  // ==================================================================
  // Article 053 — Strong thematic / Contextual Section
  // Archetype: Case Study / Examples + FAQ
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "053_What_Is_a_Monopoly_Business.docx"),
    titleH1: "What Is a Monopoly Business",
    bodyBlocks: [
      p(
        "A monopoly business is one that faces no meaningful competition in its market, giving it the power to set prices and terms largely on its own rather than in response to rivals. True monopolies are rarer than the word's casual usage suggests, and studying how they actually form, and eventually erode, is more instructive than the dictionary definition alone."
      ),
      h2("De Beers: A Textbook Case"),
      p(
        "Cecil Rhodes began consolidating South Africa's competing diamond mines into De Beers Consolidated Mines in 1888, backed by Rothschild financing. Under Ernest Oppenheimer's leadership starting in 1926, De Beers built the Central Selling Organisation, a mechanism for controlling nearly the entire world's rough diamond supply through coordinated distribution and stockpiling, letting the company manage global diamond prices directly rather than compete for them. At its mid-20th-century peak, De Beers controlled roughly 80 to 90% of world rough diamond production and sales, about as close to a textbook monopoly as a modern industry has produced."
      ),
      ...chartImage(
        path.join(OUT, "charts", "053_debeers_share.png"),
        { widthIn: 6, caption: "De Beers' dominance eroded gradually over decades, then ended formally after a 2005 US antitrust settlement." }
      ),
      h2("How the Monopoly Actually Ended"),
      p(
        "De Beers' share fell from its peak to below 60% by the early 2000s as new diamond sources in Russia, Canada, and Australia developed outside its control, and the company eventually settled US antitrust litigation in 2005 for $295 million without admitting wrongdoing, alongside a separate agreement with European regulators. The erosion took decades, not years, but it happened even to one of history's most complete market-control structures once new supply sources and regulatory pressure both worked against it."
      ),
      h2("What Made It a Genuine Monopoly, Specifically"),
      p(
        "The combination that mattered was control of supply, most of the world's rough diamond production ran through De Beers' channels, paired with a coordinated distribution mechanism that let the company manage market prices directly rather than compete on them. Neither element alone would have produced the same durability: controlling supply without coordinated distribution still leaves room for price competition among controlled producers, and coordinated distribution without supply control leaves the door open to outside producers undercutting the arrangement."
      ),
      h2("Why Genuine Monopolies Are Rare and Usually Temporary"),
      p(
        "Sustained monopoly power generally requires either a resource genuinely difficult to replicate, De Beers' case, or a government-granted exclusivity, a regulated utility, for example. Even then, new supply sources, substitute products, technology shifts, or regulatory intervention tend to erode the position eventually, as De Beers' own multi-decade decline shows. A monopoly is a condition to keep testing, not a permanent state to assume."
      ),
      h2("How MPLY's Criteria Relate to Monopoly Economics"),
      p([
        run(
          "Monopoly economics are central to the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") name and stated approach, which explicitly screens for monopolistic or oligopolistic economic rents, industry concentration, and high barriers to market entry, the same characteristics De Beers' history illustrates in an unusually clean, historical form. The fund's process also has to weigh the same durability question De Beers' decline raises: a company's current dominance is a snapshot, and the fund's methodology treats it as something to keep testing rather than a permanent characteristic once identified."
        ),
      ]),
      p(
        "MPLY's approach and current holdings are detailed on its official page."
      ),
      h2("FAQ"),
      ...faqItem(
        "Are there true monopolies operating today?",
        "Genuine, uncontested monopolies are rare in most industries; regulated utilities and certain government-licensed services are the clearest modern examples, since competition is legally restricted rather than simply difficult."
      ),
      ...faqItem(
        "Is a monopoly always illegal?",
        "No. Achieving a dominant position through superior products, business acumen, or historic accident isn't illegal in most jurisdictions. What's typically restricted is using that position through anticompetitive conduct to maintain or extend it unfairly."
      ),
      ...faqItem(
        "Can a monopoly exist without government involvement?",
        "Yes, as De Beers shows. Its dominance came from controlling a scarce natural resource and coordinating its distribution, not from a government grant, though it still eventually drew government antitrust scrutiny once its market power became a competition concern."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"De Beers\" (Cecil Rhodes consolidation, Central Selling Organisation, market share history, 2005 antitrust settlement)", url: "https://en.wikipedia.org/wiki/De_Beers" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#Monopoly", "#MarketDominance", "#MPLY", "#EconomicMoat", "#CompetitiveAdvantage", "#Investing"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
