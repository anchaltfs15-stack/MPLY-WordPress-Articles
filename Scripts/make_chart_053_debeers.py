import matplotlib.pyplot as plt
from chart_style import PRIMARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: De Beers controlled ~80-90% of world rough diamond production
# and sales at its mid-20th-century peak via the Central Selling
# Organisation; share fell below 60% by the early 2000s, and the formal
# monopoly ended following a 2005 US antitrust settlement.
labels = ["Mid-20th-century peak", "Early 2000s"]
values = [90, 60]

fig, ax = plt.subplots(figsize=(7, 5))
bars = ax.bar(labels, values, color=[PRIMARY, MUTED], width=0.45)
for bar, v in zip(bars, values):
    ax.text(bar.get_x() + bar.get_width() / 2, v + 2, f"~{v}%", ha="center", fontsize=13, color=TEXT, fontweight="bold")

ax.set_ylabel("Share of world rough diamond production", fontsize=11)
chart_title(ax, "Even a Textbook Monopoly Isn't Permanent", "De Beers' share of global rough diamond production and sales")
ax.set_ylim(0, 100)
style_axes(ax, hide_spines=("top", "right"))
ax.yaxis.grid(True, color=GRID, linewidth=0.7)
ax.set_axisbelow(True)

source_note(fig, "Source: Wikipedia, \"De Beers\" (Central Selling Organisation, market share history, 2005 antitrust settlement). See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\053_debeers_share.png")
