import matplotlib.pyplot as plt
from chart_style import PRIMARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: British Airways holds 51% of Heathrow takeoff/landing slot
# capacity; Heathrow itself operates at ~99% of physical capacity.
labels = ["British Airways'\nshare of Heathrow slots", "Heathrow's\nrunway capacity in use"]
values = [51, 99]

fig, ax = plt.subplots(figsize=(7, 5))
bars = ax.barh(labels, values, color=[PRIMARY, MUTED], height=0.5)

for bar, v in zip(bars, values):
    ax.text(v + 1.5, bar.get_y() + bar.get_height() / 2, f"{v}%", va="center", fontsize=13, color=TEXT, fontweight="bold")

ax.set_xlim(0, 110)
ax.set_xlabel("Percent", fontsize=11)
chart_title(ax, "Why a New Airline Can't Just Fly Into Heathrow", "A capacity-constrained airport turns slot access into a structural barrier")
style_axes(ax, hide_spines=("top", "right"))
ax.xaxis.grid(True, color=GRID, linewidth=0.7)
ax.set_axisbelow(True)

source_note(fig, "Source: IBA.aero and UK House of Commons Library analysis of Heathrow slot allocation. See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\037_heathrow_slots.png")
