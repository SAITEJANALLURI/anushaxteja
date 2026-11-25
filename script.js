const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  if (a.getAttribute('href') === current) a.classList.add('active');
});

const translations = {
  te: {
    "brand": "ఒక చిన్న <span>జ్ఞాపకం</span> ♡",
    "nav.home": "హోమ్",
    "nav.story": "మా కథ",
    "nav.families": "మా కుటుంబాలు",
    "nav.things": "చిన్న విషయాలు",
    "nav.places": "ప్రదేశాలు",
    "nav.dreams": "కలలు & ఆలోచనలు",
    "nav.note": "ఒక చిన్న మాట",
    "footer.line1": "అనూష కోసం ప్రేమతో రూపొందించబడింది <span>♡</span>",
    "footer.line2": "డిజైన్: తేజ",

    "duo.anusha.name": "అనూష",
    "duo.anusha.role": "డెంటిస్ట్ • చిరునవ్వుల సంరక్షణ",
    "duo.teja.name": "తేజ",
    "duo.teja.role": "సాఫ్ట్‌వేర్ ఇంజనీర్ • కొత్త ఆలోచనలు",
    "duo.caption": "చిరునవ్వుల సంరక్షణ & కోడ్",

    "home.eyebrow": "ఇంటర్నెట్‌లో ఒక చిన్న అందమైన చోటు",
    "home.title": "మా చిన్న కథ.",
    "home.lead": "కొన్ని మాటలు, కొన్ని చిరునవ్వులు, ఇంకా ఎన్నో మధుర క్షణాల ఆశ. ఇప్పటివరకు మేము తెలుసుకున్న విషయాలు — మరియు ముందున్న అందమైన ప్రయాణం.",
    "home.sec1.eyebrow": "ఒక కొత్త అధ్యాయం",
    "home.sec1.title": "చిన్న చిన్న క్షణాల్లోనే అనుబంధం పెరుగుతుంది.",
    "home.sec1.p": "అనుకున్నదానికంటే కాస్త ఎక్కువసేపు సాగిన సంభాషణ. ఒక చిరునవ్వు. వేర్వేరు వృత్తులు, వేర్వేరు ఇష్టాలు ఉన్నా ఎన్నో సమాన విషయాలు ఉన్నాయని తెలుసుకోవడం.",
    "home.video.eyebrow": "ఒక చిన్న ఝలక్",
    "home.video.title": "ఇది ఎక్కడికి దారితీస్తుందో.",
    "home.video.sub": "మొదటి పరిచయం, ఒకే బల్ల చుట్టూ రెండు కుటుంబాలు, తర్వాత ఏమవుతుందో అనే కొన్ని కలలు.",
    "home.btn.story": "మా కథ చూడండి",
    "home.btn.note": "ఒక మాట రాయండి",
    "home.thought.eyebrow": "ఈరోజు ఆలోచన",
    "home.thought.quote": "“సహజంగా మొదలయ్యే బంధాలే ఎప్పుడూ ఎంతో అందంగా ఉంటాయి.”",
    "home.thought.sub": "పెద్ద ప్రణాళికలు లేవు. కేవలం మంచి మాటలు, స్వచ్ఛమైన మనసు.",
    "home.chapters.eyebrow": "కొన్ని చిన్న అధ్యాయాలు",
    "home.chapters.title": "తెలుసుకోదగ్గ విషయాలు",
    "home.chapters.sub": "ప్రతి పేజీలో మా కథలోని ఒక చిన్న భాగం ఉంది.",
    "home.card1.num": "01 / మా కథ",
    "home.card1.title": "మా కథ",
    "home.card1.p": "ఇప్పటివరకు జరిగిన పరిచయాలు, మధుర క్షణాలు.",
    "home.card2.num": "02 / చిన్న విషయాలు",
    "home.card2.title": "చిన్న విషయాలు",
    "home.card2.p": "ఇష్టమైన వంటకాలు, అభిరుచులు మరియు చిరునవ్వులు.",
    "home.card3.num": "03 / కుటుంబాలు",
    "home.card3.title": "మా కుటుంబాలు",
    "home.card3.p": "ఈ అందమైన ఆరంభం వెనుక ఉన్న ఆత్మీయులు, ఆశీస్సులు.",
    "home.card4.num": "04 / ప్రదేశాలు",
    "home.card4.title": "వెళ్లాలనుకునే ప్రదేశాలు",
    "home.card4.p": "కలిసి చూడాలనుకునే భారతదేశంలోని అందమైన ప్రాంతాలు.",

    "story.eyebrow": "కుటుంబాలు కలిపిన ఒక అందమైన ఆరంభం",
    "story.title": "అంతా ఎలా మొదలైంది.",
    "story.lead": "రెండు కుటుంబాలు, దగ్గరగా ఉన్న రెండు ఊర్లు, మరియు ఒక కొత్త అధ్యాయానికి తలుపు తెరిచిన ఒక చిన్న పరిచయం.",
    "story.conn.eyebrow": "మొదటి పరిచయం",
    "story.conn.title": "ఒక ఆత్మీయ పలకరింపు.",
    "story.conn.p1": "ప్రతి కథకూ ఒక ఆరంభం ఉంటుంది. మా కథ ఎంతో సహజంగా, సంప్రదాయబద్ధంగా మొదలైంది: అనూష అమ్మగారు లక్ష్మీ ప్రసన్న గారు, మా అమ్మ శారద గారితో మొదటిసారి మాట్లాడారు. ఒక కుటుంబ పరిచయంగా మొదలైన ఆ మాట, రెండు కుటుంబాల మధ్య ఆప్యాయతగా మారింది.",
    "story.conn.p2": "ఆ మొదటి అడుగు తర్వాత అన్నీ సహజంగా ముందుకు సాగాయి. కుటుంబాలు మాట్లాడుకున్నాయి, ఆ తర్వాత అనూష, నేను ఒకరినొకరం తెలుసుకునే అవకాశం కలిగింది.",
    "story.conn.p3": "అనూషది సంతనూతలపాడు, మా కుటుంబం ఒంగోలు. వేర్వేరు ఇళ్లు, దగ్గరగా ఉన్న ఊర్లు — ఇప్పుడు వాటి మధ్య ఒక కొత్త అనుబంధం రూపుదిద్దుకుంటోంది.",
    "story.film.eyebrow": "మొత్తం కథ, యానిమేషన్‌లో",
    "story.film.title": "మనం ఇక్కడికి ఎలా చేరామో, ఆరు చిన్న అధ్యాయాలలో.",
    "story.film.sub": "రెండు ఊర్లు, రెండు కుటుంబాలు, ఒక ఆలోచనాత్మక పరిచయం — మొదటి అనుబంధం నుండి రాబోయే అధ్యాయాల వరకు. మళ్లీ చూడాలంటే తాకండి.",
    "story.journeys.eyebrow": "రెండు ప్రయాణాలు",
    "story.journeys.title": "రెండు చదువులు, రెండు ఉద్యోగాలు, ఒకే కథ.",
    "story.journeys.sub": "విశాఖపట్నం, చెన్నై నుండి ఆస్ట్రేలియా వరకు — మా వేర్వేరు దారులు ఒకే చోటికి ఎలా చేరాయో.",
    "story.video.eyebrow": "చిత్రాలలో మన కథ",
    "story.video.title": "ఒక చిన్న కథల పుస్తకం.",
    "story.video.sub": "రెండు ఊర్లు, రెండు కుటుంబాలు, ఒక ఆలోచనాత్మక పరిచయం — ఒక చిన్న చిత్రకథగా.",
    "story.quote.eyebrow": "ముఖ్యమైన విషయం",
    "story.quote.text": "“ఒక మంచి ఆరంభం అంటే ఇద్దరు వ్యక్తులు కలవడం మాత్రమే కాదు; రెండు కుటుంబాలు ఒక కొత్త బంధానికి చోటు ఇవ్వడం.”",
    "story.move.eyebrow": "ముందుకు సాగుతూ",
    "story.move.title": "రెండు కుటుంబాల ఆశీస్సులతో.",
    "story.move.p1": "రెండు కుటుంబాల ప్రోత్సాహం, ఆశీస్సులతో మా పరిచయం మరింత బలపడింది. రోజువారీ మాటలు, నవ్వులు, ఇష్టమైన వంటకాల కబుర్లతో మా మధ్య స్నేహం పెరిగింది.",
    "story.move.p2": "భవిష్యత్తు అంతా ఈరోజే రాయాల్సిన అవసరం లేదు. ప్రతి మధుర క్షణాన్ని సమయం వచ్చినప్పుడు ఇందులో చేర్చుకుంటూ వెళ్దాం.",
    "story.about.eyebrow": "మా ఇద్దరి గురించి కొంచెం",
    "story.about.title": "వేర్వేరు వృత్తులు, మాట్లాడుకోవడానికి ఎన్నో విషయాలు.",
    "story.about.sub": "రెండు విభిన్న వృత్తులు, వ్యక్తిత్వాలు — పని తర్వాత మాట్లాడుకోవడానికి ఎన్నో కబుర్లు.",
    "story.anusha.title": "ఎంతో శ్రద్ధ కలిగిన దంత వైద్యురాలు (డెంటిస్ట్).",
    "story.anusha.p": "డెంటిస్ట్రీ అంటే ఓర్పు, శ్రద్ధ మరియు ఇతరుల ముఖంలో చిరునవ్వు నింపడం. పని తర్వాత స్వీట్లు, కొత్త రుచులు మరియు తన గురించి తెలుసుకోవాల్సిన ఎన్నో విషయాలు ఉన్నాయి.",
    "story.teja.title": "కొత్త విషయాలను నిర్మించే సాఫ్ట్‌వేర్ ఇంజనీర్.",
    "story.teja.p": "సాఫ్ట్‌వేర్ రంగంలో కొత్త సమస్యలకు పరిష్కారాలు వెతకడం, నిరంతరం నేర్చుకోవడం నా పని. పని తర్వాత మంచి భోజనం, శాకాహార వంటకాలు, ప్రయాణాలు మరియు కొత్త వ్యాపార ఆలోచనలు.",
    "story.common.eyebrow": "మా మధ్య ఉన్న పోలికలు",
    "story.common.title": "చిన్న పోలికలు, సరదా తేడాలు.",
    "story.common.c1.t": "భోజనం మమ్మల్ని కలుపుతుంది",
    "story.common.c1.p": "ఇద్దరికీ మంచి రుచులను ఆస్వాదించడం అంటే ఎంతో ఇష్టం.",
    "story.common.c2.t": "వేర్వేరు ఇష్టాలు",
    "story.common.c2.p": "అనూషకు స్వీట్లు అంటే ఇష్టం, తేజకు వెజ్ వంటకాలు ఇష్టం. అందుకే రెస్టారెంట్‌లో రెండు రకాలూ ఆర్డర్ చేసి పంచుకోవచ్చు!",
    "story.common.c3.t": "భవిష్యత్తు ఆలోచనలు",
    "story.common.c3.p": "ప్రయాణాల నుండి ఒక చిన్న ఫుడ్ బిజినెస్ వరకు ఎన్నో సరదా ఆలోచనలు.",
    "story.next.eyebrow": "రాబోయే అధ్యాయాలు",
    "story.next.title": "తరువాతి మైలురాళ్లు?",
    "story.next.sub": "మరిన్ని మధుర క్షణాలు ముందున్నాయి. అవి జరిగినప్పుడు ఇక్కడ చేర్చుకుందాం.",
    "story.next.c1.num": "ఇప్పటికే మొదలైంది",
    "story.next.c1.t": "ఒకరినొకరు తెలుసుకోవడం",
    "story.next.c1.p": "మాటలు, ప్రశ్నలు, నవ్వులు మరియు ఒకరి వ్యక్తిత్వాన్ని మరొకరు అర్థం చేసుకోవడం.",
    "story.next.c2.num": "కొనసాగుతుంది...",
    "story.next.c2.t": "ముందున్న మధుర క్షణాలు",
    "story.next.c2.p": "కొత్త జ్ఞాపకాలు, కుటుంబ వేడుకలు మరియు ఆనందకరమైన రోజులు.",
    "story.end.quote": "“ఇంకా ఎన్నో తెలుసుకోవాల్సిన ఒక అందమైన ఆరంభం.”",
    "story.end.btn": "మా కుటుంబాలను కలవండి",

    "fam.eyebrow": "మా ఆరంభం వెనుక ఉన్న ఆత్మీయులు",
    "fam.title": "రెండు కుటుంబాలు. ఒకే కథ.",
    "fam.lead": "మమ్మల్ని తీర్చిదిద్ది, ప్రోత్సహించి, ఈ కొత్త అధ్యాయానికి మార్గం వేసిన మా కుటుంబ సభ్యులకు చిరు కృతజ్ఞత.",
    "fam.nalluri.eyebrow": "ఒంగోలు నుండి",
    "fam.nalluri.title": "నల్లూరి కుటుంబం",
    "fam.nalluri.sub": "వ్యవసాయం, ఆప్యాయత, సృజనాత్మకత మరియు కుటుంబ విలువలతో కూడిన ఇల్లు.",
    "fam.koteswararao.role": "తండ్రి",
    "fam.koteswararao.name": "కోటేశ్వరరావు నల్లూరి",
    "fam.koteswararao.p": "పొగాకు మరియు పప్పుధాన్యాల సాగులో అపార అనుభవం కలిగిన రైతు.",
    "fam.sarada.role": "తల్లి",
    "fam.sarada.name": "శారద నల్లూరి",
    "fam.sarada.p": "కుటుంబానికి మూలస్తంభం, టైలరింగ్ మరియు సృజనాత్మక పనులలో ఆసక్తి.",
    "fam.haripriya.role": "సోదరి",
    "fam.haripriya.name": "హరిప్రియ నల్లూరి",
    "fam.haripriya.p": "సాఫ్ట్‌వేర్ ఇంజనీర్, సాంకేతిక రంగంలో తనదైన అనుభవం కలిగి ఉన్నారు.",
    "fam.venigalla.eyebrow": "సంతనూతలపాడు నుండి",
    "fam.venigalla.title": "వెనిగళ్ల కుటుంబం",
    "fam.venigalla.sub": "అనుభవం, ఆప్యాయత మరియు ప్రోత్సాహంతో మా కుటుంబంతో కలిసిన ఆత్మీయులు.",
    "fam.suresh.role": "తండ్రి",
    "fam.suresh.name": "సురేష్ వెనిగళ్ల",
    "fam.suresh.p": "సీనియర్ సూపర్‌వైజర్‌గా వృత్తిపరమైన అనుభవం, కుటుంబానికి అండగా నిలిచే వ్యక్తి.",
    "fam.laxmi.role": "తల్లి",
    "fam.laxmi.name": "లక్ష్మీ ప్రసన్న వెనిగళ్ల",
    "fam.laxmi.p": "అకౌంటింగ్ నేపథ్యం కలిగి ఉన్నారు; రెండు కుటుంబాల మధ్య మొదటి పరిచయానికి నాంది పలికారు.",
    "fam.karunya.role": "సోదరి",
    "fam.karunya.name": "కారుణ్య సాయి వెనిగళ్ల",
    "fam.karunya.p": "సాఫ్ట్‌వేర్ ఇంజనీర్, టెక్నాలజీ రంగంలో ముందుకు సాగుతున్నారు.",
    "fam.srikanth.role": "బావగారు",
    "fam.srikanth.name": "శ్రీకాంత్ నార్నె",
    "fam.srikanth.p": "సాఫ్ట్‌వేర్ ఇంజనీర్ మరియు సొంత సాఫ్ట్‌వేర్ కన్సల్టింగ్ వ్యాపారం నడుపుతున్న ఎంటర్‌ప్రెన్యూర్.",
    "fam.grat.eyebrow": "ప్రత్యేక కృతజ్ఞతలతో",
    "fam.grat.title": "కొందరు అందమైన ఆరంభాలకు కారణమవుతారు.",
    "fam.grat.sub": "మా రెండు కుటుంబాలను కలపడంలో ముఖ్య పాత్ర పోషించిన ఇద్దరికి ప్రత్యేక ధన్యవాదాలు.",
    "fam.grat.quote": "“మా కుటుంబాలను కలిపిన ప్రత్యేక వారధిగా నిలిచిన కారుణ్య సాయి మరియు శ్రీకాంత్ నార్నె గారికి హృదయపూర్వక ధన్యవాదాలు.”",
    "fam.grat.p": "మీ ఆలోచన మరియు చొరవ ఈ ప్రయాణాన్ని మొదలుపెట్టాయి. రెండు కుటుంబాల మధ్య ఈ అందమైన బంధానికి మీరే కారణం.",
    "fam.town.eyebrow": "రెండు ఊర్లు",
    "fam.town.title": "ఒంగోలు & సంతనూతలపాడు కలయిక.",
    "fam.town.p": "మా కుటుంబాలు వేర్వేరు ఊర్ల నుండి వచ్చినప్పటికీ, మంచి మనసు మరియు ఆప్యాయతతో ఇప్పుడు ఒకే బంధంతో కలిశాయి.",
    "fam.town.quote": "“ప్రతి కొత్త ఆరంభం వెనుక మమ్మల్ని నడిపించే, ఆశీర్వదించే ఆత్మీయులు ఉంటారు.”",

    "things.eyebrow": "చిన్న విషయాలే కథను అందంగా మారుస్తాయి",
    "things.title": "కొన్ని ఇష్టమైన విషయాలు.",
    "things.lead": "ఒకరినొకరు తెలుసుకోవడం అంటే చిన్న చిన్న ఇష్టాలను తెలుసుకోవడమే — ముఖ్యంగా రుచికరమైన వాటిని!",
    "things.anim.title": "కలిసి వంట చేయడం & రుచులు పంచుకోవడం",
    "things.anim.sweet": "మోతీచూర్ & చాక్లెట్",
    "things.anim.veggie": "తాజా వెజ్ రుచులు",
    "things.anim.sub": "ఒకరు స్వీట్లు తయారు చేస్తుంటే, మరొకరు వెజ్ వంటకాలు వండుతూ కలిసి ఆస్వాదించడం!",
    "things.c1.num": "అనూష స్వీట్ సైడ్",
    "things.c1.t": "మోతీచూర్ & చాక్లెట్",
    "things.c1.p": "సంప్రదాయ మోతీచూర్ లడ్డూ అయినా, చాక్లెట్ అయినా — డెజర్ట్ టేబుల్‌పై రెండింటికీ చోటు ఉండాల్సిందే.",
    "things.c2.num": "తేజ సైడ్",
    "things.c2.t": "వెజ్ వంటకాలకు ఓ అవకాశం",
    "things.c2.p": "మంచి శాకాహార వంటకం మెనూలో దేనికైనా సమానంగా రుచిగా ఉంటుంది.",
    "things.c3.num": "ఇద్దరికీ నచ్చేది",
    "things.c3.t": "భోజన ప్రియులం!",
    "things.c3.p": "కొత్త రెస్టారెంట్లు వెతకడం, ఏం ఆర్డర్ చేయాలో చర్చించడం — ఆహారం మాకు ఎన్నో కబుర్లు ఇస్తుంది.",
    "things.split.eyebrow": "చిన్న పరీక్ష",
    "things.split.title": "ఒకే టేబుల్. రెండు మెనూలు. బోలెడు కబుర్లు.",
    "things.split.p": "రెండు వేర్వేరు వంటకాలు ఆర్డర్ చేసి, అన్నింటినీ కొంచెం కొంచెం పంచుకోవడంలోనే అసలు మజా ఉంది.",
    "things.menu.title": "మా ఊహాత్మక ఫుడ్ డేట్",
    "things.menu.s": "<strong>స్టార్టర్:</strong> ఏదైనా కొత్త రుచి",
    "things.menu.m": "<strong>మెయిన్ కోర్స్:</strong> రుచికరమైన వెజ్ వంటకం",
    "things.menu.d": "<strong>డెజర్ట్:</strong> మోతీచూర్ & చాక్లెట్",
    "things.menu.sub": "చాలా బాగుంది కదూ?",

    "places.eyebrow": "ప్రయాణాల కలలు",
    "places.title": "ఎక్కడికైనా, ఏదో ఒకరోజు.",
    "places.lead": "ఒక చిన్న ట్రావెల్ విష్‌లిస్ట్ — అందమైన దారులు, స్థానిక రుచులు మరియు హడావిడి లేకుండా గడిపే సమయం.",
    "places.p1.t": "కేరళ",
    "places.p1.p": "బ్యాక్ వాటర్స్, కొండ ప్రాంతాలు, ప్రశాంతమైన ఉదయాలు మరియు పచ్చదనం.",
    "places.p2.t": "రాజస్థాన్",
    "places.p2.p": "కోటలు, పాత వీధులు, సూర్యాస్తమయాలు మరియు ప్రతి మూలలో ఒక కథ.",
    "places.p3.t": "గోవా",
    "places.p3.p": "సముద్రపు ఒడ్డున డ్రైవ్‌లు, కేఫ్‌లు మరియు ప్రశాంతమైన సమయం.",
    "places.p4.t": "హిమాచల్",
    "places.p4.p": "మంచు కొండలు, వెచ్చని బస మరియు బిజీ రోజుల నుండి విరామం.",
    "places.p5.t": "ఆంధ్ర & తెలంగాణ",
    "places.p5.p": "ఫుడ్ ట్రైల్స్, మనకు తెలిసిన ఊర్లు మరియు వీకెండ్ ప్రయాణాలు.",
    "places.p6.t": "కాశ్మీర్",
    "places.p6.p": "అందమైన ప్రకృతి దృశ్యాలు, ప్రశాంత క్షణాలు మరియు మర్చిపోలేని జ్ఞాపకాలు.",
    "places.end.eyebrow": "ముఖ్యమైన విషయం",
    "places.end.title": "కేవలం గమ్యం మాత్రమే కాదు.",
    "places.end.p": "దారిలో వినే పాటలు, స్నాక్ స్టాప్‌లు, సరదా ఫోటోలు మరియు ఇంటికి తెచ్చుకునే జ్ఞాపకాలే అసలైన ఆనందం.",

    "dreams.eyebrow": "ఒక చిన్న ఆలోచన",
    "dreams.title": "రుచితో కూడిన ఒక సైడ్-హస్ల్.",
    "dreams.lead": "రెండు ఆలోచనాత్మక మనసులు, వేర్వేరు నైపుణ్యాలు, మరియు ఒక సరదా ఆలోచన: ఆహారంపై ఉన్న ఇష్టాన్ని మా సొంత వెంచర్‌గా మార్చడం.",
    "biz.board.title": "బిజినెస్ ప్లానింగ్ బోర్డ్ • ఫుడ్ వెంచర్",
    "biz.board.status": "ప్రణాళిక సిద్ధమవుతోంది...",
    "biz.s1.tag": "దశ 01",
    "biz.s1.t": "మెనూ ఎంపిక",
    "biz.s1.p": "మోతీచూర్ జార్స్ + వెజ్ బౌల్స్",
    "biz.s2.tag": "దశ 02",
    "biz.s2.t": "టెస్ట్ కిచెన్",
    "biz.s2.p": "చిన్న బ్యాచ్‌లలో రుచి పరీక్ష",
    "biz.s3.tag": "దశ 03",
    "biz.s3.t": "బ్రాండింగ్ & యాప్",
    "biz.s3.p": "ప్యాకేజింగ్ & ఆన్‌లైన్ ఆర్డర్లు",
    "biz.s4.tag": "దశ 04",
    "biz.s4.t": "లాంచ్ & ఫీడ్‌బ్యాక్",
    "biz.s4.p": "స్నేహితులు & కుటుంబంతో మొదలు",
    "dreams.c1.t": "స్మాల్-బ్యాచ్ డెజర్ట్స్",
    "dreams.c1.p": "మోతీచూర్ జార్స్, చాక్లెట్ బైట్స్ మరియు ఇండియన్-మోడర్న్ డెజర్ట్ బాక్సులు.",
    "dreams.c2.t": "తాజా వెజ్ వంటకాలు",
    "dreams.c2.p": "రుచికరమైన వెజిటేరియన్ బౌల్స్, స్నాక్స్ మరియు ఆరోగ్యకరమైన భోజనం.",
    "dreams.c3.t": "సరదా ప్రయోగాలు",
    "dreams.c3.p": "ఇండియన్ ఫ్లేవర్ చాక్లెట్లు, సీజనల్ స్పెషల్స్ మరియు గిఫ్ట్ బాక్సులు.",
    "dreams.split.eyebrow": "మంచి టీమ్ కదూ?",
    "dreams.split.title": "వేర్వేరు నైపుణ్యాలు. ఒకే ఆలోచన.",
    "dreams.split.p": "ప్రతి విషయంలో జాగ్రత్త వహించే వైద్య దృష్టి, కొత్తవి నిర్మించే టెక్ ఆలోచన మరియు ఆహారంపై ఇష్టం — కలిసి ఒక చిన్న ప్రయోగం చేస్తే భలే ఉంటుంది.",
    "dreams.panel.t": "చిన్నగా మొదలుపెడదాం",
    "dreams.panel.1": "1. ఒక స్వీట్ మరియు ఒక హాట్ వంటకం ఎంచుకోవడం.",
    "dreams.panel.2": "2. చిన్న బ్యాచ్ తయారు చేయడం.",
    "dreams.panel.3": "3. స్నేహితులకు రుచి చూపించి అభిప్రాయాలు తీసుకోవడం.",
    "dreams.panel.4": "4. నచ్చిన వాటిని మరింత మెరుగుపరచడం.",

    "note.eyebrow": "మీ ఆలోచనల కోసం ఒక చిన్న చోటు",
    "note.title": "ఇక మీ వంతు, అనూష.",
    "note.lead": "సరదాగా కొన్ని ప్రశ్నలు. సరైన సమాధానాలు అంటూ ఏమీ లేవు — ఒకరినొకరు మరింత తెలుసుకోవడానికి ఒక చిన్న అవకాశం మాత్రమే.",
    "form.q1": "మనం కలిసి వెళ్లడానికి భారతదేశంలో ఒక ప్రదేశాన్ని ఎంచుకోమంటే, ఎక్కడికి వెళ్దాం?",
    "form.q1.ph": "మీ మనసులో ఉన్న ప్రదేశం…",
    "form.q2": "మీకు నచ్చే ప్రయాణ శైలి?",
    "form.q3": "పర్ఫెక్ట్ ఫుడ్ ఔటింగ్?",
    "form.q4": "మనం కలిసి చేయడానికి మీకు ఇష్టమైన ఒక పని?",
    "form.q4.ph": "ఏదైనా సరే…",
    "form.q5": "ఏ ఫుడ్-బిజినెస్ ఆలోచన మీకు బాగా నచ్చింది?",
    "form.q5.ph": "ది స్వీట్ ఎడిట్, ది వెజ్ టేబుల్, లేదా మీ సొంత ఆలోచన!",
    "form.q6": "మీ బకెట్-లిస్ట్‌లో ఉన్న ఒక అనుభవం?",
    "form.q6.ph": "చిన్నది లేదా పెద్దది…",
    "form.q7": "ఇంకేమైనా చెప్పాలనుకుంటున్నారా?",
    "form.q7.ph": "ఒక సలహా, ఒక ప్రశ్న, లేదా ఏదైనా ఆలోచన…",
    "form.submit": "నా సమాధానాలు పంపండి ♡",
    "note.end.quote": "“ముందున్న అందమైన అధ్యాయాలకు స్వాగతం.”"
  }
};

