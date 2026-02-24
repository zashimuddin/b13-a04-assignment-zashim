console.log("Machine Added");

// // shows and hide badges
// function showOnly(id){
//     console.log("showOnly Function Called!")
//     const notAppliedBadge = document.getElementById("not-applied-badge");
//     const interviewBadge = document.getElementById("interview-badge");
//     const rejectedBadge = document.getElementById("rejected-badge");

//     // hide all
//     notAppliedBadge.classList.add("hidden");
//     interviewBadge.classList.add("hidden");
//     rejectedBadge.classList.add("hidden");

//     // show the element that have the id
//     const selected = document.getElementById(id);
//     selected.classList.remove("hidden");

// }

// // function to get the current number of interview
// function getInterviewNumber(){
//     const interviewElement = document.getElementById("card-interview-number");
//     const interviewNumber = interviewElement.innerText;
//     // console.log("Current Balance: ", Number(interviewNumber));
//     return Number(interviewNumber) ;
// }

// // function to count the number of interview 
// function countInterviewNumber(value){
//     const interviewElement = document.getElementById("card-interview-number");
//     interviewElement.innerText = value;
// }

// // function to get the current number of rejected
// function getRejectedNumber(){
//     const rejectedElement = document.getElementById("card-rejected-number");
//     const rejectedNumber = rejectedElement.innerText;
//     // console.log("Current Balance: ", Number(interviewNumber));
//     return Number(rejectedNumber) ;
// }

// // function to count the number of rejected 
// function countRejectedNumber(value){
//     const rejectedElement = document.getElementById("card-rejected-number");
//     rejectedElement.innerText = value;
// }