// jQuery()
// document.querySelector("h1")  === $("h1") -> jQuery doing this.
// docume.querySelectorAll("button") === $("button") -> same thing selecting one or more

$('h1').css("color", "green");      // if 2 values setting color green
console.log($('h1').css("color"));  // if 1 value inside getting 

$("h1").addClass("big-title-js margin-50");
// $("h1").removeClass("big-title-js");
// $("h1").hasClass("margin-50");

$("h1").text("Bye");
// $("button").text("Don't Click Me");
$("button").html("<em>Hey</em>");
// $("button").text("<em>Hey</em>"); // won't work


// --> Attributes

console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

// --> Adding EventListeners

// $("h1").click(function () {
//    $("h1").css("color","purple"); 
// });


for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "yellow";
    });
}

// Same purpose with jQuery less text. ^

$("button").click(function () {
    $("h1").css("color", "red");
});


// Taking keypress from input, document, body, etc.

$("input").keypress(function (event) {
   console.log(event.key); 
});


$(document).keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key); 
 });


$("h1").on("mousemove", function () {
    $("h1").css("color","orange");
});

$("h1").on("mouseleave", function () {
    $("h1").css("color","green");
});

$("button").on("click", function () {
    $("h1").animate({
        opacity: 0.5,
        margin: "20%",


    }); // Can add css rules between {}
    
    // $("h1").slideToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").fadeToggle();
    // $("h1").fadeIn(); 
    // $("h1").fadeOut();
    // $("h1").toggle(); 
    // $("h1").hide();
});
// $("h1").show(); in console shows.


$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});