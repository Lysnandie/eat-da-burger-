$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");

      var newDevourState = {
        devoured: newDevour
      };

      var currentURL = window.location.origin;
      // Send the PUT request.
      $.ajax(currentURL + "/api/burgers/" + id, {
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
      $.ajax(currentURL + "/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });



// $(function () {
//     $("#addburger").on("submit", function (event) {
//         event.preventDefault();
//
//         var newBurger = {
//             burger_name: $("#burgerinput").val().trim()
//         };
//
//         $.ajax("/burgers/create", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function () {
//                 console.log("added a burger");
//
//                 location.reload();
//
//             }
//             );
//     });
//
//     $(".change-burger").on("click", function (event) {
//         var id = $(this).data("id");
//         var newDevoured = $(this).data("newdevoured");
//
//         var newDevouredState = {
//             devoured: newDevoured
//         };
//
//         // Send the PUT request.
//         $.ajax("/burgers/update/" + id, {
//             type: "PUT",
//             data: newDevouredState
//         }).then(
//             function () {
//                 console.log("changed devoured to", newDevoured);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//             );
//     });
//
// });
