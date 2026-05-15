import type { Lang } from "@/i18n/translations";

type LStr = Partial<Record<Lang, string>> & { pl: string };

export type MenuItem = {
  name: string;
  desc: LStr;
  price: number;
  badge?: LStr;
};
export type MenuSection = {
  id: string;
  title: LStr;
  subtitle?: LStr;
  note?: LStr;
  items: MenuItem[];
};

export function pick(s: LStr | undefined, lang: Lang): string {
  if (!s) return "";
  return s[lang] ?? s.pl;
}

const T = (pl: string, en: string, es: string, de: string): LStr => ({ pl, en, es, de });

export const menu: MenuSection[] = [
  {
    id: "przystawki",
    title: T("Przystawki", "Starters", "Entrantes", "Vorspeisen"),
    subtitle: T("Wypiekane / zapiekane w piecu", "Baked in the oven", "Horneados al horno", "Im Ofen gebacken"),
    items: [
      { name: "Czosnkowe bułeczki", price: 25, desc: T(
        "Bułeczki z ciasta neapolitańskiego (6 szt.), z pesto pistacjowym i czosnkiem, Pecorino Romano DOP, sos aioli",
        "Neapolitan dough rolls (6 pcs) with pistachio pesto and garlic, Pecorino Romano DOP, aioli sauce",
        "Panecillos de masa napolitana (6 uds.) con pesto de pistacho y ajo, Pecorino Romano DOP, salsa alioli",
        "Brötchen aus neapolitanischem Teig (6 Stk.) mit Pistazienpesto und Knoblauch, Pecorino Romano DOP, Aioli",
      ) },
      { name: "Krewetki w sosie winno-maślanym", price: 34, desc: T(
        "Krewetki (6 szt.) zapiekane w sosie z białego wina, masła i mleczka kokosowego, z pomidorków półsuszonych, czosnku, miodu-chilli, podawane z focaccią, posypane prażonymi migdałami",
        "Shrimp (6 pcs) baked in white wine, butter and coconut milk sauce with semi-dried tomatoes, garlic, chilli honey, served with focaccia and roasted almonds",
        "Gambas (6 uds.) al horno en salsa de vino blanco, mantequilla y leche de coco, con tomates semisecos, ajo, miel-chile, con focaccia y almendras tostadas",
        "Garnelen (6 Stk.) gebacken in Weißwein-Butter-Kokossauce mit halbgetrockneten Tomaten, Knoblauch, Chili-Honig, dazu Focaccia und geröstete Mandeln",
      ) },
      { name: "Burrata zapiekana w pomidorach", price: 31, desc: T(
        "Burrata, pomidory San Marzano, pomidory półsuszone, focaccia",
        "Burrata, San Marzano tomatoes, semi-dried tomatoes, focaccia",
        "Burrata, tomates San Marzano, tomates semisecos, focaccia",
        "Burrata, San-Marzano-Tomaten, halbgetrocknete Tomaten, Focaccia",
      ) },
    ],
  },
  {
    id: "zupy",
    title: T("Zupy", "Soups", "Sopas", "Suppen"),
    items: [
      { name: "Krem pomidorowy", price: 24, desc: T(
        "Aksamitny krem pomidorowy z dodatkiem mascarpone i pesto pistacjowego, podawany z focaccią",
        "Velvety tomato cream with mascarpone and pistachio pesto, served with focaccia",
        "Crema de tomate aterciopelada con mascarpone y pesto de pistacho, con focaccia",
        "Samtige Tomatencreme mit Mascarpone und Pistazienpesto, dazu Focaccia",
      ) },
      { name: "Krem z gorgonzoli", price: 25, desc: T(
        "Wyrazisty serowy krem na bazie Gorgonzoli, podawany z focaccią",
        "Bold cheese cream based on Gorgonzola, served with focaccia",
        "Crema intensa de queso a base de Gorgonzola, con focaccia",
        "Kräftige Käsecreme aus Gorgonzola, dazu Focaccia",
      ) },
    ],
  },
  {
    id: "focaccia",
    title: T("Focaccia", "Focaccia", "Focaccia", "Focaccia"),
    items: [
      { name: "Focaccia z zapiekanym kremem z Pecorino Romano i dipem z karczocha", price: 38, desc: T(
        "(dla 2 os.) Focaccia ziołowa podawana z zapiekanym kremem z sera Pecorino Romano i delikatnym dipem z karczocha i trufli",
        "(for 2) Herb focaccia served with baked Pecorino Romano cream and a delicate artichoke-truffle dip",
        "(para 2) Focaccia de hierbas con crema horneada de Pecorino Romano y dip suave de alcachofa y trufa",
        "(für 2 Personen) Kräuter-Focaccia mit überbackener Pecorino-Romano-Creme und feinem Artischocken-Trüffel-Dip",
      ) },
    ],
  },
  {
    id: "pizza-miesiaca",
    title: T("Pizza Miesiąca", "Pizza of the Month", "Pizza del Mes", "Pizza des Monats"),
    subtitle: T("Nasz bestseller", "Our bestseller", "Nuestro bestseller", "Unser Bestseller"),
    items: [
      { name: "Pizza Miesiąca", price: 52,
        badge: T("Bestseller", "Bestseller", "Bestseller", "Bestseller"),
        desc: T(
        "Śmietanowo-truflowy spód, mozzarella fior di latte, Salsiccia Picante, pieczarki, szczypior, puder truflowy",
        "Cream-truffle base, fior di latte mozzarella, Salsiccia Piccante, mushrooms, chives, truffle dust",
        "Base de nata y trufa, mozzarella fior di latte, Salsiccia Piccante, champiñones, cebollino, polvo de trufa",
        "Sahne-Trüffel-Boden, Fior di Latte Mozzarella, Salsiccia Piccante, Champignons, Schnittlauch, Trüffelpulver",
      ) },
    ],
  },
  {
    id: "rossa",
    title: T("Pizza Rossa", "Pizza Rossa", "Pizza Rossa", "Pizza Rossa"),
    subtitle: T("Z sosem pomidorowym", "With tomato sauce", "Con salsa de tomate", "Mit Tomatensauce"),
    note: T("ok. 32 cm", "approx. 32 cm", "aprox. 32 cm", "ca. 32 cm"),
    items: [
      { name: "Marinara", price: 32, desc: T(
        "pomodoro san marzano DOP, czosnek, oregano, świeża bazylia, oliwa extra virgin",
        "san marzano DOP tomato, garlic, oregano, fresh basil, extra virgin olive oil",
        "tomate san marzano DOP, ajo, orégano, albahaca fresca, AOVE",
        "San-Marzano-DOP-Tomate, Knoblauch, Oregano, frisches Basilikum, Olivenöl Extra Vergine",
      ) },
      { name: "Margherita", price: 36, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, świeża bazylia, grana padano DOP",
        "san marzano DOP tomato, fior di latte mozzarella, fresh basil, grana padano DOP",
        "tomate san marzano DOP, mozzarella fior di latte, albahaca fresca, grana padano DOP",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, frisches Basilikum, Grana Padano DOP",
      ) },
      { name: "Margherita di Bufala", price: 50, desc: T(
        "pomodoro san marzano DOP, mozzarella di bufala DOP, świeża bazylia, grana padano DOP",
        "san marzano DOP tomato, buffalo mozzarella DOP, fresh basil, grana padano DOP",
        "tomate san marzano DOP, mozzarella di bufala DOP, albahaca fresca, grana padano DOP",
        "San-Marzano-DOP-Tomate, Büffelmozzarella DOP, frisches Basilikum, Grana Padano DOP",
      ) },
      { name: "Calabrese Cremosa", price: 50, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, nduja, mascarpone, cebula czerwona lub karmelizowana (do wyboru)",
        "san marzano DOP tomato, fior di latte mozzarella, nduja, mascarpone, red or caramelised onion (choice)",
        "tomate san marzano DOP, mozzarella fior di latte, nduja, mascarpone, cebolla roja o caramelizada (a elegir)",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Nduja, Mascarpone, rote oder karamellisierte Zwiebel (zur Auswahl)",
      ) },
      { name: "Napoli", price: 48, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, salami napoli, oliwki Riviera (mogą zawierać pestki)",
        "san marzano DOP tomato, fior di latte mozzarella, napoli salami, Riviera olives (may contain pits)",
        "tomate san marzano DOP, mozzarella fior di latte, salami napoli, aceitunas Riviera (pueden tener hueso)",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Napoli-Salami, Riviera-Oliven (können Kerne enthalten)",
      ) },
      { name: "Prosciutto e Funghi", price: 46, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, prosciutto cotto, pieczarki",
        "san marzano DOP tomato, fior di latte mozzarella, prosciutto cotto, mushrooms",
        "tomate san marzano DOP, mozzarella fior di latte, prosciutto cotto, champiñones",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Prosciutto Cotto, Champignons",
      ) },
      { name: "Diavola", price: 52,
        badge: T("Popularne", "Popular", "Popular", "Beliebt"),
        desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, salami spianata piccante, czosnek, pomidorki suszone",
        "san marzano DOP tomato, fior di latte mozzarella, spianata piccante salami, garlic, sun-dried tomatoes",
        "tomate san marzano DOP, mozzarella fior di latte, salami spianata piccante, ajo, tomates secos",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Spianata Piccante Salami, Knoblauch, getrocknete Tomaten",
      ) },
      { name: "Vegetariana (calzone)", price: 55, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, grillowana papryka, karczochy, pomidorki półsuszone, karmelizowana cebula, krem z Grana Padano, Pecorino Romano DOP",
        "san marzano DOP tomato, fior di latte mozzarella, grilled peppers, artichokes, semi-dried tomatoes, caramelised onion, Grana Padano cream, Pecorino Romano DOP",
        "tomate san marzano DOP, mozzarella fior di latte, pimientos asados, alcachofas, tomates semisecos, cebolla caramelizada, crema de Grana Padano, Pecorino Romano DOP",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, gegrillte Paprika, Artischocken, halbgetrocknete Tomaten, karamellisierte Zwiebel, Grana-Padano-Creme, Pecorino Romano DOP",
      ) },
      { name: "Capricciosa", price: 54, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, prosciutto cotto, oliwki Riviera, pieczarki, karczochy",
        "san marzano DOP tomato, fior di latte mozzarella, prosciutto cotto, Riviera olives, mushrooms, artichokes",
        "tomate san marzano DOP, mozzarella fior di latte, prosciutto cotto, aceitunas Riviera, champiñones, alcachofas",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Prosciutto Cotto, Riviera-Oliven, Champignons, Artischocken",
      ) },
    ],
  },
  {
    id: "bianca",
    title: T("Pizza Bianca", "Pizza Bianca", "Pizza Bianca", "Pizza Bianca"),
    subtitle: T("Na bazie śmietanki i sera", "Cream and cheese base", "Base de nata y queso", "Sahne- und Käsebasis"),
    note: T("ok. 32 cm", "approx. 32 cm", "aprox. 32 cm", "ca. 32 cm"),
    items: [
      { name: "Gorgonzola", price: 53, desc: T(
        "mozzarella fior di latte, śmietanka Panna, salami Spianata Piccante lub Napoli (do wyboru), gorgonzola DOP, gruszka, orzechy włoskie, bazylia",
        "fior di latte mozzarella, panna cream, Spianata Piccante or Napoli salami (choice), gorgonzola DOP, pear, walnuts, basil",
        "mozzarella fior di latte, nata Panna, salami Spianata Piccante o Napoli (a elegir), gorgonzola DOP, pera, nueces, albahaca",
        "Fior di Latte Mozzarella, Panna-Sahne, Spianata Piccante oder Napoli Salami (zur Auswahl), Gorgonzola DOP, Birne, Walnüsse, Basilikum",
      ) },
      { name: "Quatro Formaggi", price: 51, desc: T(
        "mozzarella fior di latte, gorgonzola DOP, taleggio, grana padano DOP. Polecamy z dodatkiem pikantnego salami (+10 zł) i miodu chilli (+4 zł)",
        "fior di latte mozzarella, gorgonzola DOP, taleggio, grana padano DOP. We recommend spicy salami (+10 PLN) and chilli honey (+4 PLN)",
        "mozzarella fior di latte, gorgonzola DOP, taleggio, grana padano DOP. Recomendamos salami picante (+10 PLN) y miel-chile (+4 PLN)",
        "Fior di Latte Mozzarella, Gorgonzola DOP, Taleggio, Grana Padano DOP. Empfohlen mit scharfer Salami (+10 PLN) und Chili-Honig (+4 PLN)",
      ) },
      { name: "Gamberi", price: 55, desc: T(
        "mozzarella fior di latte, śmietanka Panna, krewetki, pomidorki półsuszone, czosnek, chilli, szpinak baby",
        "fior di latte mozzarella, panna cream, shrimp, semi-dried tomatoes, garlic, chilli, baby spinach",
        "mozzarella fior di latte, nata Panna, gambas, tomates semisecos, ajo, chile, espinacas baby",
        "Fior di Latte Mozzarella, Panna-Sahne, Garnelen, halbgetrocknete Tomaten, Knoblauch, Chili, Babyspinat",
      ) },
      { name: "Tartufo Crema", price: 51, desc: T(
        "mozzarella fior di latte, śmietanka Panna, krem truflowy, pancetta DOP, pieczarka, pecorino Romano DOP, świeży pieprz",
        "fior di latte mozzarella, panna cream, truffle cream, pancetta DOP, mushroom, Pecorino Romano DOP, fresh pepper",
        "mozzarella fior di latte, nata Panna, crema de trufa, pancetta DOP, champiñón, Pecorino Romano DOP, pimienta fresca",
        "Fior di Latte Mozzarella, Panna-Sahne, Trüffelcreme, Pancetta DOP, Champignon, Pecorino Romano DOP, frischer Pfeffer",
      ) },
      { name: "Pancetta e Cipolla", price: 51, desc: T(
        "mozzarella fior di latte, śmietanka Panna, Pancetta DOP, czerwona cebula, Pecorino Romano",
        "fior di latte mozzarella, panna cream, Pancetta DOP, red onion, Pecorino Romano",
        "mozzarella fior di latte, nata Panna, Pancetta DOP, cebolla roja, Pecorino Romano",
        "Fior di Latte Mozzarella, Panna-Sahne, Pancetta DOP, rote Zwiebel, Pecorino Romano",
      ) },
    ],
  },
  {
    id: "speciale",
    title: T("Pizza Speciale", "Pizza Speciale", "Pizza Speciale", "Pizza Speciale"),
    subtitle: T("Specjały naszej kuchni", "Our specialities", "Nuestras especialidades", "Unsere Spezialitäten"),
    note: T("ok. 32 cm", "approx. 32 cm", "aprox. 32 cm", "ca. 32 cm"),
    items: [
      { name: "Parma", price: 56, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, rukola, prosciutto San Daniele DOP, pomidorki półsuszone, grana padano DOP",
        "san marzano DOP tomato, fior di latte mozzarella, rocket, prosciutto San Daniele DOP, semi-dried tomatoes, grana padano DOP",
        "tomate san marzano DOP, mozzarella fior di latte, rúcula, prosciutto San Daniele DOP, tomates semisecos, grana padano DOP",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Rucola, Prosciutto San Daniele DOP, halbgetrocknete Tomaten, Grana Padano DOP",
      ) },
      { name: "Mortadella Cremosa", price: 56, desc: T(
        "mozzarella fior di latte, karmelizowane pomidorki suszone, Mortadella z pistacjami, krem z Grana Padano DOP, pesto pistacjowe, kruszone pistacje",
        "fior di latte mozzarella, caramelised sun-dried tomatoes, pistachio Mortadella, Grana Padano DOP cream, pistachio pesto, crushed pistachios",
        "mozzarella fior di latte, tomates secos caramelizados, Mortadela con pistachos, crema de Grana Padano DOP, pesto de pistacho, pistachos triturados",
        "Fior di Latte Mozzarella, karamellisierte getrocknete Tomaten, Pistazien-Mortadella, Grana-Padano-DOP-Creme, Pistazienpesto, gehackte Pistazien",
      ) },
      { name: "Tartufo Classico", price: 53, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, salami Spianata, pasta truflowa, mascarpone",
        "san marzano DOP tomato, fior di latte mozzarella, Spianata salami, truffle paste, mascarpone",
        "tomate san marzano DOP, mozzarella fior di latte, salami Spianata, pasta de trufa, mascarpone",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, Spianata Salami, Trüffelpaste, Mascarpone",
      ) },
      { name: "Burratina", price: 56,
        badge: T("Polecane", "Recommended", "Recomendada", "Empfohlen"),
        desc: T(
        "pomodoro san marzano DOP, pomidorki półsuszone, oliwki, pesto pistacjowe, kruszone pistacje, balsamico, Burrata, świeża bazylia",
        "san marzano DOP tomato, semi-dried tomatoes, olives, pistachio pesto, crushed pistachios, balsamic, Burrata, fresh basil",
        "tomate san marzano DOP, tomates semisecos, aceitunas, pesto de pistacho, pistachos triturados, balsámico, Burrata, albahaca fresca",
        "San-Marzano-DOP-Tomate, halbgetrocknete Tomaten, Oliven, Pistazienpesto, gehackte Pistazien, Balsamico, Burrata, frisches Basilikum",
      ) },
      { name: "Dolce 'Nduja", price: 50, desc: T(
        "pomodoro san marzano DOP, mozzarella fior di latte, 'nduja, mascarpone, pulpa mango",
        "san marzano DOP tomato, fior di latte mozzarella, 'nduja, mascarpone, mango pulp",
        "tomate san marzano DOP, mozzarella fior di latte, 'nduja, mascarpone, pulpa de mango",
        "San-Marzano-DOP-Tomate, Fior di Latte Mozzarella, 'Nduja, Mascarpone, Mango-Pulpe",
      ) },
    ],
  },
  {
    id: "salatki",
    title: T("Sałatki", "Salads", "Ensaladas", "Salate"),
    subtitle: T("W zestawie focaccia", "Focaccia included", "Focaccia incluida", "Mit Focaccia"),
    items: [
      { name: "Sałatka z San Daniele", price: 50, desc: T(
        "Mix sałat, prosciutto San Daniele, pomidorki półsuszone, oliwki Riviera, pestki dyni, glaze balsamiczny, winegret. Ser do wyboru: Burrata lub Mozzarella di Bufala",
        "Mixed salad, prosciutto San Daniele, semi-dried tomatoes, Riviera olives, pumpkin seeds, balsamic glaze, vinaigrette. Cheese choice: Burrata or Mozzarella di Bufala",
        "Mezcla de hojas, prosciutto San Daniele, tomates semisecos, aceitunas Riviera, pipas de calabaza, glaseado balsámico, vinagreta. Queso a elegir: Burrata o Mozzarella di Bufala",
        "Salatmix, Prosciutto San Daniele, halbgetrocknete Tomaten, Riviera-Oliven, Kürbiskerne, Balsamico-Glace, Vinaigrette. Käse zur Auswahl: Burrata oder Büffelmozzarella",
      ) },
      { name: "Sałatka z wędzonym łososiem", price: 48, desc: T(
        "Mix sałat, wędzony łosoś, czerwona cebula, pomidorki półsuszone, Grana Padano DOP, dressing majonezowo-gruszkowy. Ser do wyboru: Burrata lub Mozzarella di Bufala",
        "Mixed salad, smoked salmon, red onion, semi-dried tomatoes, Grana Padano DOP, mayo-pear dressing. Cheese choice: Burrata or Mozzarella di Bufala",
        "Mezcla de hojas, salmón ahumado, cebolla roja, tomates semisecos, Grana Padano DOP, aliño de mayonesa y pera. Queso a elegir: Burrata o Mozzarella di Bufala",
        "Salatmix, Räucherlachs, rote Zwiebel, halbgetrocknete Tomaten, Grana Padano DOP, Mayo-Birnen-Dressing. Käse zur Auswahl: Burrata oder Büffelmozzarella",
      ) },
      { name: "Sałatka z Gorgonzolą", price: 48, desc: T(
        "Mix sałat, Gorgonzola DOP, gruszka w zalewie cukrowej, orzechy włoskie, prosciutto San Daniele, winegret",
        "Mixed salad, Gorgonzola DOP, pear in syrup, walnuts, prosciutto San Daniele, vinaigrette",
        "Mezcla de hojas, Gorgonzola DOP, pera en almíbar, nueces, prosciutto San Daniele, vinagreta",
        "Salatmix, Gorgonzola DOP, Birne in Sirup, Walnüsse, Prosciutto San Daniele, Vinaigrette",
      ) },
    ],
  },
  {
    id: "desery",
    title: T("Desery", "Desserts", "Postres", "Desserts"),
    items: [
      { name: "Cannoli (2 szt.)", price: 33, desc: T(
        "1× rurka pistacjowa, o drugi smak zapytaj obsługę. Zawsze podajemy w zestawie",
        "1× pistachio cannoli, ask staff for the second flavour. Always served as a set",
        "1× cannolo de pistacho; pregunta al personal por el segundo sabor. Siempre en pareja",
        "1× Pistazien-Cannolo, zweite Sorte beim Personal erfragen. Immer im Set serviert",
      ) },
      { name: "Szarlotka na ciepło", price: 29, desc: T(
        "Z lodami i bitą śmietaną",
        "Warm apple pie with ice cream and whipped cream",
        "Tarta de manzana caliente con helado y nata montada",
        "Warmer Apfelkuchen mit Eis und Schlagsahne",
      ) },
      { name: "Tiramisu", price: 32, desc: T(
        "Nakładane prosto z blachy",
        "Served straight from the tray",
        "Servido directamente de la bandeja",
        "Direkt aus der Form serviert",
      ) },
      { name: "Sernik", price: 30, desc: T(
        "O rodzaj dostępnego sernika zapytaj obsługę :)",
        "Ask staff for today's cheesecake :)",
        "Pregunta al personal por la tarta de queso del día :)",
        "Frag das Personal nach dem heutigen Käsekuchen :)",
      ) },
    ],
  },
  {
    id: "koktajle",
    title: T("Koktajle", "Cocktails", "Cócteles", "Cocktails"),
    items: [
      { name: "Whisky Sour", price: 35, desc: T("Whisky Jameson 40 ml, sour, sweet, białko, angostura", "Jameson Whiskey 40 ml, sour, sweet, egg white, angostura", "Whisky Jameson 40 ml, sour, sweet, clara, angostura", "Jameson Whiskey 40 ml, Sour, Sweet, Eiweiß, Angostura") },
      { name: "Blink Blink Baby", price: 37, desc: T("Bombay Sapphire Gin 40 ml, Malibu 20 ml, syrop kokosowy, puree z marakui, sour, sweet, białko, glitter", "Bombay Sapphire Gin 40 ml, Malibu 20 ml, coconut syrup, passion fruit purée, sour, sweet, egg white, glitter", "Gin Bombay Sapphire 40 ml, Malibu 20 ml, sirope de coco, puré de maracuyá, sour, sweet, clara, purpurina", "Bombay Sapphire Gin 40 ml, Malibu 20 ml, Kokossirup, Maracuja-Püree, Sour, Sweet, Eiweiß, Glitzer") },
      { name: "Mojito", price: 35, desc: T("Bacardi Carta Blanca 40 ml, cukier trzcinowy, limonka, mięta, woda gazowana", "Bacardi Carta Blanca 40 ml, cane sugar, lime, mint, soda water", "Bacardi Carta Blanca 40 ml, azúcar de caña, lima, menta, soda", "Bacardi Carta Blanca 40 ml, Rohrzucker, Limette, Minze, Sodawasser") },
      { name: "Pornstar Martini", price: 38, desc: T("Wódka Finlandia 60 ml, Passoa 30 ml, sour, sweet, syrop waniliowy, puree marakuja, Prosecco", "Finlandia Vodka 60 ml, Passoa 30 ml, sour, sweet, vanilla syrup, passion fruit purée, Prosecco", "Vodka Finlandia 60 ml, Passoa 30 ml, sour, sweet, sirope de vainilla, puré de maracuyá, Prosecco", "Finlandia Vodka 60 ml, Passoa 30 ml, Sour, Sweet, Vanillesirup, Maracuja-Püree, Prosecco") },
      { name: "Cuba Libre", price: 35, desc: T("Bacardi Spiced 50 ml, sweet, sour, limonka, coca-cola", "Bacardi Spiced 50 ml, sweet, sour, lime, coca-cola", "Bacardi Spiced 50 ml, sweet, sour, lima, coca-cola", "Bacardi Spiced 50 ml, Sweet, Sour, Limette, Coca-Cola") },
      { name: "Pina Colada", price: 35, desc: T("Bacardi Carta Blanca 40 ml, mleczko kokosowe, sok ananasowy", "Bacardi Carta Blanca 40 ml, coconut milk, pineapple juice", "Bacardi Carta Blanca 40 ml, leche de coco, zumo de piña", "Bacardi Carta Blanca 40 ml, Kokosmilch, Ananassaft") },
      { name: "Tiki Just Smile", price: 36, desc: T("Bacardi Spiced 60 ml, falernum, marakuja, sour, sok żurawinowy", "Bacardi Spiced 60 ml, falernum, passion fruit, sour, cranberry juice", "Bacardi Spiced 60 ml, falernum, maracuyá, sour, zumo de arándano", "Bacardi Spiced 60 ml, Falernum, Maracuja, Sour, Cranberrysaft") },
      { name: "Raspberry Margarita", price: 35, desc: T("Olmeca Silver Tequila 40 ml, puree z malin, Cointreau 20 ml, sour, sweet", "Olmeca Silver Tequila 40 ml, raspberry purée, Cointreau 20 ml, sour, sweet", "Tequila Olmeca Silver 40 ml, puré de frambuesa, Cointreau 20 ml, sour, sweet", "Olmeca Silver Tequila 40 ml, Himbeerpüree, Cointreau 20 ml, Sour, Sweet") },
      { name: "Tiki Jager", price: 36, desc: T("Jagermeister 60 ml, sok ananasowy, syrop hibiskus, sweet, sour, tonik, angostura", "Jägermeister 60 ml, pineapple juice, hibiscus syrup, sweet, sour, tonic, angostura", "Jägermeister 60 ml, zumo de piña, sirope de hibisco, sweet, sour, tónica, angostura", "Jägermeister 60 ml, Ananassaft, Hibiskussirup, Sweet, Sour, Tonic, Angostura") },
    ],
  },
  {
    id: "szprycery",
    title: T("Szprycery", "Spritzers", "Spritz", "Spritzer"),
    items: [
      { name: "Limoncello Spritz", price: 32, desc: T("Likier Limoncello, sweet, sour, prosecco, woda gazowana", "Limoncello liqueur, sweet, sour, prosecco, soda water", "Licor Limoncello, sweet, sour, prosecco, soda", "Limoncello-Likör, Sweet, Sour, Prosecco, Sodawasser") },
      { name: "Aperol Spritz", price: 32, desc: T("Aperol, prosecco, woda gazowana", "Aperol, prosecco, soda water", "Aperol, prosecco, soda", "Aperol, Prosecco, Sodawasser") },
      { name: "Hugo Spritz", price: 33, desc: T("Likier St-Germain, prosecco, syrop z czarnego bzu, woda gazowana", "St-Germain liqueur, prosecco, elderflower syrup, soda water", "Licor St-Germain, prosecco, sirope de saúco, soda", "St-Germain-Likör, Prosecco, Holundersirup, Sodawasser") },
    ],
  },
  {
    id: "moktajle",
    title: T("Moktajle", "Mocktails", "Mocktails", "Mocktails"),
    subtitle: T("Czyli koktajle bezalkoholowe", "Alcohol-free cocktails", "Cócteles sin alcohol", "Alkoholfreie Cocktails"),
    items: [
      { name: "Aperol Spritz 0%", price: 30, desc: T("Crodino, prosecco 0%, woda gazowana", "Crodino, prosecco 0%, soda water", "Crodino, prosecco 0%, soda", "Crodino, Prosecco 0%, Sodawasser") },
      { name: "Limoncello Spritz 0%", price: 30, desc: T("Likier Limoncello 0%, prosecco 0%, sweet, sour, woda gazowana", "Limoncello 0% liqueur, prosecco 0%, sweet, sour, soda water", "Licor Limoncello 0%, prosecco 0%, sweet, sour, soda", "Limoncello-Likör 0%, Prosecco 0%, Sweet, Sour, Sodawasser") },
      { name: "Mojito 0%", price: 30, desc: T("Limonka, cukier trzcinowy, sour, sweet, woda gazowana, tonik", "Lime, cane sugar, sour, sweet, soda water, tonic", "Lima, azúcar de caña, sour, sweet, soda, tónica", "Limette, Rohrzucker, Sour, Sweet, Sodawasser, Tonic") },
      { name: "Hugo Spritz 0%", price: 30, desc: T("Syrop z kwiatu czarnego bzu, prosecco 0%, sweet, sour, woda gazowana", "Elderflower syrup, prosecco 0%, sweet, sour, soda water", "Sirope de flor de saúco, prosecco 0%, sweet, sour, soda", "Holunderblütensirup, Prosecco 0%, Sweet, Sour, Sodawasser") },
    ],
  },
  {
    id: "piwo-lane",
    title: T("Piwo lane", "Draft beer", "Cerveza de barril", "Bier vom Fass"),
    items: [
      { name: "Grimbergen Blanche", price: 17, desc: T("Piwo pszeniczne typu Witbier 330 ml", "Witbier-style wheat beer 330 ml", "Cerveza de trigo tipo Witbier 330 ml", "Weizenbier (Witbier) 330 ml") },
      { name: "Grimbergen Blonde", price: 17, desc: T("Piwo jasne w stylu Belgian Blonde Ale 330 ml", "Belgian Blonde Ale 330 ml", "Belgian Blonde Ale 330 ml", "Belgian Blonde Ale 330 ml") },
    ],
  },
  {
    id: "piwo-butelkowe",
    title: T("Piwo butelkowe", "Bottled beer", "Cerveza en botella", "Flaschenbier"),
    items: [
      { name: "Grimbergen Double Ambree", price: 17, desc: T("Piwo ciemne słodowe 330 ml", "Dark malt beer 330 ml", "Cerveza oscura de malta 330 ml", "Dunkles Malzbier 330 ml") },
      { name: "Žatecký Pils", price: 17, desc: T("500 ml", "500 ml", "500 ml", "500 ml") },
      { name: "Somersby", price: 16, desc: T("400 ml — zapytaj o dostępny smak", "400 ml — ask for the available flavour", "400 ml — pregunta por el sabor disponible", "400 ml — frag nach der verfügbaren Sorte") },
      { name: "Książęce IPA", price: 17, desc: T("500 ml", "500 ml", "500 ml", "500 ml") },
      { name: "Birra Messina Cristalli di Sale", price: 17, desc: T("330 ml", "330 ml", "330 ml", "330 ml") },
      { name: "Žatecký 0%", price: 17, desc: T("500 ml", "500 ml", "500 ml", "500 ml") },
      { name: "Somersby 0%", price: 16, desc: T("400 ml", "400 ml", "400 ml", "400 ml") },
      { name: "Książęce Złote Pszeniczne 0%", price: 17, desc: T("500 ml", "500 ml", "500 ml", "500 ml") },
    ],
  },
  {
    id: "napoje-cieple",
    title: T("Napoje ciepłe", "Hot drinks", "Bebidas calientes", "Heißgetränke"),
    items: [
      { name: "Espresso", price: 9, desc: T("Pojedyncze espresso 25 ml", "Single espresso 25 ml", "Espresso simple 25 ml", "Einfacher Espresso 25 ml") },
      { name: "Espresso Macchiato", price: 10, desc: T("Espresso z dodatkiem spienionego mleka", "Espresso with a touch of foamed milk", "Espresso con un toque de leche espumada", "Espresso mit etwas Milchschaum") },
      { name: "Doppio", price: 12, desc: T("Podwójne espresso 2× 25 ml", "Double espresso 2× 25 ml", "Espresso doble 2× 25 ml", "Doppelter Espresso 2× 25 ml") },
      { name: "Americano", price: 13, desc: T("Podwójne espresso, woda 250 ml", "Double espresso, water 250 ml", "Espresso doble, agua 250 ml", "Doppelter Espresso, Wasser 250 ml") },
      { name: "Cappuccino", price: 16, desc: T("Pojedyncze espresso, spienione mleko 250 ml", "Single espresso, foamed milk 250 ml", "Espresso simple, leche espumada 250 ml", "Espresso, Milchschaum 250 ml") },
      { name: "Flat White", price: 17, desc: T("Podwójne espresso, spienione mleko 250 ml", "Double espresso, foamed milk 250 ml", "Espresso doble, leche espumada 250 ml", "Doppelter Espresso, Milchschaum 250 ml") },
      { name: "Herbata Richmont 400 ml", price: 17, desc: T("Czarna, zielona-jaśminowa, owocowa, rooibos", "Black, jasmine green, fruit, rooibos", "Negro, verde jazmín, frutal, rooibos", "Schwarz, Jasmin-Grün, Frucht, Rooibos") },
    ],
  },
  {
    id: "napoje-zimne",
    title: T("Napoje zimne", "Cold drinks", "Bebidas frías", "Kaltgetränke"),
    items: [
      { name: "Woda mineralna Levico", price: 13, desc: T("Naturalna woda mineralna z włoskich Alp 500 ml — gazowana lub niegazowana", "Natural mineral water from the Italian Alps 500 ml — sparkling or still", "Agua mineral natural de los Alpes italianos 500 ml — con o sin gas", "Natürliches Mineralwasser aus den italienischen Alpen 500 ml — mit oder ohne Kohlensäure") },
      { name: "Coca-Cola / Zero", price: 12, desc: T("250 ml", "250 ml", "250 ml", "250 ml") },
      { name: "Dobry Materiał", price: 17, desc: T("330 ml — o dostępne smaki zapytaj obsługę", "330 ml — ask staff for available flavours", "330 ml — pregunta al personal por los sabores", "330 ml — frag das Personal nach den Sorten") },
      { name: "Dobry Materiał soki NFC 100%", price: 12, desc: T("250 ml — pomarańcza w jabłku, smaczne jabłko", "250 ml — orange-apple, tasty apple", "250 ml — naranja-manzana, manzana", "250 ml — Orange-Apfel, Apfel") },
      { name: "Lemon Soda", price: 13, desc: T("330 ml — włoska lemoniada gazowana: orange, mojito, lemon", "330 ml — Italian sparkling lemonade: orange, mojito, lemon", "330 ml — limonada italiana con gas: orange, mojito, lemon", "330 ml — italienische Sprudel-Limonade: Orange, Mojito, Lemon") },
    ],
  },
];

