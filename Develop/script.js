$(document).ready(function () {

    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    $(".saveBtn").on("click", function () {

        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)
    });

    function updateHour() {
        var thisVeryMoment = moment().hours()
        $(".time-block").each(function () {
            var hourSlot = parseInt($(this).attr("id").split("-")[1])

            if (hourSlot < thisVeryMoment) {
                $(this).addClass("past")
            }

            else if (hourSlot === thisVeryMoment) {
                $(this).removeClass("past")
                $(this).addClass("present")
            }

            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    updateHour();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(updateHour, 15000);

    // local storage 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))