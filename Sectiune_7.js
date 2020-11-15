var quotes = [
	'438. Dacă omul nu este făcut pentru Dumnezeu, de ce este fericit numai întru Dumnezeu? Dacă omul este făcut pentru Dumnezeu, de ce este el atât de opus lui Dumnezeu?',
	'439. Natura stricată. Omul nu acționează prin rațiune care constituie ființa lui',
	'454. Injustiția. Nu s-au descoperit alte mijloace pentru satisfacerea depravării fără a le face rău altora.',
	'456. Este o judecată pervertită care îl face pe om să se pună deasupra lumii și să prefere propriul bine și perpetuarea norocului și a vieții proprii, în detrimentul restului lumii!',
	'461. Cele trei depravări au creat trei secte; și filosofii nu au făcut altceva decât să ia calea uneia din cele trei depravări.',
	'496. Experiența ne face să vedem diferența enormă dintre pietate și bunătate',
	'503. Filosofii au consacrat viciile, punându-le lui Dumnezeu însuși. Creștinii au consacrat virtuțiile.',
	'522. Legea impune ceea ce nu dă. Grația divină dă ceea ce impune.',
	'523. Toată credința constă în Iisus Hristos și în Adam și toată moralitatea în depravare și grație divină',
	'528. Iisus Hristos este Dumnezeu de care ne apropiem fără mândrie și în fața căruia ne simțim umili fără disperare.',
	'534. Există doar două feluri de oameni dreptcredincioși: credincioșii care se cred pe ei înșiși păcătoși; restul, păcătoși care se cred pe ei înșiși dreptcredincioși.',
	'541. Nimeni nu este atât de fericit ca un creștin adevărat, nici atât de rațional, virtuos sau prietenos.',
	'549. Nu este imposibil, ci și inutil să-l cunoști pe Dumnezeu fără Iisus Hristos.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}