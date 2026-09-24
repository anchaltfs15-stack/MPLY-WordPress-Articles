import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: Graham's cigar-butt/deep-value approach preceded Buffett's 1959
# meeting with Munger; Novy-Marx's profitability-factor paper followed in
# 2013. See Sources in article.
events = [
    (1949, "Graham's \"The\nIntelligent Investor\":\ndeep-value investing"),
    (1959, "Buffett meets\nMunger; shift toward\nquality begins"),
    (2013, "Novy-Marx publishes\nthe profitability\nfactor research"),
]

fig, ax = plt.subplots(figsize=(8.5, 4.4))
years = [e[0] for e in events]
ax.plot(years, [1]*len(years), color=GRID, linewidth=2, zorder=1)

colors = [MUTED, PRIMARY, PRIMARY]
label_dx = {1949: -0.6, 1959: 0.6, 2013: 0}
label_ha = {1949: "right", 1959: "left", 2013: "center"}
for (year, label), color in zip(events, colors):
    ax.scatter([year], [1], s=150, color=color, zorder=2)
    dx = label_dx[year]
    ha = label_ha[year]
    ax.text(year + dx, 1.28, f"{year}", ha=ha, fontsize=12, color=TEXT, fontweight="bold")
    ax.text(year + dx, 1.14, label, ha=ha, fontsize=9, color=TEXT)

ax.set_xlim(1945, 2018)
ax.set_ylim(0.55, 1.6)
ax.set_yticks([])
ax.set_xlabel("Year", fontsize=11)
chart_title(ax, "From Cigar Butts to Quality: A 60-Year Arc", "Practitioner shift preceded academic validation by decades")
style_axes(ax, hide_spines=("top", "right", "left"))

source_note(fig, "Sources: Graham (1949); Buffett/Munger histories; Novy-Marx (2013), \"The Other Side of Value.\" See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\039_quality_investing_timeline.png")
