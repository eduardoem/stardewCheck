const FISH = [
const FISH_DATA = [
    {
        mother: { es: "Peces de Lote", en: "Bundle Fish" },
        tagClass: "lote-tag", icon: "📦",
        seasons: [
            { name: { es: "Lotes: Primavera", en: "Bundles: Spring" }, fish: [
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
            { name: { es: "Lotes: Verano", en: "Bundles: Summer" }, fish: [
                { id: "sunfish", n: { es: "Pez sol", en: "Sunfish" }, l: { es: "Río", en: "River" }, h: "6am - 7pm", c: { es: "Soleado", en: "Sunny" }, e: { es: "Primavera, Verano", en: "Spring, Summer" }, lote: { es: "Lote Peces Fluviales", en: "River Fish Bundle" } },
                { id: "pufferfish", n: { es: "Pez globo", en: "Pufferfish" }, l: { es: "Océano", en: "Ocean" }, h: "12pm - 4pm", c: { es: "Sol", en: "Sun" }, e: { es: "Verano", en: "Summer" }, lote: { es: "Lote Peces Especiales", en: "Specialty Fish Bundle" } },
                { id: "tuna", n: { es: "Atún", en: "Tuna" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano, Invierno", en: "Summer, Winter" }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } },
                { id: "sturgeon", n: { es: "Esturión", en: "Sturgeon" }, l: { es: "Lago de la Montaña", en: "Mountain Lake" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano, Invierno", en: "Summer, Winter" }, lote: { es: "Lote Peces de Lago", en: "Lake Fish Bundle" } },
                { id: "tilapia", n: { es: "Tilapia", en: "Tilapia" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 2pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Verano, Otoño", en: "Summer, Fall" }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } },
                { id: "red_snapper", n: { es: "Pargo colorado", en: "Red Snapper" }, l: { es: "Océano", en: "Ocean" }, h: "6am - 7pm", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Verano, Otoño", en: "Summer, Fall" }, lote: { es: "Lote Peces Marinos", en: "Ocean Fish Bundle" } },
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
            { name: { es: "Lotes: Otoño / Invierno", en: "Bundles: Fall / Winter" }, fish: [
                { id: "tiger_trout", n: { es: "Trucha tigre", en: "Tiger Trout" }, l: { es: "Río", en: "River" }, h: "6am - 7pm", c: { es: "Cualquiera", en: "Any" }, e: { es: "Otoño, Invierno", en: "Fall, Winter" }, lote: { es: "Lote Peces Fluviales", en: "River Fish Bundle" } },
                { id: "walleye", n: { es: "Walleye", en: "Walleye" }, l: { es: "Río / Lago / Bosque", en: "River / Lake / Forest" }, h: "12pm - 2am", c: { es: "Lluvia", en: "Rainy" }, e: { es: "Otoño, Invierno", en: "Fall, Winter" }, lote: { es: "Lote Peces Nocturnos", en: "Night Fishing Bundle" } },
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
lang: localStorage.getItem("lang") || "es",
progress: JSON.parse(localStorage.getItem("progress")||"{}"),

init(){
this.render();
},

render(){
const root = document.getElementById("app");

root.innerHTML = FISH.map(f=>`
<div class="row-fish ${this.progress[f.id]?'done':''}"
data-id="${f.id}"
data-search="${f.es} ${f.en}">

<input type="checkbox"
${this.progress[f.id]?'checked':''}
onchange="app.toggle('${f.id}',this.checked)">

<img src="https://stardewvalleywiki.com/mediawiki/images/${f.id}.png"
class="icon">

<span>${this.lang==="es"?f.es:f.en}</span>

</div>
`).join('');
},

toggle(id,val){
this.progress[id]=val;
localStorage.setItem("progress",JSON.stringify(this.progress));

const rows = document.querySelectorAll(`[data-id="${id}"]`);
rows.forEach(r=>{
r.classList.toggle("done",val);
r.querySelector("input").checked = val;
});
},

toggleLang(){
this.lang = this.lang==="es"?"en":"es";
localStorage.setItem("lang",this.lang);
this.render();
},

filter(){
const q = document.getElementById("search").value.toLowerCase();

document.querySelectorAll(".row-fish").forEach(r=>{
r.style.display = r.dataset.search.toLowerCase().includes(q)
? "flex" : "none";
});
}
};

function toggleTheme(){
const b=document.body;
b.setAttribute("data-bs-theme",
b.getAttribute("data-bs-theme")==="dark"?"light":"dark");
}

document.addEventListener("DOMContentLoaded",()=>app.init());
