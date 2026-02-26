## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getElementById - It gets the element with the specified unique ID
=> getElementsByClassName - It gets all elements under the spcified class
=> querySelector - get the first element with specified selector
=> querySelectorAll - get all elements with specified selector

### 2. How do you create and insert a new element into the DOM?
step 1 - first get the section that have unique id with getElementById in which we want to create element such as "const filterSection = document.getElementById("filtered-section");"

step 2 = set the inner HTML as blank in that section using dot notaion such as "filterSection.innerHTML = " ";"

step 3 = store the element in a varialbe that we created using createElement such as " let div = document.createElement('div');"

step 4 = set the contents with className such as div.className = 'w-11/12 mx-auto py-3 space-y-5';

step 5 = set html contents to the elements which we created using createElement using innerHTML such as div.innerHTML = `<p>This is TEST Paragraph</p>`

step 6 = and then we appened the HTML contents to the element we created that we already set 

### 3. What is Event Bubbling? And how does it work?
Event bubbling happneds mainly in three stages as follows -

Capturing phase - from here events flow down from up to bottom (to target) where actual event happened

Target Phase - get the event element from here and then

Bubbling up `- after geting event element event flows up

### 4. What is Event Delegation in JavaScript? Why is it useful?
We can use it for event deligation just to handle many child elements under a parent element with one event listener

### 5. What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault() - stop the browsers default behavior
=> stopPropagation() - stop an event bubbling up to parent element, it does not stop the browsers default behavior

