var quotes = [
	'805. Cele două reguli fundamentale; una interioară, cealaltă exterioară; grația divină și minunile; ambele supranaturale.',
	'806. Minunile și adevărul sunt necesare, deoarece este necesar să convingi omul pe de-a întregul, trup și minte.',
	'807. În toate timpurile, fie omul a vorbit cu Dumnezeu, fie Dumnezeu a vorbit cu omul.',
	'811. Dacă nu ar fi existat minunile, nu ar fi existat păcatul să nu se creadă în Iisus Hristos',
	'812. Ar trebui "Să nu fiu creștin, dacă n-ar fi fost minunile", a spus Sfântul Augustin.',
	'815. Nu este posibil să ai o credință rațională împotriva minunilor.',
	'816. Necredincioșii cei mai creduli. Cred în minunile lui Vespasian, ca să nu creadă în cele ale lui Moise.',
	'830. Profețiile erau ambigue; nu mai sunt astfel.',
	'831. Cele cinci afirmații erau ambigue; nu mai sunt astfel.',
	'837. Că trebuie să-l iubim numai pe Dumnezeu este un lcuru atât de evident încât nu este nevoie de minuni ca să fie dovedit.',
	'855. Oamenii cred în minuni. Corupi religia ori în favoare prietenilor, ori împotriva dușmanilor. O așezi după voia ta.',

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}