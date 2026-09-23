import matplotlib.pyplot as plt
import numpy as np
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, chart_title, source_note, save_chart

apply_style()

spokes = ["Hardware", "Software /\nOS", "Services /\nSubscriptions", "Accessories", "Developer\nEcosystem", "Cross-device\nSync"]

fig, ax = plt.subplots(figsize=(7.5, 6.2))
ax.axis("off")
ax.set_xlim(-1.5, 1.5)
ax.set_ylim(-1.5, 1.5)
ax.set_aspect("equal")

n = len(spokes)
angles = np.linspace(90, 90 - 360, n, endpoint=False) * np.pi / 180
r = 1.15

for angle, label in zip(angles, spokes):
    x, y = np.cos(angle) * r, np.sin(angle) * r
    ax.plot([0, x * 0.78], [0, y * 0.78], color=GRID, linewidth=2, zorder=1)
    circ = plt.Circle((x, y), 0.34, facecolor=SECONDARY, edgecolor="none", zorder=2)
    ax.add_patch(circ)
    ax.text(x, y, label, ha="center", va="center", fontsize=9.5, color=TEXT, fontweight="bold", zorder=3)

hub = plt.Circle((0, 0), 0.5, facecolor=PRIMARY, edgecolor="none", zorder=2)
ax.add_patch(hub)
ax.text(0, 0, "Core\nProduct", ha="center", va="center", fontsize=11, color="white", fontweight="bold", zorder=3)

chart_title(ax, "How an Ecosystem Moat Is Built", "Each connected layer raises the cost of leaving the whole system, not just one product")
source_note(fig, "Conceptual framework; not specific to any single company's actual product lineup.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\018_ecosystem_moat.png")
