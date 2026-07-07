import type { GuideFAQ } from "./types";

// FAQs keyed by travel-guide id (see src/data/guides.ts)
export const faqsPart2: Record<string, GuideFAQ[]> = {
  indonesia: [
    {
      question: "Is Indonesia worth visiting?",
      answer:
        "Absolutely, we think it's one of the best-value destinations in Asia. Across 17,000+ islands you get Bali's temples, Java's volcanoes, and world-class surf, with big sights like Borobudur (~450,000 IDR) and Uluwatu Temple (50,000 IDR) costing far less than comparable icons elsewhere.",
    },
    {
      question: "How many days do you need in Indonesia?",
      answer:
        "We recommend 10 to 14 days so you can combine Bali with at least one other island. That's enough time for Ubud and Uluwatu, a sunrise at Mount Bromo (~220,000 IDR entry), and a couple of slow beach days without rushing.",
    },
    {
      question: "How much does Indonesia cost per day?",
      answer:
        "Plan on roughly $45 to $260 per day depending on your style. Budget travelers eating at local warungs and staying in hostels can sit at the low end, since accommodation runs $15 to $150 and transport only $5 to $20 a day.",
    },
    {
      question: "What is the best time of year to visit Indonesia?",
      answer:
        "May to September is the dry season and the sweet spot for beaches, volcano hikes, and temple hopping. We'd avoid planning a Bromo or Mount Batur sunrise trek in the rainy months, when clouds can hide the whole show.",
    },
    {
      question: "Do I need a visa for Indonesia?",
      answer:
        "Many nationalities can get a Visa on Arrival for about 500,000 IDR (roughly $31), and there's an e-VOA you can arrange online before flying. Rules change, so check the current requirements for your passport, and note Bali also charges a one-off tourist levy of Rp 150,000 on arrival.",
    },
    {
      question: "Is it safe to get around Indonesia by taxi?",
      answer:
        "Yes, as long as you're a little selective. We stick to Blue Bird or Silver Bird taxis for fair metered pricing, or use Grab and Gojek apps, which work brilliantly for both cars and motorbike rides.",
    },
  ],
  japan: [
    {
      question: "How many days do you need for a Japan trip?",
      answer:
        "For a first multi-city trip we recommend 10 to 14 days. That comfortably covers Tokyo, Kyoto, and Osaka on the classic Golden Route, with time for a day trip to Nara or Hakone along the way.",
    },
    {
      question: "How much does Japan cost per day?",
      answer:
        "Budget roughly $105 to $490 per day all-in, depending on hotels and how often you splurge. Food can be surprisingly cheap if you mix konbini meals and ramen ($30 to $80 a day), while transport between cities is usually the biggest single cost.",
    },
    {
      question: "When is the best time to visit Japan?",
      answer:
        "March to May for cherry blossoms or October to November for autumn colors, both with mild, pleasant weather. Those are also the busiest seasons, so we book accommodation two to three months ahead.",
    },
    {
      question: "Do I need a visa to visit Japan?",
      answer:
        "Travelers from many countries can enter visa-free, and an e-Visa is available for others. Requirements do change, so check the current rules for your passport and pre-register on Visit Japan Web to speed up arrival.",
    },
    {
      question: "Is the Shinkansen the best way to travel around Japan?",
      answer:
        "For the Tokyo to Kyoto and Osaka route, yes, the bullet train is fast, punctual, and stress-free. Within cities, a Suica or Pasmo IC card covers metros and JR lines, and local transport runs about $15 to $40 a day.",
    },
    {
      question: "Is Japan expensive for food?",
      answer:
        "Less than most people expect. A bowl of Ichiran tonkotsu ramen or a full konbini meal costs just a few dollars, and even mid-range sushi is great value, so $30 to $80 a day feeds you very well. Just carry some yen, as many small places are still cash-only.",
    },
  ],
  tokyo: [
    {
      question: "Is Tokyo worth visiting?",
      answer:
        "Completely. It's a sensory-overload city where ancient shrines sit under neon skyscrapers, and many of the best experiences, like Senso-ji Temple, Meiji Shrine, and Shibuya Crossing, are totally free. Expect to spend only about $40 to $80 total on paid attractions across a whole trip.",
    },
    {
      question: "How many days do you need in Tokyo?",
      answer:
        "We recommend 5 to 7 days. That gives you time for Asakusa, Harajuku, Akihabara, and Shinjuku at a human pace, plus a day trip out to Hakone or the Fuji area if you want mountain views.",
    },
    {
      question: "How much does Tokyo cost per day?",
      answer:
        "Plan on about $120 to $610 per day depending on your hotel, with food at $40 to $100 and transport a modest $15 to $30. Konbini breakfasts and standing ramen bars keep costs down without sacrificing quality.",
    },
    {
      question: "Is Shibuya Sky worth it?",
      answer:
        "We think so, the 360-degree open-air rooftop is one of the best views in Japan and tickets run about ¥2,200 to ¥2,700. Sunset slots sell out roughly a week ahead, so book early; watching the crossing itself below is free.",
    },
    {
      question: "How do you get from Narita or Haneda airport into Tokyo?",
      answer:
        "From Narita, take the Narita Express or Keisei Skyliner; Haneda is closer and connects quickly by train or monorail. Grab a Suica or Pasmo IC card on arrival, it covers nearly every train, metro, and even konbini purchases.",
    },
    {
      question: "When is the best time to visit Tokyo?",
      answer:
        "March to April for cherry blossoms or October to November for crisp autumn weather. Both are peak seasons, so we book hotels early; summer works too but it's hot and humid.",
    },
  ],
  kyoto: [
    {
      question: "Is Kyoto worth visiting?",
      answer:
        "Yes, it's the soul of traditional Japan, with over 2,000 temples and shrines plus living Geisha culture in Gion. Better still, headline sights like Fushimi Inari and the Arashiyama Bamboo Grove are free, and Kinkaku-ji only costs about ¥500.",
    },
    {
      question: "How many days do you need in Kyoto?",
      answer:
        "We recommend 3 to 4 days. That covers eastern Kyoto (Kiyomizu-dera and Gion), the north and west (Kinkaku-ji and Arashiyama), and a morning at Fushimi Inari without feeling rushed.",
    },
    {
      question: "How much does Kyoto cost per day?",
      answer:
        "Around $100 to $400 per day depending on where you sleep. Local transport is only $10 to $20 a day, and grazing through Nishiki Market keeps food costs low; a kaiseki dinner is the classic splurge.",
    },
    {
      question: "What is the best time to visit Fushimi Inari Shrine?",
      answer:
        "Dawn, honestly. The 10,000 torii gates are open 24 hours and free, and arriving around 6:00 AM means near-empty paths for photos; by mid-morning the lower gates are packed.",
    },
    {
      question: "How do you get to Kyoto?",
      answer:
        "From Kansai International Airport (KIX), the Haruka Express runs directly to Kyoto Station; from Tokyo it's about 2 hours 15 minutes by Shinkansen. Once there, city buses and the subway cover the sights, though buses get very crowded in peak season.",
    },
    {
      question: "When is the best time to visit Kyoto?",
      answer:
        "April for cherry blossoms or November for autumn foliage, when the temple gardens are at their absolute best. Book accommodation months ahead for those windows, and carry cash since small shrines often don't take cards.",
    },
  ],
  osaka: [
    {
      question: "Is Osaka worth visiting?",
      answer:
        "Definitely, it's Japan's food-obsessed, outgoing city, famous for its 'kuidaore' (eat until you drop) culture. Dotonbori's neon chaos is free to enjoy, and street food classics like takoyaki cost just a few hundred yen.",
    },
    {
      question: "How many days do you need in Osaka?",
      answer:
        "We recommend 2 to 3 days: one for Osaka Castle, Shinsaibashi, and a Dotonbori food crawl, one full day at Universal Studios Japan, and ideally a third for Kuromon Market and retro Shinsekai.",
    },
    {
      question: "How much does Osaka cost per day?",
      answer:
        "Roughly $110 to $425 per day, though it's one of Japan's better-value big cities. Food runs $40 to $100 (street food is genuinely cheap), transport only $10 to $25, and hotels start around $30.",
    },
    {
      question: "How much are Universal Studios Japan tickets?",
      answer:
        "USJ uses dynamic pricing, so expect roughly ¥8,900 to ¥14,000 depending on the date. We'd go on a weekday, book online in advance, and consider an Express Pass if Super Nintendo World is your priority.",
    },
    {
      question: "How do you get to Osaka from the airport?",
      answer:
        "From Kansai International (KIX), the Nankai Rapi:t or JR Haruka Express gets you into the city in under an hour, and airport buses cover major hotel areas. One quirk once you arrive: stand on the right side of escalators, the opposite of Tokyo.",
    },
    {
      question: "Is Osaka Castle worth going inside?",
      answer:
        "The tower costs about ¥1,200 and houses a museum with great city views from the top. Even if you skip the interior, the massive park and moat are free and gorgeous in the morning, especially during cherry blossom season.",
    },
  ],
  kobe: [
    {
      question: "Is Kobe worth visiting?",
      answer:
        "Yes, especially as an easy add-on to Osaka or Kyoto. It's a sophisticated port city squeezed between the sea and the Rokko mountains, with the famous 'ten-million dollar' night view over the bay and, of course, the world's most famous beef.",
    },
    {
      question: "How many days do you need in Kobe?",
      answer:
        "1 to 2 days is plenty. Day one covers the Kitano Ijinkan-gai western mansions and a Kobe beef dinner in Sannomiya; a second day adds Meriken Park, Harborland, and the night view from Mt. Rokko.",
    },
    {
      question: "How much does Kobe cost per day?",
      answer:
        "Budget about $110 to $420 per day. The wide food range ($40 to $150) reflects the Kobe beef question: a teppanyaki lunch at somewhere like Steakland is the affordable way in, while premium dinner sets climb fast.",
    },
    {
      question: "How do you get to Kobe from Osaka?",
      answer:
        "It's one of the easiest day trips in Japan: the JR Special Rapid Service from Osaka takes about 20 minutes, or the Shinkansen stops at Shin-Kobe. Just note the last train back to Osaka or Kyoto leaves around midnight.",
    },
    {
      question: "Is Kobe beef in Kobe actually cheaper?",
      answer:
        "Lunch is the trick. Certified Kobe beef lunch sets in Sannomiya cost a fraction of dinner prices at the same restaurants, so we book a midday teppanyaki seat, then spend the evening on the free harbor views instead.",
    },
    {
      question: "Is the Kobe night view worth it?",
      answer:
        "We think it's the city's signature moment. The Nunobiki Ropeway runs about ¥2,000 round trip and Kobe Port Tower is around ¥1,000, and the view over the illuminated bay from the Rokko range is nicknamed the 'ten-million dollar night view' for good reason.",
    },
  ],
  nara: [
    {
      question: "Can you do Nara as a day trip?",
      answer:
        "Yes, and most people do exactly that. It's about 45 minutes from Kyoto on the JR Nara Line or 40 minutes from Osaka on the Kintetsu Line, and the main sights cluster around Nara Park within easy walking distance of the stations.",
    },
    {
      question: "Is Nara worth visiting?",
      answer:
        "Absolutely, it was Japan's first permanent capital and packs a giant bronze Buddha, a lantern-filled forest shrine, and hundreds of free-roaming deer into one walkable park. Few day trips anywhere deliver this much per hour.",
    },
    {
      question: "How much does Nara cost?",
      answer:
        "It's one of Japan's cheapest great days out: Nara Park is free, Todai-ji Temple is about ¥600, and Kasuga Taisha's inner area around ¥500. Even staying overnight, daily costs run just $65 to $245, and bring cash since temples prefer it.",
    },
    {
      question: "Do the deer in Nara really bow?",
      answer:
        "Many do! Buy a pack of shika senbei (deer crackers) sold throughout the park, bow to a deer, and it will often bow back before eating. Just watch your fingers and any loose paper, the deer are enthusiastic.",
    },
    {
      question: "How long do you need in Nara?",
      answer:
        "One day covers it well: Todai-ji in the morning, Nara Park and Kasuga Taisha in the afternoon, and a wander through the old Naramachi district before heading back. Aim to arrive by mid-morning, since temples often stop admitting visitors at 4:00 or 5:00 PM.",
    },
    {
      question: "When is the best time to visit Nara?",
      answer:
        "March to May or October to November, when the park is at its prettiest and walking weather is ideal. Mornings are best all year, you'll beat the tour groups to the Great Buddha and catch the deer at their calmest.",
    },
  ],
  hakone: [
    {
      question: "Is Hakone worth visiting?",
      answer:
        "Yes, it's the classic onsen-and-Fuji escape from Tokyo. In one loop you get the volcanic Owakudani valley, a pirate-ship cruise on Lake Ashi with the floating torii gate, world-class sculpture at the Open-Air Museum (~¥1,600), and a hot spring soak at night.",
    },
    {
      question: "Is the Hakone Free Pass worth it?",
      answer:
        "For almost everyone, yes. The 2-day pass costs about ¥6,100 and covers the Tozan Railway, cable car, ropeway, and the Lake Ashi cruise, which is essentially the whole sightseeing circuit; paying per ride adds up to more very quickly.",
    },
    {
      question: "How do you get to Hakone from Tokyo?",
      answer:
        "Take the Odakyu Romancecar from Shinjuku Station, a comfortable 85-minute ride straight into the mountains. From there the Tozan Railway, ropeway, and boats link together into the famous Hakone loop.",
    },
    {
      question: "How many days do you need in Hakone?",
      answer:
        "1 to 2 days. A long day trip covers the loop, but we strongly recommend one night in a ryokan with an onsen, doing the ropeway and Owakudani on day one and the lake cruise plus Open-Air Museum on day two.",
    },
    {
      question: "How much does Hakone cost per day?",
      answer:
        "Expect $120 to $590 per day, with the big variable being your ryokan, luxury places like Gora Kadan sit at the top while guesthouses with shared onsen start around $50. Transport is manageable at $20 to $40 a day thanks to the Free Pass.",
    },
    {
      question: "Can you see Mount Fuji from Hakone?",
      answer:
        "On clear days, yes, the ropeway over Owakudani and the shores of Lake Ashi offer superb Fuji views. Mornings are most reliable, especially in the crisp air of October to November or March to May; afternoons often cloud over.",
    },
  ],
  himeji: [
    {
      question: "Is Himeji Castle worth visiting?",
      answer:
        "Yes, it's Japan's finest surviving feudal castle, a UNESCO site nicknamed the 'White Heron' for its elegant white exterior. Unlike many rebuilt castles, this is the original wooden keep, and climbing its steep stairs is half the experience.",
    },
    {
      question: "How much does Himeji Castle cost?",
      answer:
        "Entry is ¥2,500 for overseas tourists following a price increase that starts in March 2026, and the ticket office accepts credit cards. We'd add the Kokoen Garden combo, the nine gardens next door cost only about ¥310 extra.",
    },
    {
      question: "Can you do Himeji as a day trip?",
      answer:
        "Easily, it's one of the best half-day trips in the Kansai region. The Shinkansen takes about 30 minutes from Osaka or 50 minutes from Kyoto, and the castle is a straight 15-minute walk down the main boulevard from Himeji Station.",
    },
    {
      question: "How long do you need in Himeji?",
      answer:
        "Half a day covers the castle and Kokoen Garden; a full day lets you add Mount Shosha's Engyo-ji Temple (~¥1,000 ropeway), the atmospheric filming location for The Last Samurai. Go at 9:00 AM to beat the castle queues.",
    },
    {
      question: "How much does a day in Himeji cost?",
      answer:
        "It's a budget-friendly stop: about $75 to $305 per day if you stay over, with local transport just $5 to $15. Most visitors spend well under $50 on the ground beyond the castle ticket and lunch.",
    },
    {
      question: "When is the best time to visit Himeji?",
      answer:
        "March to May or October to November. Cherry blossom season is spectacular, the castle lawn framed by sakura is one of Japan's great views, but it's also the busiest window, so arrive right at opening.",
    },
  ],
  "hong-kong": [
    {
      question: "Is Hong Kong worth visiting?",
      answer:
        "Very much so, it's a high-octane fusion of East and West where neon skyscrapers tower over street markets. The best bits are nearly free: the Star Ferry across Victoria Harbour costs about HK$5 to HK$6, temples cost nothing, and the nightly Symphony of Lights show at 8:00 PM is free.",
    },
    {
      question: "How many days do you need in Hong Kong?",
      answer:
        "We recommend 3 to 4 days: one for Victoria Peak and Central, one for Lantau Island's Big Buddha and Tai O fishing village, and one for markets, Nan Lian Garden, and shopping. Add a day if you want a Macau side trip.",
    },
    {
      question: "How much does Hong Kong cost per day?",
      answer:
        "Plan on $80 to $405 per day depending on your hotel. Transport is remarkably cheap at $5 to $15 a day with an Octopus card, and across a whole trip the paid sights only total around $55 to $75.",
    },
    {
      question: "Is the Peak Tram worth it?",
      answer:
        "As an experience, yes: the restored funicular costs about HK$82 single or HK$116 return, with the Sky Terrace deck an extra HK$75 or so. Money-saving tip we love: the free Lugard Road loop at the top gives you essentially the same skyline view without the terrace fee.",
    },
    {
      question: "How do you get to the Big Buddha in Hong Kong?",
      answer:
        "Take the MTR to Tung Chung, then the Ngong Ping 360 cable car, about HK$270 return for the scenic 25-minute glide over the hills. The Tian Tan Buddha and Po Lin Monastery themselves are free; you just climb the 268 steps.",
    },
    {
      question: "Do I need a visa for Hong Kong?",
      answer:
        "Many nationalities, including US, UK, EU, and ASEAN passport holders, enter visa-free for anywhere from 7 to 180 days depending on the passport. Rules can change, so check the current requirements before you fly. October to December is the best weather window, cool and dry.",
    },
  ],
  macau: [
    {
      question: "Is Macau worth visiting?",
      answer:
        "Yes, it's a genuinely unique blend of Portuguese colonial history and mega-casino glitz. You can wander cobblestone European squares in the morning and the world's largest casino resorts by night, and almost the entire UNESCO old town, from the Ruins of St. Paul's to Senado Square, is free.",
    },
    {
      question: "Can you do Macau as a day trip from Hong Kong?",
      answer:
        "Easily, and many people do. The ferry or a bus over the Hong Kong-Zhuhai-Macau Bridge takes about an hour, and one day covers Senado Square, the Ruins of St. Paul's, and an evening on the Cotai Strip. We'd still stay 1 to 2 nights to add Taipa and Coloane villages.",
    },
    {
      question: "How much does Macau cost per day?",
      answer:
        "About $70 to $595 per day, with the huge range driven by hotels, resort rooms at The Venetian cost far more than old-town guesthouses. Sightseeing is nearly free: the Macau Tower deck (MOP 195, roughly $24) is basically the only big paid attraction.",
    },
    {
      question: "Do you need to change money in Macau?",
      answer:
        "Not really if you're coming from Hong Kong, HKD is accepted everywhere at 1:1 with the pataca. Transport barely costs anything either: casinos run free shuttle buses across the city, so many visitors spend $0 to $10 a day getting around.",
    },
    {
      question: "Is the Venetian Macao free to enter?",
      answer:
        "Yes, strolling the indoor canals under the painted sky costs nothing, and the people-watching is half the fun. The gondola ride is a paid extra at about MOP 135, and remember photography is strictly prohibited inside the gaming areas.",
    },
    {
      question: "When is the best time to visit Macau?",
      answer:
        "October to December, when the weather is cool and dry, perfect for walking the old town's hills and squares. Go to the Ruins of St. Paul's before 9:00 AM for crowd-free photos, then save the Cotai Strip for after dark when the lights come on.",
    },
  ],
};