function captureEnglish() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!el.dataset.en) el.dataset.en = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (!el.dataset.enPh) el.dataset.enPh = el.getAttribute('placeholder');
  });
}

function applyLanguage(lang) {
  captureEnglish();
  document.documentElement.lang = lang;
  localStorage.setItem('siteLang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'te' && translations.te[key]) {
      el.innerHTML = translations.te[key];
    } else if (el.dataset.en) {
      el.innerHTML = el.dataset.en;
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (lang === 'te' && translations.te[key]) {
      el.setAttribute('placeholder', translations.te[key]);
    } else if (el.dataset.enPh) {
      el.setAttribute('placeholder', el.dataset.enPh);
    }
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

const langBtn = document.querySelector('#langToggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const nextLang = (localStorage.getItem('siteLang') || 'en') === 'en' ? 'te' : 'en';
    applyLanguage(nextLang);
  });
}

const savedLang = localStorage.getItem('siteLang') || 'en';
applyLanguage(savedLang);

const form = document.querySelector('#funForm');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.querySelector('#formStatus');
    const button = form.querySelector('button[type="submit"]');
    const isTe = (localStorage.getItem('siteLang') || 'en') === 'te';
    status.textContent = isTe ? 'మీ సమాధానాలు పంపుతున్నాము…' : 'Sending your answers…';
    button.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status.textContent = isTe
          ? 'మీ సమాధానాలు అందాయి. ధన్యవాదాలు ♡'
          : 'Your answers have been sent. Thank you for sharing a little piece of your day ♡';
        form.reset();
      } else {
        status.textContent = isTe
          ? 'పంపడంలో చిన్న సమస్య వచ్చింది. మళ్లీ ప్రయత్నించండి.'
          : 'That didn’t go through just yet. Please try once more.';
      }
    } catch (error) {
      status.textContent = isTe
        ? 'ఇంటర్నెట్ సమస్య వచ్చింది. దయచేసి మళ్లీ ప్రయత్నించండి.'
        : 'A connection issue came up. Please try again.';
    } finally {
      button.disabled = false;
    }
  });
}