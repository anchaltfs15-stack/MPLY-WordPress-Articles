import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import os

# Verified pioneer vs. second-mover dates (see Sources section in article 003):
# - AltaVista launched 1995; Google launched 1998, ~85% search share by 2001
# - Myspace founded 2003; Facebook launched 2004, overtook Myspace 2008-2009
# - Early touchscreen phones (IBM Simon 1994 onward); iPhone launched 2007
rows = [
    ("Search engines", "AltaVista", 1995, "Google", 1998),
    ("Social networks", "Myspace", 2003, "Facebook", 2004),
    ("Smartphones", "IBM Simon", 1994, "iPhone", 2007),
]

BLUE_PIONEER = "#8A9199"
BLUE_SECOND = "#2E5FA3"
TEXT = "#33393F"
GRID = "#D9DEE4"

fig, ax = plt.subplots(figsize=(8, 4.6), dpi=200)

for i, (cat, p_name, p_year, s_name, s_year) in enumerate(rows):
    y = len(rows) - i
    ax.plot([p_year, s_year], [y, y], color=GRID, linewidth=2, zorder=1)
    ax.scatter([p_year], [y], s=140, color=BLUE_PIONEER, zorder=2)
    ax.scatter([s_year], [y], s=140, color=BLUE_SECOND, zorder=2)
    close = (s_year - p_year) <= 2
    p_ha, s_ha = ("right", "left") if close else ("center", "center")
    p_dx, s_dx = (-0.15, 0.15) if close else (0, 0)
    ax.text(p_year + p_dx, y + 0.22, f"{p_name}\n{p_year}", ha=p_ha, fontsize=9.5, color=TEXT)
    ax.text(s_year + s_dx, y + 0.22, f"{s_name}\n{s_year}", ha=s_ha, fontsize=9.5, color=TEXT)
    ax.text(1991.5, y, cat, ha="left", va="center", fontsize=10.5, color=TEXT, fontweight="bold")

ax.set_xlim(1991, 2010)
ax.set_ylim(0.4, len(rows) + 0.9)
ax.set_yticks([])
ax.set_xlabel("Year", fontsize=11, color=TEXT)
ax.set_title("Pioneers vs. the Second Movers That Overtook Them", fontsize=13,
             color=TEXT, loc="left", pad=16, fontweight="bold")
for spine in ["top", "right", "left"]:
    ax.spines[spine].set_visible(False)
ax.spines["bottom"].set_color(GRID)
ax.xaxis.grid(True, color=GRID, linewidth=0.7)
ax.set_axisbelow(True)

# legend
ax.scatter([], [], s=100, color=BLUE_PIONEER, label="Pioneer")
ax.scatter([], [], s=100, color=BLUE_SECOND, label="Second mover")
ax.legend(loc="lower right", frameon=False, fontsize=9.5)

fig.text(0.02, -0.03, "Dates: AltaVista/Google search share, Myspace/Facebook overtake, IBM Simon/iPhone launch -- see Sources.",
          fontsize=8, color="#8A9199")

plt.tight_layout()
out = r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\003_pioneer_vs_second_mover.png"
os.makedirs(os.path.dirname(out), exist_ok=True)
plt.savefig(out, bbox_inches="tight")
print("saved", out)
