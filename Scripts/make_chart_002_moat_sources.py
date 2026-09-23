import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, chart_title, source_note, save_chart

apply_style()

sources = [
    "Cost Advantage",
    "Switching Costs",
    "Network Effects",
    "Brand /\nIntangible Assets",
    "Efficient Scale",
    "Regulatory /\nIP Barriers",
]

fig, ax = plt.subplots(figsize=(8, 5))
ax.axis("off")

cols, rows = 3, 2
box_w, box_h = 0.28, 0.36
gap_x, gap_y = 0.04, 0.10
start_x, start_y = 0.03, 0.52

for i, label in enumerate(sources):
    col = i % cols
    row = i // cols
    x = start_x + col * (box_w + gap_x)
    y = start_y - row * (box_h + gap_y)
    ax.add_patch(
        plt.Rectangle((x, y), box_w, box_h, facecolor=PRIMARY if row == 0 else SECONDARY,
                       edgecolor="none", alpha=0.92 if row == 0 else 0.85)
    )
    ax.text(x + box_w / 2, y + box_h / 2, label, ha="center", va="center",
             color="white" if row == 0 else TEXT, fontsize=10.5, fontweight="bold")

ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
chart_title(ax, "Six Sources of a Durable Competitive Advantage",
            "A conceptual framework, not specific to any single company")
source_note(fig, "Framework categories are standard equity-analysis moat classifications; not derived from a single proprietary source.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\002_six_sources_of_a_moat.png")
