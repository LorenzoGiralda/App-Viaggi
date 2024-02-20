import {createStore} from 'vuex';


// MODULO A - LOGICA VIAGGI
const modViaggi = {
namespaced: true,
state(){ 
    
return{
travel:[

{
id: "Firenze",

citta: "Firenze",

regione: "Europa",

img:"fi.jpg",

titolo: "Alla scoperta del rinascimento",

descrizione:"Firenze, capoluogo della Toscana, ospita molti capolavori dell'arte e dell'architettura rinascimentale. Uno dei luoghi più celebri è il Duomo, la cattedrale con cupola di tegole progettata dal Brunelleschi e il campanile di Giotto. La Galleria dell'Accademia espone la scultura del David di Michelangelo mentre nella Galleria degli Uffizi si trovano La nascita di Venere di Botticelli e l’Annunciazione di Leonardo da Vinci",

data: "dal 3 al 16 aprile",

mese: "aprile",

giorni: 14,

prezzo: 2000,

},	


{

id: "Roma",

citta: "Roma",

regione: "Europa",
    
img:"rm.jpg",

titolo: "Roma Caput Mundi",

descrizione:"Roma, capitale dell’Italia, è una grande città cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa. Le antiche rovine come il Foro e il Colosseo testimoniano la potenza dell’antico Impero romano. Nella Città del Vaticano, sede della Chiesa Cattolica, si trovano la Basilica di San Pietro e i Musei Vaticani, che ospitano capolavori come la Cappella Sistina affrescata da Michelangelo.",

data: "dal 1 al 20 maggio",

mese: "maggio",

giorni: 21,

prezzo: 1500,
	
},



{

id: "Parigi",

citta: "Parigi",

regione: "Europa",
    
img:"pa.jpg",

titolo: "Parigi...l'amour toujours",

descrizione:"Parigi, capitale della Francia, è una delle città più importanti d'Europa, centro mondiale di arte, moda, gastronomia e cultura. L'architettura urbana risalente al XIX secolo è caratterizzata dagli ampi boulevard e dalla Senna. Oltre a monumenti come la Torre Eiffel e la cattedrale gotica di Notre-Dame, del XII secolo, la città è rinomata per i tradizionali caffè e per i negozi di alta moda lungo la Rue du Faubourg Saint-Honoré.",

data: "dal 1 al 13 giugno",

mese: "giugno",

giorni: 14,

prezzo: 1300,
	
},




{

id: "Rio de Janeiro",

citta: "Rio de Janeiro",

regione: "America",
    
img:"rio.jpg",

titolo: "Saudade",

descrizione:"Rio de Janeiro è un'enorme città costiera del Brasile. È famosa per le spiagge di Copacabana e Ipanema, per la statua del Cristo Redentore, alta 38 m e posta in cima al Monte Corcovado, e per il Pan di Zucchero, un colle di granito sormontato da impianti di risalita. La città è anche conosciuta per le vaste favelas (baraccopoli). L'esuberante Carnevale di Rio, con le sue sfilate di carri allegorici, costumi sgargianti e ballerine di samba, è considerato il più grande al mondo.",

data: "dal 1 al 27 giugno",

giorni: 28,

mese: "giugno",

prezzo: 1800,

	
},




{

id: "Zanzibar",

citta: "Zanzibar",

regione: "Africa",
    
img:"zan.jpg",

titolo: "Tanzania in love",

descrizione:"Zanzibar è un arcipelago della Tanzania al largo delle coste dell'Africa orientale. Nella sua isola principale, Unguja, chiamata familiarmente Zanzibar, si trova Stone Town, un antico centro per il commercio con influenze swahili e islamiche. Tra le sue viuzze tortuose sorgono minareti, portali scolpiti ed edifici del XIX secolo, come la Casa delle meraviglie, un antico palazzo del sultano. I villaggi settentrionali di Nungwi e Kendwa sono caratterizzati da ampie spiagge costellate di alberghi.",

data: "dal 7 al 15 agosto",

mese: "agosto",

giorni: 7,

prezzo: 2600
	
},



{

id: "New York",

citta: "New York",

regione: "America",
    
img:"ny.jpg",

titolo: "Natale nella grande mela",

descrizione:"New York si trova alla foce del fiume Hudson, sull'Oceano Atlantico, e comprende 5 distretti. Manhattan, il suo cuore pulsante, è considerato uno dei poli commerciali, finanziari e culturali più importanti al mondo. I luoghi più caratteristici della metropoli sono i grattacieli come l'Empire State Building e l'estesa zona di Central Park. Il teatro di Broadway è illuminato dai neon di Times Square.",

data: "dal 23 al 30 dicembre",

mese: "dicembre",

giorni: 7,

prezzo: 4000
	
},



{

id: "Tokio",

citta: "Tokio",

regione: "Asia",
    
img:"to.jpg",

titolo: "La fioritura dei ciliegi",

descrizione:"Tokyo, l'affollata capitale del Giappone, unisce lo stile ultramoderno a quello tradizionale, con i suoi grattacieli illuminati da luci al neon e i templi storici. Il sontuoso tempio di Meiji Shinto è noto per l'enorme porta di accesso e per la natura circostante. Il Palazzo Imperiale è immerso tra immensi giardini pubblici. I diversi musei della città propongono mostre che vanno dall'arte classica, come quelle organizzate dal Museo Nazionale di Tokyo, alle ricostruzioni del teatro kabuki, come al Museo Edo-Tokyo.",

data: "dal 7 al 21 febbraio",

mese: "febbraio",

giorni: 14,

prezzo: 4000
	
},



{

id: "Sidney",

citta: "Sidney",

regione: "Australia",
    
img:"si.jpg",

titolo: "La terra dei canguri",

descrizione:"Sydney, capitale del Nuovo Galles del Sud e una delle più grandi città australiane, è conosciuta soprattutto per la Sydney Opera House, una struttura dalla caratteristica forma di vela che sorge vicino al porto. L'enorme Darling Harbour e il più piccolo Circular Quay, che si trovano vicino all'Harbour Bridge e ai prestigiosi Royal Botanic Gardens, sono porti molto vivaci, mentre lo Skywalk, la terrazza della Sydney Tower, offre una vista a 360 gradi sulla città e sulla periferia.",

data: "dal 7 al 21 marzo",

mese: "marzo",

giorni: 14,

prezzo: 4000
	
},


{

id: "Nuuk",

citta: "Nuuk",

regione: "Altro",
    
img:"nu.jpg",

titolo: "Scopriamo la Groenlandia",

descrizione:"La grande isola della Groenlandia è un territorio danese autonomo situato tra l’oceano Atlantico del Nord e l’oceano Artico. La sua superficie terrestre è ricoperta prevalentemente di ghiaccio e la maggior parte dell'esigua popolazione vive lungo la costa, nei fiordi liberi da ghiacciai, soprattutto nella zona sud-ovest. Per via della posizione geografica, ancora più a nord del Circolo polare artico, la Groenlandia è caratterizzata da fenomeni naturali come il sole di mezzanotte in estate e l'aurora boreale in inverno.",

data: "dal 1 al 20 febbraio",

mese: "febbraio",

giorni: 21,

prezzo: 5200
	
},


{

id: "Nairobi",

citta: "Nairobi",

regione: "Africa",
    
img:"na.jpg",

titolo: "L'africa dal cuore grande",

descrizione:"La grande isola della Groenlandia è un territorio danese autonomo situato tra l’oceano Atlantico del Nord e l’oceano Artico. La sua superficie terrestre è ricoperta prevalentemente di ghiaccio e la maggior parte dell'esigua popolazione vive lungo la costa, nei fiordi liberi da ghiacciai, soprattutto nella zona sud-ovest. Per via della posizione geografica, ancora più a nord del Circolo polare artico, la Groenlandia è caratterizzata da fenomeni naturali come il sole di mezzanotte in estate e l'aurora boreale in inverno.",

data: "dal 1 al 31 maggio",

mese: "maggio",

giorni: 28,

prezzo: 7670

},



{

id: "Tahiti",

citta: "Tahiti",

regione: "altro",
    
img:"ta.jpg",

titolo: "Tahiti è la sua acqua cristallina",

descrizione:"Tahiti è l'isola più grande della Polinesia francese, l'arcipelago dell'Oceania. Con una forma che ricorda il numero otto, l'isola è suddivisa in Tahiti Nui (la parte occidentale, più estesa) e Tahiti Iti (la penisola orientale). Con le spiagge di sabbia nera, le lagune, le cascate e due vulcani estinti, Tahiti è una famosa meta per le vacanze. Esplorata dal capitano James Cook nel XVIII secolo, fu spesso immortalata dall'artista francese Paul Gauguin.",

data: "dal 7 al 20 novembre",

mese: "novembre",

giorni: 14,

prezzo: 4770
	
},


{

id: "Arizona",

citta: "Arizona",

regione: "America",
    
img:"ar.jpg",

titolo: "Il meraviglioso parco del Grand Canyon",

descrizione:"Nel Parco nazionale del Grand Canyon, in Arizona, si trova la maggior parte dell'immenso Grand Canyon, con i suoi strati di roccia rossa che rivelano milioni di anni di storia geologica. Punti di osservazione sono Mather Point, Yavapai Observation Station, Lookout Studio e Desert View Watchtower, di cui gli ultimi due sono stati realizzati dall'architetto Mary Colter. Lipan Point, con un'ampia vista sul canyon e sul fiume Colorado, è una destinazione famosa, soprattutto all'alba e al tramonto.",

data: "dal 2 al 31 settembre",

mese: "settembre",

giorni: 28,

prezzo: 8160

}   
],
carrello:[],
total: null,
optionTra:[],
filterTasto: false,
abc: false,
roma: 3,
};
},
    
mutations:{
      
changeSF(state){
state.filterTasto = false  
},
    
showTod(state){
state.optionTra = []    
},
  
hideModalBar(state){
state.abc = false
state.optionTra = []
},
    
addTravel(state, payload){
state.carrello.push(payload)
}, 
    
addTotal(state,payload){
state.total += payload    
},
    
addOption(state,payload){
state.total += payload    
},
    
addFilt(state, payload){
state.optionTra.push(payload) 
},
    
changeButton(state){
state.filterTasto =! state.filterTasto;    
},
       
svuotaArray(state){
state.optionTra = [];
},
        
       
},    
getters:{   
    
showMo(state){
return state.abc   
},
    
showTravel(state){
return state.travel    
},
       
showCar(state){
return state.carrello 
},

showTot(state){
return state.total    
},
    
showFil(state){
return state.optionTra    
},
    
    
showBtn(state){
return state.filterTasto    
},
    
    
    
constFil(state,getters){
  
/////////////////////////////
    
const reg = state.optionTra.map(a => a.regione) 
const mesi = state.optionTra.map(b => b.mese) 
const prezzo = state.optionTra.map(c => c.prezzo)
const durata = state.optionTra.map(d => d.durata) 


/////////////////////////////

const risTrovato = getters.showTravel.filter(show => show.prezzo <= prezzo && show.mese == mesi && show.giorni == durata && show.regione == reg)

if(risTrovato.length > 0){
return risTrovato
}else if(getters.showFil.length == 0){
return getters.showTravel
}else{
state.abc = true
return getters.showTravel    
}
},
   
    
    
},    
actions:{

},  
    
};


