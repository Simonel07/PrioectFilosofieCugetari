var quotes = [
	'858. Istoria bisericii ar trebui să se numească pe drept cuvânt istoria adevărului.',
	'859. E bine să fii corabie în furtună, când ești sigur că nu te scufunzi. Persecuțiile care tulbură biserica de acest fel sunt.',
	'861. Biserica se află într-o stare excelentă când este sprijinită numai de Dumnezeu.',
	'863. Cu toții greșesc cu atât mai periculos, cu cât urmează fiecare un singur adevăr. Greșeala lor nu stă în urmarea unui fals, ci în neurmarea unui alt adevăr.',
	'883. Răii care m-au obligat să vorbesc despre bazele religiei.',
	'895. Oamenii nu fac niciodată răul atât de complet și de bucuroși ca atunci când îl fac din convingerea religioasă.',
	'896. Este în zadar că biserica a stabilit cuvintele anatemă, erezie etc. sunt folostie împotriva ei.',
	'900. Cel care spune care e semnificația Scriptuirlor și nu o ia din Scripturi, este un dușman al Scriptuirlor.(Sfântul Augustin, Despre doctrica creștină).',
	'913. Probabilitatea. Oricine o poate folosi; nimeni nu o poate lua.',
	'914. Îi permit desfrâului să acționeze și controlează scrupulele; când de fapt ar trebui să fie invers.',
	'918. Îndepărtează probabilitatea și nu mai poți face pe plac lumii; dă-i siguranță și nu mai poți să nu-i fii pe plac.',
	'923. Nu numai iertarea păcatelor alungă păcatele prin taina pentenței, ci căința, care nu este adevărată dacă nu caută taina.'

]

function newQuote()
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}