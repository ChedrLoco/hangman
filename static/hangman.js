$(document).ready(init);

function init(){
  $('#new').click(newgame);
}

function newgame(){
  const name = $('#name').val();
  debugger;
  $.ajax({
    url: '/hangman/new',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      console.log('rsp:', rsp);
      $('#person').text(rsp.name);
      $('#id').text(rsp._id);
      $('#displayWord').text(rsp.word);
    },
  })
}
