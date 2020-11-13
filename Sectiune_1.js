var quotes = [
	'7. Cu cât este mai mare intelectul cuiva, cu atât mai multă originalitate descoperă în ceilalți. Oamenii obișuiți nu găsesc nici o diferență între ceilalți oameni.',
	'8. Există mulți oameni care ascultă predica la fel cum ascultă vecernia.',
	'17. Râurile sunt drumuri care curg și ne duc oriunde vrem să ajungem.',
	'19. Ultimul lucru pe care îl stabilește cineva care scrie o carte este cel care trebui pus cel dintâi.',
	'23. Cuvintele dispuse diferit au semnificații diferite și semnificațiile diferite înșiruite diferit au efecte diferite.',
	'26. Elocvența este o pictură a gândului; și aceia care, după ce au pictat-o, mai adaugă ceva, fac un tablou în locul unui portret.',
	'38. Poetul nu este un om onest.',
	'39. Dacă fulgerul ar lovi locurile joase etc., poeții și cei care nu pot decât să raționeze în privința lucrurilor de acest gen, ar duce lipsă de dovezi.',
	'42. Să numești pe un rege "prinț" este plăcut, căci îi micșorezi rangul.',
	'44. Vrei ca lumea să gândească bine despre tine? Nu vorbi.',
	'46. Autorul vorbelor de spirit are un caracter rău.',
	'51. Sceptic în loc de îndărătnic.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}