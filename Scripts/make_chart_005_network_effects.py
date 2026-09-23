import matplotlib.pyplot as plt
import numpy as np
from chart_style import PRIMARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Illustrative only: conceptual value-per-user curve as participation grows.
# Not Metcalfe's Law data or any real platform's measured figures.
x = np.linspace(1, 10, 200)
y = 0.6 * x ** 1.7

fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(x, y, color=PRIMARY, linewidth=2.5)
ax.fill_between(x, 0, y, color=PRIMARY, alpha=0.08)

ax.set_xlabel("Number of participants (illustrative)", fontsize=11)
ax.set_ylabel("Value to each participant (illustrative)", fontsize=11)
chart_title(ax, "How Network Effects Compound", "A conceptual illustration, not one platform's data")

ax.set_xticks([])
ax.set_yticks([])
style_axes(ax, hide_spines=("top", "right"))

ax.annotate("Early stage: value grows\nslowly, few participants",
            xy=(2, y[np.argmin(np.abs(x - 2))]), xytext=(1.2, y.max() * 0.55),
            fontsize=9.5, color=TEXT, arrowprops=dict(arrowstyle="->", color=MUTED, lw=1))
ax.annotate("Compounding stage: each new\nparticipant adds more value\nthan the last",
            xy=(8, y[np.argmin(np.abs(x - 8))]), xytext=(4.3, y.max() * 0.92),
            fontsize=9.5, color=TEXT, arrowprops=dict(arrowstyle="->", color=MUTED, lw=1))

source_note(plt.gcf(), "Conceptual illustration only; not derived from any specific platform's measured user or value data.")

save_chart(plt.gcf(), r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\005_network_effects_curve.png")
