$(document).ready( () => {
    $('#modal').load("/modal");
    $('#game').hide().load("/game");
})

$(document).on('keydown', '#userName', () => {
    $('#startGame').removeAttr('disabled');
});

$(document).on('submit', '#modalForm', (e) => {
    e.preventDefault();

});

$(document).on('click', '#startGame', showModal);

$(document).on('submit', '#form', (e) => {
    e.preventDefault();
    let userGuess = $('#userGuess').val();
    let flag = Game.checkGuess(userGuess)
    $('#userGuess').val('');
    return flag;
});

function showModal() {   
    if ($('#userName').val().length <= 0) return;
    Game.userName = $('#userName').val(); 
     $('#modal').hide();
     $('#game').show(2000, () =>  {
        $("#scrambled" ).hide().show(2000, () => {
            $("#scrambled" ).text(Game.scrambledWord);
            Game.init();
        });
      });
     
}