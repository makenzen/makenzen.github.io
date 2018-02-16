"use strict";



function oblicz() {
    var wplata = parseInt(document.getElementById("wplata").value);
    var liczbaLat = parseInt(document.getElementById("liczba-lat").value);
    var okresKapitalizacji = parseFloat(document.getElementById("okres-kapitalizacji").value);
    var oprocentowanie = document.getElementById("oprocentowanie").value/100;
    var podatek
    
    if (document.getElementById("podatek").checked) {
        podatek = true;
    } else {
        podatek = false;
    }
    
    var wynik = obliczZysk(wplata, liczbaLat, okresKapitalizacji, oprocentowanie, podatek);
      
      document.getElementById("wynik").innerHTML=wynik;
}

function obliczZysk(wplata, liczbaLat, okresKapitalizacji, oprocentowanie, podatek) {
    if (podatek = true) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    var kapital =  //POMOOOCYYYYYY!!!!!!!!!!!!!!!!!!!!
    return kapital.toFixed(2);
}




