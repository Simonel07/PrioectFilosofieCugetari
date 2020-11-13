var quotes = [
	'69. Infintul, media. Când citim prea repede sau prea încet, nu înțelegem nimic',
	'84. Imaginația amplifică obiectele mici astfel încât să ne umple sufletele cu o percepere fantastică și cu o insolență impetuasă; micșorează măreția după mărimea ei, ca atunci când vorbește cu Dumnezeu.',
	'102. Unele vicii pun stăpânire pe noi numai prin intermediul altora și acestea, asemenea ramurilor, cad odată cu retezarea trunchiului.',
	'108. Deși este posibil ca Oamenii să fie prea puțin interesați de ceea ce spun, nu trebuie să concluzionăm neaparat din asta că nu mint; căci există oameni care mint de dragul mințitului.',
	'110. Conștiința falsității plăcerilor actuale și ignorarea vanității plăcerilor absente, provocă inconstanță',
	'116. Gândurile. Totul este unul, totul este diferit. Câte naturi există în om? Câte vocații? Și prin ce întâmplare fiecare om obișnuit alege ceea ce a auzit că este prețuit? Bine găsită această întorsătură. Bine făcut, tocul.',
	'118. Talentul preponderent, care le domină pe celelalte.',
	'120. Natura diverifică și imită; arta imită și diversifică.',
	'124. Vedem lucrurile nu doar din alte direcții, dar și cu alți ochi; nu ne dorim nicidecum să le vedem la fel.',
	'125. Contrariile. omul este un mod natural credul și incredul, timid și repezit.',
	'126. Descrierea omului: dependență, dorință de independență, nevoie.',
	'127. Condiția omului: inconstanță, oboseală, neliniște.',
	'129. Natura noastră constă în mișcare; repausul complet înseamnă moarte.',
	'130. Neliniștea. Dacă un soldat sau un muncitor cu brațele, se plânge de greutatea meșteșugului lui, pune-l să nu facă nimic.',
	'134. Cât de inutilă este pictura, care atrage admirația prin asemănarea lucrurilor, ale căror originale nu le adimrăm!',
	'136. Un fleac ne consolează, pentru că un fleac ne tulbură.',
	'137. Fără a examina fiecare țel în parte, este suficient să-l înțelegem cu divertisment.',
	'138. Omul își face în mod natural meseria oriunde numai în camera lui nu.',
	'145. Un singur gând ne preocupă; nu ne putem gândi la două lucruri în același timp. Din fericire pentru noi, potrivit lumii, nu potrivit lui Dumnezeu.',
	'154. Nu am nici un prieten în folosul tău.',
	'157. Contradicție: disprețul față de existență, să mor degeaba, ura față de existență.',
	'163. Vanitatea. Cauzele și efectele iubirii: Cleopatra',
	'166. Distracția. Moartea este mai ușor de suportat fără să te gândești la ea, decât gândul la moarte în lipsa unui pericol.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}