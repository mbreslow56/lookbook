/* Let's go FETCH our data */

var fetch = function () {
  console.log("button clicked");
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    dataType: "json",
    success: function(data) {
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

$('#search-btn').on('click', fetch);