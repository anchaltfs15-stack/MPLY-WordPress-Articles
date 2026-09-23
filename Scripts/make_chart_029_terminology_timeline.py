import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: Porter's Competitive Strategy (1980) and Competitive Advantage
# (1985); Buffett's shareholder letters used "moat" from 1986 onward. See Sources.
events = [
    (1980, "Porter, \"Competitive\nStrategy\"", PRIMARY),
    (1985, "Porter, \"Competitive\nAdvantage\"", PRIMARY),
    (1986, "Buffett begins using\n\"moat\" in Berkshire\nletters", SECONDARY),
]

fig, ax = plt.subplots(figsize=(8, 4.2))

years = [e[0] for e in events]
ax.plot(years, [1]*len(years), color=GRID, linewidth=2, zorder=1)

label_dx = {1980: 0, 1985: -0.3, 1986: 0.3}
label_ha = {1980: "center", 1985: "right", 1986: "left"}
for year, label, color in events:
    ax.scatter([year], [1], s=150, color=color, zorder=2)
    dx = label_dx[year]
    ha = label_ha[year]
    ax.text(year + dx, 1.28, f"{year}", ha=ha, fontsize=12, color=TEXT, fontweight="bold")
    ax.text(year + dx, 1.16, label, ha=ha, fontsize=9, color=TEXT)

ax.set_xlim(1978, 1988)
ax.set_ylim(0.6, 1.6)
ax.set_yticks([])
ax.set_xlabel("Year", fontsize=11)
chart_title(ax, "Two Vocabularies, the Same Underlying Idea", "Strategy academia and investing built parallel language within a few years of each other")
style_axes(ax, hide_spines=("top", "right", "left"))

source_note(fig, "Sources: Porter (1980, 1985); Wikipedia, \"Economic moat\" (Buffett's shareholder-letter usage from 1986). See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\029_terminology_timeline.png")
