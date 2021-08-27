var container = $(".container");
var textInput = $("textarea");
var saveBtn = $(".saveBtn");
var save = window.localStorage;
var timeNow = moment().format("H");
var timeB = $('.time-block');

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


saveBtn.on("click", function(event){
    var inputTime = $(this).parent().attr("id");
    
    var inputUser = $(this).siblings(".description").val();

    localStorage.setItem(inputTime, inputUser);
});

function savedPlans(){

}





