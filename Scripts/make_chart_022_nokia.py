import matplotlib.pyplot as plt
from chart_style import PRIMARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: Nokia held 51% global mobile phone market share in 2007;
# its smartphone share had collapsed to below 3% by 2013. See Sources.
years = ["2007", "2013"]
values = [51, 3]

fig, ax = plt.subplots(figsize=(6.5, 5))
bars = ax.bar(years, values, color=[PRIMARY, MUTED], width=0.5)

for bar, v in zip(bars, values):
    ax.text(bar.get_x() + bar.get_width() / 2, v + 1.5, f"{v}%", ha="center", fontsize=14, color=TEXT, fontweight="bold")

ax.set_ylabel("Market share (%)", fontsize=11)
chart_title(ax, "Nokia's Market Share Collapse", "Global mobile share, 2007 vs. smartphone share, 2013")
ax.set_ylim(0, 60)
style_axes(ax, hide_spines=("top", "right"))
ax.yaxis.grid(True, color=GRID, linewidth=0.7)
ax.set_axisbelow(True)

source_note(fig, "Source: industry shipment data cited in business-strategy case studies of Nokia's decline. See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\022_nokia_collapse.png")
