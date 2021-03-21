//vars go here
var today = moment();
var currentDay = $("#currentDay");
var saveBtn =$(".saveBtn");
var timeBlock =$('.time-block')
var timeItIsRightNow = today.hours()
var description = $(".description")

//display current date here
function displayTime() {
    var rightNow = today.format('MMM DD, YYYY');
    currentDay.text(rightNow);
}

//time changes on planner
displayTime()
function updateHours() {
    $('.time-block').each(function(){
    var hour =$(this).attr('id').split(' ')[1];
        if (hour < timeItIsRightNow){
        $(this).addClass('past');
        } else if (hour === timeItIsRightNow) {
        $(this).addClass('present');    
        } else {
        $(this).addClass('future');
    }

    var id = parseInt($(this).attr('id'))
        var task = localStorage.getItem(id)
        if (task != 'null') {
            $(this).find(description).val(task)
        }

    })
    }

    // save button
    updateHours()
    $('.saveBtn').on('click', function(event) {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
 
        //local storage goes here
        $("#9").val(localStorage.getItem("9"));
        $("#10").val(localStorage.getItem("10"));
        $("#11").val(localStorage.getItem("11"));
        $("#12").val(localStorage.getItem("12"));
        $("#13").val(localStorage.getItem("13"));
        $("#14").val(localStorage.getItem("14"));
        $("#15").val(localStorage.getItem("15"));
        $("#16").val(localStorage.getItem("16"));
        $("#17").val(localStorage.getItem("17"));

        localStorage.getItem(time);
        localStorage.setItem(time, value); 
 
    })
