var quotes = [
	'344. Instinct și rațiune, mărcile a două naturi.',
	'345. Rațiunea ne poruncește mult mai imperios decât un stăpân; căci nesocotind-o pe prima suntem nenorociți și nesupunându-ne celui de-al doilea, suntem nebuni.',
	'346. Gândirea este grandoarea omului.',
	'349. Imaterialitatea sufletului. Filosofii care și-au dominat pasiunile. Ce altă materie ar mai putea face asta?',
	'352. Forța virtuții unui om nu trebuie măsurată după eforturile sale ci după viața lui obișnuită.',
	'356. Hrănirea corpului se face puțin câte puțin. Plinătatea hrănirii și puținătatea subsanței.',
	'358. Omul nu este nici înger și nici brută și păcat este că cel care o face pe îngerul, o face și pe bruta.',
	'369. Memoria este necesară pentru toate operațiile rațiunii.',
	'379. Nu este bine să ai prea multă libertate. Nu este bine să ai tot ceea ce îți dorești.',
	'396. Două lucruri îl învață pe om despre natura lui; instinctul și experiența.',
	'414. Omul este într-atât de necesar nebun, încât a nu mai fi nebun echivalează cu altă formă de nebunie.',
	'419. Nu-l voi lăsa pe om să se bazeze pe el însuși sau pe altul, cu scopul de a-l lăsa fără un refugiu și fără odihnă',
	'422. Este bine să fii obosit și plictisit de căutarea în van a adevărului în bine ca să ne putem întinde brațele către Mântuitor.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}