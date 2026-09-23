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
  // Article 002 (brief No. 2) — Strong thematic / Contextual Section
  // Archetype: Explainer + FAQ
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "002_What_Is_a_Competitive_Moat.docx"),
    titleH1: "What Is a Competitive Moat in Investing",
    bodyBlocks: [
      p(
        "A competitive moat is a business advantage durable enough to keep competitors from eroding its profits over time. The term borrows its imagery directly from castle architecture: a moat around a castle is a real obstacle to attackers, not a decoration, and the businesses investors describe as having a moat have something equally real standing between them and a rival who wants to take their customers or their margins."
      ),
      h2("Where the Term Comes From"),
      p(
        "Warren Buffett popularized \"moat\" as investing vocabulary, using it in Berkshire Hathaway's shareholder letters more than twenty times since 1986. His version of the metaphor adds a ruler: a valuable castle needs an honest, capable steward in charge of it, and a moat wide enough that competitors cannot simply wade across. The metaphor stuck because it captures something a balance sheet alone does not: a moat is about what protects future profits, not just what a company earns today."
      ),
      h2("The Common Sources of a Moat"),
      p(
        "Equity analysts generally group durable advantages into a handful of recurring categories. A cost advantage lets a company underprice rivals and still turn a profit. Switching costs make it expensive or disruptive for a customer to leave, even if a competitor's product is technically better. Network effects make a product more valuable as more people use it, which raises the bar for any new entrant trying to build a comparable user base from zero. Brand and other intangible assets, including patents, let a company charge more or exclude imitators outright. Efficient scale describes a market only big enough to profitably support the incumbents already in it. Regulatory and intellectual-property barriers, from licensing requirements to patented technology, can block competition by law rather than by market forces."
      ),
      ...chartImage(
        path.join(OUT, "charts", "002_six_sources_of_a_moat.png"),
        { widthIn: 6, caption: "The six categories most equity-research frameworks use to classify a durable competitive advantage." }
      ),
      h2("Why It Matters to Investors"),
      p(
        "A moat matters because competition is the default state of business, not the exception. Without one, high returns attract competitors who bid down prices and margins until returns fall back toward the market's average. A durable moat is what lets a company keep earning above-average returns on capital for years, sometimes decades, instead of one good product cycle. That is also why a moat is not, by itself, a reason to buy a stock: paying too much for a wonderful business is still a bad investment. The moat protects the business's economics; it does not protect an investor from overpaying for them."
      ),
      h2("The Limits of the Concept"),
      p([
        run(
          "Moats erode, and they can erode from directions a company never fully accounted for. "
        ),
        run("Kodak", { bold: true }),
        run(
          " filed for bankruptcy in 2012, 137 years after its founding, despite pursuing digital photography seriously and selling a genuinely popular line of digital cameras. Its actual mistake was narrower than \"missing the digital shift\": its digital strategy focused on printing photographs, protecting the film-development business it still made most of its money on, while the market moved toward sharing photos digitally instead of printing them. "
        ),
        run("Blockbuster", { bold: true }),
        run(
          ", which filed for bankruptcy in 2010, eventually did move to eliminate late fees and build a streaming and online rental strategy, just not quickly enough to outrun Netflix. In both cases, a real, historically durable advantage stopped being durable once the market's underlying structure changed, which is the central risk in treating any moat as permanent rather than as a current, testable condition."
        ),
      ]),
      h2("Where MPLY's Screening Approach Fits This Framework"),
      p(
        "The Strategy Shares Monopoly ETF (MPLY) is built around a version of moat investing, though its lens is narrower and more specific than the general six-category framework above. Rather than asking whether a company has any durable advantage, MPLY's stated criteria look for businesses with brand dominance, regulatory exclusivity, industry concentration, a history of antitrust scrutiny, monopolistic or oligopolistic economic rents, high barriers to market entry, pricing power, vertical integration and control of the supply chain, network effects, or protected intellectual property. Most of these map directly onto the moat sources described above, brand dominance to brand/intangible assets, high barriers to entry and IP protection to regulatory/IP barriers, network effects to network effects, but MPLY's framing pushes further toward market dominance specifically: not just \"this business has an edge,\" but \"this business faces limited real competition.\""
      ),
      p(
        "That distinction matters for how a reader should use the rest of this cluster of articles. The individual moat sources covered elsewhere, switching costs, network effects, barriers to entry, brand loyalty, recurring revenue, are each one lens on the same underlying question MPLY's screening process asks about every candidate: is this a business that could keep earning what it earns today with meaningfully less competitive pressure than a typical company in its industry? A single moat source rarely answers that on its own, which is also why MPLY's process, like general moat analysis, treats these characteristics as inputs to a judgment call rather than a checklist that automatically qualifies a company."
      ),
      p([
        run("Readers who want to see how MPLY's managers currently apply this framework can review "),
        link("the fund's investment approach and current holdings", MPLY_URL),
        run(" on its official page."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "How many types of moats are there?",
        "There's no single official count. Most equity-research frameworks group durable advantages into roughly five or six recurring categories, cost advantage, switching costs, network effects, brand/intangible assets, efficient scale, and regulatory or IP barriers, but a real company's advantage is often a combination of more than one, not a pure single type."
      ),
      ...faqItem(
        "Does having a moat guarantee good investment returns?",
        "No. A moat protects a business's underlying economics, not the price an investor pays for the stock. A genuinely durable moat bought at too high a valuation can still be a poor investment, and a company with a narrower or fading moat can still be a reasonable investment at the right price."
      ),
      ...faqItem(
        "Can a moat disappear?",
        "Yes. Kodak and Blockbuster both had real, long-standing competitive advantages that stopped protecting their profits once the underlying market structure shifted, digital photography in Kodak's case and streaming in Blockbuster's. A moat is a current condition to keep testing, not a permanent feature of a business."
      ),
      ...faqItem(
        "Is a \"wide moat\" the same thing as a monopoly?",
        "Related, but not the same. A wide moat means a durable competitive advantage of any kind, including advantages built on brand, switching costs, or scale. A monopoly specifically means facing little or no real competition. A company can have a genuine moat without approaching monopoly status, which is part of why MPLY's screening criteria go further than general moat language, specifically looking for market dominance and limited competition, not just an edge over rivals."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Economic moat\" (Buffett's use of the term in Berkshire Hathaway shareholder letters)", url: "https://en.wikipedia.org/wiki/Economic_moat" },
        { label: "Inc., \"How Blockbuster, Kodak and Xerox Really Failed (It's Not What You Think)\"", url: "https://www.inc.com/greg-satell/pundits-love-to-tell-these-three-famous-innovation-stories-none-of-them-are-true.html" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CompetitiveMoat", "#EconomicMoat", "#CompetitiveAdvantage", "#MPLY", "#ValueInvesting", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 003 (brief No. 3) — Strong thematic / Contextual Section
  // Archetype: Case Study / Examples
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "003_Economic_Moat_Examples.docx"),
    titleH1: "Economic Moat Examples: How Durable Advantages Work",
    bodyBlocks: [
      p(
        "Definitions of a competitive moat are useful, but they stay abstract until they're attached to real businesses. The examples below span different moat types on purpose: brand strength, network effects, and a technology barrier so narrow it approaches an outright monopoly in its niche. What they share is that each advantage has held up over years, not one good product cycle."
      ),
      h2("Coca-Cola: Brand as a Moat"),
      p(
        "Coca-Cola is the example Warren Buffett himself has pointed to repeatedly, and Berkshire Hathaway has held a large stake in the company since 1988. The moat isn't the formula, cola recipes are not particularly hard to approximate, it's that Coca-Cola has spent over a century building a brand strong enough that a large share of consumers reach for it out of preference rather than price comparison. That preference is what lets the company maintain shelf space, pricing, and distribution relationships that a new cola brand, even a cheaper or arguably comparable one, struggles to dislodge."
      ),
      h2("Visa and Mastercard: Network Effects as a Moat"),
      p(
        "Payment networks are a textbook two-sided network effect. A card network becomes more useful to cardholders as more merchants accept it, and more useful to merchants as more cardholders carry it. That loop is difficult for a new entrant to break into from scratch: a new network needs both sides at once, merchants who won't accept a card few customers carry, and customers who won't carry a card few merchants accept. Visa and Mastercard built that two-sided density over decades, which is a large part of why global payment networks have stayed concentrated among a small number of incumbents rather than fragmenting as new entrants have tried to compete."
      ),
      h2("ASML: A Technology Barrier Narrow Enough to Approach a Monopoly"),
      p(
        "ASML is a less familiar name to most investors than Coca-Cola or Visa, but it's arguably the starkest example of a barrier-to-entry moat. The company is the sole maker of the extreme ultraviolet, or EUV, lithography machines that chipmakers need to manufacture the most advanced semiconductors. That position wasn't won on brand or customer habit; it came from decades of accumulated, extraordinarily difficult engineering that no competitor has yet replicated. For any chipmaker that needs cutting-edge manufacturing capability, there is effectively one supplier, which is about as concentrated as a moat gets without becoming a literal legal monopoly."
      ),
      h2("What These Examples Have in Common"),
      p(
        "None of these companies is invulnerable, and none of their advantages come from a single source in isolation. Coca-Cola's brand is reinforced by scale and distribution; Visa and Mastercard's network effect is reinforced by regulatory relationships and trust built over decades; ASML's technology barrier is reinforced by patents and an ecosystem of specialized suppliers that would be nearly as hard to replicate as the machines themselves. That layering, one advantage reinforcing another rather than standing alone, is a common thread in moats that have actually lasted, as opposed to an edge that looks durable for a year or two before a well-funded competitor closes the gap."
      ),
      h2("How MPLY's Criteria Show Up in These Same Examples"),
      p(
        "All three companies illustrate characteristics named directly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria. Coca-Cola maps to brand dominance. Visa and Mastercard map to network effects and, given how concentrated global card payments are among a handful of networks, industry concentration. ASML maps to high barriers to market entry and protected intellectual property, arguably the cleanest real-world example available of what the fund's criteria are trying to capture."
      ),
      p([
        run(
          "These three are used here as illustrations of the underlying characteristics, not as a claim about MPLY's actual portfolio; the fund holds 100 positions that change over time, and confirming whether any specific company is currently held requires checking the fund's own holdings list rather than assuming it from the characteristics alone. Readers who want to see which companies MPLY currently holds, and how closely they resemble these examples, can review "
        ),
        link("the fund's current holdings", MPLY_URL),
        run(" directly on its official page."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Economic moat\" (Buffett's use of the term; Berkshire's Coca-Cola stake)", url: "https://en.wikipedia.org/wiki/Economic_moat" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#EconomicMoat", "#CompetitiveAdvantage", "#BrandMoat", "#NetworkEffects", "#MPLY", "#Investing", "#ValueInvesting"],
  });

  // ==================================================================
  // Article 004 (brief No. 4) — Strong thematic / Contextual Section
  // Archetype: Mechanism-Based
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "004_What_Are_Switching_Costs.docx"),
    titleH1: "What Are Switching Costs and Why Do They Matter",
    bodyBlocks: [
      p(
        "Switching costs are what a customer gives up, spends, or risks by leaving one provider for another, on top of the sticker price of the new provider's product. They can be measured in dollars, time, or simple inconvenience, but the effect on a business is the same either way: a customer who would genuinely prefer a competitor's product may still stay put because leaving costs more than staying."
      ),
      h2("The Problem Switching Costs Solve for a Business"),
      p(
        "Without something holding customers in place, a business is only ever as good as its last interaction with each one. A better price or product from a competitor should, in theory, move demand instantly. Switching costs break that theory in practice by attaching a cost to the act of leaving itself, separate from how good the alternative is. That is what allows a company to retain customers even through a period of relative underperformance, a price increase, or a competitor's genuinely superior offering."
      ),
      h2("How Switching Costs Actually Work"),
      p(
        "The mechanism varies by category. Enterprise software is one of the clearest cases: a company that has run its finance, supply chain, and payroll operations on a system like SAP for a decade has trained staff, built custom integrations, and stored years of historical data inside it. Migrating to a competitor isn't a purchasing decision, it's a multi-year project with real failure risk, which is why enterprise software vendors can retain customers through price increases that would sink a consumer product overnight. Consumer banking works through a quieter version of the same mechanism: most people rarely switch primary banks even when a competitor offers a better rate, because moving direct deposits, automatic bill payments, and linked accounts is tedious enough that the switch gets postponed indefinitely, not because the incumbent bank is winning on merit."
      ),
      h2("Financial Evidence to Look For"),
      p(
        "Switching costs tend to show up as unusually low customer churn relative to a company's actual product satisfaction scores, or as pricing power that persists even when competitors are objectively similar on features. Net revenue retention above 100%, meaning existing customers spend more over time rather than less, is another common signal in subscription businesses, since it implies customers are choosing to deepen a relationship rather than looking for an exit."
      ),
      h2("Where Switching Costs Break Down"),
      p(
        "The mechanism has real limits. Switching costs slow an exit; they don't prevent one indefinitely, especially once a gap in quality or price becomes large enough that customers tolerate the hassle of leaving. Regulation can also directly target switching costs: mobile number portability rules, for instance, were introduced specifically because keeping a phone number tied to one carrier was recognized as an artificial barrier to competition rather than a real product advantage, and once portability became mandatory, some of that particular switching cost disappeared by law rather than by market forces."
      ),
      h2("How This Connects to MPLY's Screening Approach"),
      p(
        "Switching costs aren't named on their own in the Strategy Shares Monopoly ETF's (MPLY) stated criteria the way brand dominance or network effects are, but they're one of the more common mechanisms behind two criteria that are: industry concentration and pricing power. A business that can lock in customers through genuine switching costs is better positioned to hold pricing power without losing volume, and an industry where every major player benefits from similar lock-in tends to stay concentrated among incumbents rather than churning through new entrants."
      ),
      p([
        run(
          "The evaluation question is the same one that applies to any moat source: is the switching cost structural, built into the product or workflow itself, or is it a temporary inconvenience a well-funded, patient competitor could design away. Regulation is also a real risk to this particular mechanism specifically, as number portability shows, a switching cost that exists only because leaving is inconvenient can be legislated away, while one built into the actual product or workflow generally cannot. Readers interested in how MPLY weighs that distinction can review "
        ),
        link("the fund's investment approach", MPLY_URL),
        run(" on its official page."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "FCC, mobile number portability rules (regulatory removal of a carrier-switching cost)", url: "https://www.fcc.gov/general/wireless-local-number-portability-wlnp" },
      ]),
    ],
    hashtags: ["#SwitchingCosts", "#EconomicMoat", "#CompetitiveAdvantage", "#CustomerRetention", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 005 (brief No. 5) — Strong thematic / Contextual Section
  // Archetype: Timeline / Evolution + FAQ
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "005_Network_Effects_Explained.docx"),
    titleH1: "Network Effects Explained: A Competitive Advantage",
    bodyBlocks: [
      p(
        "A network effect exists when a product or service becomes more valuable to each user as more people use it. It's one of the few competitive advantages that gets stronger, not weaker, with scale, which is part of why it has become one of the most closely watched moat types in technology and platform investing over the past two decades."
      ),
      h2("The Idea's Origin"),
      p(
        "The underlying concept predates the internet by decades, most associated with Robert Metcalfe's observation about telephone and computer networks: a network's value grows disproportionately as connections are added, because each new participant can potentially connect with every existing one. A telephone is worthless if you're the only person who owns one; it becomes more useful with every other person who gets one too. The same logic, applied to platforms rather than physical networks, is what modern investors mean when they talk about a network-effect moat."
      ),
      ...chartImage(
        path.join(OUT, "charts", "005_network_effects_curve.png"),
        { widthIn: 6, caption: "The core mechanism: value to each participant compounds as more participants join, rather than growing at a flat rate." }
      ),
      h2("How Platforms Turned the Concept Into a Business Model"),
      p(
        "Two-sided marketplaces made the mechanism explicit. A ride-hailing platform is more useful to riders when more drivers are available, and more useful to drivers when more riders are requesting trips; each side's growth makes the platform more valuable to the other side. Messaging and social platforms work through a more direct version: a messaging app is more useful the more of your own contacts already use it, which is why migrating an entire social graph to a new app is a much bigger ask than switching a single-player product for a better one."
      ),
      h2("The Turning Point Most Discussions Skip: Network Effects Can Fail Too"),
      p(
        "A network effect is often described as though it guarantees durability once it takes hold, but the historical record doesn't support that. Early social platforms had real network effects and still lost their position when execution problems drove users elsewhere faster than the network effect could hold them. The mechanism protects a company only as long as the product experience stays good enough that leaving feels costly; once it doesn't, users can migrate in large numbers, taking the network effect with them to wherever they land next."
      ),
      h2("Current State: Where Network Effects Show Up Today"),
      p(
        "Payment networks, professional social platforms, app marketplaces, and cloud developer ecosystems are the clearest present-day examples, each one harder to displace the larger and more entrenched its two-sided or multi-sided user base becomes. The common feature across all of them is that the network effect compounds a separate, underlying product advantage rather than replacing the need for one; a mediocre product with a large network can still lose share to a much better product once the gap becomes large enough."
      ),
      h2("Lessons for Evaluating a Network-Effect Moat"),
      p(
        "The practical takeaway is to treat network effects as a multiplier, not a guarantee. A business with a genuine two-sided or multi-sided dynamic and strong execution can turn scale into a durable advantage that gets harder to attack every year. The same dynamic without disciplined execution is closer to a large, fragile lead than a moat."
      ),
      h2("How MPLY's Screen Treats Network Effects"),
      p(
        "Network effects are named directly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, alongside brand dominance, industry concentration, and high barriers to market entry. The fund's process treats a network effect the way this article's turning point suggests it should be treated: as a reinforcing characteristic that strengthens a company's broader competitive position, not as a standalone qualifying trait."
      ),
      p([
        run(
          "A company with a real network effect but weak execution, or one operating in a market too small to sustain lasting concentration, doesn't automatically fit the fund's broader monopolistic-or-oligopolistic thesis just because a network effect is technically present. Readers researching how the fund weighs network effects against its other criteria can review "
        ),
        link("MPLY's current holdings and investment approach", MPLY_URL),
        run(" on its official page."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "Is any large user base a network effect?",
        "No. A network effect specifically means each additional user makes the product more valuable to other users, not just that a company has many customers. A retailer with millions of customers who never interact with each other doesn't have a network effect in this sense, even though it has scale."
      ),
      ...faqItem(
        "Can a network effect be reversed?",
        "Yes. If enough users leave a platform, the remaining users experience less value, which can accelerate further departures, the same compounding mechanism running in the opposite direction. This is part of why platforms with fading engagement can lose share faster than their raw user counts initially suggest."
      ),
      ...faqItem(
        "Are network effects only relevant to technology companies?",
        "They show up most visibly in tech and platform businesses, but the underlying logic isn't tech-specific. Payment networks, stock exchanges, and even some professional standards or certifications carry a version of the same dynamic: they become more useful as more participants adopt them."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Network effect\" (Metcalfe's Law and platform economics background)", url: "https://en.wikipedia.org/wiki/Network_effect" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#NetworkEffects", "#EconomicMoat", "#CompetitiveAdvantage", "#PlatformEconomics", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 006 (brief No. 6) — Strong thematic / Contextual Section
  // Archetype: Checklist / Research Guide
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "006_What_Are_Barriers_to_Entry.docx"),
    titleH1: "What Are Barriers to Entry in Business",
    bodyBlocks: [
      p(
        "A barrier to entry is anything that makes it difficult or expensive for a new competitor to start competing in a market. Where a moat describes protection for a company already established in a market, barriers to entry describe protection for the entire industry: they're the reason a market stays concentrated among a small number of players even when the incumbents are earning attractive returns that should, in theory, invite new competition."
      ),
      h2("What to Examine First: Capital Requirements"),
      p(
        "Some industries require enormous upfront investment before a new entrant can generate a single dollar of revenue. Building a semiconductor fabrication plant, launching a satellite network, or constructing a nationwide telecom infrastructure each costs billions of dollars before a competitor can even begin competing for customers. That upfront cost alone eliminates the vast majority of potential challengers, regardless of how good their underlying technology or business idea might be."
      ),
      h2("Regulatory and Licensing Barriers"),
      p(
        "Some markets require government permission to operate at all. Wireless carriers need spectrum licenses allocated through government auctions, a fixed and limited resource that can't simply be created to accommodate a new entrant. Pharmaceutical companies need regulatory approval that requires years of clinical trials before a new drug can be sold. Banks need banking charters. In each case, the barrier isn't really about the incumbents' skill; it's that the government has deliberately limited how many competitors can exist, which is a structurally different, often more durable kind of protection than a company earning its position purely through better execution."
      ),
      h2("Economies of Scale as a Barrier"),
      p(
        "A market can also be too small, relative to the fixed costs of competing in it, to profitably support more than a handful of players. If two incumbents already serve a region efficiently at scale, a new entrant would need to win enough customers to reach a comparable cost structure before it could compete on price, and getting there typically means losing money for years while building that scale. Utilities and regional infrastructure businesses are the clearest examples: a third competing power grid or water system in the same city rarely makes economic sense for anyone to build, which is itself the barrier."
      ),
      h2("Questions to Ask When Evaluating a Barrier"),
      ...bullets([
        "Is the barrier structural (capital, regulation, physical scarcity) or just a temporary head start incumbents happen to have right now?",
        "Would meaningfully more capital or time actually let a well-funded new entrant clear the barrier, or does the barrier hold regardless of resources?",
        "Is the barrier protecting the whole industry, or just one company's position within an industry that a well-capitalized rival could still enter?",
        "Has a barrier like this one been weakened or removed by regulation or technology change in a comparable industry before?",
      ]),
      h2("Warning Signs the Barrier Is Weaker Than It Looks"),
      p(
        "A barrier framed as permanent can turn out to be circumstantial. Capital requirements fall as technology matures, regulation can change with a change in political administration or public pressure, and economies of scale can be disrupted by a fundamentally different business model rather than a company trying to out-compete incumbents on their own terms. The barrier itself deserves the same scrutiny as any other part of the investment case, not an automatic assumption of permanence."
      ),
      h2("MPLY's Research Lens on Barriers to Entry"),
      p(
        "High barriers to market entry are named explicitly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, alongside regulatory exclusivity and industry concentration, two categories closely related to the capital and licensing barriers described above. The fund's process treats a barrier the way the questions above suggest it should be treated: not as a label a company earns once, but as something to keep testing against capital, regulation, and technology change."
      ),
      p([
        run(
          "A barrier that looked durable a decade ago, dominant physical retail distribution, for instance, can weaken as the underlying technology or regulatory environment shifts, which is why the fund's process has to keep re-evaluating rather than treating a barrier as a fixed characteristic once identified. Readers who want to see which companies currently pass that test can review "
        ),
        link("MPLY's investment approach and current holdings", MPLY_URL),
        run(" on its official page."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "FCC, spectrum auctions overview (wireless licensing as a regulatory barrier)", url: "https://www.fcc.gov/auctions" },
      ]),
    ],
    hashtags: ["#BarriersToEntry", "#EconomicMoat", "#CompetitiveAdvantage", "#MarketStructure", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 007 (brief No. 7) — Strong thematic / Brief Mention
  // Archetype: Myth vs. Reality
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "007_Brand_Loyalty_Competitive_Advantage.docx"),
    titleH1: "Brand Loyalty as a Competitive Advantage",
    bodyBlocks: [
      p(
        "The common belief is straightforward: a beloved brand can charge more, keep customers longer, and shrug off competition that would sink a less-loved rival. The reality is narrower. Brand loyalty is a real and valuable advantage, but it's neither automatic nor permanent, and it depends on the brand actively reinforcing the loyalty rather than assuming customers will simply stay because they always have."
      ),
      h2("The Myth: Loyalty Is a Fixed Asset Once Earned"),
      p(
        "It's tempting to treat brand loyalty as something a company banks once and draws on indefinitely, the way a patent protects an invention for a fixed legal term. Under that view, a strong brand is a permanent edge that competitors simply can't replicate regardless of what they do."
      ),
      h2("The Reality: Loyalty Has to Be Actively Maintained"),
      p([
        run(
          "Harley-Davidson is the example most often cited for genuinely deep brand loyalty, a company whose customers have historically gotten the logo tattooed on their bodies, which is not something that happens around a typical consumer product. That loyalty came from decades of consistent product identity, a specific lifestyle association, and a dealer and owners'-club culture the company actively built and maintained. It didn't happen automatically, and it required continued investment to hold: brands that stop reinforcing what made customers loyal in the first place, through product changes, service quality slipping, or a shift in what the brand represents, can watch that loyalty erode within a few product cycles, not decades."
        ),
      ]),
      h2("Where Brand Loyalty Genuinely Supports Pricing Power"),
      p(
        "The mechanism is real when it works: a loyal customer base gives a company room to raise prices without losing as many customers as a less-loved competitor would in the same situation, and it can support premium positioning even against functionally similar or cheaper alternatives. That's a genuine advantage, but it's conditional on the loyalty being current, not historical. A brand's reputation from a decade ago doesn't protect pricing today if the underlying relationship with customers has quietly weakened."
      ),
      h2("What Investors Should Actually Look For"),
      p(
        "Rather than asking whether a brand is well known, a better test is whether the company can point to specific, current evidence: repeat purchase rates, willingness to pay a premium in head-to-head comparisons, or customer response to a recent price increase. A famous brand with declining repeat business is a weaker moat than a less famous one with customers who keep coming back and keep paying up."
      ),
      h2("Where MPLY Fits"),
      p(
        "Brand dominance is one of the specific characteristics named in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, which puts brand loyalty squarely in scope for the fund's process rather than as a peripheral consideration. But the myth-versus-reality distinction above applies directly here too: the fund's process treats brand strength as one input that can support pricing power and customer retention, evaluated alongside its other criteria, not as a standalone qualifier a company earns simply by being recognizable."
      ),
      p([
        run(
          "A famous brand without current evidence of pricing power or retention is a weaker fit for the fund's thesis than a less famous brand that can demonstrate both. The fund's "
        ),
        link("official page", MPLY_URL),
        run(" lists its current holdings and investment approach for readers who want to check that evidence directly."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Harley-Davidson\" (brand identity and customer loyalty culture)", url: "https://en.wikipedia.org/wiki/Harley-Davidson" },
      ]),
    ],
    hashtags: ["#BrandLoyalty", "#CompetitiveAdvantage", "#EconomicMoat", "#PricingPower", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 008 (brief No. 8) — Strong thematic / Contextual Section
  // Archetype: Investor Framework + FAQ
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "008_What_Makes_a_Business_Hard_to_Displace.docx"),
    titleH1: "What Makes a Business Hard to Displace",
    bodyBlocks: [
      p(
        "Every individual moat source, switching costs, network effects, brand, barriers to entry, answers a version of the same underlying question: what would it actually take for a well-funded, competent competitor to take this company's customers away? A business that's genuinely hard to displace usually isn't protected by just one of these sources; it's protected by more than one working together."
      ),
      h2("What to Look For: Layered Advantages, Not a Single One"),
      p(
        "The businesses that prove hardest to displace over long periods typically combine at least two reinforcing sources of advantage. A brand alone can fade if a competitor out-executes on product. A cost advantage alone can be closed by a well-capitalized rival that scales up. But a company with a strong brand and a durable cost advantage, or network effects reinforced by real switching costs, is defending on two fronts at once, and a challenger has to overcome both simultaneously rather than finding one weak point to attack."
      ),
      h2("Key Indicators to Examine"),
      ...bullets([
        "Customer concentration and churn: low churn relative to the broader industry suggests something beyond price is holding customers in place.",
        "Margin stability through cycles: a company that holds margins through a downturn or a well-funded competitor's price war is demonstrating real pricing power, not just a temporary lead.",
        "Capital intensity relative to market size: high fixed costs in a market too small to support many players is itself a form of protection new entrants have to reckon with.",
        "History of failed challengers: markets where well-funded competitors have tried and failed to gain share are a stronger signal than a market that simply hasn't been seriously challenged yet.",
      ]),
      h2("How to Evaluate the Combination, Not Just the Parts"),
      p(
        "The practical test is to ask what a competitor with unlimited capital, but no existing customer relationships or brand, would actually need to do to take meaningful share within a few years. If the honest answer involves clearing multiple, independent obstacles at once, capital requirements and regulatory approval and an established distribution network, for instance, the business is genuinely hard to displace. If the honest answer is a single obstacle, however large, a sufficiently patient and well-funded challenger can eventually clear it."
      ),
      h2("The Common Mistake"),
      p(
        "The mistake investors make most often here is treating the presence of any moat source as sufficient evidence of durability, without asking whether it's reinforced by anything else. A large user base without genuine switching costs, a well-known brand without a clear reason customers stay loyal, or a temporary cost lead without a structural reason a competitor can't close it: each looks like a moat at first glance and can unwind faster than expected once a determined, well-capitalized challenger actually shows up."
      ),
      h2("Where MPLY's Approach Reflects This Same Logic"),
      p(
        "The Strategy Shares Monopoly ETF's (MPLY) stated screening criteria list ten separate characteristics, brand dominance, regulatory exclusivity, industry concentration, antitrust history, economic rents, barriers to entry, pricing power, supply-chain control, network effects, and protected intellectual property, and explicitly note that a company can qualify by holding these characteristics individually or collectively with a small number of competitors."
      ),
      p([
        run(
          "That structure mirrors the layered-advantage framework above: the fund isn't screening for a single trait, it's screening for businesses that combine enough of these characteristics that displacing them would require clearing more than one obstacle at once, the same test this article's \"what would a well-funded challenger actually need to do\" question is really asking. The fund's full methodology and "
        ),
        link("current holdings", MPLY_URL),
        run(" are published on its official page for anyone who wants to apply that test directly."),
      ]),
      h2("FAQ"),
      ...faqItem(
        "Is a company with just one strong advantage automatically fragile?",
        "Not automatically, but it's a narrower moat than one built on multiple reinforcing sources. A single strong, structural advantage (a patent that's genuinely hard to work around, for instance) can still hold up well; the concern is a single advantage that's easy for a well-funded competitor to replicate given enough time and capital."
      ),
      ...faqItem(
        "How long does it usually take for a moat to actually be tested?",
        "There's no fixed timeline; it depends on how attractive the market's returns look to potential challengers and how much capital and time an entrant is willing to commit. A market earning unusually high returns tends to attract serious challengers faster than one earning ordinary returns, even if both look protected on paper."
      ),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (full screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CompetitiveAdvantage", "#EconomicMoat", "#BusinessDefensibility", "#MPLY", "#Investing", "#Fundamentals"],
  });

  // ==================================================================
  // Article 009 (brief No. 9) — Strong thematic / Contextual Section
  // Archetype: Comparison
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "009_Recurring_Revenue_Business_Moat.docx"),
    titleH1: "How Recurring Revenue Creates a Business Moat",
    bodyBlocks: [
      p(
        "Recurring revenue and a durable moat get treated as nearly synonymous in a lot of investing commentary, subscription businesses trade at premium valuations partly on this assumption, but they aren't actually the same thing. Recurring revenue describes a payment pattern. A moat describes why that pattern is likely to continue. The difference between the two is the entire question worth asking before assuming a subscription business has a real competitive advantage."
      ),
      h2("Recurring Revenue: Predictable, Not Automatically Durable"),
      p(
        "A gym membership is recurring revenue in its purest form: a customer signs up, gets billed monthly, and the business can forecast that revenue with reasonable confidence in aggregate. But the individual relationship behind that predictability is often weak. A large share of gym members stop attending within months of signing up while continuing to pay, not because switching gyms is hard, but because canceling requires an active decision most people simply postpone. That's recurring revenue built on inertia and a subscription that's easy to forget about, not on a customer actively choosing the business over alternatives."
      ),
      h2("A Durable Moat: Recurring Revenue With a Real Reason Behind It"),
      p(
        "Adobe's Creative Cloud subscription is a useful contrast. Creative professionals who have built years of workflows, file formats, and team collaboration processes around Photoshop and Illustrator face genuine switching costs if they try to move to a competing tool, retraining, file compatibility issues, and disrupting an entire team's established process, not just the inconvenience of canceling a membership. That's also recurring revenue, but the durability comes from a structural switching cost, not from customers forgetting to cancel."
      ),
      h2("The Question That Separates Them"),
      p(
        "The test is simple to state and harder to apply honestly: if this customer stopped paying attention entirely, would they actively notice and act on missing the product, or would they only notice the recurring charge on a statement? A subscription business where the product is deeply embedded in a customer's actual workflow or habits tends to hold up under price increases and competitive pressure. A subscription business that persists mainly because cancellation is friction-filled is vulnerable the moment a competitor makes switching easier, or a customer simply does the housekeeping of auditing their monthly charges."
      ),
      h2("Why the Distinction Matters for Valuation"),
      p(
        "Markets often price recurring-revenue businesses similarly on the surface, revenue predictability alone can support a premium multiple, but the businesses built on genuine retention drivers tend to sustain that predictability through downturns and competitive pressure, while businesses relying on low-attention churn can see cancellation rates spike quickly once a recession prompts customers to actually review their subscriptions, a well-documented pattern in consumer subscription churn during past economic slowdowns."
      ),
      h2("How MPLY's Screen Treats This Distinction"),
      p(
        "Recurring revenue on its own isn't named in the Strategy Shares Monopoly ETF's (MPLY) stated criteria, and that omission is consistent with the distinction this article is making. The fund's process is built around characteristics like industry concentration, structural barriers to entry, and network effects, the reasons a customer relationship actually holds, not the billing structure sitting on top of it."
      ),
      p([
        run(
          "A recurring-revenue business only fits MPLY's broader thesis if the predictability is backed by one of those structural characteristics, the way Adobe's switching costs are backed by workflow lock-in, not simply because it bills monthly the way a gym membership does. MPLY's "
        ),
        link("official page", MPLY_URL),
        run(" shows how this plays out across its actual current holdings."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#RecurringRevenue", "#EconomicMoat", "#CompetitiveAdvantage", "#SubscriptionBusiness", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 010 (brief No. 10) — Strong thematic / Brief Mention
  // Archetype: Hybrid (mechanism + comparison)
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "010_Customer_Retention_Competitive_Advantage.docx"),
    titleH1: "Customer Retention as a Competitive Advantage",
    bodyBlocks: [
      p(
        "High customer retention is often treated as evidence of a moat by itself, a low churn rate looks like proof that customers are loyal and the business is protected. Retention is a useful number, but it's a measurement of an outcome, not a description of what's actually causing it. Two businesses can post nearly identical retention rates for entirely different reasons, one durable and one fragile."
      ),
      h2("Retention Driven by Switching Costs"),
      p(
        "The more durable version of high retention comes from customers who stay because leaving genuinely costs them something structural: retraining, data migration, integration rebuilding, or losing an accumulated history inside a product. Enterprise software again illustrates this cleanly: a company that has run years of financial reporting through one platform faces real switching costs measured in time, risk, and money, and its retention rate reflects that structural reality, not just satisfaction."
      ),
      h2("Retention Driven by Habit or Inattention"),
      p(
        "The more fragile version of high retention comes from customers who stay mainly because leaving requires an active decision they haven't gotten around to making, the same dynamic described in gym memberships and forgotten subscriptions. This kind of retention can look identical to the structural kind on a quarterly earnings report, both show up as a low churn percentage, but it tends to evaporate quickly once something prompts customers to actually reassess their spending: a recession, a well-marketed competitor, or simply a customer doing a routine audit of recurring charges."
      ),
      h2("How to Tell the Two Apart"),
      p(
        "The practical test is to look past the headline retention number and ask what specifically is preventing departure. A company that can point to concrete switching costs, migration difficulty, integration depth, contractual lock-in, is demonstrating structural retention. A company whose retention explanation amounts to \"customers just don't leave much\" without a clear mechanism is more likely relying on inattention, which is a much weaker foundation. Retention trends during a genuine stress period, a recession, a strong new competitor entering the market, are the clearest real-world test: structural retention tends to hold up under stress, while inattention-driven retention tends to crack."
      ),
      h2("Why This Distinction Matters More Than the Headline Number"),
      p(
        "Investors and analysts who stop at the retention percentage risk treating two businesses with very different durability as equivalent. The underlying drivers, switching costs, network effects, brand strength, are what determine whether today's retention rate is likely to hold up in a harder environment, which is why retention on its own is a starting point for research rather than a conclusion."
      ),
      p([
        run(
          "This is also why retention alone doesn't map directly onto the Strategy Shares Monopoly ETF's ("
        ),
        run("MPLY", { bold: true }),
        run(
          ") stated screening criteria. The fund's process looks at the underlying drivers, switching costs, brand strength, network effects, that actually explain why customers stay, rather than treating a low churn number as sufficient evidence on its own. Its "
        ),
        link("official page", MPLY_URL),
        run(" is where that distinction can be checked against its current holdings."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#CustomerRetention", "#CompetitiveAdvantage", "#EconomicMoat", "#ChurnRate", "#MPLY", "#Investing"],
  });

  // ==================================================================
  // Article 011 (brief No. 11) — Strong thematic / Contextual Section
  // Archetype: Case Study / Examples (durability-focused)
  // ==================================================================
  await buildArticle({
    outPath: path.join(OUT, "011_What_Is_a_Network_Effect_Moat.docx"),
    titleH1: "What Is a Network Effect Moat",
    bodyBlocks: [
      p(
        "A network effect moat is a competitive advantage that comes specifically from a network effect being durable enough to survive real competitive pressure, not just present. That distinction matters more than it sounds, because plenty of businesses have had genuine network effects and still lost their market position, which makes network effects one of the more misunderstood moat types: powerful in theory, conditional in practice."
      ),
      h2("Friendster: A Real Network Effect That Didn't Hold"),
      p(
        "Friendster launched in March 2002 as one of the first large-scale social networks and grew to tens of millions of users by around 2008, a genuine network effect by any definition: the platform got more useful as more of a person's real-world contacts joined it. That network effect did not save the company. Starting in mid-2009, following a site redesign and persistent technical problems, including load times that reportedly stretched to 40 seconds on a slow connection, users began migrating away in large numbers, first to Myspace and then to Facebook. Friendster shut down in June 2015. The network effect was real; it simply wasn't strong enough to outweigh a bad user experience once a better-executed alternative existed."
      ),
      ...chartImage(
        path.join(OUT, "charts", "011_friendster_timeline.png"),
        { widthIn: 6, caption: "Friendster's full lifecycle, from launch to peak to migration to shutdown." }
      ),
      h2("What Made the Difference: Execution, Not the Existence of a Network"),
      p(
        "Friendster's failure illustrates the core limitation of treating a network effect as self-sustaining. The mechanism only protects a business as long as staying feels better than leaving, on balance, including the switching cost of moving a social graph elsewhere. Poor execution, slow load times, unreliable service, frustrating changes, can erode that balance faster than the network effect can replace it, especially once a genuinely better-run competitor gives users somewhere else to go that still has their friends on it, or soon will."
      ),
      h2("Contrast: Network Effects That Have Held for Decades"),
      p(
        "Payment networks are a useful counterexample. Visa and Mastercard's two-sided network effect, more merchants accepting the card makes it more useful to cardholders, more cardholders carrying it makes it more valuable to merchants, has held for decades rather than years, reinforced by trust, regulatory relationships, and consistent execution rather than a single product redesign away from unraveling. The difference isn't that payment networks have a fundamentally stronger type of network effect than social platforms did; it's that execution and reinforcing structural advantages kept the mechanism intact instead of letting a wave of user frustration overwhelm it."
      ),
      h2("How to Evaluate Whether a Network Effect Moat Will Hold"),
      p(
        "The useful question isn't whether a network effect exists, it's whether anything is actively protecting it from an execution failure or a well-run competitor. Regulatory relationships, switching costs layered on top of the network itself, and a track record of reliable execution through past competitive threats are all evidence the network effect is reinforced rather than standing alone. A network effect with none of that backing it is closer to a large, currently-happy user base than a moat."
      ),
      h2("Where MPLY's Screen Applies This Lesson"),
      p(
        "Network effects are named directly in the Strategy Shares Monopoly ETF's (MPLY) stated screening criteria, but Friendster's history is a useful check on how that criterion should actually be applied: the fund's broader thesis is built around durable market dominance, not the presence of a network effect in isolation."
      ),
      p([
        run(
          "A company whose network effect is unreinforced by industry concentration, real barriers to entry, or a track record through competitive pressure is a weaker fit for that thesis than one where the network effect is layered on top of other structural advantages, the same distinction Friendster and Visa illustrate above. MPLY's "
        ),
        link("official page", MPLY_URL),
        run(" lists its current holdings for readers who want to see how that distinction is applied today."),
      ]),
      h2("Sources"),
      ...sourceBullets([
        { label: "Wikipedia, \"Friendster\" (launch date, peak users, shutdown)", url: "https://en.wikipedia.org/wiki/Friendster" },
        { label: "MIT Technology Review, \"An Autopsy of a Dead Social Network\" (2009 decline, technical problems)", url: "https://www.technologyreview.com/s/511846/an-autopsy-of-a-dead-social-network/" },
        { label: "Strategy Shares Monopoly ETF official fund page (screening criteria)", url: MPLY_URL },
      ]),
    ],
    hashtags: ["#NetworkEffects", "#EconomicMoat", "#CompetitiveAdvantage", "#PlatformEconomics", "#MPLY", "#Investing"],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
