var quotes = [
	'295. Al meu, al tău. "câinele ăsta e al meu", a spus copilul sărac, "acesta este locul meu sub soare". Iată începutul imaginii uzurpării pe tot pământul.',
	'300. Când un om puternic înarmat își păzește averea, averea lui e în pace',
	'305. Elvețienii sunt ofensați dacă li se spune gentilomi și se dovedesc a fi adevărații plebei pentru a fi considerați demni de o funcție înaltă.',
	'309. Justiția. Așa cum obiceiul determină ce este agreabil, la fel se întâmplă și cu justiția.',
	'312. Justiție înseamnă ceea ce este instaurat; și astfel toate legile noastre instaurate vor fi considerate obligatoriu ca fiind juste, fără a fi cercetate, de vreme ce sunt instaurate.',
	'321. Copii sunt uluiți când își văd tovarășii respectații.',
	'336. Motivele efectelor. Trebuie să ne păstrăm secretă gândirea și să judecăm totul cu ea, vorbind însă asemena oamenilor.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}