var quotes = [
	'664. Model. Dumnezeu s-a folosit de depravarea evreilor ca să-i dea lui Iisus Hristos mijloacele care le-a adus remediul pentru depravarea lor.',
	'671. Evreii care au fost chemați să supună popoare și regi, au fost sclavii păcatului; și creștinii, a căror chemare a fost să fie slujitori și supuși, sunt copii liberi.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}