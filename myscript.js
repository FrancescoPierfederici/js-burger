
// CONSEGNA
// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
var submitBtn = document.getElementById("button");
submitBtn.addEventListener("click", function () {
    var nameBurgerField = document.getElementById("name");
    var somma = 50;
    var listaIngredienti = document.querySelectorAll(".ingredient [type = 'checkbox']");
    var priceField = document.getElementById("price");
    console.log("listaIngredienti");
    var couponField = document.getElementById("coupon");
    var array = ["BOOLEANJAVASCRIPT", "JAVASCRIPTodietamo", "CITRODINA33"];


    if (!nameBurgerField.value) {
        alert("Manca il nome del burger");
    }



    for (var i = 0; i < listaIngredienti.length; i++) {
        var ingrediente = listaIngredienti[i];


        if (ingrediente.checked) {
            somma += parseInt(ingrediente.value);
        }

    }

    for (var j = 0; j < array.length; j++) {
        var finalPrice = array[j];
        if (couponField === finalPrice.value) {
            priceField.innerText = (somma - ((somma * 10) / 100)).toFixedt(2);
        }else{
            priceField.innerText = somma;
        }


       
    }



 

}
);


