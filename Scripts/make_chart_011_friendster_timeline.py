import matplotlib.pyplot as plt
from chart_style import PRIMARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified dates (see article Sources): Wikipedia "Friendster"; MIT Technology
# Review "An Autopsy of a Dead Social Network"; productmint.com.
events = [
    (2002, "Launched\n(March 2002)"),
    (2008, "Peak: tens of millions\nof users worldwide"),
    (2009, "Traffic collapses after a\nredesign; users migrate\nto Myspace, then Facebook"),
    (2015, "Shuts down\n(June 2015)"),
]

fig, ax = plt.subplots(figsize=(8, 4.6))

years = [e[0] for e in events]
ax.plot(years, [1] * len(years), color=GRID, linewidth=2, zorder=1)
ax.scatter(years, [1] * len(years), s=140, color=PRIMARY, zorder=2)

for i, (year, label) in enumerate(events):
    offset = 0.35 if i % 2 == 0 else -0.55
    va = "bottom" if i % 2 == 0 else "top"
    ax.text(year, 1 + offset, f"{year}", ha="center", fontsize=11, color=TEXT, fontweight="bold", va=va)
    ax.text(year, 1 + offset + (0.12 if i % 2 == 0 else -0.12), label, ha="center", fontsize=9, color=TEXT, va=va)

ax.set_ylim(0, 2)
ax.set_xlim(2000, 2017)
ax.set_yticks([])
ax.set_xlabel("Year", fontsize=11)
chart_title(ax, "Friendster: A Network Effect That Didn't Hold")
style_axes(ax, hide_spines=("top", "right", "left"))

source_note(fig, "Dates: Wikipedia, \"Friendster\"; MIT Technology Review, \"An Autopsy of a Dead Social Network.\" See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\011_friendster_timeline.png")
