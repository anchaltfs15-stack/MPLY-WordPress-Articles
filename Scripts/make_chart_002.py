import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import os

# Illustrative conceptual curve only -- NOT company-specific or real data.
# Generic economies-of-scale relationship: average unit cost declines as
# production/purchase volume increases, flattening at high volume.
x = np.linspace(1, 10, 200)
y = 3.2 / np.sqrt(x) + 0.8

BLUE = "#2E5FA3"
GRID = "#D9DEE4"
TEXT = "#33393F"

fig, ax = plt.subplots(figsize=(8, 5), dpi=200)
ax.plot(x, y, color=BLUE, linewidth=2.5)

ax.set_xlabel("Production / purchase volume (illustrative)", fontsize=11, color=TEXT)
ax.set_ylabel("Average cost per unit (illustrative)", fontsize=11, color=TEXT)
ax.set_title(
    "How Scale Lowers Average Unit Cost\n(a conceptual illustration, not company-specific data)",
    fontsize=12.5, color=TEXT, loc="left", pad=14, fontweight="bold"
)

ax.set_xticks([])
ax.set_yticks([])
for spine in ["top", "right"]:
    ax.spines[spine].set_visible(False)
ax.spines["left"].set_color(GRID)
ax.spines["bottom"].set_color(GRID)

ax.annotate("Fixed costs spread\nover more units", xy=(2.2, y[np.argmin(np.abs(x-2.2))]),
            xytext=(3.2, 2.6), fontsize=9.5, color=TEXT,
            arrowprops=dict(arrowstyle="->", color="#8A9199", lw=1))
ax.annotate("Cost advantage\nnarrows at scale", xy=(8.5, y[np.argmin(np.abs(x-8.5))]),
            xytext=(6.3, 0.55), fontsize=9.5, color=TEXT,
            arrowprops=dict(arrowstyle="->", color="#8A9199", lw=1))

fig.text(0.02, -0.02, "Illustrative relationship only; not derived from any specific company's reported figures.",
          fontsize=8.5, color="#8A9199")

plt.tight_layout()
out = r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\002_economies_of_scale.png"
os.makedirs(os.path.dirname(out), exist_ok=True)
plt.savefig(out, bbox_inches="tight")
print("saved", out)
