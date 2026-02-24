console.log("Machine Added");

// shows and hide badges
function showOnly(id){
    console.log("showOnly Function Called!")
    const notAppliedBadge = document.getElementById("not-applied-badge");
    const interviewBadge = document.getElementById("interview-badge");
    const rejectedBadge = document.getElementById("rejected-badge");

    // hide all
    notAppliedBadge.classList.add("hidden");
    interviewBadge.classList.add("hidden");
    rejectedBadge.classList.add("hidden");

    // show the element that have the id
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}