// write current day to page
let currentDay = moment().format('LLLL');
$("#currentDay").text(currentDay);

//make an array of business hours so we can grab and then check them 

let businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

//  get the current hour 
let currentHour = parseInt(moment().format('H'));
console.log(currentHour);
// test time condition to change color of the div 

for (i = 9; i <= 17; i++) {

    //create Row Div and add attributes and write the row to the DOM
    let rowDiv = $('<div>');
    rowDiv.addClass("row time-block")

    $(".container").append(rowDiv);

    // create time div and add attributes and write to the Row Div 

    let timeDiv = $('<div>');
    timeDiv.addClass("hour col");
    
    let hour = $('<h4>');
    hour.text(businessHours[i-9]);
    timeDiv.append(hour);

    rowDiv.append(timeDiv);

    //create content div and add attributes and write to the row div

    let contentDiv = $('<textarea>');
    contentDiv.addClass("description col-10 " + businessHours[i-9]);

    if (i < currentHour) {
        contentDiv.addClass("past");
    } 
    
    if (i === currentHour) {
        contentDiv.addClass("present");
    }
    
    if (i > currentHour) {
        contentDiv.addClass("future");
    }


    rowDiv.append(contentDiv);

    //create button div and create attributes and write to the row Div 

    let buttonDiv = $('<div>');
    buttonDiv.addClass("saveBtn col");
    buttonDiv.append("<i class=\"far fa-save " + businessHours[i-9] + "\"></i>");
    rowDiv.append(buttonDiv);

    //compare with current time

    //create function to change color, based on time, in if statement

}

//event listener to unlock time slots 
//test condition that will allow text inputs 
//event listener for clicking on buttons

$(document).on("click", ".far", function () {
    const iClass = $(this).attr("class").split(" ")[2]; // class from button's i
    const whichTextarea = $("textarea." + iClass); // which textarea that matches iClass
    const todo = whichTextarea.val();
    console.log(todo);

    //let toDo = localStorage.setItem("toDos", textarea.$(this).attr("class").split(" ")[2]))

    //if ($(this).attr("id")) 

});


//write to local storage 