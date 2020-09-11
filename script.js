// write current day to top of page
let currentDay = moment().format('LLLL');
$("#currentDay").text(currentDay);

//make an array of business hours so we can grab and then write them to DOM

let businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

//  get the current hour 
let currentHour = parseInt(moment().format('H'));

// create a loop based on business hours to generate timeblocks
for (i = 9; i <= 17; i++) {

    //create Row Div and add attributes and write the row to the DOM
    let rowDiv = $('<div>');
    rowDiv.addClass("row time-block")

    $(".container").append(rowDiv);

    // create time div and add attributes and write to the Row Div 

    let timeDiv = $('<div>');
    timeDiv.addClass("hour col");

    let hour = $('<h4>');
    hour.text(businessHours[i - 9]);
    timeDiv.append(hour);

    rowDiv.append(timeDiv);

    //create content div and add attributes and write to the row div

    let contentDiv = $('<textarea>');
    contentDiv.addClass("description col-10 " + businessHours[i - 9]);

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
    buttonDiv.append("<i class=\"far fa-save " + businessHours[i - 9] + "\"></i>");
    rowDiv.append(buttonDiv);


    //grab local storage items and populate them in the loop 
    let iClass = contentDiv.attr("class").split(" ")[2];
    let todos = localStorage.getItem(iClass);
    contentDiv.text(todos);
}


//event listen to write to local storage 
$(document).on("click", ".far", function () {

    const iClass = $(this).attr("class").split(" ")[2]; // grabs the class from button's i. "9am"
    const whichTextarea = $("textarea." + iClass); // selects the textarea that has the same class from iClass above
    const todoInput = whichTextarea.val(); //assigns the value of the text field to the const 

    let todos = localStorage.setItem(iClass, todoInput); //assigns to local storage with the time class ("9am"), as the key


});
