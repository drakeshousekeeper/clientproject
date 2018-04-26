$(document).ready(function() {
    $("#red").click(search);
});

function search() {
    $.ajax({
        url: "https://www.googleapis.com/books/v1/",
        method: "GET",
        success: function(query) {
            console.log(query);
            // $("#result").html(query);
        }
        
    });
}
