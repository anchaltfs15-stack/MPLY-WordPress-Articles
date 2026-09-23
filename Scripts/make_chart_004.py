import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm

# Data: MPLY top-10 holdings by weight (stockanalysis.com, fetched 2026-09-23)
labels = ["NVDA", "GOOG", "AAPL", "MSFT", "AMZN", "TSM", "SPCX", "META", "AVGO", "TSLA"]
weights = [10.65, 9.31, 9.21, 8.15, 6.04, 5.01, 4.84, 3.96, 3.82, 3.40]

# sort descending (already sorted, but keep explicit)
pairs = sorted(zip(labels, weights), key=lambda x: -x[1])
labels, weights = zip(*pairs)

BLUE = "#2E5FA3"
GRID = "#D9DEE4"
TEXT = "#33393F"

fig, ax = plt.subplots(figsize=(8, 5), dpi=200)
y_pos = range(len(labels))
bars = ax.barh(y_pos, weights, color=BLUE, height=0.62)

ax.set_yticks(list(y_pos))
ax.set_yticklabels(labels, fontsize=12, color=TEXT)
ax.invert_yaxis()  # largest at top

ax.set_xlabel("Portfolio weight (%)", fontsize=11, color=TEXT)
ax.set_title(
    "MPLY Top 10 Holdings by Weight\n(about 64% of total fund assets)",
    fontsize=13, color=TEXT, loc="left", pad=14, fontweight="bold"
)

ax.set_xlim(0, 12)
ax.xaxis.grid(True, color=GRID, linewidth=0.8)
ax.set_axisbelow(True)
for spine in ["top", "right", "left"]:
    ax.spines[spine].set_visible(False)
ax.spines["bottom"].set_color(GRID)
ax.tick_params(axis="both", length=0)

for bar, w in zip(bars, weights):
    ax.text(w + 0.15, bar.get_y() + bar.get_height() / 2, f"{w:.2f}%",
             va="center", fontsize=10.5, color=TEXT)

fig.text(0.02, -0.02, "Source: stockanalysis.com, fetched 2026-09-23", fontsize=8.5, color="#8A9199")

plt.tight_layout()
out = r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\004_mply_top10_holdings.png"
import os
os.makedirs(os.path.dirname(out), exist_ok=True)
plt.savefig(out, bbox_inches="tight")
print("saved", out)