export const dodatki: Record<"miesny" | "warzywny" | "ser" | "inne", { title: LStr; items: LStr; price: LStr }> = {
  miesny: {
    title: T("Mięsny", "Meat", "Carne", "Fleisch"),
    items: T(
      "Salami Spianata, Salami Napoli, Prosciutto Cotto, Mortadella, Pancetta, 'Nduja",
      "Salami Spianata, Salami Napoli, Prosciutto Cotto, Mortadella, Pancetta, 'Nduja",
      "Salami Spianata, Salami Napoli, Prosciutto Cotto, Mortadela, Pancetta, 'Nduja",
      "Salami Spianata, Salami Napoli, Prosciutto Cotto, Mortadella, Pancetta, 'Nduja",
    ),
    price: T("+11 zł, Prosciutto San Daniele +14 zł", "+11 PLN, Prosciutto San Daniele +14 PLN", "+11 PLN, Prosciutto San Daniele +14 PLN", "+11 PLN, Prosciutto San Daniele +14 PLN"),
  },
  warzywny: {
    title: T("Warzywny", "Vegetable", "Vegetal", "Gemüse"),
    items: T(
      "Pieczarka, pomidor suszony, cebula, pomidor półsuszony, karczochy, oliwki Riviera, papryka grillowana, rukola, szpinak, chilli, czosnek",
      "Mushroom, sun-dried tomato, onion, semi-dried tomato, artichokes, Riviera olives, grilled pepper, rocket, spinach, chilli, garlic",
      "Champiñón, tomate seco, cebolla, tomate semiseco, alcachofas, aceitunas Riviera, pimiento asado, rúcula, espinacas, chile, ajo",
      "Champignon, getrocknete Tomate, Zwiebel, halbgetrocknete Tomate, Artischocken, Riviera-Oliven, gegrillte Paprika, Rucola, Spinat, Chili, Knoblauch",
    ),
    price: T("+5 / +6 zł", "+5 / +6 PLN", "+5 / +6 PLN", "+5 / +6 PLN"),
  },
  ser: {
    title: T("Ser", "Cheese", "Queso", "Käse"),
    items: T(
      "Taleggio, Gorgonzola, Mascarpone +7 zł, Burrata +16 zł, Mozzarella di Bufala +16 zł",
      "Taleggio, Gorgonzola, Mascarpone +7 PLN, Burrata +16 PLN, Mozzarella di Bufala +16 PLN",
      "Taleggio, Gorgonzola, Mascarpone +7 PLN, Burrata +16 PLN, Mozzarella di Bufala +16 PLN",
      "Taleggio, Gorgonzola, Mascarpone +7 PLN, Burrata +16 PLN, Büffelmozzarella +16 PLN",
    ),
    price: T("", "", "", ""),
  },
  inne: {
    title: T("Inne", "Other", "Otros", "Sonstiges"),
    items: T(
      "Krewetki (5 szt.) +12 zł, Pistacje, Orzechy włoskie +5 zł, Pesto pistacjowe +8 zł",
      "Shrimp (5 pcs) +12 PLN, Pistachios, Walnuts +5 PLN, Pistachio pesto +8 PLN",
      "Gambas (5 uds.) +12 PLN, Pistachos, Nueces +5 PLN, Pesto de pistacho +8 PLN",
      "Garnelen (5 Stk.) +12 PLN, Pistazien, Walnüsse +5 PLN, Pistazienpesto +8 PLN",
    ),
    price: T("", "", "", ""),
  },
};
