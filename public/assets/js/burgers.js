$(function() {

    // Add burger
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

    // Remove burger
    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        // Send DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("Burger Removed");
                location.reload();
            }
        );
    });

    // Devour click event
    $(".change-devour").on("click", function(event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newDevour");

        let newDevourState = {
            devour: newDevour
        };

        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("DEVOURED");
                location.reload();
            }
        );
    });

});

