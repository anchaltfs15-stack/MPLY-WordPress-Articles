import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Illustrative only: conceptual ROIC vs WACC spread for a moat business vs a
# commodity business. Not any specific company's reported figures.
categories = ["Business with a\ndurable moat", "Commodity\nbusiness"]
roic = [22, 9]
wacc = [8, 8]

fig, ax = plt.subplots(figsize=(7.5, 5.2))
x = range(len(categories))
width = 0.32

bars1 = ax.bar([i - width/2 for i in x], roic, width, label="ROIC", color=PRIMARY)
bars2 = ax.bar([i + width/2 for i in x], wacc, width, label="WACC (cost of capital)", color=MUTED)

for bars in (bars1, bars2):
    for b in bars:
        ax.text(b.get_x() + b.get_width()/2, b.get_height() + 0.5, f"{b.get_height():.0f}%",
                 ha="center", fontsize=10.5, color=TEXT, fontweight="bold")

ax.set_xticks(list(x))
ax.set_xticklabels(categories, fontsize=10.5)
ax.set_ylabel("Illustrative percent", fontsize=11)
chart_title(ax, "The Spread That Actually Matters", "Illustrative ROIC vs. WACC, not one company's reported figures")
style_axes(ax, hide_spines=("top", "right"))
ax.legend(loc="upper right", frameon=False, fontsize=9.5)
ax.set_ylim(0, 28)

ax.annotate("Wide, sustained spread =\nvalue actually being created",
            xy=(0, 22), xytext=(0.35, 24.5), fontsize=9, color=TEXT,
            arrowprops=dict(arrowstyle="->", color=MUTED, lw=1))
ax.annotate("Spread near zero =\nno real economic profit",
            xy=(1, 9), xytext=(1.05, 15), fontsize=9, color=TEXT,
            arrowprops=dict(arrowstyle="->", color=MUTED, lw=1))

source_note(fig, "Illustrative figures only, not derived from any specific company's financial statements.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\026_roic_wacc_spread.png")
