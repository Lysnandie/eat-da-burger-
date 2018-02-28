$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");

      var newDevourState = {
        devoured: newDevour
      };

      var currentURL = window.location.origin;
      // Send the PUT request.
      $.ajax(currentURL + "/burgers/update" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $("#createburger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        burger_name: $("#newname").val().trim(),
        devoured: false
      };

      var currentURL = window.location.origin;
      // Send the POST request.
      $.ajax(currentURL + "/burgers/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
