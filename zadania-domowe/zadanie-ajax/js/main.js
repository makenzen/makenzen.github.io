$(document).ready(function () {

    getData();
    console.log(getData);
});

function getData() {

    $('#zasysacz-danych').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            $("button").after("<div id="dane-programisty"></div>");
            $("#dane-programisty").append($("p").text("Imię: " + data.imie));
            $("#dane-programisty").append($("p").text("Nazwisko: " + data.nazwisko));
            $("#dane-programisty").append($("p").text("Zawód: " + data.zawod));
            $("#dane-programisty").append($("p").text("Firma: " + data.firma));

        });
    });


}
