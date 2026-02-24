let interviewList = [];
let rejectedList = [];

let totalNumber = document.getElementById("card-total-number");
let interviewNumber = document.getElementById("card-interview-number");
let rejetedNumber = document.getElementById("card-rejected-number");

const allTabButton = document.getElementById("all-tab-btn");
const interviewTabButton = document.getElementById("interview-tab-btn");
const rejectedTabButton = document.getElementById("rejected-tab-btn");

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");


function counTotal(){
    totalNumber.innerText = allCardsSection.children.length;
    interviewNumber.innerText = interviewList.length;
    rejectedList.innerText = rejectedList.length;
}
counTotal();

function toggleStyle(id){
    
    allTabButton.classList.add("btn-soft", "text-gray-600");
    interviewTabButton.classList.add("btn-soft", "text-gray-600");
    rejectedTabButton.classList.add("btn-soft", "text-gray-600");

    allTabButton.classList.remove("btn-info", "text-white");
    interviewTabButton.classList.remove("btn-info", "text-white");
    rejectedTabButton.classList.remove("btn-info", "text-white");

    const selected = document.getElementById(id);
    selected.classList.remove("btn-soft", "text-gray-600");
    selected.classList.add("btn-info", "text-white");
}

mainContainer.addEventListener("click", function(event){
    const parentNode = event.target.parentNode.parentNode;
    // console.log(event.target.parentNode.parentNode);

    
    const notAppliedBadge = parentNode.querySelector(".badge-not-applied").innerText;
    const interviewBadge = parentNode.querySelector(".badge-interview").innerText;
    const rejectedBadge = parentNode.querySelector(".badge-rejected").innerText;
    // console.log(notAppliedBadge, interviewBadge, rejectedBadge);

    const cardInfo = {
        notAppliedBadge, 
        interviewBadge, 
        rejectedBadge
    }
    console.log(cardInfo);

});



// // let interviewBtnClicked = false;
// document.getElementById("interview-btn").addEventListener("click", function(){
//     let interviewBtnClicked = false;
//     const currentInterviewNumber = getInterviewNumber("card-interview-number");
//     if(!interviewBtnClicked){
//         const newInterviewNumber = currentInterviewNumber + 1;
//         countInterviewNumber(newInterviewNumber);
//         interviewBtnClicked = true;
//         const currentRejectedNumber = getRejectedNumber("card-rejected-number");
//         if(currentRejectedNumber > 0){
//             const newRejectedNumber = currentRejectedNumber - 1;
//             countRejectedNumber(newRejectedNumber);
//             rejectedBtnClicked = false;
//         }
//     }
// });

// // let rejectedBtnClicked = false;
// document.getElementById("rejected-btn").addEventListener("click", function(){
//     let rejectedBtnClicked = false;
//     const currentRejectedNumber = getRejectedNumber("card-rejected-number");
//     if(!rejectedBtnClicked){
//         const newRejectedNumber = currentRejectedNumber + 1;
//         countRejectedNumber(newRejectedNumber);
//         rejectedBtnClicked = true;
//         const currentInterviewNumber = getInterviewNumber("card-interview-number");
//         if(currentInterviewNumber > 0){
//             const newInterviewNumber = currentInterviewNumber - 1;
//             countInterviewNumber(newInterviewNumber);
//             interviewBtnClicked = false;
//         }
//     }
// });