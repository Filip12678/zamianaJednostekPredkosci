/*

a - milimetr
b - centymetr
c - decymetr
d - metr
e - kilometr

s - sekunda
m - minuta
h - godzina

*/





function myFunction() {
	
	
	var jednostkaWejsciowa = document.getElementById('jednostkaWejsciowa').value;
	var jednostkaWyjsciowa = document.getElementById('jednostkaWyjsciowa').value;
	var wartosc = parseFloat(document.getElementById('wartosc').value);
	
	var mnoznikJednostkiDlugosci = zamianaJednostek(jednostkaWejsciowa.charAt(0), jednostkaWyjsciowa.charAt(0));
	var mnoznikJednostkiCzasu = zamianaJednostek(jednostkaWejsciowa.charAt(1), jednostkaWyjsciowa.charAt(1));
	
	
	var mnoznik = parseFloat(mnoznikJednostkiDlugosci)/parseFloat(mnoznikJednostkiCzasu);
	
	var wynik = wartosc * mnoznik;
	
	wynik = Math.round(wynik * 100000000000000) / 100000000000000;
	
	
	var ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">${mnoznikJednostkiDlugosci}</td> \n </tr> \n <tr> \n <td>${mnoznikJednostkiCzasu}</td> \n </tr> \n </tbody> \n </table>`;
	
	
	if (parseFloat(mnoznikJednostkiCzasu) == 0.0166666666666666666666666666666) {
		
		ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">${mnoznikJednostkiDlugosci * 60}</td> \n </tr> \n <tr> \n <td>1</td> \n </tr> \n </tbody> \n </table>`;
		
	}
	
	if (parseFloat(mnoznikJednostkiCzasu) == 0.000277777777777777777777777777777) {
		
		ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">${mnoznikJednostkiDlugosci * 3600}</td> \n </tr> \n <tr> \n <td>1</td> \n </tr> \n </tbody> \n </table>`;
		
	}
	
	
	
	document.getElementById("wynik").innerHTML = `Wynik: ${wynik} <br><br> ` + ulamekDoPomnozenia;
	
}






















function zamianaJednostek(a, b) {
	
	//milimetr
	
	if (a == "a" && b == "b") {
		
		mnoznik = 0.1;
		return mnoznik;
		
	}
	
	if (a == "a" && b == "c") {
		
		mnoznik = 0.01;
		return mnoznik;
		
	}
	
	if (a == "a" && b == "d") {
		
		mnoznik = 0.001;
		return mnoznik;
		
	}
	
	if (a == "a" && b == "e") {
		
		mnoznik = 0.000001;
		return mnoznik;
		
	}
	
	//centymetr
	
	if (a == "b" && b == "a") {
		
		mnoznik = 10;
		return mnoznik;
		
	}
	
	if (a == "b" && b == "c") {
		
		mnoznik = 0.1;
		return mnoznik;
		
	}
	
	if (a == "b" && b == "d") {
		
		mnoznik = 0.01;
		return mnoznik;
		
	}
	
	if (a == "b" && b == "e") {
		
		mnoznik = 0.00001;
		return mnoznik;
		
	}
	
	//decymetr
	
	if (a == "c" && b == "a") {
		
		mnoznik = 100;
		return mnoznik;
		
	}
	
	if (a == "c" && b == "b") {
		
		mnoznik = 10;
		return mnoznik;
		
	}
	
	if (a == "c" && b == "d") {
		
		mnoznik = 0.1;
		return mnoznik;
		
	}
	
	if (a == "c" && b == "e") {
		
		mnoznik = 0.0001;
		return mnoznik;
		
	}
	
	//metr
	
	if (a == "d" && b == "a") {
		
		mnoznik = 1000;
		return mnoznik;
		
	}
	
	if (a == "d" && b == "b") {
		
		mnoznik = 100;
		return mnoznik;
		
	}
	
	if (a == "d" && b == "c") {
		
		mnoznik = 10;
		return mnoznik;
		
	}
	
	if (a == "d" && b == "e") {
		
		mnoznik = 0.001;
		return mnoznik;
		
	}
	
	//kilometr
	
	if (a == "e" && b == "a") {
		
		mnoznik = 1000000;
		return mnoznik;
		
	}
	
	if (a == "e" && b == "b") {
		
		mnoznik = 100000;
		return mnoznik;
		
	}
	
	if (a == "e" && b == "c") {
		
		mnoznik = 10000;
		return mnoznik;
		
	}
	
	if (a == "e" && b == "d") {
		
		mnoznik = 1000;
		return mnoznik;
		
	}
	
	
	//sekunda
	
	if (a == "s" && b == "m") {
		
		mnoznik = 1/60;
		return mnoznik;
		
	}
	
	if (a == "s" && b == "h") {
		
		mnoznik = 1/3600;
		return mnoznik;
		
	}
	
	//minuta
	
	if (a == "m" && b == "s") {
		
		mnoznik = 60;
		return mnoznik;
		
	}
	
	if (a == "m" && b == "h") {
		
		mnoznik = 1/60;
		return mnoznik;
		
	}
	
	//godzina
	
	if (a == "h" && b == "s") {
		
		mnoznik = 3600;
		return mnoznik;
		
	}
	
	if (a == "h" && b == "m") {
		
		mnoznik = 60;
		return mnoznik;
		
	}
	
	
	
	
	
	
	
	if(a == b) {
		
		return 1;
		
	}
	
	
}