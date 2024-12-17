console.log("Hello World");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a Fact";
    }
});

/*
// Variable Demo
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
// console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;

// console.log("Upvotes:", votesInteresting);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;


// Function Demo
function calcFactAge(year) {
    // const currentYear = 2024;
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    return age;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2022));
*/
