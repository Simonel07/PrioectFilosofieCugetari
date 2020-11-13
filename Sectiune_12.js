var quotes = [
	'739. Profeții au poruncit neproorociți. Sfinții au fost proorociți, însă nu au făcut profeții. Iisus a și profețit, a și fost profețit.',
	'748. În vremea Mesiei, oamenii s-au împărțit. Cei spirituali, L-au îmbrățisat pe Mesia și cei cu mințile mai brute au rămas să slujească drept martori ai Lui.',
	'764. Biserica a avut dificultăți la fel de mari să arate că Iisus Hristos a fost om, împotriva celor care negau acest lucru, ca și pentru a dovedi că El era Dumnezeu; și probabilitățile erau la fel de mari.',
	'774. Iisus Hristos pentru totți, Moise pentru o seminție.',
	'784. Iisus Hristos nu a vrut mărturia diavolilor, nici a celor care nu fuseseră chemați, ci pe a lui Dumnezeu și a lui Ioan Botezătorul.',
	'796. Iisus Hristos nu spune că El nu este din Nazaret, ca să-i lase pe cei răi în orbirea lor; nici că este fiul lui Iosif',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}