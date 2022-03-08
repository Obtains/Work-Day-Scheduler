var currentDate = moment();

/* function to push text to local storage */
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn").on("click", function() {
        var schedulerTxt = $(this).siblings(".description").val();
        var currentTime = $(this).parent().attr("id");
        localStorage.setItem(currentTime, schedulerTxt);
    });


    /* create value to pull from localStorage */
    $("#6 .description").val(localStorage.getItem("6"));
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
    $("#20 .description").val(localStorage.getItem("20"));


    function schedulerChange() {
        var dataHour = moment().hour();

        $(".time-block").each(function() {
            var dataTime = parseInt($(this).attr("id"));
            if (dataTime < dataHour) {
                $(this).addClass("past");
            }
            else if (dataTime === dataHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");    
            }        
        })
    }
    schedulerChange();

});