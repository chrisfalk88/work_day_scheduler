// write current day to page
let currentDay = moment().format('LLLL');
$("#currentDay").text(currentDay);


//  get the current hour 
let currentHour = parseInt(moment().format('h'));


//event listeners for the divs to change color 
//write to local storage 