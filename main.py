#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Rig Veda Explorer - Python Visualization Suite

This script translates the interactive JavaScript visualizations from the
Rig Veda Explorer HTML dashboard into a series of static plots
using Python's matplotlib, seaborn, pandas, networkx, and geopandas libraries.

It replicates the data and the "Apple-esque" dark theme (black background,
saffron/orange accent) as requested.
"""

# --- 1. IMPORT LIBRARIES ---
print("Loading libraries...")
import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import networkx as nx
import squarify
import geopandas
from shapely.geometry import Point
import re
from itertools import combinations
import warnings

path_mandalas = "10_mandalas.txt"
path_lexicon = "lexicon.txt"

with open("path_mandalas", "r") as mandalas:
    rigVedaData = mandalas.read()
with open("lexicon.txt", "r") as lexicon:
    lexiconData = lexicon.read()

# Suppress warnings (e.g., from geopandas on empty world regions)
warnings.filterwarnings('ignore')

# --- 2. PASTE ALL DATA FROM HTML ---
# The user requested all datasets to be pasted in the file.

print("Loading datasets...")

# 2.3. Deity Narrative Data
deityNarrativeData = {
    'Indra': {'Slaying Vṛtra (Release of Waters)': 40, 'Soma Drinking & Ritual Empowerment': 25, 'Battles with Dāsas/Dasyus': 20, 'Generosity (Maghavan)': 15},
    'Agni': {'Ritual Priest (Hotṛ) & Messenger (Dūta)': 35, 'Domestic Hearth Fire (Gṛhapati)': 25, 'Devourer of Oblations & Light Bringer': 20, 'Knower of All (Jātavedas)': 20},
    'Soma': {'The Sacred Plant & Ritual Drink': 50, 'The Deified Moon (Pavamāna)': 30, 'Inspiration for Poets & Vision': 15, 'Healer & Lord of Waters': 5},
    'Varuṇa': {'Upholder of Cosmic Order (Ṛta)': 45, 'Guardian of Oaths & Moral Law': 30, 'Association with Waters & the Sky': 15, 'Sin & Forgiveness': 10},
    'Uṣas': {'The Dawn, Bringer of Light': 55, 'Awakener of Life & Ritual': 25, 'Goddess of Wealth & Fortune': 15, 'Symbol of Transient Life': 5}
}

# 2.4. Concept Evolution Data
conceptEvolutionData = {
    'Indra': {'type': 'Deity', 'prominence': [25, 28, 22, 28, 25, 30, 20, 22, 10, 15], 'info': "Indra peaks in the family books as a heroic warrior. His prominence lessens slightly in the 10th Maṇḍala."},
    'Agni': {'type': 'Deity', 'prominence': [30, 18, 15, 12, 15, 12, 15, 18, 8, 10], 'info': "Agni is vital in all Maṇḍalas, especially the first. His role as the ritual fire makes him ubiquitous."},
    'Varuṇa': {'type': 'Deity', 'prominence': [8, 5, 7, 6, 8, 5, 12, 6, 2, 4], 'info': "Varuṇa, an older sovereign god, is most prominent in Maṇḍala 7, exploring his ethical aspect."},
    'Soma': {'type': 'Deity/Concept', 'prominence': [5, 5, 5, 5, 5, 5, 5, 5, 100, 5], 'info': "Soma's prominence explodes in Maṇḍala 9 (dedicated to 'Soma Pavamāna'). Present elsewhere as the ritual drink."},
    'Uṣas': {'type': 'Deity', 'prominence': [10, 3, 5, 4, 6, 4, 6, 5, 1, 3], 'info': "The Goddess of Dawn, Uṣas, is celebrated poetically, especially in earlier Maṇḍalas."},
    'Viṣṇu': {'type': 'Deity', 'prominence': [2, 1, 1, 2, 2, 1, 1, 2, 1, 4], 'info': "Viṣṇu is a minor deity in the Rig Veda, famous for his 'three strides'."},
    'Viśvāmitra (Rishi)': {'type': 'Rishi', 'prominence': [5, 2, 70, 5, 3, 2, 4, 3, 2, 6], 'info': "Prominence based on hymns attributed to Viśvāmitra's family, peaking expectedly in Mandala 3."},
    'Yajña (Concept)': {'type': 'Concept', 'prominence': [60, 55, 65, 50, 58, 62, 55, 50, 70, 45], 'info': "Simulated prominence of the core ritual concept across Mandalas, remaining consistently high but varying slightly."}
}

# 2.5. Meter Evolution Data
meterMandalaData = {
    'labels': ['M 1', 'M 2', 'M 3', 'M 4', 'M 5', 'M 6', 'M 7', 'M 8', 'M 9', 'M 10'],
    'Gāyatrī': [25, 5, 60, 15, 10, 10, 15, 30, 60, 20],
    'Triṣṭubh': [40, 85, 20, 70, 75, 75, 70, 40, 5, 40],
    'Jagatī': [15, 5, 5, 10, 10, 10, 10, 10, 2, 15],
    'Anuṣṭubh': [10, 2, 5, 2, 2, 2, 2, 10, 3, 15],
    'Other': [10, 3, 10, 3, 3, 3, 3, 8, 30, 10]
}

meterRishiData = {
    'Gṛtsamada (M. 2)': {'Gāyatrī': 5, 'Triṣṭubh': 90, 'Jagatī': 3, 'Other': 2},
    'Viśvāmitra (M. 3)': {'Gāyatrī': 65, 'Triṣṭubh': 25, 'Jagatī': 5, 'Other': 5},
    'Vāmadeva (M. 4)': {'Gāyatrī': 15, 'Triṣṭubh': 75, 'Jagatī': 5, 'Other': 5},
    'Atri (M. 5)': {'Gāyatrī': 10, 'Triṣṭubh': 80, 'Jagatī': 7, 'Other': 3},
    'Bharadvāja (M. 6)': {'Gāyatrī': 10, 'Triṣṭubh': 80, 'Jagatī': 5, 'Other': 5},
    'Vasiṣṭha (M. 7)': {'Gāyatrī': 15, 'Triṣṭubh': 75, 'Jagatī': 5, 'Other': 5}
}

# 2.6. Conceptual Constellations Data (Simulated)
conceptNetworkData = {
    'Ṛta (Cosmic Order)': {
        'info': "...",
        'nodes': [{'id': 1, 'label': 'Ṛta', 'value': 40, 'group': 0}, {'id': 2, 'label': 'Varuṇa', 'value': 25, 'group': 1}, {'id': 3, 'label': 'Agni', 'value': 20, 'group': 1}, {'id': 4, 'label': 'Satya (Truth)', 'value': 15, 'group': 0}, {'id': 5, 'label': 'Anṛta', 'value': 10, 'group': 2}, {'id': 6, 'label': 'Mitra', 'value': 10, 'group': 1}, {'id': 7, 'label': 'Path', 'value': 12, 'group': 3}],
        'edges': [{'from': 1, 'to': 2, 'value': 10}, {'from': 1, 'to': 3, 'value': 8}, {'from': 1, 'to': 4, 'value': 7}, {'from': 1, 'to': 5, 'value': 4}, {'from': 1, 'to': 6, 'value': 3}, {'from': 1, 'to': 7, 'value': 5}, {'from': 2, 'to': 6, 'value': 2}]
    },
    'Yajña (Ritual)': {
        'info': "...",
        'nodes': [{'id': 1, 'label': 'Yajña', 'value': 40, 'group': 0}, {'id': 2, 'label': 'Agni', 'value': 30, 'group': 1}, {'id': 3, 'label': 'Indra', 'value': 25, 'group': 1}, {'id': 4, 'label': 'Soma', 'value': 28, 'group': 3}, {'id': 5, 'label': 'Mantra', 'value': 15, 'group': 0}, {'id': 6, 'label': 'Deva (Gods)', 'value': 18, 'group': 1}],
        'edges': [{'from': 1, 'to': 2, 'value': 10}, {'from': 1, 'to': 3, 'value': 8}, {'from': 1, 'to': 4, 'value': 9}, {'from': 1, 'to': 5, 'value': 6}, {'from': 1, 'to': 6, 'value': 7}, {'from': 2, 'to': 4, 'value': 5}, {'from': 3, 'to': 4, 'value': 7}]
    },
    'Tapas (Austerity)': {
        'info': "...",
        'nodes': [{'id': 1, 'label': 'Tapas', 'value': 25, 'group': 0}, {'id': 2, 'label': 'Creation', 'value': 15, 'group': 3}, {'id': 3, 'label': 'Rishi', 'value': 10, 'group': 1}, {'id': 4, 'label': 'Mandala 10', 'value': 12, 'group': 2}, {'id': 5, 'label': 'Yajña', 'value': 18, 'group': 0}],
        'edges': [{'from': 1, 'to': 2, 'value': 8}, {'from': 1, 'to': 3, 'value': 6}, {'from': 1, 'to': 4, 'value': 5}, {'from': 1, 'to': 5, 'value': 3}]
    },
    'Vāk (Speech)': {
        'info': "...",
        'nodes': [{'id': 1, 'label': 'Vāk', 'value': 30, 'group': 0}, {'id': 2, 'label': 'Yajña', 'value': 25, 'group': 0}, {'id': 3, 'label': 'Mantra', 'value': 20, 'group': 0}, {'id': 4, 'label': 'Sarasvatī', 'value': 18, 'group': 1}, {'id': 5, 'label': 'Inspiration (Dhī)', 'value': 15, 'group': 0}, {'id': 6, 'label': 'Mandala 10', 'value': 10, 'group': 2}],
        'edges': [{'from': 1, 'to': 2, 'value': 9}, {'from': 1, 'to': 3, 'value': 10}, {'from': 1, 'to': 4, 'value': 7}, {'from': 1, 'to': 5, 'value': 6}, {'from': 1, 'to': 6, 'value': 4}, {'from': 2, 'to': 3, 'value': 8}]
    },
    'Deva (God)': {
        'info': "...",
        'nodes': [{'id': 1, 'label': 'Deva', 'value': 35, 'group': 1}, {'id': 2, 'label': 'Yajña', 'value': 28, 'group': 0}, {'id': 3, 'label': 'Asura', 'value': 15, 'group': 2}, {'id': 4, 'label': 'Indra', 'value': 20, 'group': 1}, {'id': 5, 'label': 'Agni', 'value': 18, 'group': 1}, {'id': 6, 'label': 'Soma', 'value': 16, 'group': 3}],
        'edges': [{'from': 1, 'to': 2, 'value': 10}, {'from': 1, 'to': 3, 'value': 5}, {'from': 1, 'to': 4, 'value': 8}, {'from': 1, 'to': 5, 'value': 7}, {'from': 2, 'to': 1, 'value': 9}, {'from': 2, 'to': 6, 'value': 6}]
    }
}

# 2.7. Socio-Material Data (Simulated)
socioMaterialData = {
    'animals': [{'name': 'Gau (Cow)', 'count': 250}, {'name': 'Aśva (Horse)', 'count': 210}, {'name': 'Aja (Goat)', 'count': 45}, {'name': 'Avi (Sheep)', 'count': 30}, {'name': 'Vṛka (Wolf)', 'count': 15}],
    'socialRoles': [{'name': 'Rājan (King)', 'count': 120}, {'name': 'Purohita (Priest)', 'count': 110}, {'name': 'Viś (People/Tribe)', 'count': 90}, {'name': 'Kavi (Poet)', 'count': 70}, {'name': 'Dāsa (Servant/Foe)', 'count': 50}],
    'valuables': {'name': "Valuables", 'children': [{'name': "Cattle (Go)", 'value': 250}, {'name': "Horses (Aśva)", 'value': 210}, {'name': "Gold (Hiraṇya)", 'value': 80}, {'name': "Chariots (Ratha)", 'value': 65}, {'name': "Food/Grain (Anna)", 'value': 40}]},
    'geography': [
        {'river': 'Sarasvatī', 'M1': 5, 'M2': 2, 'M3': 8, 'M4': 1, 'M5': 3, 'M6': 10, 'M7': 18, 'M8': 1, 'M9': 2, 'M10': 4},
        {'river': 'Sindhu', 'M1': 8, 'M2': 1, 'M3': 2, 'M4': 3, 'M5': 1, 'M6': 2, 'M7': 4, 'M8': 6, 'M9': 1, 'M10': 7},
        {'river': 'Paruṣṇī', 'M1': 2, 'M2': 0, 'M3': 0, 'M4': 1, 'M5': 2, 'M6': 0, 'M7': 5, 'M8': 1, 'M9': 0, 'M10': 1},
        {'river': 'Yamunā', 'M1': 1, 'M2': 0, 'M3': 0, 'M4': 0, 'M5': 1, 'M6': 0, 'M7': 2, 'M8': 0, 'M9': 0, 'M10': 1},
        {'river': 'Gaṅgā', 'M1': 0, 'M2': 0, 'M3': 0, 'M4': 0, 'M5': 0, 'M6': 1, 'M7': 0, 'M8': 0, 'M9': 0, 'M10': 1}
    ]
}

# 2.8. GeoMap Locations (from JS)
geoMapLocations = [
    {'name': "Sarasvatī River", 'lat': 29.5, 'lon': 76.0, 'certainty': 'high', 'info': "Central sacred river, likely Ghaggar-Hakra."},
    {'name': "Sindhu River (Indus)", 'lat': 31.0, 'lon': 71.0, 'certainty': 'high', 'info': "Major western river."},
    {'name': "Paruṣṇī River (Ravi)", 'lat': 31.5, 'lon': 73.0, 'certainty': 'high', 'info': "Site of the Battle of Ten Kings."},
    {'name': "Asiknī River (Chenab)", 'lat': 32.0, 'lon': 72.5, 'certainty': 'high', 'info': "One of the Punjab rivers."},
    {'name': "Śutudrī River (Sutlej)", 'lat': 30.5, 'lon': 75.0, 'certainty': 'high', 'info': "Conversed with Viśvāmitra."},
    {'name': "Vipāś River (Beas)", 'lat': 31.2, 'lon': 75.2, 'certainty': 'high', 'info': "Conversed with Viśvāmitra."},
    {'name': "Vitastā River (Jhelum)", 'lat': 32.8, 'lon': 73.5, 'certainty': 'high', 'info': "Westernmost Punjab river mentioned."},
    {'name': "Yamunā River", 'lat': 28.0, 'lon': 77.5, 'certainty': 'medium', 'info': "Mentioned less frequently, eastern river."},
    {'name': "Gaṅgā River (Ganges)", 'lat': 27.0, 'lon': 79.0, 'certainty': 'low', 'info': "Mentioned rarely, signifies eastern expansion."},
    {'name': "Kubhā River (Kabul)", 'lat': 34.5, 'lon': 69.0, 'certainty': 'medium', 'info': "Western river, modern Afghanistan."},
    {'name': "Gomatī River (Gomal)", 'lat': 32.2, 'lon': 70.5, 'certainty': 'medium', 'info': "Western tributary of the Indus."}
]

# 2.9. Theme Keywords (from JS)
themeKeywords = {
    'Cosmic Order (Ṛta)': ['ṛta', 'satya', 'dharma', 'vrata', 'varuṇa'],
    'Ritual & Sacrifice (Yajña)': ['yajña', 'soma', 'agni', 'hotṛ', 'adhvara', 'barhis', 'svāhā'],
    'Battle & Victory': ['indra', 'vṛtra', 'dasyu', 'śūra', 'vajra', 'battle', 'conquer'],
    'Wealth & Prosperity': ['go', 'aśva', 'rāyaḥ', 'vasu', 'dhana', 'maghavan', 'pūṣan', 'bhaga'],
    'Nature & Elements': ['sūrya', 'uṣas', 'vāyu', 'parjanya', 'āpaḥ', 'pṛthivī', 'dyauḥ'],
    'Poetry & Inspiration': ['kavi', 'dhī', 'brahman', 'sarasvatī', 'vāc', 'stoma', 'uktha']
}


# --- 3. STYLING & DATA PREPARATION ---
print("Applying visual style...")

# 3.1. Define the custom style based on the CSS
BG_COLOR = '#000000'
CARD_BG = '#1c1c1e'
ACCENT_COLOR = '#FF9933'
TEXT_COLOR = '#f5f5f7'
SECONDARY_TEXT_COLOR = '#8a8a8e'
BORDER_COLOR = '#38383a'
COLOR_PALETTE_ORANGES = sns.color_palette("Oranges", n_colors=6)
COLOR_PALETTE_PLASMA = sns.color_palette("plasma", n_colors=6)

# 3.2. Apply the style globally using matplotlib.rcParams
plt.style.use('dark_background')
plt.rcParams.update({
    'figure.facecolor': BG_COLOR,
    'axes.facecolor': CARD_BG,
    'text.color': TEXT_COLOR,
    'axes.labelcolor': SECONDARY_TEXT_COLOR,
    'xtick.color': SECONDARY_TEXT_COLOR,
    'ytick.color': SECONDARY_TEXT_COLOR,
    'axes.edgecolor': BORDER_COLOR,
    'grid.color': BORDER_COLOR,
    'legend.facecolor': CARD_BG,
    'legend.edgecolor': BORDER_COLOR,
    'font.family': 'sans-serif',
    'font.sans-serif': ['Arial', 'Helvetica', 'DejaVu Sans'], # Common fallbacks
    'figure.dpi': 100,
})

# 3.3. Prepare the main DataFrame
if not rigVedaData:
    print("CRITICAL: 'rigVedaData' is empty. Most plots will fail.")
    df = pd.DataFrame(columns=['mandala', 'hymn', 'verses', 'seer', 'divinity', 'meter'])
else:
    df = pd.DataFrame(rigVedaData)
    # Clean data: ensure numeric types
    df['mandala'] = pd.to_numeric(df['mandala'], errors='coerce')
    df['verses'] = pd.to_numeric(df['verses'], errors='coerce')
    # Clean string fields
    df['seer'] = df['seer'].astype(str)
    df['divinity'] = df['divinity'].astype(str)
    df['meter'] = df['meter'].astype(str)

print(f"Data loaded into DataFrame with {len(df)} hymns.")


# --- 4. VISUALIZATION FUNCTIONS (One per panel) ---

def plot_intro_stats():
    """
    Panel: Introduction
    Action: Prints the core corpus statistics, as no charts are on this panel.
    """
    print("\n" + "="*80)
    print(" 📜 PANEL: INTRODUCTION (CORPUS STATS)")
    print("="*80)
    if not df.empty:
        total_mandalas = df['mandala'].nunique()
        total_hymns = len(df)
        total_verses = df['verses'].sum()
        print(f"  > Total Maṇḍalas: {total_mandalas}")
        print(f"  > Total Hymns (Sūktas): {total_hymns}")
        print(f"  > Total Verses (Ṛcs): {total_verses}")
    else:
        print("  > No data to display stats for.")
    print("\n(Note: 'Vedic Sanskrit Basics' cards are text-only.)")
    input("Press Enter to continue to the next panel...")


def plot_rishi_timeline(num_rishis=50):
    """
    Panel: Rishi Timeline
    Chart: Scatter plot
    Replicates the JS scatter plot, sizing rishis by hymn count and
    placing them on an approximate timeline based on their first-mentioned Mandala.
    """
    print("\n" + "="*80)
    print(" ⏳ PANEL: RISHI TIMELINE")
    print("="*80)
    if df.empty:
        print("  > Skipping plot: No Rig Veda data.")
        return

    # Filter for simple seer names (excluding multi-seer hymns)
    simple_seers = df[~df['seer'].str.contains(',')]['seer'].value_counts()
    top_rishis = simple_seers.nlargest(num_rishis)
    
    # Get the first mandala for each of these top rishis
    rishi_data = df[df['seer'].isin(top_rishis.index)]
    first_mandala = rishi_data.groupby('seer')['mandala'].min()
    
    # Map mandala to a 'period' as in the JS
    # 1=Core Family (2-7), 2=Mixed (1, 8), 3=Late (9, 10)
    def get_period(m):
        if m in [9, 10]: return 3
        if m in [2, 3, 4, 5, 6, 7]: return 1
        return 2

    period_data = first_mandala.map(get_period)
    plot_df = pd.DataFrame({
        'rishi': period_data.index,
        'period': period_data.values,
        'count': top_rishis.loc[period_data.index].values
    })
    
    # Add jitter for visualization
    jitter = np.random.uniform(-0.2, 0.2, size=len(plot_df))
    plot_df['period_jitter'] = plot_df['period'] + jitter
    
    plt.figure(figsize=(14, 20))
    ax = sns.scatterplot(
        data=plot_df,
        y='rishi',
        x='period_jitter',
        size='count',
        sizes=(50, 2000),
        color=ACCENT_COLOR,
        alpha=0.7,
        legend='brief'
    )
    
    ax.set_title(f'Approximate Timeline Distribution of Top {num_rishis} Rishis', fontsize=18, pad=20)
    ax.set_xlabel('Approximate Period', fontsize=14)
    ax.set_ylabel('Rishi', fontsize=14)
    ax.set_xticks([1, 2, 3])
    ax.set_xticklabels(['Core Family (M. 2-7)', 'Mixed (M. 1, 8)', 'Late (M. 9, 10)'])
    ax.grid(axis='x', linestyle='--', alpha=0.5)
    
    # Adjust legend
    handles, labels = ax.get_legend_handles_labels()
    ax.legend(handles[1:], labels[1:], title='Hymn Count', loc='best',
              title_fontsize=12, labelspacing=1.5)
              
    plt.tight_layout()
    print("  > Generating plot... Close the plot window to continue.")
    plt.show()


def plot_rishi_atlas():
    """
    Panel: Rishi Atlas
    Chart: 10 Pie Charts
    Replicates the pie chart dropdown by generating a 5x2 grid of pie charts,
    one for each Mandala, showing the top rishi contributions.
    """
    print("\n" + "="*80)
    print(" 🗺️  PANEL: RISHI ATLAS (Contribution by Mandala)")
    print("="*80)
    if df.empty:
        print("  > Skipping plot: No Rig Veda data.")
        return

    fig, axes = plt.subplots(5, 2, figsize=(20, 30))
    axes = axes.flatten()
    
    # Define a color palette
    palette = sns.color_palette("Oranges_r", n_colors=8)
    
    for i in range(1, 11):
        ax = axes[i-1]
        mandala_df = df[df['mandala'] == i]
        
        # Filter for simple seer names
        rishi_counts = mandala_df[~mandala_df['seer'].str.contains(',')]['seer'].value_counts()
        
        # Get top 7 and group the rest
        top_rishis = rishi_counts.nlargest(7)
        other_count = rishi_counts.iloc[7:].sum()
        
        if other_count > 0:
            top_rishis['Other Rishis'] = other_count
            
        # Create pie chart
        wedges, texts, autotexts = ax.pie(
            top_rishis,
            labels=top_rishis.index,
            autopct=lambda p: f'{p:.1f}%' if p > 5 else '', # Only show % for large slices
            colors=palette,
            pctdistance=0.85,
            textprops={'color': TEXT_COLOR, 'fontsize': 9, 'weight': 'bold'},
            wedgeprops={'edgecolor': BORDER_COLOR, 'linewidth': 1}
        )
        
        # Style autopct text
        plt.setp(autotexts, color='black')
        
        ax.set_title(f'Maṇḍala {i} Rishi Contribution', fontsize=16, pad=10)

    fig.suptitle('Rishi Atlas: Proportional Contribution by Maṇḍala', fontsize=24, y=1.02)
    plt.tight_layout()
    print("  > Generating 5x2 plot grid... Close the plot window to continue.")
    plt.show()


def plot_corpus_analytics():
    """
    Panel: Corpus Analytics
    Chart: Multiple (Bar, Heatmap, Histogram, Network)
    Generates plots for all four sub-tabs of the analytics panel.
    """
    print("\n" + "="*80)
    print(" 📊 PANEL: CORPUS ANALYTICS")
    print("="*80)
    if df.empty:
        print("  > Skipping plots: No Rig Veda data.")
        return

    # --- 4a. Tab: Key Metrics (Divinity & Meter) ---
    print("  > 4a. Generating Key Metrics (Divinity & Meter)...")
    
    # Clean divinity names (take first part)
    df['divinity_simple'] = df['divinity'].apply(
        lambda x: re.sub(r'\(.*\)', '', x).split(',')[0].split('-')[0].strip()
    )
    div_counts = df[df['divinity_simple'] != 'Unknown']['divinity_simple'].value_counts().nlargest(20)
    meter_counts = df[df['meter'] != 'Unknown']['meter'].value_counts().nlargest(20)
    
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(20, 10))
    
    sns.barplot(ax=ax1, x=div_counts.values, y=div_counts.index, color=ACCENT_COLOR, orient='h')
    ax1.set_title('Top 20 Divinities (Primary)', fontsize=16)
    ax1.set_xlabel('Hymn Count')
    
    sns.barplot(ax=ax2, x=meter_counts.values, y=meter_counts.index, color=ACCENT_COLOR, orient='h')
    ax2.set_title('Top 20 Meter Distribution', fontsize=16)
    ax2.set_xlabel('Hymn Count')
    
    fig.suptitle('Corpus Analytics: Key Metrics', fontsize=20, y=1.02)
    plt.tight_layout()
    plt.show()

    # --- 4b. Tab: Advanced Distributions (Heatmap & Histogram) ---
    print("  > 4b. Generating Advanced Distributions (Heatmap & Histogram)...")
    
    # Divinity Heatmap Data
    div_by_mandala = df[df['divinity_simple'] != 'Unknown'].groupby('mandala')['divinity_simple'].value_counts().unstack().fillna(0)
    top_divs = div_by_mandala.sum(axis=0).nlargest(25).index
    heatmap_data = div_by_mandala[top_divs].T
    
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(16, 18), gridspec_kw={'height_ratios': [3, 1]})
    
    sns.heatmap(ax=ax1, data=heatmap_data, cmap='Oranges', linewidths=.5, linecolor=BORDER_COLOR, annot=True, fmt=".0f", annot_kws={"size": 8, "color": "black"})
    ax1.set_title('Divinity Prominence Heatmap (Top 25)', fontsize=16)
    ax1.set_ylabel('Divinity')
    ax1.set_xlabel('Mandala')
    
    sns.histplot(ax=ax2, data=df, x='verses', bins=50, color=ACCENT_COLOR, kde=True, line_kws={'color': 'white'})
    ax2.set_title('Verse Count Distribution per Hymn', fontsize=16)
    ax2.set_xlabel('Number of Verses')
    ax2.set_ylabel('Number of Hymns')
    
    fig.suptitle('Corpus Analytics: Advanced Distributions', fontsize=20, y=1.02)
    plt.tight_layout()
    plt.show()

    # --- 4c. Tab: Theme Map (Example) ---
    print("  > 4c. Generating Thematic Analysis (Example for 'Ritual & Sacrifice')...")
    
    ritual_kws = themeKeywords['Ritual & Sacrifice (Yajña)']
    
    # A simple search in divinity and seer fields
    def check_theme(row):
        text = (row['divinity'] + " " + row['seer']).lower()
        return any(kw in text for kw in ritual_kws)
        
    df['theme_match'] = df.apply(check_theme, axis=1)
    
    mandala_totals = df['mandala'].value_counts().sort_index()
    mandala_matches = df[df['theme_match']]['mandala'].value_counts().sort_index().reindex(mandala_totals.index, fill_value=0)
    percentages = (mandala_matches / mandala_totals * 100).fillna(0)
    
    plt.figure(figsize=(12, 7))
    ax = sns.barplot(x=percentages.index, y=percentages.values, color=ACCENT_COLOR)
    ax.set_title("Hymn Distribution for 'Ritual & Sacrifice (Yajña)' Theme", fontsize=16)
    ax.set_ylabel('Percentage of Mandala\'s Hymns (%)')
    ax.set_xlabel('Mandala')
    
    plt.tight_layout()
    plt.show()

    # --- 4d. Tab: Co-occurrence Network ---
    print("  > 4d. Generating Deity Co-occurrence Network...")
    
    cooccurrences = {}
    deity_counts = {}
    
    for _, h in df.iterrows():
        raw_div = h['divinity']
        deities = re.split(r'[,-]', raw_div)
        cleaned_deities = [re.sub(r'\(.*\)', '', d).strip() for d in deities if d.strip()]
        cleaned_deities = list(set(d for d in cleaned_deities if d and d != 'Unknown' and not d.isnumeric()))
        
        if len(cleaned_deities) > 1:
            for d in cleaned_deities:
                deity_counts[d] = deity_counts.get(d, 0) + 1
            for d1, d2 in combinations(sorted(cleaned_deities), 2):
                key = (d1, d2)
                cooccurrences[key] = cooccurrences.get(key, 0) + 1
                
    # Filter for a clearer graph
    min_count = 10
    filtered_deities = {d for d, c in deity_counts.items() if c >= min_count}
    
    G = nx.Graph()
    for deity in filtered_deities:
        G.add_node(deity, size=deity_counts[deity])
        
    for (d1, d2), weight in cooccurrences.items():
        if d1 in filtered_deities and d2 in filtered_deities and weight > 2:
            G.add_edge(d1, d2, weight=weight)
            
    if G.number_of_nodes() == 0:
        print("  > Skipping network plot: No co-occurring deities found with current filters.")
        return

    plt.figure(figsize=(20, 20))
    pos = nx.spring_layout(G, k=1.0, iterations=50, seed=42)
    
    node_sizes = [d['size'] * 30 for n, d in G.nodes(data=True)]
    edge_widths = [d['weight'] / 2 for u, v, d in G.edges(data=True)]
    
    nx.draw_networkx_nodes(G, pos, node_size=node_sizes, node_color=ACCENT_COLOR, alpha=0.9)
    nx.draw_networkx_edges(G, pos, width=edge_widths, edge_color=SECONDARY_TEXT_COLOR, alpha=0.4)
    nx.draw_networkx_labels(G, pos, font_size=10, font_color=TEXT_COLOR, font_weight='bold')
    
    plt.title('Deity Co-occurrence Network (Min Count > 10, Min Edge > 2)', fontsize=20)
    plt.axis('off')
    
    print("  > Generating network graph... This may take a moment.")
    print("  > Close the plot window to continue.")
    plt.show()


def plot_deity_narratives():
    """
    Panel: Deity Narratives
    Chart: 5 Pie Charts
    Generates a 3x2 grid of pie charts for the main deities from the
    simulated `deityNarrativeData`.
    """
    print("\n" + "="*80)
    print(" 🕉️  PANEL: DEITY NARRATIVES")
    print("="*80)
    
    fig, axes = plt.subplots(3, 2, figsize=(20, 22))
    axes = axes.flatten()
    
    deities_to_plot = list(deityNarrativeData.keys())
    palette = sns.color_palette("Oranges_r", n_colors=4)
    
    for i, deity in enumerate(deities_to_plot):
        ax = axes[i]
        data = deityNarrativeData[deity]
        labels = list(data.keys())
        values = list(data.values())
        
        wedges, texts, autotexts = ax.pie(
            values,
            labels=labels,
            autopct='%1.1f%%',
            colors=palette,
            pctdistance=0.8,
            textprops={'color': TEXT_COLOR, 'fontsize': 10},
            wedgeprops={'edgecolor': BORDER_COLOR, 'linewidth': 1}
        )
        
        plt.setp(autotexts, color='black', fontsize=10, weight='bold')
        ax.set_title(f'Narrative Themes for {deity}', fontsize=16, pad=10)

    # Hide the last empty plot
    if len(deities_to_plot) < len(axes):
        for i in range(len(deities_to_plot), len(axes)):
            axes[i].set_visible(False)
            
    fig.suptitle('Deity Narrative Maps', fontsize=24, y=1.0)
    plt.tight_layout()
    print("  > Generating 3x2 plot grid... Close the plot window to continue.")
    plt.show()


def plot_concept_evolution():
    """
    Panel: Evolution of Concepts
    Chart: Line Chart
    Plots the prominence of all concepts from `conceptEvolutionData` across
    the 10 Mandalas on a single line chart.
    """
    print("\n" + "="*80)
    print(" 📈 PANEL: EVOLUTION OF CONCEPTS")
    print("="*80)
    
    plt.figure(figsize=(16, 9))
    mandalas = [f'M {i+1}' for i in range(10)]
    
    # Use a distinct color palette
    palette = sns.color_palette("colorblind", n_colors=len(conceptEvolutionData))
    
    for i, (concept, data) in enumerate(conceptEvolutionData.items()):
        plt.plot(
            mandalas,
            data['prominence'],
            marker='o',
            linestyle='--',
            linewidth=2,
            markersize=8,
            label=f"{concept} ({data['type']})",
            color=palette[i]
        )
        
    plt.title('Evolution of Concepts Across Maṇḍalas', fontsize=18, pad=20)
    plt.ylabel('Relative Prominence (Simulated Score)', fontsize=14)
    plt.xlabel('Mandala', fontsize=14)
    
    # Place legend outside the plot
    plt.legend(loc='center left', bbox_to_anchor=(1, 0.5), fontsize=12)
    
    plt.grid(axis='y', linestyle=':', alpha=0.5)
    plt.tight_layout(rect=[0, 0, 0.8, 1]) # Make room for legend
    print("  > Generating line plot... Close the plot window to continue.")
    plt.show()


def plot_meter_evolution():
    """
    Panel: Meter Evolution
    Chart: Stacked Area Chart & Grouped Bar Chart
    Generates two plots based on the `meterMandalaData` and `meterRishiData`.
    """
    print("\n" + "="*80)
    print(" 🎶 PANEL: METER EVOLUTION")
    print("="*80)
    
    # --- 7a. Meter Distribution by Maṇḍala (Stacked Area) ---
    print("  > 7a. Generating Meter by Mandala (Stacked Area)...")
    
    meter_df = pd.DataFrame(meterMandalaData).set_index('labels')
    
    plt.figure(figsize=(14, 8))
    plt.stackplot(
        meter_df.index,
        meter_df.T,
        labels=meter_df.columns,
        colors=COLOR_PALETTE_ORANGES
    )
    
    plt.title('Meter Composition by Maṇḍala (Stacked Area)', fontsize=18, pad=20)
    plt.ylabel('Percentage (%)', fontsize=14)
    plt.xlabel('Mandala', fontsize=14)
    plt.legend(loc='center left', bbox_to_anchor=(1, 0.5), fontsize=12)
    plt.margins(x=0, y=0) # Remove margins
    plt.tight_layout(rect=[0, 0, 0.8, 1])
    plt.show()
    
    # --- 7b. Meter Preference by Ṛṣi Family (Grouped Bar) ---
    print("  > 7b. Generating Meter by Rishi (Grouped Bar)...")
    
    rishi_meter_df = pd.DataFrame(meterRishiData).T
    
    ax = rishi_meter_df.plot(
        kind='bar',
        figsize=(16, 9),
        colormap='Oranges_r',
        width=0.8,
        edgecolor=BORDER_COLOR
    )
    
    ax.set_title('Meter Preference by Ṛṣi Family (M. 2-7)', fontsize=18, pad=20)
    ax.set_ylabel('Percentage (%)', fontsize=14)
    ax.set_xlabel('Rishi Family (Mandala)', fontsize=14)
    ax.tick_params(axis='x', rotation=25, ha='right')
    ax.legend(loc='center left', bbox_to_anchor=(1, 0.5), fontsize=12)
    
    plt.grid(axis='y', linestyle=':', alpha=0.5)
    plt.tight_layout(rect=[0, 0, 0.8, 1])
    print("  > Generating grouped bar chart... Close the plot window to continue.")
    plt.show()


def plot_geomap():
    """
    Panel: Geographic Map
    Chart: GeoPandas Scatter Plot
    Uses GeoPandas to plot the approximate locations from `geoMapLocations`
    on a world map, zoomed in to the region.
    """
    print("\n" + "="*80)
    print(" 🌍 PANEL: GEOGRAPHIC MAP")
    print("="*80)
    
    try:
        # Load a base map of the world
        world = geopandas.read_file(geopandas.datasets.get_path('naturalearth_lowres'))
    except Exception as e:
        print(f"  > FAILED to load geopandas world map. Skipping plot. (Error: {e})")
        print("  > You might need to be online or run `geopandas.datasets.download_all()`")
        return

    # Convert our locations data to a GeoDataFrame
    geo_df = pd.DataFrame(geoMapLocations)
    geometry = [Point(xy) for xy in zip(geo_df['lon'], geo_df['lat'])]
    gdf = geopandas.GeoDataFrame(geo_df, geometry=geometry, crs="EPSG:4326")
    
    # Create color mapping
    color_map = {'high': ACCENT_COLOR, 'medium': '#FFA500', 'low': '#FFD700'}
    gdf['color'] = gdf['certainty'].map(color_map)
    
    fig, ax = plt.subplots(figsize=(16, 12))
    ax.set_facecolor(CARD_BG)
    
    # Plot the world map
    world.plot(ax=ax, color='#333', edgecolor=BORDER_COLOR)
    
    # Plot our points
    gdf.plot(ax=ax, color=gdf['color'], markersize=80, alpha=0.9,
             edgecolor='white', linewidth=0.5)
             
    # Add labels
    for x, y, label in zip(gdf.geometry.x, gdf.geometry.y, gdf.name):
        ax.text(x + 0.1, y + 0.1, label, fontsize=10, color=TEXT_COLOR,
                fontweight='bold')
                
    # Zoom in to the Rig Vedic region
    ax.set_xlim(65, 85)
    ax.set_ylim(25, 37)
    
    ax.set_title('Map of the Rig Vedic Civilization (Approximate Locations)', fontsize=18, pad=20)
    ax.set_xlabel('Longitude')
    ax.set_ylabel('Latitude')
    
    # Manually create a legend for certainty
    from matplotlib.lines import Line2D
    legend_elements = [
        Line2D([0], [0], marker='o', color='w', label='Higher Certainty', markerfacecolor=color_map['high'], markersize=10),
        Line2D([0], [0], marker='o', color='w', label='Medium Certainty', markerfacecolor=color_map['medium'], markersize=10),
        Line2D([0], [0], marker='o', color='w', label='Lower Certainty', markerfacecolor=color_map['low'], markersize=10)
    ]
    ax.legend(handles=legend_elements, loc='lower right', fontsize=12)
    
    print("  > Generating map... Close the plot window to continue.")
    plt.show()


def plot_conceptual_constellations():
    """
    Panel: Conceptual Constellations
    Chart: 5 Network Graphs
    Generates a 3x2 grid of network graphs using NetworkX based on the
    simulated `conceptNetworkData`.
    """
    print("\n" + "="*80)
    print(" 🌌 PANEL: CONCEPTUAL CONSTELLATIONS")
    print("="*80)
    
    fig, axes = plt.subplots(3, 2, figsize=(22, 30))
    axes = axes.flatten()
    
    concepts_to_plot = list(conceptNetworkData.keys())
    
    # Define group colors from the JS
    group_colors_map = {
        0: ACCENT_COLOR,  # Core Concept
        1: '#4a90e2',    # Deities/People
        2: '#d0021b',    # Antagonist/Location
        3: '#7ed321'     # Object/Action
    }
    
    for i, concept_name in enumerate(concepts_to_plot):
        ax = axes[i]
        data = conceptNetworkData[concept_name]
        
        G = nx.Graph()
        node_colors = []
        node_sizes = []
        label_map = {}
        
        # Add nodes
        for node in data['nodes']:
            node_id = node['id']
            label = node['label']
            label_map[node_id] = label
            G.add_node(label, size=node['value'] * 50) # Use label as node name
            node_colors.append(group_colors_map.get(node['group'], SECONDARY_TEXT_COLOR))
            node_sizes.append(node['value'] * 70)
            
        # Add edges
        for edge in data['edges']:
            from_label = label_map[edge['from']]
            to_label = label_map[edge['to']]
            G.add_edge(from_label, to_label, weight=edge['value'])
            
        pos = nx.spring_layout(G, k=1.5, iterations=50, seed=42)
        edge_widths = [d['weight'] / 2 for u, v, d in G.edges(data=True)]
        
        nx.draw_networkx(
            G,
            pos,
            ax=ax,
            node_color=node_colors,
            node_size=node_sizes,
            width=edge_widths,
            with_labels=True,
            font_color=TEXT_COLOR,
            font_size=11,
            font_weight='bold',
            edge_color=SECONDARY_TEXT_COLOR,
            alpha=0.8
        )
        
        ax.set_title(concept_name, fontsize=18, pad=10)
        ax.axis('off')

    # Hide unused plots
    if len(concepts_to_plot) < len(axes):
        for i in range(len(concepts_to_plot), len(axes)):
            axes[i].set_visible(False)
            
    fig.suptitle('Conceptual Constellations', fontsize=24, y=1.0)
    plt.tight_layout()
    print("  > Generating 3x2 network grid... Close the plot window to continue.")
    plt.show()


def plot_socio_material_dashboard():
    """
    Panel: Socio-Material Analytics
    Chart: 2x2 Dashboard (Bar, Bar, Treemap, Heatmap)
    Recreates the 4-chart dashboard from the simulated `socioMaterialData`.
    """
    print("\n" + "="*80)
    print(" 🌾 PANEL: SOCIO-MATERIAL ANALYTICS")
    print("="*80)
    
    fig, axes = plt.subplots(2, 2, figsize=(20, 16))
    
    # --- 10a. Animal Importance (BarH) ---
    ax = axes[0, 0]
    animals = sorted(socioMaterialData['animals'], key=lambda x: x['count'], reverse=True)
    sns.barplot(
        ax=ax,
        y=[a['name'] for a in animals],
        x=[a['count'] for a in animals],
        color=ACCENT_COLOR,
        orient='h',
        edgecolor=BORDER_COLOR
    )
    ax.set_title('Animal Importance (Simulated Mentions)', fontsize=16)
    
    # --- 10b. Social Role Prominence (Bar) ---
    ax = axes[0, 1]
    social = sorted(socioMaterialData['socialRoles'], key=lambda x: x['count'], reverse=True)
    sns.barplot(
        ax=ax,
        x=[s['name'] for s in social],
        y=[s['count'] for s in social],
        palette='plasma',
        edgecolor=BORDER_COLOR
    )
    ax.set_title('Social Role Prominence', fontsize=16)
    ax.tick_params(axis='x', rotation=30)
    
    # --- 10c. Components of Wealth (Treemap) ---
    ax = axes[1, 0]
    valuables = socioMaterialData['valuables']['children']
    labels = [f"{v['name']}\n({v['value']})" for v in valuables]
    sizes = [v['value'] for v in valuables]
    colors = sns.color_palette("Oranges_r", n_colors=len(labels))
    
    squarify.plot(
        sizes=sizes,
        label=labels,
        color=colors,
        ax=ax,
        text_kwargs={'color': 'black', 'fontsize': 12, 'weight': 'bold'},
        bar_kwargs={'edgecolor': BORDER_COLOR, 'linewidth': 2}
    )
    ax.set_title('Components of Wealth (Simulated)', fontsize=16)
    ax.axis('off')
    
    # --- 10d. River Mentions by Mandala (Heatmap) ---
    ax = axes[1, 1]
    geo = socioMaterialData['geography']
    rivers = [r['river'] for r in geo]
    mandalas = [col for col in geo[0] if col.startswith('M')]
    z_data = [[r[m] for m in mandalas] for r in geo]
    
    sns.heatmap(
        ax=ax,
        data=z_data,
        xticklabels=mandalas,
        yticklabels=rivers,
        cmap='Cividis_r',
        linewidths=.5,
        linecolor=BORDER_COLOR,
        annot=True,
        fmt=".0f",
        annot_kws={"size": 10, "color": "white"}
    )
    ax.set_title('River Mentions by Mandala (Simulated)', fontsize=16)
    ax.set_yticklabels(ax.get_yticklabels(), rotation=0)

    fig.suptitle('The World of the Veda: Socio-Material Dashboard', fontsize=24, y=1.02)
    plt.tight_layout()
    print("  > Generating 2x2 dashboard... Close the plot window to continue.")
    plt.show()


def plot_text_panels_info():
    """
    Panels: Study / Lexicon
    Action: Prints a message indicating these are text/quiz-based.
    """
    print("\n" + "="*80)
    print(" 🧠 PANEL: STUDY MODE & LEXICON")
    print("="*80)
    print("  > The 'Study Mode' and 'Lexicon' panels are primarily")
    print("  > text-based or interactive quizzes in the original dashboard.")
    print("  > No static charts will be generated for these sections.")
    print("="*80)


# --- 5. MAIN EXECUTION ---

def main():
    """
    Main function to run the entire visualization pipeline,
    generating one plot (or set of plots) for each panel.
    """
    print("="*80)
    print("   Rig Veda Explorer - Python Visualization Suite   ")
    print("="*80)
    print("This script will now generate all visualizations one by one.")
    print("Please close each plot window to proceed to the next panel.\n")
    
    # Run all plotting functions in order
    plot_intro_stats()
    plot_rishi_timeline()
    plot_rishi_atlas()
    plot_corpus_analytics()
    plot_deity_narratives()
    plot_concept_evolution()
    plot_meter_evolution()
    plot_geomap()
    plot_conceptual_constellations()
    plot_socio_material_dashboard()
    plot_text_panels_info()
    
    print("\nAll visualization panels have been processed.")
    print("Script execution complete.")


if __name__ == "__main__":
    # Check if data was pasted correctly
    if len(rigVedaData) < 100:
        print("!"*80)
        print("! WARNING: 'rigVedaData' seems incomplete!")
        print(f"! Found only {len(rigVedaData)} hymns.")
        print("! Please make sure you have pasted the ENTIRE 'rigVedaData' array")
        print("! from the HTML file into this script at line 100.")
        print("!"*80)
        if input("Continue anyway? (y/n): ").lower() != 'y':
            exit()
            
    if len(lexiconData) < 10:
         print("!"*80)
         print("! WARNING: 'lexiconData' seems incomplete!")
         print("! This only affects text output, not plots.")
         print("!"*80)

    main()