var quotes = [
	'249. Să-ți pui speranțele în formalisme înseamnă supersitiție, dar înseamnă mândrie să nu fii dispus să te supui lor.',
	'253. Două extreme: excluderea rațiunii, admiterea numai a rațiunii.',
	'269. supunearea înseamnă folosirea rațiunii, în aceasta constă adevăratul creștinism.',
	'272. Nu există nimic care să se conformeze atât de bine la rațiune ca această tăgăduire a rațiunii.',
	'280. Cunoașterea lui Dumnezeu este foarte departe de iubirea pentru Dumnezeu.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}