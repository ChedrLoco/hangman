$(document).ready(init);

function init(){
  $('#new').click(newgame);
  $('#makeGuess').click(makeGuess);
}

function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/hangman/new',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function( rsp ) {
      console.log('rsp:', rsp);
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#displayWord').text(rsp.word);
    },
  });
}

function makeGuess(){
  const gameId = $('#id').text();
  const guessLetter = $('#guessLetter').val();
  $.ajax({
    url: `/hangman/${gameId}/guess`,
    method: 'put',
    dataType: 'json',
    data: { guessLetter },
    success: function ( rsp ) {
      console.log('rsp:', rsp);
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#displayWord').text(rsp.word);
    }
  });
}
