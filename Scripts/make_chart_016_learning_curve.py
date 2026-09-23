import matplotlib.pyplot as plt
import numpy as np
from chart_style import PRIMARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Illustrative Wright's Law shape: cost falls a fixed % with each doubling
# of cumulative production. Not a specific company's real cost data --
# the 20% figure is cited qualitatively in the article (aircraft, solar).
doublings = np.arange(0, 8)
cumulative_units = 2.0 ** doublings
cost = 100 * (0.80 ** doublings)  # 20% decline per doubling, illustrative

fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(cumulative_units, cost, marker="o", color=PRIMARY, linewidth=2.5, markersize=7)

ax.set_xscale("log", base=2)
ax.set_xlabel("Cumulative production (log scale, illustrative doublings)", fontsize=11)
ax.set_ylabel("Cost per unit (illustrative index, start = 100)", fontsize=11)
chart_title(ax, "The Learning Curve Shape", "Illustrative 20%-per-doubling decline, not real cost data")
style_axes(ax, hide_spines=("top", "right"))
ax.set_xticks(cumulative_units)
ax.set_xticklabels([f"{int(u)}x" for u in cumulative_units])

ax.annotate("Each doubling of cumulative\nproduction cuts cost by a\nroughly constant percentage",
            xy=(cumulative_units[3], cost[3]), xytext=(cumulative_units[4], cost[1]),
            fontsize=9.5, color=TEXT, arrowprops=dict(arrowstyle="->", color=MUTED, lw=1))

source_note(fig, "Shape illustrates Wright's Law (Theodore Wright, 1936); real-world decline rates vary by industry. See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\016_learning_curve.png")
