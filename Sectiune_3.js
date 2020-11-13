var quotes = [
	'188. În fiecare dialog și discurs, trebuie să fim în stare să le spunem celor care se simt ofensați, "De ce anume vă plângeți?"',
	'196. Oamenilor le lipsește inima; nu vor să se împrietenească cu ea.',
	'198. Sensibilitatea omului față de nimicuri și insensibilitatea lui față de lucrurile mari, indică o ciudată inversiune.',
	'204. Dacă ar trebui să dedicăm opt ore din viață, ar trebui să dedicăm o sută de ani.',
	'206. Liniștea eternă a acestor spații infinte mă înfricoșează.',
	'207. Câte împărății nu ne cunosc!',
	'209. Ești mai puțin sclav decât ești iubit și preferat de stăpânul tău? Situația ta este pe bună dreptate mai bună, sclavule. stăpânul tău te preferă; curând te va bătea.',
	'212. Instabilitatea. E un lucru îngrozitor să simțim că tot ceea ce avem ne alunecă printre degete.',
	'213. Între noi și Rai sau Iad este doar viață care e cel mai fragil lucru din lume.',
	'215. Să te temi de moarte în lipsa unui pericol și nu în prezența pericolului, căci trebuie să fii om.',
	'216. Doar moartea subită; este temută de aceea confesorii stau alături de seniori.',
	'221. Ateii ar trebui să spună ce e absolut evident: nu este absolut evident că sufletul este material',
	'224. Cât pot să urăsc neghiobia de a nu se crede în Euharistie etc.! Dacă Evangheliile sunt adevărate, dacă Iisus Hristos este Dumnezeu, care mai este dificultatea?',
	'225. Ateismul dovedește puterea a minții, dar numai într-o anumită măsură.',
	'228. Obiecția ateilor: "Dar nu avem lumină".',
	'232. Mișcarea infinită, punctul care umple totul, momentul de repaos; infintul fără cantitate indivizibil și infinit.',
	'241. Ordinea. Mi-ar fi mult mai frică să nu greșesc și să constat că religia creștină are dreptate, decât sâ nu greșesc crezând că are dreptate.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}