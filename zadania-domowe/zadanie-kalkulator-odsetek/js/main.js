function obliczZysk(wplata, liczbaLat, okresKapitalizacji, oprocentowanie, podatek) {

    if (podatek) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    var kapital = wplata * Math.pow(1 + oprocentowanieOpodatkowane / okresKapitalizacji, liczbaLat * okresKapitalizacji);
    return (kapital).toFixed(2);

}

function oblicz() {

    var wplata = parseInt(document.getElementById("wplata").value);
    var liczbaLat = parseInt(document.getElementById("liczba-lat").value);
    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
    var oprocentowanie = document.getElementById("oprocentowanie").value / 100;
    var podatek;
    if (document.getElementById('podatek').checked) {
        podatek = true;
    } else {
        podatek = false;
    }

    
    var wynik = obliczZysk(wplata, liczbaLat, okresKapitalizacji, oprocentowanie, podatek);
    document.getElementById("wynik").innerHTML = wynik;

}

