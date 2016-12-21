$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/cdburns22.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log("response", response)// handle response
    }
  });
});
