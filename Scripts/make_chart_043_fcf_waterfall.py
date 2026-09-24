import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Illustrative only: conceptual bridge from net income to free cash flow.
# Not derived from any specific company's actual financial statements.
steps = [
    ("Net\nIncome", 100, 100, PRIMARY),
    ("+ D&A", 20, 120, SECONDARY),
    ("\u2212 Working\ncapital chg.", -15, 105, MUTED),
    ("\u2212 CapEx", -35, 70, MUTED),
    ("= Free\nCash Flow", 70, 70, PRIMARY),
]

fig, ax = plt.subplots(figsize=(8.5, 5))

x = range(len(steps))
running = 0
for i, (label, delta, level, color) in enumerate(steps):
    if label.startswith("Net") or label.startswith("="):
        bottom = 0
        height = level
    else:
        bottom = min(running, running + delta)
        height = abs(delta)
    ax.bar(i, height, bottom=bottom, color=color, width=0.6)
    label_y = bottom + height + 3
    val_label = f"{delta:+d}" if not (label.startswith("Net") or label.startswith("=")) else f"{level}"
    ax.text(i, label_y, val_label, ha="center", fontsize=11, color=TEXT, fontweight="bold")
    if label.startswith("Net") or label.startswith("="):
        running = level
    else:
        running += delta

ax.set_xticks(list(x))
ax.set_xticklabels([s[0] for s in steps], fontsize=9.5)
ax.set_ylabel("Illustrative index (Net Income = 100)", fontsize=10.5)
chart_title(ax, "From Net Income to Free Cash Flow", "An illustrative bridge, not one company's actual figures")
style_axes(ax, hide_spines=("top", "right"))
ax.set_ylim(0, 145)

source_note(fig, "Illustrative figures only, not derived from any specific company's financial statements.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\043_fcf_waterfall.png")
