var container = $(".container");
var textInput = $("textarea");
var saveBtn = $(".saveBtn");
var timeNow = moment().format("H");
var timeB = $('.time-block');

savedPl();

$("#currentDay").text(moment().format("dddd MMMM DD, YYYY"));

timeB.each(function () {

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

saveBtn.on("click", function (event) {
    var inputTime = $(this).parent().attr("id");

    var inputUser = $(this).siblings(".description").val();

    localStorage.setItem(inputTime, inputUser);

});

function savedPl() {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
}






