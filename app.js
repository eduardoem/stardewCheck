// URLs de recursos multimedia oficiales verificados
const FISH_IMAGES = {
    "sunfish": "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
    "catfish": "https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png",
    "shad": "https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png",
    "sardine": "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
    "eel": "https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png",
    "largemouth_bass": "https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png",
    "bullhead": "https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png",
    "bream": "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png",
    "carp": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png",
    "ghostfish": "https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png",
    "woodskip": "https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png",
    "sandfish": "https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png",
    "lobster": "https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png",
    "clam": "https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png",
    "crayfish": "https://stardewvalleywiki.com/mediawiki/images/5/53/Crayfish.png",
    "crab": "https://stardewvalleywiki.com/mediawiki/images/6/63/Crab.png",
    "cockle": "https://stardewvalleywiki.com/mediawiki/images/a/ad/Cockle.png",
    "mussel": "https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png",
    "shrimp": "https://stardewvalleywiki.com/mediawiki/images/9/91/Shrimp.png",
    "snail": "https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png",
    "periwinkle": "https://stardewvalleywiki.com/mediawiki/images/1/1d/Periwinkle.png",
    "oyster": "https://stardewvalleywiki.com/mediawiki/images/5/54/Oyster.png",
    "pufferfish": "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png",
    "tuna": "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png",
    "sturgeon": "https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png",
    "tilapia": "https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png",
    "red_snapper": "https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png",
    "tiger_trout": "https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png",
    "walleye": "https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png",
    "anchovy": "https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png",
    "red_mullet": "https://stardewvalleywiki.com/mediawiki/images/f/f2/Red_Mullet.png",
    "herring": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Herring.png",
    "lingcod": "https://stardewvalleywiki.com/mediawiki/images/8/87/Lingcod.png",
    "squid": "https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png",
    "chub": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png",
    "perch": "https://stardewvalleywiki.com/mediawiki/images/4/43/Perch.png",
    "legend": "https://stardewvalleywiki.com/mediawiki/images/1/10/Legend.png",
    "crimsonfish": "https://stardewvalleywiki.com/mediawiki/images/d/dc/Crimsonfish.png",
    "angler": "https://stardewvalleywiki.com/mediawiki/images/b/bf/Angler.png",
    "glacierfish": "https://stardewvalleywiki.com/mediawiki/images/f/fd/Glacierfish.png",
    "mutant_carp": "https://stardewvalleywiki.com/mediawiki/images/c/cb/Mutant_Carp.png"
};

