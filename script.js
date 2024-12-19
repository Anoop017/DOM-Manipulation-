// Manipulating DOM using different getElement methods

// 1. Change the text content of the paragraph with ID 'quote' to your favourite quote

let quotedText = document.getElementById('quote')

quotedText.innerText = "Learning JavaScript!";



// 2. Change background color of all 'info-box' class divs

// I used both methods for changing the background color
// But i am comenting the first method. 
// Consider the forEach method


// let bgColor = document.getElementsByClassName('info-box')
// bgColor[0].style.backgroundColor = "green"
// bgColor[1].style.backgroundColor = "lightblue"
// bgColor[2].style.backgroundColor = "red"

let bgColor = document.querySelectorAll('.info-box')

bgColor.forEach((item) => {
    item.style.backgroundColor = 'lightblue'
});



// 3. Update the third list item in the task list to a different text

let task = document.querySelectorAll('li')

task[2].innerText = 'Hello, How are you ?'







// 4. Append the message -"Have a great day" to the footer span using querySelector

let message1 = document.querySelector('footer')

let message2 = document.createElement('span')

let lineBreak = document.createElement('br')
message1.appendChild(lineBreak);

message2.textContent = 'Have a great day'

message1.appendChild(message2);







