$(document).ready( () => {
    $('#modal').load("/modal");
    $('#game').hide().load("/game");
})

$(document).on('click', '#startGame', showModal);

$(document).on('submit', 'form', (e) => {
    e.preventDefault()
});

function showModal() {   
     $('#modal').hide();
     $('#game').show(2000);
}