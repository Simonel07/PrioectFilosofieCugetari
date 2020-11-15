var quotes = [
	'590. Omul trebuie să fie sincer în toate religiile; adevărații păgâni, adevărații evrei, adevărații creșstini.',
	'600. Oricare om poate să facă ce a făcut Mahomed; căci el nu a făcut niciun miracol, iar venirea lui nu a fost proorocită. Nimeni nu poate să facă ce a făcut Iisus Hristos.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}