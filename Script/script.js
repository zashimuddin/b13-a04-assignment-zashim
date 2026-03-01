let interviewList = [];
let rejectedList = [];
let toggleButtonStatus = "all";

let totalNumber = document.getElementById("card-total-number");
let leftsideTotalNumber = document.getElementById("leftside-total");
let interviewNumber = document.getElementById("card-interview-number");
let rejectedNumber = document.getElementById("card-rejected-number");

const allTabButton = document.getElementById("all-tab-btn");
const interviewTabButton = document.getElementById("interview-tab-btn");
const rejectedTabButton = document.getElementById("rejected-tab-btn");

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filtered-section");

// Render job post to show when there are no job post to show in Interview and Rejected Toggling button
function noJopPostToShow(){
        filterSection.innerHTML = " ";
        let div = document.createElement('div');
        div.className = 'w-11/12 mx-auto py-3 space-y-5';
        div.innerHTML = `
            <div class="card card-border border-gray-300 bg-base-100 p-5  mx-auto">
                <div class="card card-border border-gray-300 bg-base-100 p-5  mx-auto">
                <h2 class="company-name text-2xl text-gray-600 font-bold">No jobs Available</h2>
                <img src="./assets/jobs.png" alt="">      
            </div>
        </div>
        `;
        filterSection.appendChild(div);
}

// Counts the Job post
function counTotal(){
    totalNumber.innerText = allCardsSection.children.length;
    leftsideTotalNumber.innerText = allCardsSection.children.length;
    interviewNumber.innerText = interviewList.length;
    rejectedNumber.innerText = rejectedList.length;
}
counTotal();

// Toggling between button - All, Interview and Rejected
function toggleStyle(id){
    
    allTabButton.classList.add("btn-soft", "text-gray-600");
    interviewTabButton.classList.add("btn-soft", "text-gray-600");
    rejectedTabButton.classList.add("btn-soft", "text-gray-600");

    allTabButton.classList.remove("btn-info", "text-white");
    interviewTabButton.classList.remove("btn-info", "text-white");
    rejectedTabButton.classList.remove("btn-info", "text-white");

    const selected = document.getElementById(id);
    toggleButtonStatus = id;
    selected.classList.remove("btn-soft", "text-gray-600");
    selected.classList.add("btn-info", "text-white");

    if(id == "interview-tab-btn"){
        allCardsSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        // renderJopPost();
        if(interviewList.length === 0){
            noJopPostToShow();
        }else{
            renderJopPost();
        }
    }else if(id == "all-tab-btn"){
        allCardsSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }else if(id == "rejected-tab-btn"){
        allCardsSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        // renderRejectPost();
        if(rejectedList.length === 0){
            noJopPostToShow();
        }else{
            renderRejectPost();
        }
    }
}

//Implemented Event bubbling with event deligation
mainContainer.addEventListener("click", function(event){

    if(event.target.classList.contains("interview-card-button")){
    const parentNode = event.target.parentNode.parentNode;
    
    const notAppliedBadge = parentNode.querySelector(".badge-not-applied").innerText;
    const interviewBadge = parentNode.querySelector(".badge-interview").innerText;
    const rejectedBadge = parentNode.querySelector(".badge-rejected").innerText;
    const nameCompany = parentNode.querySelector(".company-name").innerText;
    const positionJob = parentNode.querySelector(".position-job").innerText;
    const typeJob = parentNode.querySelector(".type").innerText;
    const salaryJob = parentNode.querySelector(".salary").innerText;
    const descriptionJob = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".badge-not-applied").innerText = "INTERVIEW";

    const cardInfo = {
        notAppliedBadge, 
        interviewBadge, 
        rejectedBadge,
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

    rejectedList = rejectedList.filter(item => item.nameCompany != cardInfo.nameCompany);
    
     counTotal(); 

    if(toggleButtonStatus == "rejected-tab-btn"){
        renderRejectPost();
        if(rejectedList.length === 0){
            noJopPostToShow();
        }else if(rejectedList.length !== 0){
            renderRejectPost();
        }
    }
    

    } else if(event.target.classList.contains("reject-card-button")){ 
        const parentNode = event.target.parentNode.parentNode;
        
        const notAppliedBadge = parentNode.querySelector(".badge-not-applied").innerText;
        const interviewBadge = parentNode.querySelector(".badge-interview").innerText;
        const rejectedBadge = parentNode.querySelector(".badge-rejected").innerText;
        const nameCompany = parentNode.querySelector(".company-name").innerText;
        const positionJob = parentNode.querySelector(".position-job").innerText;
        const typeJob = parentNode.querySelector(".type").innerText;
        const salaryJob = parentNode.querySelector(".salary").innerText;
        const descriptionJob = parentNode.querySelector(".description").innerText;

        parentNode.querySelector(".badge-not-applied").innerText = "REJECTED";
        

        const cardInfo = {
            notAppliedBadge: "REJECTED" , 
            interviewBadge, 
            rejectedBadge,
            nameCompany,
            positionJob,
            typeJob,
            salaryJob,
            descriptionJob
        }

        const rejectedJobExist = rejectedList.find(item => item.nameCompany == cardInfo.nameCompany);

        if(!rejectedJobExist){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.nameCompany != cardInfo.nameCompany);

        if(toggleButtonStatus == "interview-tab-btn"){
            renderJopPost();
            if(interviewList.length === 0){
                noJopPostToShow();
            }else if(interviewList.length !== 0){
                renderJopPost();
            }
        }
        counTotal();
        // renderRejectPost();
    } else if(event.target.classList.contains("delete-icon")){ 
        const parentNode = event.target.parentNode.parentNode.closest(".card");
        
        const notAppliedBadge = parentNode.querySelector(".badge-not-applied").innerText;
        const interviewBadge = parentNode.querySelector(".badge-interview").innerText;
        const rejectedBadge = parentNode.querySelector(".badge-rejected").innerText;
        const nameCompany = parentNode.querySelector(".company-name").innerText;
        const positionJob = parentNode.querySelector(".position-job").innerText;
        const typeJob = parentNode.querySelector(".type").innerText;
        const salaryJob = parentNode.querySelector(".salary").innerText;
        const descriptionJob = parentNode.querySelector(".description").innerText;

        parentNode.querySelector(".badge-not-applied").innerText = "NOT APPLIED";

        const cardInfo = {
            notAppliedBadge: "NOT APPLIED" , 
            interviewBadge, 
            rejectedBadge,
            nameCompany,
            positionJob,
            typeJob,
            salaryJob,
            descriptionJob
        }

        const rejectedJobExist = rejectedList.find(item => item.nameCompany == cardInfo.nameCompany);

        if(!rejectedJobExist){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.nameCompany != cardInfo.nameCompany);

        // if(toggleButtonStatus == "interview-tab-btn"){
        //     renderJopPost();
        // }


    const deletedJob = rejectedList.find(item => item.nameCompany === cardInfo.nameCompany);
    if (deletedJob !== -1) {
      rejectedList.splice(deletedJob, 1);
    }

    if(toggleButtonStatus == "interview-tab-btn"){
            renderJopPost();
            //=================
            if(interviewList.length === 0){
                noJopPostToShow();
            }else if(interviewList.length !== 0){
                renderJopPost();
            }//=================
        } if(toggleButtonStatus == "rejected-tab-btn"){
            renderRejectPost();
            //===================
            if(rejectedList.length === 0){
                noJopPostToShow();
            }else if(rejectedList.length !== 0){
                renderRejectPost();
            }//===================
        }

        counTotal();
        // renderRejectPost();
    }
});


