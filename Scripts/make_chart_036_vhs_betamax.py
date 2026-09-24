import matplotlib.pyplot as plt
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()

# Verified: VHS ~60% of North American market by 1980; Betamax fell to
# ~25% of US VCR sales by 1981; VHS ~90% of the US market by 1987.
years = ["1980", "1981", "1987"]
vhs = [60, 75, 90]
beta = [40, 25, 10]

fig, ax = plt.subplots(figsize=(8, 5))
x = range(len(years))
width = 0.55

bottom = [0, 0, 0]
b1 = ax.bar(x, vhs, width, label="VHS", color=PRIMARY, bottom=bottom)
b2 = ax.bar(x, beta, width, label="Betamax", color=MUTED, bottom=vhs)

for i in x:
    ax.text(i, vhs[i] / 2, f"{vhs[i]}%", ha="center", va="center", fontsize=11, color="white", fontweight="bold")
    ax.text(i, vhs[i] + beta[i] / 2, f"{beta[i]}%", ha="center", va="center", fontsize=11, color=TEXT, fontweight="bold")

ax.set_xticks(list(x))
ax.set_xticklabels(years, fontsize=11)
ax.set_ylabel("Approximate market share (%)", fontsize=11)
chart_title(ax, "How Fast a Network Effect Can Tip a Market", "VHS vs. Betamax, U.S. home video format share")
style_axes(ax, hide_spines=("top", "right"))
ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.08), ncol=2, frameon=False, fontsize=10)
ax.set_ylim(0, 100)

source_note(fig, "Source: industry sales data cited in format-war histories (Wikipedia, \"Videotape format war\"). See Sources below.")

save_chart(fig, r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts\036_vhs_betamax.png")
