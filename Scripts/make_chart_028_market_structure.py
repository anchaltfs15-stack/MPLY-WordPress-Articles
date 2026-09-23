import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, chart_title, source_note, save_chart

apply_style()

stages = [
    ("Perfect\nCompetition", "Many sellers,\nno pricing power", "#C9D6E3"),
    ("Monopolistic\nCompetition", "Many sellers,\ndifferentiated products", "#9FB8CF"),
    ("Oligopoly", "A few large sellers,\nmutual awareness", "#5F84AC"),
    ("Monopoly", "One seller,\nprice-setting power", PRIMARY),
]

fig, ax = plt.subplots(figsize=(9, 4.6))
ax.axis("off")
ax.set_xlim(0, 4)
ax.set_ylim(0, 1.6)

w = 0.86
for i, (title, sub, color) in enumerate(stages):
    x = i + (1 - w) / 2
    rect = mpatches.FancyBboxPatch((x, 0.35), w, 0.7, boxstyle="round,pad=0.02,rounding_size=0.03",
                                     facecolor=color, edgecolor="none")
    ax.add_patch(rect)
    txt_color = "white" if i >= 2 else TEXT
    ax.text(i + 0.5, 0.78, title, ha="center", va="center", fontsize=11.5, fontweight="bold", color=txt_color)
    ax.text(i + 0.5, 0.55, sub, ha="center", va="center", fontsize=8.7, color=txt_color)
    if i < 3:
        ax.annotate("", xy=(i + 1.02, 0.7), xytext=(i + 0.98, 0.7),
                     arrowprops=dict(arrowstyle="->", color=MUTED, lw=1.5))

ax.text(2, 1.35, "Increasing market concentration and pricing power \u2192", ha="center", fontsize=10.5, color=MUTED, style="italic")

chart_title(ax, "Market Dominance Is a Spectrum, Monopoly Is One End of It", "Legal \"monopoly power\" is a specific finding, not just \"the biggest company\"")
source_note(fig, "Standard industrial-organization economics framework; not specific to any single company or case.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\028_market_structure_spectrum.png")
