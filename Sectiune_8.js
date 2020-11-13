var quotes = [
	'558. Ce vom putea concluziona din întunericul nostru, dacă nu nevrednicia noastră?',
	'580. Natura are perfecțiuni pe care să le arate ca dovadă că este imaginea lui Dumnezeu; și unele defecte care să arate că nu este decât o imagine.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}