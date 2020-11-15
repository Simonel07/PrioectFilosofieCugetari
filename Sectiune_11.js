var quotes = [
	'698. Sinagoga a precedat biserica; evreii, pe creștini. Profeții au anunțat creștinii; Sfântul Ioan pe Iisus Hristos.',
	'699. Este o slavă să vezi cu ochii credinței istoria lui Irod și a lui Cezar',
	'707. Profeții. Momentul, profețit de starea poporului evreu, de starea străinilor, de starea templului, de numărul anilor.',
	'717. Profeții. Promisiunea că David va avea întotdeauna urmași.(Ieremia, 13-13)',
	'725. Profeții. Convertirea egiptenilor(Isaia, 19-19); un altar în Egipt pentru Dumnezeu cel adevărat.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}