//////////////////////////////////


// MODULO B - LOGICA ARTICOLI
const modArticoli = {
namespaced: true,
state(){ 
    
return{
articoli:[

{
id: "Firenze",

citta: "Firenze",
        
button: "Vai all'articolo",

img: "fi-b.jpg",

titolo: "Le 5 curiosità su Firenze",

descrizione:" 1. Il toro cornuto del Duomo. Ogni turista rimane a bocca aperta davanti alla bellezza di Santa Maria del Fiore, ma in pochi notano una testa di toro scolpita sulla sua fiancata. Aguzzando bene la vista, però, è possibile vederlo. Secondo una leggenda popolare, ai tempi della costruzione della cattedrale, lì davanti abitava una bella signora, sposata con un sarto, ma che tradiva il marito con un carpentiere che lavorava alle decorazioni: sarebbe stato proprio lo scalpellino, in segno di scherno verso il marito della donna, a rappresentare il “cornuto”! <br><br> 2. L’orologio che gira al contrario. Rimaniamo nel Duomo, ma andiamo al suo interno: dando le spalle all’altare è possibile vedere un orologio dipinto dall’artista Paolo Uccello, con i numeri romani dall’uno al ventiquattro in senso antiorario e che termina il suo percorso al tramonto invece che a mezzanotte. Quest’ultima scelta scaturisce, probabilmente, dal fatto che nel ‘400 veniva usata l’“Hora Italica”, ma alle ore scritte al contrario, fino ad oggi, non è mai stata data una spiegazione. <br><br> 3. Madonna del puzzo. Tutti conoscono e ammirano il David di Michelangelo, ma la scultura più curiosa è un busto in terracotta posto in una nicchia nella Torre dei Marsili: raffigura la Vergine che alza gli occhi al cielo e si tura il naso con le dita, mentre un topo le corre sul braccio! È stata realizzata dall’artista Mario Mariotti nel 1984 per protestare contro il cattivo odore dei cassonetti e, più in generale, l’incuria e il degrado del centro storico. <br><br> 4. Il graffito “l’importuno”. Non è opera di uno qualunque, ma di Michelangelo in persona. La storia narra che spesso l’artista veniva fermato in piazza della Signoria da un signore che chiacchierava troppo e che, per ingannare il tempo, scolpì un volto sul muro di Palazzo Vecchio, con la mano dietro la schiena! <br><br> 5. Ippopotamo di Boboli. Il giardino di Boboli estende alle spalle del meraviglioso Palazzo Pitti, ed è un vero e proprio museo a cielo aperto con antiche statue rinascimentali, grotte e grandi fontane (come quella del Nettuno). Tra i suoi bizzarri inquilini, nel ‘600, c’era l’Ippopotamo di Boboli, che fu regalato a Cosimo III, amante di piante e animali esotici. Visse però poco tempo e oggi si trova imbalsamato al Museo della Specola."

},	


{

id: "Roma",

citta: "Roma",
    
button: "Vai all'articolo",

img: "roma-b.jpg",

titolo: "I sette colli di Roma",

descrizione:"Palatino: il colle più famoso e più turistico, dato che ospita il monumento simbolo di Roma, il Colosseo, e la bellissima via colma di resti antichi, i Fori Imperiali. Ti consigliamo di visitare anche la Basilica dei Santi Cosma e Damiano. <br><br>Aventino: un colle tranquillo, situato vicino al Circo Massimo e popolato di ville e spazi verdi. Su questa altura potrete godervi la pace in posti quali il Roseto comunale e il Giardino degli Aranci, nonché ammirare la cupola di San Pietro dal famoso buco della serratura del portone di Santa Maria del Priorato di Malta.<br>Celio: situato più a sud di Roma, il colle Celio è uno dei più estesi e probabilmente uno dei più vivaci, vista la presenza di quartieri con ristoranti e locali di ogni genere. Come monumenti da visitare, consigliamo sicuramente la Basilica di San Giovanni in Laterano, quella di San Clemente e la deliziosa Villa Celimontana. <br><br>Capitolino o Campidoglio: attualmente sede del Campidoglio e del suo Palazzo, in passato vera e propria acropoli romana. Su questo colle potrai ammirare anche l’imponenza dell’Altare della Patria, nonché visitare i famosi Musei Capitolini. <br>Esquilino: il colle più alto e più esteso, che abbraccia diversi quartieri di Roma, tra cui Monti. Da non perdere assolutamente la Basilica di Santa Maria Maggiore e il Parco del Colle Oppio, dove si nascondono le Terme di Traiano e la Domus Aurea di Nerone. <br>Viminale: il colle Viminale è il più piccolo dei 7, ma comunque pieno di luoghi belli da vedere, come il Palazzo del Viminale, il Museo delle Terme di Diocleziano, Piazza della Repubblica e il Teatro dell’Opera. <br>Quirinale: il colle più politico di Roma, dato che ospita il Palazzo del Quirinale, sede della Presidenza della Repubblica Italiana, e il Palazzo della Corte Costituzionale. Nonostante sia una sede politica, il Palazzo del Quirinale e i suoi giardini sono bellissimi da vedere. Di questo colle fa parte anche la meravigliosa Fontana di Trevi, una delle attrazioni principali di tutta la capitale.",
	
},



{

id: "Parigi",

citta: "Parigi",
    
button: "Vai all'articolo",

img: "pr-b.jpg",

titolo: "Le 5 opere d'arte più famose",

descrizione: "E allora come non partite, dopo una premessa del genere, dalla regina delle opere d’arte: La Gioconda. Che dirvi su questo quadro che non sapete già? Dipinta da Leonardo da Vinci tra il 1503 e il 1519, “il selfie più famoso della storia” è ospitato sul suolo parigino dal 1802. Ovvero l’anno in cui Francesco I l’acquistò per 4000 scudi d’oro (no, non l’hanno rubata, ce l’hanno pagata!). Ventimila il numero di turisti che ogni giorno le fa visita al Musée du Louvre, dove è esposta. Altro piccolo aneddoto, secondo alcuni studiosi, Leonardo avrebbe dato l’ultima pennellata al dipinto (salvo apportare successivamente alcune correzioni), nel 516. Ecco perché, questo, sarebbe l’anno del suo 500esimo anniversario. Insomma: tanti auguri Monna Lisa!<br>Restiamo sempre al Louvre per un altro grande simbolo dell’arte parigina: La Libertà che guida il popolo. Dipinta da Delacroix, questa è senza dubbio l’opera che meglio rappresenta la Francia, per i francesi. Autentico simbolo della Repubblica visto dalla democrazia, questo quadro fu stampato per quasi vent’anni sui biglietti da 100 franchi.<br> Altra assoluta opera d’arte custodita a Parigi, stavolta sponda Musée d’Orsay, è L’origine del Mondo. Poco da aggiungere su un quadro del genere, con un nome del genere. Una curiosità però, oltre alla bellezza, rende questo quadro straordinario. Il fatto che il primo proprietario di quest’opera fu costretto a sbarazzarsene sommerso com’era dai debiti di gioco. Con quello che vale oggi, altro che debiti! <br>A due passi dall’Origine del Mondo c’è poi un altro dei grandi dipinti che abbiamo selezionato. E che si inscrive nella nostra selezione delle cinque opere d’arte più famose esposte a Parigi: Notte stellata sul Rodano. La firma, manco a dirlo è quella di Vincent Van Gogh. Il blu, suo colore feticcio, è la a ricordarci tutta la sua bellezza il talento di questo maestro della pittura olandese. Piccola curiosità che accompagna quest’opera, più che l’opera in sé, riguarda però Vincent Van Gogh. Sì, perché se a vederla regala una sensazione di grande serenità, la verità è esattamente opposta. Pochi giorni dopo aver dato l’ultima pennellata al quadro, Van Gogh minaccerà con un coltelo il suo amico Gauguin, prima di rivolgere la lama contro se stesso e recidersi l’orecchio. <br>Ultima, ma non per importanza, è un’opera d’arte che, oltre ad essere esposta a Parigi, parla di Parigi meglio di qualsiasi altra. “Ballo al Mulino de la Galette” è infatti ancora oggi un simbolo della rivoluzione Hausmanniana che ha cambiato per sempre Parigi. Basta seguire il percorso studiato dalle nostre guide italiane a Montmartre (dove il Mulino de la Galette esiste ancora), per capire in che modo, quest’opera, riassuma alla perfezione la vita a Parigi degli ultimi 200 anni."

},




{

id: "Rio de Janeiro",
    
button: "Vai all'articolo",

citta: "Rio de Janeiro",

img: "rio-b.jpg",

titolo: "Le 8 curiosità sul 'Pan di zucchero' ",

descrizione:"Il Pan di Zucchero è autenticamente bello ed è una montagna dalla forma speciale.<br>Il Pan di Zucchero, gettandosi nel mare, fa da spartiacque tra la Baia di Guanabara e l’Oceano Atlantico e si trova in mezzo al blu.<br>È un luogo affascinante perché, proprio alle falde del Pan di Zucchero, il 1° marzo 1565 (giorno in cui si festeggia la fondazione di Rio de Janeiro) Estácio de Sá fondò il primo nucleo della città di Rio de Janeiro, che consisteva in una semplice struttura difensiva.<br>Salire con la funivia del Pan di Zucchero (che nel 2012 ha compiuto 100 anni di attività) è un’esperienza avvincente.<br>Il Pão de Açúcar è visibile da più parti della città e con il suo aspetto tenero ma possente cattura lo sguardo anche di chi è più abituato ai paesaggi di Rio de Janeiro. <br>Dal Pan di Zucchero si gode una vista magnifica da un lato in direzione di Copacabana e dall’altro di Botafogo e del Centro di Rio de Janeiro (potrete riconoscere molti edifici, l’aeroporto Santos Dumont, le spiagge, l’Aterro do Flamengo, Niterói, il Ponte Rio-Niterói, la Baia di Guanabara fino alla Serra do Mar e al Dedo de Deus). <br>Il Pan di Zucchero è il luogo più romantico di Rio de Janeiro (soprattutto al tramonto). <br>Ai piedi del Pan di Zucchero si svolgono numerose attività fisiche come il trekking, l’arrampicata e la pesca, senza contare che a Praia Vermelha (davanti all’accesso alla funivia) si possono fare molti sport da spiaggia.",
	
},




{

id: "Zanzibar",
    
button: "Vai all'articolo",

citta: "Zanzibar",

img: "za-b.jpg",

titolo: "Le migliori spiagge",

descrizione:"Kiwengwa è una spiaggia molto ben attrezzata per una tranquilla, comoda e rilassante vacanza a Zanzibar. Tante, qui, sono le strutture alberghiere e i villaggi turistici in grado di garantire davvero a chiunque un soggiorno da primato, così come le varie spiagge, messe insieme, formano una magnifica lingua di sabbia bianca purissima lunga ben 5 chilometri. Le sue splendide acque, poi, sono a dir poco perfette sia per un relax totale che per praticare snorkeling e immersioni, mentre la fitta vegetazione alle sue spalle garantisce un’ulteriore possibilità di riposo all’ombra di bellissime palme. <br>Tra le altre spiagge più belle dell’arcipelago di Zanzibar, però, ci sono anche quelle di Pongwe e Uroa. Sebbene di minore estensione, sia Pongwe che Uroa sono decisamente fantastiche e perfette per ammirare anche una conformazione rocciosa corallina di sicuro fascino attrattivo. Anche se la marea di questi posti non consente bagni tranquilli e rilassanti tra le acque dell’Oceano Indiano, si tratta comunque di posti imperdibili, soprattutto per una conformazione paesaggistica particolarmente adatta a una pacifica passeggiata nel cuore della natura più intatta e rigogliosa. <br>Stupenda, poi, è anche la spiaggia di Michamvi, situata sulla parte più orientale della principale isola di Zanzibar. Trattandosi di una zona ancor meno popolata rispetto alle precedenti, in quanto non ancora scoperta dal turismo di massa, Michamvi è perfetta per godersi in totale tranquillità tutto lo splendore di sabbie bianchissime e acque di un azzurro indimenticabile, grazie alle quali entrare in contatto con la fauna marina. <br>Bewjuu, nello specifico, si trova sulla costa sud-orientale dell’isola e, pur avendo visto incrementare l’afflusso di turisti nel corso degli ultimi anni, resta una meta perfetta per godersi, anche qui, sabbie purissime e un mare a dir poco cristallino la cui bassa marea, tra l’altro, permette alle donne del posto di andare a raccogliere una vastissima quantità di alghe rosse poi utilizzate nell’industria alimentare e cosmetica. <br>Paje, dal canto suo, è invece particolarmente battuta dagli amanti del kitesurfing in quanto si trova  in una zona in cui i venti sono favorevoli a questo tipo di sport soprattutto nei mesi da giugno a settembre (venti da sud-est) e da dicembre a febbraio (venti da nord-est).",
	
},



{

id: "New York",
    
button: "Vai all'articolo",

citta: "New York",

img: "ny-b.jpg",

titolo: "Il Central Park",

descrizione:"Central Park è il parco urbano più grande di New York e uno dei più importanti del mondo. È lungo più di 4 km e largo 800 mt.Nei 340 ettari che occupa troverete giardini, laghi artificiali, cascate e zone simili a quelle di un vero e proprio bosco. All'interno del parco vi è, inoltre, lo Zoo del Central Park.Oltre a essere il principale polmone di Manhattan, questo parco è uno dei luoghi preferiti dai newyorkesi per passeggiare, prendere il sole e fare sport. Come dato curioso, è sorprendente vedere tanta gente che corre trascinando la carrozzina del bebè.<br>Consiglio: visitare Central Park vi porterà via diverse ore. Per questo motivo, se volete passeggiare tranquillamente lungo il parco e scoprirne le attrazioni, la cosa migliore è riservare alla visita almeno una mattinata.",
	
},



{

id: "Tokio",
    
button: "Vai all'articolo",

citta: "Tokio",

img: "to-b.jpg",

titolo: "I 5 quartieri più belli della città",

descrizione:"Ginza: è il più famoso quartiere commerciale di tutto il Giappone.E’ un importantissimo centro economico e anche uno dei quartieri più antichi di Tokyo. Già residenza degli Shogun (i “Signori della guerra”), è sempre stato un luogo esclusivo (il suo nome deriva infatti da Gin, argento). <br> Asakusa: è una delle parti meno caotiche della capitale dove ancora si incontrano ragazze che passeggiano in kimono e numerosi risciò in giro per le strade (più per i turisti che altro). Asakusa fa parte di quella zona della città chiamata dai giapponesi shitamachi (città bassa), accanto al fiume Sumida. Da non perdere in questo quartiere il famoso tempio Sensō-ji.<br> Akihabara: piuttosto che un quartiere è un immenso supermercato dell’elettronica. Qui è possibile acquistare dal piccolo e originale gadget all’oggetto estremamente sofisticato.Come in tutti i mercati, la vendita è di norma preceduta da intense trattative. Akihabara è inoltre una sorta di museo della tecnologia: è possibile infatti trovare ancora funzionanti i primi PC, così come i robot meccanici degli anni Ottanta. <br> Roppongi: è un distretto particolarmente noto per le Roppongi Hills (dove sorge il Mori Tower, il grattacielo che sovrasta la zona), per i numerosi night club e per essere meta di numerosi turisti ed espatriati occidentali (gaijin), sebbene la maggior parte dei visitatori e dei residenti sia giapponese.Il distretto confina a sud con il quartiere di Akasaka e a nord con il quartiere di Azabu. <br> Shinjuku: è il luogo dello shopping preferito dai tokyoti: ci sono boutique, grandi magazzini, negozi e centri commerciali sotterranei che si sviluppano tutto intorno alla stazione, già di per sé labirintica. Shinjuku è la sede della più grande, meglio conosciuta e più attiva comunità gay del Giappone, Shinjuku ni-chome. É anche sede della Waseda University e della squadra di baseball dei Yakult Swallows. Da non perdere il panorama dal grattacielo Tokyo Metropolitan Government.",

},



{

id: "Sidney",
    
button: "Vai all'articolo",

citta: "Sidney",

img: "si-b.jpg",

titolo: "Scopriamo 3 curiosità di Sidney",

descrizione:" 1• La costruzione della Sidney Opera House fu un'impresa complicata:La Sydney Opera House è uno degli edifici più famosi e riconoscibili del mondo, patrimonio dell’Umanità dell’UNESCO. Fu progettata dal danese Jorn Utzon che sconfisse altri 232 architetti nella gara per la progettazione del teatro. La sua costruzione fu piuttosto faticosa, perchè non solo il costo di realizzazione passò da 7 a 102 millioni di dollari (quando si dice superare il budget), ma anche perchè richiese 14 anni di lavoro e l’impiego di 100,000 lavoratori edili. <br>2• Bondi Beach: è probabilmente uno dei tratti di sabbia più famosi del mondo, frequentato da nuotatori, surfisti, amanti della tintarella, artisti, attori, magnati dei media e comunità di ogni genere, che rendono questa spiaggia un posto molto vivace. Qui i bagnanti hanno a disposizione gratuitamente barbecue elettrici pubblici gratuiti per organizzare saporiti picnic godendosi il luogo più famoso di Sydney. <br>3• Sidney, la quinta città più cara al mondo: L’Australia è conosciuta come il paese più urbanizzato del mondo, con più grattacieli pro capite, per abitante di qualsiasi altra città. Ma lo sapevate che è anche una delle città più costose del pianeta? Da un indagine del 2014, che ha preso in esame 131 città,  è risultato che le 5 città più care sono Singapore, Parigi, Oslo, Zurigo e per l'appunto Sydney.",
	
},


{

id: "Nuuk",
    
button: "Vai all'articolo",

citta: "Nuuk",

img: "nu-b.jpg",

titolo: "Cosa non perdere in Groenlandia",

descrizione:"Parola d’ordine di un viaggio in Groenlandia? Sicuramente avventura! Non possiamo evitare di perderci nell’affascinante e misteriosa cultura inuit, per proseguire poi con escursioni verso le montagne e i fiordi che sapranno infiammare anche i cuori più gelidi. <br>Se la prima cosa da non perdersi assolutamente è l’Aurora Boreale, ecco un piccolo elenco su cosa vedere a Nuuk nel resto della giornata:il Museo Nazionale della Groenlandia; il centro culturale di Nuuk;  la cattedrale del Salvatore di Nuuk;il museo d’Arte di Nuuk. <br>Se cerchiamo esperienze che si mescolano con il mito, non possiamo evitare il Kongsgaarden, una bottega caratteristica che distribuisce prodotti su base stagionale. Più particolare verso dicembre: la leggenda narra che diventi la bottega di Santa Claus, e si riempirà quindi di letterine dei più piccoli. Se abbiamo ancora tempo, non possiamo dimenticare che Nuuk è un porto peschereccio e il più grande centro commerciali ittico groenlandese, una visita al Braedet – ovvero il porto in cui i pescatori vendono ciò che hanno preso durante la giornata – non può mancare!",


},


{

id: "Nairobi",
    
button: "Vai all'articolo",

citta: "Nairobi",

img: "na-b.jpg",

titolo: "Le 3 cose da fare a Nairobi",

descrizione:"1• Parco Nazionale di Nairobi: un safari è la prima cosa da fare appena si arriva in città, il must per ogni visitatore. Un'area naturale protetta che si estende per 117 km quadrati nella quale non manca proprio nessuno dei grandi animali della savana. Zebre, giraffe, gnu, elefanti, leoni, leopardi, gazzelle e molto altro tutto da scoprire!<br> 2• Giraffe Centre: se vi piacciono gli animali non potete perdere il centro dedicato alle giraffe, dove potrete osservare da vicino questi grandi animali mentre lo staff se ne prende cura. Il centro oltretutto mira all'educazione dei visitatori sulla conservazione della fauna selvatica, quindi perché non fare una visita?<br>3• Nairobi Safari Walk: è l'alternativa al classico safari in 4x4. Un safari a piedi vi porterà in giro tra la ricca vegetazione e le specie animali più disparate. Incontrerete i grandi erbivori e i grandi predatori, inoltre vi recherete alla piscina naturale degli ippopotami.<br>",

},



{

id: "Tahiti",
    
button: "Vai all'articolo",

citta: "Tahiti",

img: "ta-b.jpg",

titolo: "Scopriamo le spiagge più belle",

descrizione:"1• La spiaggia dei pescatori: Muovendosi verso ovest da Papeete, al Point Kilometrique 15, si incontra questa graziosa spiaggia di ciottoli. Qui, con un’immersione o dello snorkeling, è possibile avvistare razze, tartarughe e squali pinna bianca e pinna nera. Prestate solo attenzione alla corrente abbastanza forte verso la punta.<br> 2• Spiggia di Toaroto: Poco più avanti troviamo l’ingresso a questa piccola spiaggia pubblica di sabbia bianca. La spiaggia è ben tenuta e dotata di servizi igienici, docce e parcheggio gratuito. L’accesso alla laguna è un po’ difficile a causa della presenza di una striscia di corallo sul bordo dell’acqua.<br> 3• Spiaggia di Vaniava: È la spiaggia più frequentata della costa occidentale, specialmente durante il fine settimana. È ideale per i bambini piccoli perché la spiaggia è di fine sabbia bianca, non ci sono onde e l’acqua è poco profonda, oltre ad essere attrezzata con servizi igienici e docce. L’area vanta anche alcuni tavoli da picnic all’ombra. Infine, i tramonti sul profilo di Moorea all’orizzonte sono splendidi. <br> 4• Spiaggia di Paea: Ci troviamo nell’area di Paea, al Point Kilometrique 23,5, in una bella spiaggia pubblica di sabbia bianca, attrezzata con tavoli, docce e servizi igienici ben ombreggiati. L’acqua della laguna è chiara, pulita e poco profonda. Il parcheggio è gratuito. <br> 5• Spiaggia di Papara: Questa magnifica spiaggia di sabbia nera, nell’area di Papara, è un luogo molto conosciuto a Tahiti per il surf. É importante prestare attenzione alle grandi onde di questo tratto di costa. La spiaggia è pulita e fornita di uno snack bar, tavoli all’ombra, docce e un ampio parcheggio gratuito. È il posto perfetto per fare un picnic o godersi il tramonto all’ora dell’aperitivo.",
	
},


{

id: "Arizona",
    
button: "Vai all'articolo",

citta: "Arizona",

img: "ar-b.jpg",

titolo: "Scopriamo le aree del Grand Canyon",

descrizione:"Sebbene si tratti di un’unica formazione naturale, dal punto di vista delle zone visitabili possono essere individuate almeno 3 aree ben distinte del Grand Canyon:<br>• Il South Rim: il margine meridionale del canyon, dove si trova il Grand Canyon Village, l’area più attrezzata e visitata.• Il North Rim: il margine settentrionale del canyon, zona meno turistica e più adatta a una visita in solitaria. • Il West Rim: il margine occidentale, conosciuto per lo Skywalk, la famosa piattaforma trasparente sospesa sul canyon.<br> Il South Rim e il North Rim rientrano nel Grand Canyon National Park, gestito dal governo federale americano (NPS, National Park Service), che offre anche la possibilità di acquistare l’utile tessera parchi, finalizzata al risparmio per chi vuole visitare più parchi nazionali durante il suo viaggio. Il West Rim invece, la cui denominazione precisa è Grand Canyon West, si trova all’interno della riserva degli indiani Hualapai, che ne gestiscono l’accesso. <br> Ci sono poi delle zone più nascoste e sconosciute al turismo di massa, anche se al tempo stesso non facili da raggiungere.Eccone alcune: 1• Toroweap Point, un punto panoramico splendido da godere in completa solitudine. 2• Havasu Falls, cascate incredibilmente scenografiche all’interno della riserva degli indiani Havasupai. 3• Grand Canyon-Parashant National Monument, un’altra area remota e incontaminata",

}
],
askBlog:[],
showComment: false,
};

},
    
mutations:{
addAsk(state, payload){
state.askBlog.push(payload)    
},

hideShowComment(state){
state.showComment = true  
},
    
hidenComm(state){
state.showComment = false 
}
},
    
getters:{
showArt(state){
return state.articoli   
},
    
askView(state){
return state.askBlog    
},
    
showCom(state){
return state.showComment    
}

},
    
actions:{

},  
    
};


