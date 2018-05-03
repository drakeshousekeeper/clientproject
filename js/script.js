$(document).ready(function() {
    $("#searchButton").click(search);
});

function search() {
    var userSearch = $("#userInput").val();
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        method: "GET",
        success: function(query) {
            $("#result").html(query);
        }
    });
}