$(function() {
    $(".add-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burg").val().trim()
        };

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(
            function() {
                console.log("Burger Added");
                location.reload();
            }
        );
    });

});