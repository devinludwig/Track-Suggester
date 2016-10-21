$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $('#match , #ruby , #java , #php').hide();

    var size = $('#size').val();
    var variety = $('#variety').val();
    var free = $('#free').val();
    var nameInput = $("input#name").val();

    $("#nameinput").text(nameInput);

    if (size === 'large' && variety === 'one' && free === 'company') {
      $('#match').fadeIn();
       $("#java").show();
    }

    else if (size === 'small' && variety === 'one' && free === 'company') {
      $('#match').show();
       $("#ruby").show();
    }

    else if (disposition === 'anti' && activity === 'hyper') {
      $('#match').show();
       $("#grumpy").show();
    }

    else {
      $('#match').show();
       $("#evilqueen").show();
    }
  });
});
