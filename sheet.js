//Intercetto il click sull'elemento quadrato
$('.quadrato').click(function(){
    //Cerco il quadrato corrente dove scrivere il singolo numero
    var numero_corrente = $(this)
    if(numero_corrente.text() == '') {
        //tramite ajax vado a inserire il numero nel quadrato
        $.ajax ({
            //imposto l'url dell'api con cui genero numeri random
            url : 'https://flynn.boolean.careers/exercises/api/random/int',
            method : 'GET',
            success : function(data) {
                var numero_random = data.response;
                numero_corrente.text(numero_random);
                colore_quadrato(numero_random, numero_corrente);
            },
            error : function() {
                alert('Si è verificato un errore')
            }
        })
    }

})

function colore_quadrato(random_number, current_number) {
    if (random_number <= 5) {
        current_number.addClass('yellow')
    } else {
        current_number.addClass('green')
    }
}
