export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  badge?: string;
};
export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "przystawki",
    title: "Przystawki",
    subtitle: "Wypiekane / zapiekane w piecu",
    items: [
      { name: "Czosnkowe bułeczki", desc: "Bułeczki z ciasta neapolitańskiego (6 szt.), z pesto pistacjowym i czosnkiem, Pecorino Romano DOP, sos aioli", price: 25 },
      { name: "Krewetki w sosie winno-maślanym", desc: "Krewetki (6 szt.) zapiekane w sosie z białego wina, masła i mleczka kokosowego, z pomidorków półsuszonych, czosnku, miodu-chilli, podawane z focaccią, posypane prażonymi migdałami", price: 34 },
      { name: "Burrata zapiekana w pomidorach", desc: "Burrata, pomidory San Marzano, pomidory półsuszone, focaccia", price: 31 },
    ],
  },
  {
    id: "zupy",
    title: "Zupy",
    items: [
      { name: "Krem pomidorowy", desc: "Aksamitny krem pomidorowy z dodatkiem mascarpone i pesto pistacjowego, podawany z focaccią", price: 24 },
      { name: "Krem z gorgonzoli", desc: "Wyrazisty serowy krem na bazie Gorgonzoli, podawany z focaccią", price: 25 },
    ],
  },
  {
    id: "focaccia",
    title: "Focaccia",
    items: [
      { name: "Focaccia z zapiekanym kremem z Pecorino Romano i dipem z karczocha", desc: "(dedykowana dla 2 os.) Focaccia ziołowa podawana z zapiekanym kremem z sera Pecorino Romano i delikatnym dipem z karczocha i trufli", price: 38 },
    ],
  },
  {
    id: "pizza-miesiaca",
    title: "Pizza Miesiąca",
    subtitle: "Nasz bestseller",
    items: [
      { name: "Pizza Miesiąca", desc: "Śmietanowo-truflowy spód, mozzarella fior di latte, Salsiccia Picante, pieczarki, szczypior, puder truflowy", price: 52, badge: "Bestseller" },
    ],
  },
  {
    id: "rossa",
    title: "Pizza Rossa",
    subtitle: "Z sosem pomidorowym",
    note: "ok. 32 cm",
    items: [
      { name: "Marinara", desc: "pomodoro san marzano DOP, czosnek, oregano, świeża bazylia, oliwa extra virgin", price: 32 },
      { name: "Margherita", desc: "pomodoro san marzano DOP, mozzarella fior di latte, świeża bazylia, grana padano DOP", price: 36 },
      { name: "Margherita di Bufala", desc: "pomodoro san marzano DOP, mozzarella di bufala DOP, świeża bazylia, grana padano DOP", price: 50 },
      { name: "Calabrese Cremosa", desc: "pomodoro san marzano DOP, mozzarella fior di latte, nduja, mascarpone, cebula czerwona lub karmelizowana (do wyboru)", price: 50 },
      { name: "Napoli", desc: "pomodoro san marzano DOP, mozzarella fior di latte, salami napoli, oliwki Riviera (mogą zawierać pestki)", price: 48 },
      { name: "Prosciutto e Funghi", desc: "pomodoro san marzano DOP, mozzarella fior di latte, prosciutto cotto, pieczarki", price: 46 },
      { name: "Diavola", desc: "pomodoro san marzano DOP, mozzarella fior di latte, salami spianata piccante, czosnek, pomidorki suszone", price: 52, badge: "Popularne" },
      { name: "Vegetariana (calzone)", desc: "pomodoro san marzano DOP, mozzarella fior di latte, grillowana papryka, karczochy, pomidorki półsuszone, karmelizowana czerwona cebula, krem z Grana Padano, Pecorino Romano DOP", price: 55 },
      { name: "Capricciosa", desc: "pomodoro san marzano DOP, mozzarella fior di latte, prosciutto cotto, oliwki Riviera, pieczarki, karczochy", price: 54 },
    ],
  },
  {
    id: "bianca",
    title: "Pizza Bianca",
    subtitle: "Na bazie śmietanki i sera",
    note: "ok. 32 cm",
    items: [
      { name: "Gorgonzola", desc: "mozzarella fior di latte, śmietanka Panna, salami Spianata Piccante lub Napoli (do wyboru), gorgonzola DOP, gruszka, orzechy włoskie, bazylia", price: 53 },
      { name: "Quatro Formaggi", desc: "mozzarella fior di latte, gorgonzola DOP, taleggio, grana padano DOP. Polecamy z dodatkiem pikantnego salami (+10 zł) i miodu chilli (+4 zł)", price: 51 },
      { name: "Gamberi", desc: "mozzarella fior di latte, śmietanka Panna, krewetki, pomidorki półsuszone, czosnek, chilli, szpinak baby", price: 55 },
      { name: "Tartufo Crema", desc: "mozzarella fior di latte, śmietanka Panna, krem truflowy, pancetta DOP, pieczarka, pecorino Romano DOP, świeży pieprz", price: 51 },
      { name: "Pancetta e Cipolla", desc: "mozzarella fior di latte, śmietanka Panna, Pancetta DOP, czerwona cebula, Pecorino Romano", price: 51 },
    ],
  },
  {
    id: "speciale",
    title: "Pizza Speciale",
    subtitle: "Specjały naszej kuchni",
    note: "ok. 32 cm",
    items: [
      { name: "Parma", desc: "pomodoro san marzano DOP, mozzarella fior di latte, rukola, prosciutto San Daniele DOP, pomidorki półsuszone, granda padano DOP", price: 56 },
      { name: "Mortadella Cremosa", desc: "mozzarella fior di latte, karmelizowane pomidorki suszone, Mortadella z pistacjami, krem z Grana Padano DOP, pesto pistacjowe, kruszone pistacje", price: 56 },
      { name: "Tartufo Classico", desc: "pomodoro san marzano DOP, mozzarella fior di latte, salami Spianata, pasta truflowa, mascarpone", price: 53 },
      { name: "Burratina", desc: "pomodoro san marzano DOP, pomidorki półsuszone, oliwki, pesto pistacjowe, kruszone pistacje, balsamico, Burrata, świeża bazylia", price: 56, badge: "Polecane" },
      { name: "Dolce 'Nduja", desc: "pomodoro san marzano DOP, mozzarella fir di latte, 'nduja, mascarpone, pulpa mango", price: 50 },
    ],
  },
  {
    id: "salatki",
    title: "Sałatki",
    subtitle: "W zestawie focaccia",
    items: [
      { name: "Sałatka z San Daniele", desc: "Mix sałat, prosciutto San Daniele, pomidorki półsuszone, oliwki Riviera, pestki dyni, glaze balsamiczny, sos winegret. Do wyboru ser: Burrata lub Mozzarella di Bufala", price: 50 },
      { name: "Sałatka z wędzonym łososiem", desc: "Mix sałat, wędzony łosoś, czerwona cebula, pomidorki półsuszone, Grana Padano DOP, dressing majonezowo-gruszkowy. Do wyboru ser: Burrata lub Mozzarella di Bufala", price: 48 },
      { name: "Sałatka z Gorgonzolą", desc: "Mix sałat, Gorgonzola DOP, gruszka w zalewie cukrowej, orzechy włoskie, prosciutto San Daniele, winegret", price: 48 },
    ],
  },
  {
    id: "desery",
    title: "Desery",
    items: [
      { name: "Cannoli (2 rurki)", desc: "1× rurka pistacjowa, o drugi smak zapytaj obsługę. Zawsze podajemy w zestawie", price: 33 },
      { name: "Szarlotka na ciepło", desc: "Z lodami i bitą śmietaną", price: 29 },
      { name: "Tiramisu", desc: "Nakładane prosto z blachy", price: 32 },
      { name: "Sernik", desc: "O rodzaj dostępnego sernika zapytaj obsługę :)", price: 30 },
    ],
  },
  {
    id: "koktajle",
    title: "Koktajle",
    items: [
      { name: "Whisky Sour", desc: "Whisky Jameson 40 ml, sour, sweet, białko, angostura", price: 35 },
      { name: "Blink Blink Baby", desc: "Gin Bombay Sapphire London Dry Gin 40 ml, Malibu 20 ml, syrop kokosowy, puree z marakui, sour, sweet, białko, glitter", price: 37 },
      { name: "Mojito", desc: "Bacardi Carta Blanca Rum 40 ml, cukier trzcinowy, limonka, mięta, top up woda gazowana", price: 35 },
      { name: "Pornstar Martini", desc: "Wódka Finlandia 60 ml, Passoa 30 ml, sour, sweet, syrop waniliowy, puree marakuja, Prosecco", price: 38 },
      { name: "Cuba Libre", desc: "Bacardi Spiced Rum 50 ml, sweet, sour, limonka, coca-cola", price: 35 },
      { name: "Pina Colada", desc: "Bacardi Carta Blanca Rum 40 ml, mleczko kokosowe, sok ananasowy", price: 35 },
      { name: "Tiki Just Smile", desc: "Bacardi Spiced 60 ml, falernum, marakuja, sour, sok żurawinowy", price: 36 },
      { name: "Raspberry Margarita", desc: "Olmeca Silver Tequila 40 ml, puree z malin, Cointreau Orange Liquer 20 ml, sour, sweet", price: 35 },
      { name: "Tiki Jager", desc: "Jagermeister 60 ml, sok ananasowy, syrop hibiskus, sweet, sour, kinley tonik, angostura", price: 36 },
    ],
  },
  {
    id: "szprycery",
    title: "Szprycery",
    items: [
      { name: "Limoncello Spritz", desc: "Likier Limoncello, sweet, sour, prosecco, woda gazowana", price: 32 },
      { name: "Aperol Spritz", desc: "Aperol, prosecco, woda gazowana", price: 32 },
      { name: "Hugo Spritz", desc: "Likier St-Germain, prosecco, syrop z czarnego bzu, woda gazowana", price: 33 },
    ],
  },
  {
    id: "moktajle",
    title: "Moktajle",
    subtitle: "Czyli koktajle bezalkoholowe",
    items: [
      { name: "Aperol Spritz 0%", desc: "Crodino, prosecco 0%, woda gazowana", price: 30 },
      { name: "Limoncello Spritz 0%", desc: "Likier Limoncello 0%, prosecco 0%, sweet, sour, woda gazowana", price: 30 },
      { name: "Mojito 0%", desc: "Limonka, cukier trzcinowy, sour, sweet, woda gazowana, tonik kinley", price: 30 },
      { name: "Hugo Spritz 0%", desc: "Syrop z kwiatu czarnego bzu, prosecco 0%, sweet, sour, woda gazowana", price: 30 },
    ],
  },
  {
    id: "piwo-lane",
    title: "Piwo lane",
    items: [
      { name: "Grimbergen Blanche", desc: "Piwo pszeniczne typu Witbier 330 ml", price: 17 },
      { name: "Grimbergen Blonde", desc: "Piwo jasne w stylu Belgian Blonde Ale 330 ml", price: 17 },
    ],
  },
  {
    id: "piwo-butelkowe",
    title: "Piwo butelkowe",
    items: [
      { name: "Grimbergen Double Ambree", desc: "Piwo ciemne słodowe 330 ml", price: 17 },
      { name: "Žatecký Pils", desc: "500 ml", price: 17 },
      { name: "Somersby", desc: "400 ml — zapytaj o dostępny smak", price: 16 },
      { name: "Książęce IPA", desc: "500 ml", price: 17 },
      { name: "Birra Messina Cristalli di Sale", desc: "330 ml", price: 17 },
      { name: "Žatecký 0%", desc: "500 ml", price: 17 },
      { name: "Somersby 0%", desc: "400 ml", price: 16 },
      { name: "Książęce Złote Pszeniczne 0%", desc: "500 ml", price: 17 },
    ],
  },
  {
    id: "napoje-cieple",
    title: "Napoje ciepłe",
    items: [
      { name: "Espresso", desc: "Pojedyncze espresso 25 ml", price: 9 },
      { name: "Espresso Macchiato", desc: "Pojedyncze espresso z dodatkiem spienionego mleka", price: 10 },
      { name: "Doppio", desc: "Podwójne espresso 2× 25 ml", price: 12 },
      { name: "Americano", desc: "Podwójne espresso, woda 250 ml", price: 13 },
      { name: "Cappuccino", desc: "Pojedyncze espresso, spienione mleko 250 ml", price: 16 },
      { name: "Flat White", desc: "Podwójne espresso, spienione mleko 250 ml", price: 17 },
      { name: "Herbata Richmont 400 ml", desc: "Czarna, zielona-jaśminowa, owocowa, rooibos", price: 17 },
    ],
  },
  {
    id: "napoje-zimne",
    title: "Napoje zimne",
    items: [
      { name: "Woda mineralna Levico", desc: "Naturalna woda mineralna z włoskich Alp 500 ml — gazowana lub niegazowana", price: 13 },
      { name: "Coca-Cola / Zero", desc: "250 ml", price: 12 },
      { name: "Dobry Materiał", desc: "330 ml — o dostępne smaki zapytaj obsługę", price: 17 },
      { name: "Dobry Materiał soki NFC 100%", desc: "250 ml — pomarańcza w jabłku, smaczne jabłko", price: 12 },
      { name: "Lemon Soda", desc: "330 ml — włoska lemoniada gazowana: orange, mojito, lemon", price: 13 },
    ],
  },
];

export const dodatki = {
  miesny: { items: "Salami Spianata, Salami Napoli, Prosciutto Cotto, Mortadella, Pancetta, 'Nduja", price: "+11 zł, Prosciutto San Daniele +14 zł" },
  warzywny: { items: "Pieczarka, pomidor suszony, cebula, pomidor półsuszony, karczochy, oliwki Riviera, papryka grillowana, rukola, szpinak, chilli, czosnek", price: "+5 / +6 zł" },
  ser: { items: "Taleggio, Gorgonzola, Mascarpone +7 zł, Burrata +16 zł, Mozzarella di Bufala +16 zł", price: "" },
  inne: { items: "Krewetki (5 szt.) +12 zł, Pistacje, Orzechy włoskie +5 zł, Pesto pistacjowe +8 zł", price: "" },
};
