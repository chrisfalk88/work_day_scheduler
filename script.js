// write current day to page
let currentDay = moment().format('LLLL');
$("#currentDay").text(currentDay);


//  get the current hour 
let currentHour = parseInt(moment().format('h'));


for (i = currentHour; i < 6; i ++) {
    //write a new div 
    let newDiv = $('<div>');

    //add a line item for the number 
    $(newDiv).text(currentHour);
    //push it to the web page 

    //increase hour count
     currentHour ++;
     //write it all to the doc 
    $(".container").append(newDiv);
}

