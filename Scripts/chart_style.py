"""
Shared chart style for the MPLY WordPress project.

Import these constants/helpers into every chart-generating script instead
of hardcoding colors or fonts. See CLAUDE.md's "Chart and visual style
guide" for the full rationale.

Usage:
    from chart_style import PRIMARY, MUTED, GRID, TEXT, style_axes, save_chart
"""

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Primary accent -- matches the docx template's own H2/hashtag blue
# (see wp_docx_helpers.js) so text and visuals read as one product.
PRIMARY = "#1F4E78"

# Secondary accent for a second series / de-emphasized comparison point.
SECONDARY = "#8AB4D8"

# Muted gray for annotations, source lines, and de-emphasized markers.
MUTED = "#8A9199"

# Gridlines and axis spines.
GRID = "#D9DEE4"

# Body/label text color.
TEXT = "#33393F"

# Chart title/label font. DejaVu Sans is matplotlib's default sans-serif
# and is distinct from the docx body's Georgia serif -- swap this for an
# actual brand font if the user supplies one.
FONT_FAMILY = "DejaVu Sans"

DPI = 200
DEFAULT_FIGSIZE = (8, 5)


def apply_style():
    """Call once per script before creating figures."""
    plt.rcParams["font.family"] = FONT_FAMILY
    plt.rcParams["text.color"] = TEXT
    plt.rcParams["axes.edgecolor"] = GRID
    plt.rcParams["axes.labelcolor"] = TEXT
    plt.rcParams["xtick.color"] = TEXT
    plt.rcParams["ytick.color"] = TEXT


def style_axes(ax, hide_spines=("top", "right")):
    """Apply the project's standard recessive-axes treatment to a chart."""
    for spine in hide_spines:
        ax.spines[spine].set_visible(False)
    for spine in ax.spines:
        if spine not in hide_spines:
            ax.spines[spine].set_color(GRID)
    ax.tick_params(colors=TEXT)


def chart_title(ax, text, subtitle=None):
    """Standard left-aligned, bold chart title, optionally with a muted
    subtitle line (e.g. an illustrative-data disclaimer)."""
    full = text if not subtitle else f"{text}\n{subtitle}"
    ax.set_title(full, fontsize=12.5, color=TEXT, loc="left", pad=14, fontweight="bold")


def source_note(fig, text, x=0.02, y=-0.02):
    """Standard muted source/disclaimer line at the bottom-left of a figure."""
    fig.text(x, y, text, fontsize=8.5, color=MUTED)


def save_chart(fig, out_path, **kwargs):
    import os
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    fig.savefig(out_path, dpi=DPI, bbox_inches="tight", **kwargs)
    print("saved", out_path)
