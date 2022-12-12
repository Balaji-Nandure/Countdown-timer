/** @format */

const endDate = "16 December 2022 11:59 PM";
document.getElementById("end_date").innerText = endDate;
// console.log("hii");
const inputs = document.querySelectorAll("input");

const clock = function () {
    const end = new Date(endDate);
    const now = new Date();

    // diff is in miliseconds to convert to seconds divide by 1000
    const diff = (end - now) / 1000;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor((diff / 3600) % 24);
    const minutes = Math.floor((diff / 60) % 60);
    const seconds = Math.floor(diff % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
};

// Initial Call
clock();

// for calling every second
setInterval(() => {
    clock();
}, 1000);