//////////////////////////////

// MODULO C - LOGICA INFO NAV
const modInfo = {
namespaced: true,
state(){ 
    
return{
infoNav:[
{
id: "Filtrare i Viaggi",
numero: "1",
title: "Filtrare i Viaggi",
descrizione:"Ho implementato questa funzionalità per filtrare i vari viaggi presenti nell’applicazione tramite  la selezione di varie opzioni disponibili (mese, durata, prezzo e regione viaggio). Per visualizzare i viaggi con le caratteristiche richieste dovranno essere selezionati tutti i campi presenti nelle opzioni. Oltre a questo “metodo” ho inserito un altra “logica” di filtraggio tramite ricerca per nome. Questa opzione da la possibilità 	di scrivere le iniziali o il nome completo di una destinazione desiderata e poi cliccare sul risultato di ricerca ottenuto per essere indirizzato al link del viaggio stesso.",
},

{
id: "Aggiungere viaggi al carrello",
numero: "2",
title: "Aggiungere viaggi al carrello",
descrizione:"Grazie a questa funzione è possibile aggiungere viaggi al carrello e ottenere la somma totale dei viaggi aggiunti. Il carrello è curato graficamente e nei dettagli, presentando tutte le caratteristiche delle destinazioni (titolo, sottotitolo, immagine e prezzo).",
},
    
{
id: "Guardare e commentare articoli del blog",
numero: "3",
title: "Guardare e commentare articoli del blog",
descrizione:"Ho creato la sezione blog con i vari articoli con la possibilità di lasciare un commento.",
},
    
{
id: "Prossime funzioni in fase di sviluppo/completamento",
numero: "4",
title: "Prossime funzioni in fase di sviluppo/completamento",
descrizione:"Svuotare o eliminare singolarmente viaggi nel carrello - creazione area login - cambio dei dati utilizzati per creare o interagire nell'app (verranno utilizzati dati presi da un database)",
},
],
};

},
    
mutations:{

},
    
getters:{
infoNav(state){
return state.infoNav    
}
},
    
actions:{

},  
    
};


// STORE PRINCIPALE CON ALL'INTERNO I VARI MODULI
const store = createStore({
        
modules:{
a: modViaggi,
b: modArticoli,
c: modInfo
}    
});


export default store;