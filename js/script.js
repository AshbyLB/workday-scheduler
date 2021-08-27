var container = $(".container");

var save = window.localStorage;

//var timeNow = moment().format("H");

var timeNow = "11";

var timeB = $('.time-block');

$("#currentDay").text(moment().format("dddd MMMM DD, YYYY"));


timeB.each(function() {
    console.log(parseInt($(this).attr("id")));
    console.log(parseInt(timeNow));
    if (parseInt(timeNow) === parseInt($(this).attr("id"))) {
        $(this).children("textarea").addClass("present");
    }
    else if (parseInt($(this).attr("id")) < parseInt(timeNow)) {
        $(this).children("textarea").addClass("past");
    }
    else {
        $(this).children("textarea").addClass("future");
    }
});





$("textarea").on("click", function(){
    console.log($(this).parent().attr("id"));
})

console.log(timeB.children("textarea"));

console.log(timeB.attr("id"));