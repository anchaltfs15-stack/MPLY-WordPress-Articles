import matplotlib.pyplot as plt
import numpy as np
from chart_style import PRIMARY, SECONDARY, MUTED, GRID, TEXT, apply_style, style_axes, chart_title, source_note, save_chart

apply_style()
OUT = r"C:\Users\SrimanNarayan\OneDrive - TransForm Solutions (P) Limited\MFunds_WP Articles\Articles\2026-09-28_Set_01\charts"

# 1. Accrual gap (044) — illustrative net income vs operating cash flow
fig, ax = plt.subplots(figsize=(8, 5))
q = ["Q1", "Q2", "Q3", "Q4"]
ni = [20, 24, 29, 35]
ocf = [19, 20, 21, 20]
x = np.arange(len(q))
ax.plot(x, ni, marker="o", color=PRIMARY, linewidth=2.5, label="Reported net income")
ax.plot(x, ocf, marker="o", color=MUTED, linewidth=2.5, label="Operating cash flow")
ax.set_xticks(x); ax.set_xticklabels(q)
ax.set_ylabel("$ millions (illustrative)")
chart_title(ax, "When Earnings Outrun Cash", "Illustrative example: a widening gap between net income and operating cash flow")
style_axes(ax, hide_spines=("top", "right"))
ax.legend(frameon=False, loc="upper left")
source_note(fig, "Illustrative example, not real company data. Constructed to demonstrate the accrual-gap concept.")
save_chart(fig, f"{OUT}/044_accrual_gap.png")

# 2. Cash conversion cycle breakdown (045)
fig, ax = plt.subplots(figsize=(8, 4))
dio, dso, dpo = 45, 30, 35
ax.barh(["Illustrative company"], [dio], color=PRIMARY, label="Days Inventory Outstanding")
ax.barh(["Illustrative company"], [dso], left=[dio], color=SECONDARY, label="Days Sales Outstanding")
ax.barh(["Illustrative company"], [-dpo], color=MUTED, label="Days Payable Outstanding (offset)")
ax.axvline(0, color=TEXT, linewidth=0.8)
ax.set_xlabel("Days")
chart_title(ax, "The Cash Conversion Cycle, Visualized", "Illustrative example: DIO + DSO - DPO = 40 days to convert spending into cash")
style_axes(ax, hide_spines=("top", "right"))
ax.legend(frameon=False, loc="lower right", fontsize=8)
source_note(fig, "Illustrative example, not real company data. Net cycle shown: 45 + 30 - 35 = 40 days.")
save_chart(fig, f"{OUT}/045_cash_conversion_cycle.png")

# 3. Operating leverage (046)
fig, ax = plt.subplots(figsize=(8, 5))
labels = ["Revenue\nchange", "Profit change\n(high fixed costs)", "Profit change\n(low fixed costs)"]
values = [10, 28, 11]
colors = [MUTED, PRIMARY, SECONDARY]
bars = ax.bar(labels, values, color=colors, width=0.5)
for bar, v in zip(bars, values):
    ax.text(bar.get_x() + bar.get_width() / 2, v + 0.8, f"+{v}%", ha="center", fontsize=12, fontweight="bold", color=TEXT)
ax.set_ylabel("Percent change (illustrative)")
chart_title(ax, "Same Revenue Change, Different Profit Outcomes", "Illustrative example: a 10% revenue increase amplified by cost structure")
style_axes(ax, hide_spines=("top", "right"))
source_note(fig, "Illustrative example, not real company data. Demonstrates how fixed-cost intensity amplifies profit swings.")
save_chart(fig, f"{OUT}/046_operating_leverage.png")

# 4. Margin waterfall (047 & 048, shared)
fig, ax = plt.subplots(figsize=(8, 5))
stages = ["Revenue", "Gross\nProfit", "Operating\nProfit"]
vals = [100, 40, 12]
bars = ax.bar(stages, vals, color=[MUTED, PRIMARY, SECONDARY], width=0.5)
for bar, v, lbl in zip(bars, vals, ["100%", "40% gross margin", "12% operating margin"]):
    ax.text(bar.get_x() + bar.get_width() / 2, v + 2, lbl, ha="center", fontsize=10, color=TEXT)
ax.set_ylabel("$ per $100 of revenue (illustrative)")
chart_title(ax, "From Revenue to Operating Profit", "Illustrative example: where gross margin and operating margin are measured")
style_axes(ax, hide_spines=("top", "right"))
source_note(fig, "Illustrative example, not real company data. Demonstrates the gap between gross and operating margin.")
save_chart(fig, f"{OUT}/047_margin_waterfall.png")

# 5. Churn / LTV sensitivity (049, 050, 051 shared)
fig, ax = plt.subplots(figsize=(8, 5))
churn = np.array([2, 4, 6, 8])
arpu, margin = 100, 0.70
ltv = arpu * margin / (churn / 100)
ax.plot(churn, ltv, marker="o", color=PRIMARY, linewidth=2.5)
for c, v in zip(churn, ltv):
    ax.text(c, v + 150, f"${v:,.0f}", ha="center", fontsize=9, color=TEXT)
ax.set_xlabel("Monthly churn rate (%)")
ax.set_ylabel("Estimated lifetime value ($, illustrative)")
chart_title(ax, "Why Churn Drives Lifetime Value", "Illustrative example: $100/month revenue, 70% gross margin, at varying churn rates")
style_axes(ax, hide_spines=("top", "right"))
source_note(fig, "Illustrative example. LTV = (ARPU x gross margin) / churn rate; not real company data.")
save_chart(fig, f"{OUT}/049_churn_ltv_sensitivity.png")

# 6. LTV:CAC ratio and payback (052)
fig, ax = plt.subplots(figsize=(8, 5))
ratios_labels = ["1:1\n(unsustainable)", "3:1\n(commonly cited minimum)", "5:1\n(strong)"]
ratios_vals = [1, 3, 5]
bars = ax.bar(ratios_labels, ratios_vals, color=[MUTED, PRIMARY, SECONDARY], width=0.5)
for bar, v in zip(bars, ratios_vals):
    ax.text(bar.get_x() + bar.get_width() / 2, v + 0.15, f"{v}:1", ha="center", fontsize=12, fontweight="bold", color=TEXT)
ax.set_ylabel("Lifetime value : acquisition cost")
chart_title(ax, "The LTV:CAC Ratio in Context", "Illustrative benchmarks commonly referenced when evaluating unit economics")
style_axes(ax, hide_spines=("top", "right"))
source_note(fig, "Illustrative benchmarks. The 3:1 threshold is a commonly cited industry convention, not a fixed rule.")
save_chart(fig, f"{OUT}/052_ltv_cac_ratio.png")

print("All 6 charts saved.")
