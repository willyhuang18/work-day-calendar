//using moment.js and jQuery to indicate current time
var now = moment();
//making the text to disolay in the website
$("#currentDay").text(now.format("dddd MMMM DD, YYYY"));
// set to 12:00 am today
var currentTime = moment().startOf('day').add(7, 'hour');
console.log(currentTime);
var currentHour = moment().format('H');
console.log(currentHour);
//declare state variable for changing color
var state = document.querySelector(".state")

//making the timeblocks for the day
for (var i = 8; i < 19; i++) {
    var timeSlot = currentTime.add(1, "hour").format("HH:mm A");
    //give a temp variable for indicate future use
//if statement for timeblocks
    if(currentHour == i){
        state = "activePresent ";
    }else if(currentHour > i){
        state ="activeFuture";
    }else if(currentHour < i){
        state ="activePast";
    }
//had talked to the tutor, turn out with this:
        //giving the time content into the box
    //create a div with the row fill in the contents and append it
    var row =`<div class="row" id='hour'>
        <div id ="hour-${i}" class="hour w-25 p-4 col-1">${timeSlot}</div>
        <textarea class="description text-danger w-50 p-4 col-6 ${state} hour"></textarea>
        <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
    </div>`
$(".container").append(row);

}

//create an EventListener to save the data into localStorage
$(".saveBtn").addEventListener("click", function(){
    console.log("hello");
})