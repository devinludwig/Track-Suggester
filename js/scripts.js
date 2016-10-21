$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $('#match , #ruby , #java , #php , #csharp , #design').hide();

    var size = $('#size').val();
    var variety = $('#variety').val();
    var free = $('#free').val();
    var user = $('#user').val();
    var nameInput = $("input#name").val();
    var dob = $("input#born").val();

    $("#nameinput").text(nameInput);
    $("#dob").text(dob);

    if (size === 'large' && variety === 'one' && free === 'company') {
      $('#match').fadeIn();
       $("#java").show();
       $('.or').show();
       $("#csharp").show();
    }

    else if (size === 'small' && variety === 'one' && free === 'company') {
      $('#match').fadeIn();
       $("#ruby").show();
    }

    else if (size === 'small' && variety === 'multiple' && free === 'company') {
      $('#match').fadeIn();
       $("#php").show();
    }

    else if (size === 'small' && variety === 'multiple' && free === 'freelance') {
      $('#match').fadeIn();
       $("#php").show();
    }

    else if (size === 'small' && variety === 'multiple' && free === 'freelance' && user === 'exp') {
      $('#match').fadeIn();
       $("#php").show();
       $('.or').show();
       $("#design").show();
    }

    else {
      $('#match').fadeIn();
       $("#ruby").show();
    }
  });
});