const FISH_DATA = [
    {
        mother: { es: "Peces de Lote", en: "Bundle Fish" },
        tagClass: "lote-tag", icon: "📦",
        seasons: [
            { name: { es: "Primavera", en: "Spring" }, fish: [
                { id: "sunfish", n: { es: "Pez sol", en: "Sunfish" }, l: { es: "Río", en: "River" }, h: "6am - 7pm", c: { es: "Soleado", en: "Sunny" }, e: { es: "Primavera, Verano", en: "Spring, Summer" }, lote: { es: "Lote Peces Fluviales", en: "River Fish Bundle" } },
                { id: "catfish", n: { es: "Pez gato", en: "Catfish" }, l: { es: "Río / Bosque Secreto", en: "River / Secret Woods" }, h: "6am - 12am", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Primavera, Otoño", en: "Spring, Fall" }, lote: { es: "Lote Peces Fluviales", en: "River Fish Bundle" } },
                { id: "shad", n: { es: "Sábalo", en: "Shad" }, l: { es: "Río", en: "River" }, h: "9am - 2am", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Prim., Ver., Oto.", en: "Spr., Sum., Fall" }, lote: { es: "Lote Peces Fluviales", en: "River Fish Bundle" } },
                { id: "sardine", n: { es: "Sardina", en: "Sardine" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Prim., Oto., Inv.", en: "Spr., Fall, Win." }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } },
                { id: "eel", n: { es: "Anguila", en: "Eel" }, l: { es: "Océano", en: "Ocean" }, h: "4pm - 2am", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Primavera, Otoño", en: "Spring, Fall" }, lote: { es: "Lote Peces Nocturnos", en: "Night Fishing Bundle" } },
                { id: "largemouth_bass", n: { es: "Perca gigante", en: "Largemouth Bass" }, l: { es: "Lago de la Montaña", en: "Mountain Lake" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Peces de Lago", en: "Lake Fish Bundle" } },
                { id: "bullhead", n: { es: "Siluro", en: "Bullhead" }, l: { es: "Lago de la Montaña", en: "Mountain Lake" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Peces de Lago", en: "Lake Fish Bundle" } },
                { id: "bream", n: { es: "Besugo", en: "Bream" }, l: { es: "Río", en: "River" }, h: "6pm - 2am", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Peces Nocturnos", en: "Night Fishing Bundle" } },
                { id: "carp", n: { es: "Carpa", en: "Carp" }, l: { es: "Lago de la Montaña / Cloacas", en: "Mountain Lake / Sewers" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Prim., Ver., Oto.", en: "Spr., Sum., Fall" }, lote: { es: "Lote Peces de Lago", en: "Lake Fish Bundle" } },
                { id: "ghostfish", n: { es: "Pez fantasma", en: "Ghostfish" }, l: { es: "Minas", en: "Mines" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Peces Especiales", en: "Specialty Fish Bundle" } },
                { id: "woodskip", n: { es: "Muyu", en: "Woodskip" }, l: { es: "Bosque Secreto", en: "Secret Woods" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Peces Especiales", en: "Specialty Fish Bundle" } },
                { id: "sandfish", n: { es: "Pez arenero", en: "Sandfish" }, l: { es: "Desierto", en: "Desert" }, h: "6am - 8pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Peces Especiales", en: "Specialty Fish Bundle" } },
                { id: "lobster", n: { es: "Langosta", en: "Lobster" }, l: { es: "Mar (Trampa)", en: "Ocean (Crab Pot)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "clam", n: { es: "Almeja", en: "Clam" }, l: { es: "Playa (Recolección)", en: "Beach (Foraging)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "crayfish", n: { es: "Cangrejo de río", en: "Crayfish" }, l: { es: "Agua dulce (Trampa)", en: "Freshwater (Crab Pot)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "crab", n: { es: "Cangrejo", en: "Crab" }, l: { es: "Mar (Trampa) / Minas", en: "Ocean (Crab Pot) / Mines" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "cockle", n: { es: "Berberecho", en: "Cockle" }, l: { es: "Playa (Recolección)", en: "Beach (Foraging)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "mussel", n: { es: "Mejillón", en: "Mussel" }, l: { es: "Playa (Recolección)", en: "Beach (Foraging)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "shrimp", n: { es: "Camarón", en: "Shrimp" }, l: { es: "Mar (Trampa)", en: "Ocean (Crab Pot)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "snail", n: { es: "Caracol", en: "Snail" }, l: { es: "Agua dulce (Trampa)", en: "Freshwater (Crab Pot)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "periwinkle", n: { es: "Bígaro", en: "Periwinkle" }, l: { es: "Agua dulce (Trampa)", en: "Freshwater (Crab Pot)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } },
                { id: "oyster", n: { es: "Ostra", en: "Oyster" }, l: { es: "Playa (Recolección)", en: "Beach (Foraging)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote Trampa para Cangrejos", en: "Crab Pot Bundle" } }
            ]},
            { name: { es: "Verano", en: "Summer" }, fish: [
                { id: "pufferfish", n: { es: "Pez globo", en: "Pufferfish" }, l: { es: "Océano", en: "Ocean" }, h: "12pm - 4pm", c: { es: "Sol", en: "Sun" }, e: { es: "Verano", en: "Summer" }, lote: { es: "Lote Peces Especiales", en: "Specialty Fish Bundle" } },
                { id: "tuna", n: { es: "Atún", en: "Tuna" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano, Invierno", en: "Summer, Winter" }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } },
                { id: "sturgeon", n: { es: "Esturión", en: "Sturgeon" }, l: { es: "Lago de la Montaña", en: "Mountain Lake" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano, Invierno", en: "Summer, Winter" }, lote: { es: "Lote Peces de Lago", en: "Lake Fish Bundle" } },
                { id: "tilapia", n: { es: "Tilapia", en: "Tilapia" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 2pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano, Otoño", en: "Summer, Fall" }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } },
                { id: "red_snapper", n: { es: "Pargo colorado", en: "Red Snapper" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 7pm", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Verano, Otoño", en: "Summer, Fall" }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } }
            ]},
            { name: { es: "Otoño e Invierno", en: "Fall & Winter" }, fish: [
                { id: "tiger_trout", n: { es: "Trucha tigre", en: "Tiger Trout" }, l: { es: "Río", en: "River" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Otoño, Invierno", en: "Fall, Winter" }, lote: { es: "Lote Peces Fluviales", en: "River Fish Bundle" } },
                { id: "walleye", n: { es: "Walleye", en: "Walleye" }, l: { es: "Río / Lago / Bosque", en: "River / Lake / Forest" }, h: "12pm - 2am", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Otoño, Invierno", en: "Fall, Winter" }, lote: { es: "Lote Peces Nocturnos", en: "Night Fishing Bundle" } }
            ]}
        ]
    },
    {
        mother: { es: "Peces Comunes", en: "Common Fish" },
        tagClass: "common-tag", icon: "🐟",
        seasons: [
            { name: { es: "Comunes: Temporales", en: "Common: Seasonal" }, fish: [
                { id: "anchovy", n: { es: "Anchoa", en: "Anchovy" }, l: { es: "Océano", en: "Ocean" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Primavera, Otoño", en: "Spring, Fall" }, lote: { es: "Común", en: "Common" } },
                { id: "red_mullet", n: { es: "Salmonete", en: "Red Mullet" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Primavera, Verano", en: "Spring, Summer" }, lote: { es: "Común", en: "Common" } },
                { id: "herring", n: { es: "Arenque", en: "Herring" }, l: { es: "Océano", en: "Ocean" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Primavera, Invierno", en: "Spring, Winter" }, lote: { es: "Común", en: "Common" } },
                { id: "lingcod", n: { es: "Bacalao largo", en: "Lingcod" }, l: { es: "Río/Lago", en: "River/Lake" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Invierno", en: "Winter" }, lote: { es: "Común", en: "Common" } },
                { id: "squid", n: { es: "Calamar", en: "Squid" }, l: { es: "Océano", en: "Ocean" }, h: "6pm - 2am", c: { es: "Cualquiera", en: "Any" }, e: { es: "Invierno", en: "Winter" }, lote: { es: "Común", en: "Common" } }
            ]},
            { name: { es: "Comunes: Todo el Año", en: "Common: All Year" }, fish: [
                { id: "chub", n: { es: "Cachuelo", en: "Chub" }, l: { es: "Río / Lago de la Montaña", en: "River / Mountain Lake" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Lote de Investigación de Campo", en: "Field Research Bundle" } },
                { id: "perch", n: { es: "Perca", en: "Perch" }, l: { es: "Lago de la Montaña", en: "Mountain Lake" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Común", en: "Common" } }
            ]}
        ]
    },
    {
        mother: { es: "Peces Legendarios", en: "Legendary Fish" },
        tagClass: "legend-tag", icon: "🏆",
        seasons: [
            { name: { es: "Colección Legendaria", en: "Legendary Collection" }, fish: [
                { id: "legend", n: { es: "Leyenda", en: "Legend" }, l: { es: "Lago de la Montaña", en: "Mountain Lake" }, h: "Cualquiera", c: { es: "Primavera + Lluvia", en: "Spring + Rain" }, e: { es: "Primavera", en: "Spring" }, lote: { es: "Legendario", en: "Legendary" } },
                { id: "crimsonfish", n: { es: "Pez carmesí", en: "Crimsonfish" }, l: { es: "Océano", en: "Ocean" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano", en: "Summer" }, lote: { es: "Legendario", en: "Legendary" } },
                { id: "angler", n: { es: "Rape", en: "Angler" }, l: { es: "Pueblo (Norte)", en: "Town (North)" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Otoño", en: "Fall" }, lote: { es: "Legendario", en: "Legendary" } },
                { id: "glacierfish", n: { es: "Pez glacial", en: "Glacierfish" }, l: { es: "Bosque Tizón", en: "Cindersap Forest" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Invierno", en: "Winter" }, lote: { es: "Legendario", en: "Legendary" } },
                { id: "mutant_carp", n: { es: "Carpa mutante", en: "Mutant Carp" }, l: { es: "Cloacas", en: "Sewers" }, h: "Cualquiera", c: { es: "Cualquiera", en: "Any" }, e: { es: "Todo el año", en: "All Year" }, lote: { es: "Legendario", en: "Legendary" } }
            ]}
        ]
    }
];

const app = {
    lang: localStorage.getItem('sdv_lang') || 'es',
    progress: JSON.parse(localStorage.getItem('sdv_master_v7')) || {},

    init() {
        this.renderUI();
        const container = document.getElementById('main-container');

        container.innerHTML = FISH_DATA.map((mother, mIdx) => `
            <div class="mother-cat">
                <div class="mother-title d-flex justify-content-between align-items-center">
                    <span>${mother.mother[this.lang]}</span>
                    <span class="badge bg-secondary rounded-pill" id="mprog-${mIdx}">0%</span>
                </div>
                ${mother.seasons.map((season, sIdx) => {
                    const catId = `${mIdx}-${sIdx}`;
                    return `
                    <div class="card-season" data-cat-id="${catId}">
                        <div class="season-header d-flex justify-content-between align-items-center" onclick="app.toggleCat('${catId}')">
                            <span>${season.name[this.lang]}</span>
                            <span class="badge bg-primary rounded-pill progress-text">0%</span>
                        </div>
                        <div id="cat-${catId}" class="cat-content">
                            ${season.fish.map((f, fIdx) => {
                                const id = `${mIdx}-${sIdx}-${fIdx}`;
                                const isDone = !!this.progress[f.id];
                                const imgUrl = FISH_IMAGES[f.id] || "https://stardewvalleywiki.com/mediawiki/images/4/43/Fish.png";
                                return `
                                <div class="fish-row ${isDone ? 'completed' : ''}" 
                                     data-fish-id="${f.id}"
                                     data-search="${f.n.es.toLowerCase()} ${f.n.en.toLowerCase()} ${f.e[this.lang].toLowerCase()} ${f.l[this.lang].toLowerCase()}">
                                    <input class="form-check-input" type="checkbox" id="chk-${id}" 
                                           ${isDone ? 'checked' : ''} onchange="app.updateFish('${f.id}', this.checked)">
                                    <img src="${imgUrl}" alt="${f.n[this.lang]}" class="fish-icon" 
                                         onerror="this.onerror=null; this.src='https://stardewvalleywiki.com/mediawiki/images/4/43/Fish.png';">
                                    <div class="flex-grow-1">
                                        <label class="fw-bold d-block mb-0" for="chk-${id}">${f.n[this.lang]}</label>
                                        <div class="fish-details">
                                            <strong>${this.lang === 'es' ? 'Estación' : 'Season'}:</strong> ${f.e[this.lang]}<br>
                                            📍 ${f.l[this.lang]} | ⏰ ${f.h} | ☁️ ${f.c[this.lang]}
                                        </div>
                                        <div class="tag ${mother.tagClass}">${mother.icon} ${f.lote[this.lang]}</div>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>`;
                }).join('')}
            </div>
        `).join('');
        this.updateAllProgress();
    },

    renderUI() {
        const texts = {
            es: { title: "Wiki Pesca", lang: "🇺🇸 EN", search: "Buscar pez, estación o ubicación...", coll: "Colapsar", exp: "Expandir", reset: "Reset" },
            en: { title: "Fishing Wiki", lang: "🇪🇸 ES", search: "Search fish, season or location...", coll: "Collapse", exp: "Expand", reset: "Reset" }
        };
        const t = texts[this.lang];
        document.getElementById('ui-title').innerText = t.title;
        document.getElementById('ui-lang').innerText = t.lang;
        document.getElementById('search').placeholder = t.search;
        document.getElementById('ui-collapse').innerText = t.coll;
        document.getElementById('ui-expand').innerText = t.exp;
        document.getElementById('ui-reset').innerText = t.reset;
    },

    toggleLang() {
        this.lang = this.lang === 'es' ? 'en' : 'es';
        localStorage.setItem('sdv_lang', this.lang);
        this.init();
    },

    updateFish(fishId, isChecked) {
        this.progress[fishId] = isChecked;
        localStorage.setItem('sdv_master_v7', JSON.stringify(this.progress));

        document.querySelectorAll(`[data-fish-id="${fishId}"]`).forEach(row => {
            row.classList.toggle('completed', isChecked);
            row.querySelector('.form-check-input').checked = isChecked;
        });

        this.updateAllProgress();
    },

    updateCatProgress(catId) {
        const catEl = document.querySelector(`[data-cat-id="${catId}"]`);
        if (!catEl) return;
        const total = catEl.querySelectorAll('.form-check-input').length;
        const checked = catEl.querySelectorAll('.form-check-input:checked').length;
        catEl.querySelector('.progress-text').innerText = Math.round((checked / total) * 100) + '%';
    },

    updateMotherProgress(mIdx) {
        const motherEl = document.getElementsByClassName('mother-cat')[mIdx];
        if (!motherEl) return;
        const total = motherEl.querySelectorAll('.form-check-input').length;
        const checked = motherEl.querySelectorAll('.form-check-input:checked').length;
        document.getElementById(`mprog-${mIdx}`).innerText = Math.round((checked / total) * 100) + '%';
    },

    updateAllProgress() {
        FISH_DATA.forEach((m, mIdx) => {
            m.seasons.forEach((s, sIdx) => this.updateCatProgress(`${mIdx}-${sIdx}`));
            this.updateMotherProgress(mIdx);
        });
    },

    filter() {
        const q = document.getElementById('search').value.toLowerCase();
        document.querySelectorAll('.fish-row').forEach(row => {
            const match = row.dataset.search.includes(q);
            row.style.display = match ? 'flex' : 'none';
        });
    },

    toggleCat(id) {
        const el = document.getElementById(`cat-${id}`);
        el.style.display = (el.style.display === 'flex') ? 'none' : 'flex';
    },

    toggleAll(show) {
        document.querySelectorAll('.cat-content').forEach(el => el.style.display = show ? 'flex' : 'none');
    },

    toggleTheme() {
        const b = document.body;
        b.setAttribute('data-bs-theme', b.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark');
    },

    reset() {
        if(confirm(this.lang === 'es' ? "¿Borrar todo tu progreso guardado?" : "Clear all your saved progress?")) {
            this.progress = {};
            localStorage.removeItem('sdv_master_v7');
            location.reload();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