// Render job post when toggling to Interview button
function renderJopPost(){
    filterSection.innerHTML = " ";
    for(let interviews of interviewList){
        console.log(interviews);
        let div = document.createElement('div');
        div.className = 'w-11/12 mx-auto py-3 space-y-5';
        div.innerHTML = `        <!-- job post 1 -->
                    <div class="card card-border border-gray-300 bg-base-100 p-5  mx-auto">
                        <!-- <div> -->
                            <div class="flex justify-between items-center">
                                <h2 class="company-name text-2xl text-gray-600 font-bold">${interviews.nameCompany}</h2>
                                <button id="delete-img-btn" class="delete-img-card-btn">
                                    <img src="./assets/delete.png" alt="" class="delete-icon" style="cursor: pointer;">
                                </button>
                            </div>
                            <h3 class="position-job text-gray-500">React Native Developer </h3>
                            <h4 class="text-gray-500 py-4"><span class="location">Remote</span> . <span class="type">Full Time</span> . <span class="salary">$130,000 - $ 175,000</span></h4>
                            <div id="not-applied-badge"  class="badge-not-applied badge badge-outline badge-success text-green-500">${interviews.interviewBadge}</div>
                            <div id="interview-badge" class="badge-interview badge badge-outline badge-success hidden">INTERVIEW</div>
                            <div id="rejected-badge" class="badge-rejected badge badge-outline badge-error hidden">REJECTED</div>
                            <p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                        <!-- </div> -->
                        <div class="pt-5 flex gap-3">
                            <button id="interview-btn" class="interview-card-button btn btn-outline btn-success">INTERVIEW</button>
                            <button id="rejected-btn" class="reject-card-button btn btn-outline btn-error">REJECTED</button> 
                        </div>

                    </div>
                    <!-- job post 1 ends --> 
        `;

        filterSection.appendChild(div);
    }
}

// Render job post when toggling to Rejected button
function renderRejectPost(){
    filterSection.innerHTML = " ";
    
    for(let rejected of rejectedList){
        console.log(rejected);
        let div = document.createElement('div');
        div.className = 'w-11/12 mx-auto py-3 space-y-5';
        div.innerHTML = `        <!-- job post 1 -->
        <div class="card card-border border-gray-300 bg-base-100 p-5  mx-auto">
            <!-- <div> -->
                <div class="flex justify-between items-center">
                    <h2 class="company-name text-2xl text-gray-600 font-bold">${rejected.nameCompany}</h2>
                    <button id="delete-img-btn" class="delete-img-card-btn">
                        <img src="./assets/delete.png" alt="" class="delete-icon" style="cursor: pointer;">
                    </button>
                </div>
                <h3 class="position-job text-gray-500">React Native Developer </h3>
                <h4 class="text-gray-500 py-4"><span class="location">Remote</span> . <span class="type">Full Time</span> . <span class="salary">$130,000 - $ 175,000</span></h4>
                <div id="not-applied-badge"  class="badge-not-applied badge badge-outline badge-error text-red-500">${rejected.rejectedBadge}</div>
                <div id="interview-badge" class="badge-interview badge badge-outline badge-success hidden">${rejected.interviewBadge}</div>
                <div id="rejected-badge" class="badge-rejected badge badge-outline badge-error hidden">${rejected.rejectedBadge}</div>
                <p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <!-- </div> -->
            <div class="pt-5 flex gap-3">
                <button id="interview-btn" class="interview-card-button btn btn-outline btn-success">INTERVIEW</button>
                <button id="rejected-btn" class="reject-card-button btn btn-outline btn-error">REJECTED</button> 
            </div>

        </div>
        <!-- job post 1 ends --> 
        `;

        filterSection.appendChild(div);
    }
}