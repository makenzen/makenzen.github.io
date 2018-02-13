$(document).ready(function () {

    getData();
    console.log(getData);
});

function getData() {

    $('#zasysacz-danych').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (dane) {

            $("button").after($("<div id=\"dane-programisty\"></div>"));
            $("#dane-programisty").append($("<p>").text("Imię: " + dane.imie));
            $("#dane-programisty").append($("<p>").text("Nazwisko: " + dane.nazwisko));
            $("#dane-programisty").append($("<p>").text("Zawód: " + dane.zawod));
            $("#dane-programisty").append($("<p>").text("Firma: " + dane.firma));

        });
    });


}

