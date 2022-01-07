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
for (var i = 8; i < 24; i++) {
    var timeSlot = currentTime.add(1, "hour").format("HH:mm A");
    //give a temp variable for indicate future use
//if statement for timeblocks
    if(currentHour == i){
        state.classList.add("activePresent")
    }else if(currentHour > i){
        state.classList.add("activeFuture")
    }else if(currentHour < i){
        state.classList.add("activePast")
    }
$("#timeSlot").text(timeSlot);

}
//giving the time content into the box