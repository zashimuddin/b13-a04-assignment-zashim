let interviewList = [];
let rejectedList = [];

let totalNumber = document.getElementById("card-total-number");
let leftsideTotalNumber = document.getElementById("leftside-total");
let interviewNumber = document.getElementById("card-interview-number");
let rejetedNumber = document.getElementById("card-rejected-number");

const allTabButton = document.getElementById("all-tab-btn");
const interviewTabButton = document.getElementById("interview-tab-btn");
const rejectedTabButton = document.getElementById("rejected-tab-btn");

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");


function counTotal(){
    totalNumber.innerText = allCardsSection.children.length;
    leftsideTotalNumber.innerText = allCardsSection.children.length;
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

    if(id == "interview-tab-btn"){
        allCardsSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
    }else if(id == "all-tab-btn"){
        allCardsSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }



}

mainContainer.addEventListener("click", function(event){

    // console.log(event.target.parentNode.parentNode);

    console.log(event.target.classList.contains("interview-card-button"))

    if(event.target.classList.contains("interview-card-button")){
    const parentNode = event.target.parentNode.parentNode;
    // console.log(event.target.parentNode.parentNode);
    
    const notAppliedBadge = parentNode.querySelector(".badge-not-applied").innerText;
    const interviewBadge = parentNode.querySelector(".badge-interview").innerText;
    const rejectedBadge = parentNode.querySelector(".badge-rejected").innerText;
    const nameCompany = parentNode.querySelector(".company-name").innerText;
    const positionJob = parentNode.querySelector(".position-job").innerText;
    const typeJob = parentNode.querySelector(".type").innerText;
    const salaryJob = parentNode.querySelector(".salary").innerText;
    const descriptionJob = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".badge-not-applied").innerText = "INTERVIEW";
    
    // console.log(notAppliedBadge, interviewBadge, rejectedBadge);

    const cardInfo = {
        notAppliedBadge, 
        interviewBadge, 
        rejectedBadge: "INTERVIEW",
        nameCompany,
        positionJob,
        typeJob,
        salaryJob,
        descriptionJob
    }

    const jobPostExist = interviewList.find(item => item.nameCompany == cardInfo.nameCompany);

    
   

    if(!jobPostExist){
        interviewList.push(cardInfo);
    }
    renderJopPost();

    }

});

function renderJopPost(){
    filterSection.innerHTML = " ";
    
    for(let interviews of interviewList){
        console.log(interviews);
        let div = document.createElement('div');
        div.className = 'card card-border border-gray-300 bg-base-100 p-5  mx-auto';
        div.innerHTML = `        <!-- job post 1 -->
        <div class="card card-border border-gray-300 bg-base-100 p-5  mx-auto">
            <!-- <div> -->
                <div class="flex justify-between items-center">
                    <h2 class="company-name text-2xl text-gray-600 font-bold">${interviews.nameCompany}</h2>
                    <button id="delete-img-btn">
                        <img src="./assets/delete.png" alt="">
                    </button>
                </div>
                <h3 class="position-job text-gray-500">React Native Developer </h3>
                <h4 class="text-gray-500 py-4"><span class="location">Remote</span> . <span class="type">Full Time</span> . <span class="salary">$130,000 - $ 175,000</span></h4>
                <div id="not-applied-badge"  class="badge-not-applied badge badge-soft badge-info text-black bg-gray-200 ">NOT APPLIED</div>
                <div id="interview-badge" class="badge-interview badge badge-outline badge-success hidden">INTERVIEW</div>
                <div id="rejected-badge" class="badge-rejected badge badge-outline badge-error hidden">REJECTED</div>
                <p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <!-- </div> -->
            <div class="pt-5 flex gap-3">
                <button id="interview-btn" class="btn btn-outline btn-success">INTERVIEW</button>
                <button id="rejected-btn" class="btn btn-outline btn-error">REJECTED</button> 
            </div>

        </div>
        <!-- job post 1 ends --> 
        `;

        filterSection.appendChild(div);
    }
}



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