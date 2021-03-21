var today = moment();
var currentDay = $("#currentDay");
var saveBtn =$(".saveBtn");
var timeBlock =$('.time-block')
var timeItIsRightNow = today.hours()
var description = $(".description")

function displayTime() {
    var rightNow = today.format('MMM DD, YYYY');
    currentDay.text(rightNow);
}

displayTime()
function updateHours() {
    $('.time-block').each(function(){
    var hour =$(this).attr('id').split(' ')[1];
        if (+hour < timeItIsRightNow){
        $(this).addClass('past');
        } else if (+hour === timeItIsRightNow) {
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

    updateHours()
    $('.saveBtn').on('click', function(event) {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log(value);
        console.log(time);

        localStorage.getItem(time, value);
        localStorage.setItem(time, value); 
    })
