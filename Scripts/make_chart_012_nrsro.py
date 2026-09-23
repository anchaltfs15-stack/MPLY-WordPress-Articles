import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: as of March 2024, 10 NRSROs exist; the 3 "large" ones
# (S&P, Moody's, Fitch) hold 91% of NRSRO revenue. See Sources in article.
labels = ["S&P, Moody's, Fitch\n(3 of 10 NRSROs)", "7 other NRSROs"]
values = [91, 9]
colors = [PRIMARY, GRID]

fig, ax = plt.subplots(figsize=(7.5, 5))
wedges, texts, autotexts = ax.pie(
    values, labels=None, colors=colors, startangle=90, counterclock=False,
    wedgeprops=dict(width=0.42, edgecolor="white", linewidth=2),
    autopct=lambda p: f"{p:.0f}%", pctdistance=0.79,
)
for at in autotexts:
    at.set_color("white")
    at.set_fontsize(13)
    at.set_fontweight("bold")
autotexts[1].set_color(TEXT)

ax.legend(wedges, labels, loc="center", bbox_to_anchor=(0.5, -0.08), ncol=1,
          frameon=False, fontsize=10)
chart_title(ax, "Credit Rating Revenue Is Concentrated Among Three Firms", "S&P, Moody's, and Fitch share of NRSRO revenue, as of March 2024")
source_note(fig, "Source: Congressional Research Service, \"Credit Rating Agencies: Background and Regulatory Issues.\" See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\012_nrsro_concentration.png")
