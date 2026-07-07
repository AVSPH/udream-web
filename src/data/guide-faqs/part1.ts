import type { GuideFAQ } from "./types";

// FAQs keyed by travel-guide id (see src/data/guides.ts)
export const faqsPart1: Record<string, GuideFAQ[]> = {
  "kuala-lumpur": [
    {
      question: "Is Kuala Lumpur worth visiting?",
      answer:
        "Absolutely, we think KL is one of the most underrated capitals in Southeast Asia. You get the Petronas Twin Towers, the rainbow stairs of Batu Caves, and some of the region's best street food on Jalan Alor, all in one compact city. Best of all, most of the big sights are free or under RM 100.",
    },
    {
      question: "How many days do you need in Kuala Lumpur?",
      answer:
        "We recommend 3 to 4 days. That gives you a day for the Petronas Towers and KLCC, a day for Batu Caves and Central Market, and a day for Thean Hou Temple, shopping, and Bukit Bintang at night, without feeling rushed.",
    },
    {
      question: "How much does a trip to Kuala Lumpur cost per day?",
      answer:
        "Plan on roughly $45 to $185 per day depending on your style. Budget beds start around $20, food runs $10 to $25 a day if you eat local, and transport is only $5 to $10 thanks to the cheap LRT and MRT. Sightseeing is gentle on the wallet too, expect $30 to $55 total for the main paid entries.",
    },
    {
      question: "What is the best time of year to visit Kuala Lumpur?",
      answer:
        "The drier windows are May to July and December to February. KL is hot and humid year-round, so pack light clothes and an umbrella for sudden showers whenever you go, and plan outdoor sights like Batu Caves for early morning.",
    },
    {
      question: "How do you get from KLIA airport to the city center?",
      answer:
        "The KLIA Ekspres train is the easiest option, reaching KL Sentral in about 30 minutes, and Grab, taxis, and airport buses are also available. Entry is visa-free for many ASEAN and other passports, but do check the current rules for your nationality before flying.",
    },
    {
      question: "How much does it cost to go up the Petronas Twin Towers?",
      answer:
        "The observation deck and Skybridge ticket is RM 98 for international adults, roughly $22, and sunset slots sell out days ahead, so book online early. If you'd rather not pay, the view of the towers from KLCC Park and the fountain show below are completely free.",
    },
  ],
  singapore: [
    {
      question: "Is Singapore expensive to visit?",
      answer:
        "It's the priciest stop in Southeast Asia, but very manageable with hawker food. Expect around $120 to $400 per day, with hotels from about $80 and meals at Lau Pa Sat or Maxwell Food Centre keeping food to $15 to $30. The big attractions add up, roughly $90 to $180 if you do them all, though the light shows, Merlion Park, and Supertree Grove are free.",
    },
    {
      question: "How many days do you need in Singapore?",
      answer:
        "We find 3 to 4 days is the sweet spot. One day covers Merlion Park, Marina Bay, and Gardens by the Bay, another handles Sentosa and Universal Studios, and a third fits Chinatown, Orchard Road, and Jewel Changi before you fly out.",
    },
    {
      question: "What is the best month to visit Singapore?",
      answer:
        "February to April is our pick, with relatively drier, sunnier weather. Singapore sits on the equator so it's warm and humid all year, and the indoor domes, malls, and MRT make it easy to dodge an afternoon downpour any month.",
    },
    {
      question: "Is Gardens by the Bay free to enter?",
      answer:
        "Yes, the outdoor gardens and Supertree Grove are free, including the Garden Rhapsody light show at 7:45 and 8:45 pm nightly. You only pay for extras: the OCBC Skyway is S$14, and the Cloud Forest plus Flower Dome conservatories run S$32 to S$53 for a bundled ticket.",
    },
    {
      question: "How do you get around Singapore without a car?",
      answer:
        "The MRT and buses cover practically the whole island for about $5 to $10 a day, and Changi Airport is only around 25 minutes from the center by train. Grab fills in the gaps at night. Entry is visa-free for many passports, but check the current rules for yours before you travel.",
    },
    {
      question: "Is Universal Studios Singapore worth the money?",
      answer:
        "If you like theme parks, yes, but budget for it, a one-day pass runs S$83 to S$98, roughly $62 to $73. We suggest going on a weekday when queues are about half as long, and buying a dated ticket online since walk-up prices are higher and holidays can sell out.",
    },
  ],
  taipei: [
    {
      question: "Is Taipei worth visiting?",
      answer:
        "Very much so, we'd call it the best sightseeing value in East Asia. Temples, the Chiang Kai-shek Memorial, the Elephant Mountain viewpoint, and huge night markets like Shilin are all free, so your budget really only needs to cover Taipei 101 and a museum. It's also famously safe and friendly.",
    },
    {
      question: "How many days do you need in Taipei?",
      answer:
        "Plan 3 to 4 days. That covers the city landmarks and night markets on day one, Elephant Mountain and the National Palace Museum on day two, and a Beitou hot springs plus Tamsui sunset day to finish, a really satisfying loop.",
    },
    {
      question: "How much does Taipei cost per day?",
      answer:
        "Roughly $50 to $220 per day. Hostel beds start around $25, street food keeps meals to $10 to $30, and the excellent MRT costs just $5 to $10 a day. The main paid sights, Taipei 101 at NT$600 (about $19) and the National Palace Museum at NT$350 (about $11), total only $30 to $40.",
    },
    {
      question: "What is the best time of year to visit Taipei?",
      answer:
        "October to April is the most comfortable stretch, cooler and outside the sticky summer. Evenings can get chilly, so pack a light jacket, and carry some cash since many shops and night-market stalls still prefer it.",
    },
    {
      question: "How do you get from Taoyuan Airport to Taipei?",
      answer:
        "The Taoyuan Airport MRT runs straight to Taipei Main Station in about 40 minutes, with buses and taxis as backups. Grab an EasyCard on arrival, it works on the MRT and buses citywide. Taiwan is visa-free for many nationalities, but check the current entry rules for your passport.",
    },
    {
      question: "Is the Taipei 101 observatory worth it?",
      answer:
        "We think so, the NT$600 ticket (about $19) gets you a 37-second elevator ride up 89 floors and a look at the giant wind damper ball. Book a late-afternoon slot online for a small discount and stay through sunset. For a free alternative, the 20-minute stair climb up Elephant Mountain gives you the classic skyline shot with 101 in frame.",
    },
  ],
  taichung: [
    {
      question: "Is Taichung worth visiting?",
      answer:
        "Yes, especially if you want Taiwan at a slower pace. It's the birthplace of bubble tea, home to the painted Rainbow Village, the Gaomei Wetlands sunset, and Fengjia, Taiwan's biggest night market. Nearly every sight is free, so your budget here is basically food money.",
    },
    {
      question: "How many days do you need in Taichung?",
      answer:
        "2 to 3 days is plenty. Day one covers Rainbow Village, the National Taichung Theater, and Fengjia Night Market; day two pairs the Calligraphy Greenway and Miyahara with the Gaomei Wetlands sunset; a third day adds Lavender Cottage or the Cultural Heritage Park if you have time.",
    },
    {
      question: "How much does Taichung cost per day?",
      answer:
        "It's one of Taiwan's cheapest city breaks at roughly $40 to $175 per day. Rooms start around $20, night-market meals keep food to $10 to $25, and since Rainbow Village, Gaomei, and the theater are all free, sightseeing money is mostly $5 to $15 of bubble tea and snacks.",
    },
    {
      question: "What is the best time to visit Taichung?",
      answer:
        "October to April, when the weather is cooler and drier. For the famous Gaomei Wetlands boardwalk, aim for late afternoon and check the tide tables first, since the boardwalk closes at high water and the sunset under the wind turbines is the whole point.",
    },
    {
      question: "How do you get to Taichung from Taipei?",
      answer:
        "The High Speed Rail gets you there in about an hour, which is how most travelers arrive; Taichung also has its own airport. Once in town, sights are spread out, so plan around buses, Uber, or short taxi rides, about $5 to $10 a day covers it.",
    },
    {
      question: "Where was bubble tea invented?",
      answer:
        "Taichung claims the crown, Chun Shui Tang teahouse says it invented pearl milk tea here in the 1980s, and drinking one at the original shop is a proper pilgrimage. A cup runs NT$90 to NT$160, roughly $3 to $5, and pairs nicely with a boat row in Taichung Park next door.",
    },
  ],
  "kota-kinabalu": [
    {
      question: "Is Kota Kinabalu worth visiting?",
      answer:
        "Definitely, it's the easiest doorway into Borneo. Coral islands sit just 10 to 20 minutes offshore, Mount Kinabalu is about an hour inland, and the waterfront sunsets with fresh seafood are some of the best we've seen. It's far more relaxed than Kuala Lumpur too.",
    },
    {
      question: "How many days do you need in Kota Kinabalu?",
      answer:
        "3 to 4 days works well: one for island hopping and snorkeling in Tunku Abdul Rahman Marine Park, one for Kinabalu Park and the Desa Dairy Farm, and one for the Mari Mari Cultural Village and a sunset cruise. Add extra days if you plan to climb the mountain.",
    },
    {
      question: "How much does Kota Kinabalu cost per day?",
      answer:
        "Budget around $60 to $295 per day. Stays run $25 to $200 from backpacker spots to the Shangri-La, food is $15 to $30, and activities $15 to $50. A typical island-hopping day costs RM 30 to 50 for the boat plus a RM 20 to 25 park fee, about $12 to $18 all in.",
    },
    {
      question: "What is the best time to visit Kota Kinabalu?",
      answer:
        "March to October is the drier season and the best window for island trips and clear snorkeling water. Weather in Sabah can change quickly, so keep boat plans flexible and pack sunscreen and a waterproof phone case either way.",
    },
    {
      question: "How do you get around Kota Kinabalu?",
      answer:
        "Grab is the easiest way around town, with local buses and minivans as cheap backups, expect $5 to $15 a day. Island boats leave from Jesselton Point on the waterfront, so staying nearby saves a lot of shuttling. Entry to Malaysia is visa-free for many passports, but check the current rules for yours.",
    },
    {
      question: "Can you climb Mount Kinabalu on a day trip?",
      answer:
        "The summit itself is a 2-day guided climb with permits, packages start around RM 1,000, roughly $250 and up, and slots sell out months ahead. The good news is you don't have to climb it: Kinabalu Park entry is only about RM 50 (around $11), and the UNESCO park's botanical trails and views of the 4,095 m peak make a great day trip from the city.",
    },
  ],
  brunei: [
    {
      question: "Is Brunei worth visiting?",
      answer:
        "Yes, for a short, peaceful cultural trip it's hard to beat. Bandar Seri Begawan's golden mosques, the Royal Regalia Museum, and Kampong Ayer, the world's largest stilt village, are all free or nearly free, and the whole capital is calm, clean, and walkable.",
    },
    {
      question: "How many days do you need in Brunei?",
      answer:
        "2 to 3 days covers it comfortably. Day one takes in the Sultan Omar Ali Saifuddien Mosque, Kampong Ayer, and the Gadong Night Market; day two handles the Jame' Asr Mosque and Royal Regalia Museum; and a third day is perfect for the Ulu Temburong rainforest.",
    },
    {
      question: "How much does a trip to Brunei cost per day?",
      answer:
        "Expect roughly $65 to $300 per day, with rooms from $40 up to resort splurges like The Empire. Food runs $15 to $30 and most attractions are free, so day-to-day sightseeing is only about $20 to $35 including water-taxi rides. The one big-ticket item is an Ulu Temburong day tour at B$110 to B$150, around $80 to $110.",
    },
    {
      question: "What is the best time to visit Brunei?",
      answer:
        "January to May is the most pleasant stretch. It's warm year-round, and since mosque visits are central to any Brunei trip, pack modest clothing and a light scarf, robes are also lent free at the Jame' Asr Mosque entrance.",
    },
    {
      question: "How do you get around Bandar Seri Begawan?",
      answer:
        "The city center is compact and walkable, with taxis and the Dart app filling the gaps since public buses are limited, budget $10 to $20 a day. Water taxis to Kampong Ayer cost about B$1 per crossing. Entry is visa-free for many ASEAN and other nationals, but check the current rules for your passport.",
    },
    {
      question: "Can you drink alcohol in Brunei?",
      answer:
        "No, Brunei is a dry country and alcohol isn't sold anywhere. The evening scene revolves around night markets like Gadong and waterfront strolls instead, and honestly the food, especially local dishes like ambuyat at Aminah Arif, is the real nightlife. Dress modestly and you'll find it a very easy, welcoming place to visit.",
    },
  ],
  bangkok: [
    {
      question: "Is Bangkok worth visiting?",
      answer:
        "Absolutely, it's one of the world's great city breaks. The Grand Palace, riverside Wat Arun, rooftop bars, and legendary street food all pack into a few days, and the temple circuit is astonishing value, the three biggest sights together cost about $28. Just dress with shoulders and knees covered for the temples.",
    },
    {
      question: "How many days do you need in Bangkok?",
      answer:
        "3 to 4 days is ideal. One day covers the Grand Palace, Wat Pho, and a river cruise, another fits Chatuchak Market and Siam shopping, and a third works for a floating-market morning and a Chinatown food night. Time it over a weekend if you want Chatuchak, it only runs Saturday and Sunday.",
    },
    {
      question: "How much does Bangkok cost per day?",
      answer:
        "Around $45 to $345 per day depending on style. Guesthouses start near $20, street food keeps meals to $10 to $40, and transport is only $5 to $15 using the BTS, MRT, and river boats. The full temple circuit, Grand Palace at ฿500 (about $14), Wat Pho at ฿300, and Wat Arun at ฿200, totals roughly $35 to $45 with boat rides included.",
    },
    {
      question: "What is the best time of year to visit Bangkok?",
      answer:
        "November to February is the cool, dry season and by far the most comfortable. Hit the temples at opening time around 8:30 am to beat both the heat and the crowds, and save the riverside for sunset when Wat Arun looks its best.",
    },
    {
      question: "How do you get from Suvarnabhumi Airport into Bangkok?",
      answer:
        "The Airport Rail Link is the quickest and cheapest way into the center, with taxis and Grab as alternatives. In town, the BTS Skytrain beats taxis during rush hour, and the ฿16 to ฿33 orange-flag river boat is the local way to the temples. Thailand is visa-free for many nationalities, but check the current entry rules for your passport.",
    },
    {
      question: "What scams should you watch out for in Bangkok?",
      answer:
        "The classic one is someone outside the Grand Palace telling you it's \"closed\" and steering you to a gem shop or tuk-tuk tour, it isn't closed, just walk to the official entrance. Stick to metered taxis or Grab, agree tuk-tuk fares up front, and you'll find Bangkok very easy to handle.",
    },
  ],
  phuket: [
    {
      question: "Is Phuket worth visiting?",
      answer:
        "Yes, Thailand's largest island earns the hype. The beaches, the Big Buddha viewpoint, and pastel Old Town are all free, and the money you do spend goes on spectacular boat days to Phi Phi and Phang Nga Bay. It suits both party-seekers in Patong and quiet-beach fans in Kata.",
    },
    {
      question: "How many days do you need in Phuket?",
      answer:
        "3 to 4 days covers the essentials: a full-day Phi Phi island tour, a day for the Big Buddha and Old Town, and a lazy beach-and-spa day ending with sunset at Promthep Cape. Add more days if you want both Phi Phi and Phang Nga Bay on the itinerary.",
    },
    {
      question: "How much does Phuket cost per day?",
      answer:
        "Plan on $70 to $520 per day across the range, hostels from $25 up to villa resorts around $400. Food runs $15 to $40 and local transport $10 to $20. The boat tours are the big line item: Phi Phi runs ฿1,500 to ฿2,500 plus a ฿400 park fee (about $50 to $80), and Phang Nga Bay ฿1,000 to ฿1,800 (about $35 to $60).",
    },
    {
      question: "What is the best time of year to visit Phuket?",
      answer:
        "November to April is the dry season with calm seas, which matters here because the island tours are the main event. During the monsoon months sea conditions can change fast and boats get cancelled, so always check the forecast before booking a tour.",
    },
    {
      question: "How do you get around Phuket without renting a scooter?",
      answer:
        "Grab, taxis, and the local songthaew buses cover the island for about $10 to $20 a day, and the airport in the north connects by taxi and airport bus. Since island tours leave from the piers, pick your base, Old Town for character, Patong or Kata for beaches, around your plans to cut travel time.",
    },
    {
      question: "Is the Big Buddha in Phuket free?",
      answer:
        "Yes, the 45 m marble Big Buddha is free to visit, donations welcome, and the hilltop gives you 360-degree views over the whole island. Dress modestly, sarongs are lent at the entrance, and go late afternoon so you catch the sunset over the west coast. Wat Chalong, Phuket's most revered temple, is free too and sits just down the same road.",
    },
  ],
  "phnom-penh": [
    {
      question: "Is Phnom Penh worth visiting?",
      answer:
        "Yes, and we'd call it one of the most meaningful stops in Southeast Asia. The gilded Royal Palace and riverside promenade show Cambodia's grandeur, while Tuol Sleng and the Killing Fields tell its hardest chapter with real dignity. Entry fees are low and the food scene, from Fish Amok to Russian Market stalls, is a bonus.",
    },
    {
      question: "How many days do you need in Phnom Penh?",
      answer:
        "2 to 3 days is right. Day one covers the Royal Palace, National Museum, and a riverside evening; day two is for Tuol Sleng and Choeung Ek, which deserve unhurried time; and a third day fits Wat Phnom, the Russian Market, and a sunset cruise on the Mekong.",
    },
    {
      question: "How much does Phnom Penh cost per day?",
      answer:
        "It's very affordable at roughly $40 to $320 per day, with guesthouses from $15 and meals $10 to $25. The sights are cheap too: the Royal Palace with Silver Pagoda is $10, Tuol Sleng $5, Choeung Ek $6 with audio guide, and Wat Phnom just $1, about $25 to $35 covers everything including tuk-tuks between them.",
    },
    {
      question: "What is the best time to visit Phnom Penh?",
      answer:
        "November to February, the cool dry season. Do the Royal Palace at its 8 am opening before the heat builds, and note the dress code, shoulders and knees covered, or you'll be buying a cover-up at the gate.",
    },
    {
      question: "Do you need a visa for Cambodia?",
      answer:
        "Many nationalities can get a visa on arrival at Phnom Penh International Airport, and an e-visa is available online, but rules change so check the current requirements for your passport before flying. Handy tip: Cambodia runs largely on US dollars, so carry small bills, and agree tuk-tuk fares before you hop in.",
    },
    {
      question: "Are the Killing Fields and Tuol Sleng worth visiting?",
      answer:
        "We think they're essential, if heavy, history. Visit Tuol Sleng ($5, plus $3 for the excellent audio guide) first for context, then Choeung Ek ($6, audio guide included) about 15 km out of town, a tuk-tuk there and back runs around $15. Give yourself a gentle evening afterwards, the riverside promenade is perfect for it.",
    },
  ],
  "ho-chi-minh-city": [
    {
      question: "Is Ho Chi Minh City worth visiting?",
      answer:
        "Yes, Saigon is Vietnam at full volume, and we love it for that. You get the moving War Remnants Museum, French colonial gems like the Central Post Office and Notre-Dame Cathedral, the Cu Chi Tunnels, and a street-food scene where a great bowl of pho costs a couple of dollars.",
    },
    {
      question: "How many days do you need in Ho Chi Minh City?",
      answer:
        "3 days hits the highlights: day one for the War Remnants Museum, cathedral, post office, and Ben Thanh Market; day two for a Cu Chi Tunnels morning tour and the Bitexco Skydeck; day three for coffee-shop hopping, Chinatown in District 5, and a night market.",
    },
    {
      question: "How much does Ho Chi Minh City cost per day?",
      answer:
        "Roughly $40 to $385 per day covers the full range, hostels from $15 up to five-star stays like The Reverie. Food is $10 to $30 a day, transport just $5 to $15 using Grab, and paid sights like the War Remnants Museum and a Cu Chi Tunnels tour keep activities to about $10 to $40 daily.",
    },
    {
      question: "What is the best time of year to visit Ho Chi Minh City?",
      answer:
        "December to April is the dry season and the most comfortable window. It's warm year-round, so pack light breathable clothes, and schedule outdoor sightseeing like Cu Chi for mornings before the midday heat.",
    },
    {
      question: "Do you need a visa for Vietnam?",
      answer:
        "Vietnam offers an e-visa to travelers from many countries, applied for online before you fly into Tan Son Nhat Airport, but requirements change so check the current rules for your passport. From the airport, Grab or the airport bus gets you into District 1, we'd use Grab over street taxis throughout the trip.",
    },
    {
      question: "How do you cross the street in Ho Chi Minh City?",
      answer:
        "The motorbike swarms look terrifying, but there's a trick: wait for a small gap, walk slowly and steadily, and never dart backwards, the riders flow around you. Crossings near District 1 sights have lights to make it easier. Honestly, after day one it becomes part of the fun.",
    },
  ],
  hanoi: [
    {
      question: "Is Hanoi worth visiting?",
      answer:
        "Very much so, Hanoi is Vietnam's cultural soul. The Old Quarter's narrow lanes are packed with street food, Hoan Kiem Lake anchors the city center, and free landmarks like the Ho Chi Minh Mausoleum fill your days for almost nothing. It's also the natural gateway to Ha Long Bay.",
    },
    {
      question: "How many days do you need in Hanoi?",
      answer:
        "3 to 4 days works beautifully: day one for the Mausoleum, Temple of Literature, and an Old Quarter food crawl; day two for a Ha Long Bay trip; day three for Hoan Kiem Lake, Train Street, and a water puppet show. A fourth day gives room for an overnight cruise instead of a rushed day tour.",
    },
    {
      question: "How much does Hanoi cost per day?",
      answer:
        "About $40 to $445 per day across the spectrum, hostels in the Old Quarter from $15, the historic Metropole at the top end. Street food keeps meals to $10 to $30, a bowl of bun cha is famously cheap, and transport runs $5 to $15 with Grab and buses. Most city sights, including Hoan Kiem Lake and the Mausoleum, are free.",
    },
    {
      question: "What is the best time of year to visit Hanoi?",
      answer:
        "October to April brings the most pleasant weather, though winter months can be genuinely chilly, so pack a light jacket. Clear autumn days are also the best odds for good Ha Long Bay visibility, which matters if the cruise is your trip's centerpiece.",
    },
    {
      question: "Is Hanoi or Ho Chi Minh City better?",
      answer:
        "They're wonderfully different: Hanoi is older, more atmospheric, and cooler in winter, with the Old Quarter and Ha Long Bay on its doorstep, while Ho Chi Minh City is bigger, faster, and more modern with the Cu Chi Tunnels and a buzzier nightlife. If you only pick one and love history, lakes, and street food charm, we'd lean Hanoi; ideally, fly into one and out of the other.",
    },
    {
      question: "How do you get to Ha Long Bay from Hanoi?",
      answer:
        "It's about a 2.5-hour shuttle or limousine-bus ride from Hanoi, and most cruises include hotel pickup, so booking locally in Hanoi is easy. A good day cruise with lunch, a cave stop, and kayaking runs about $55 to $120, while overnight boats from $100 to $250 plus reach quieter water the day-trippers never see.",
    },
  ],
};
