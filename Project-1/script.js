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

// Variable Demo
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
// console.log(votesInteresting);

let votesFalse = 4;
let totalUpvotes = votesInteresting + votesMindblowing;

const message =
    totalUpvotes > votesFalse
        ? "The fact is true"
        : "Might be false, check more sources ...";

// alert(message);

// console.log("Upvotes:", votesInteresting);

const isCorrect = votesFalse < totalUpvotes;

// Function Demo
function calcFactAge(year) {
    // const currentYear = 2024;
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    if (age >= 0) return age;
    else return "Impossible year";
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2037));

if (votesInteresting === votesMindblowing) {
    alert("This is the first if / else statement");
} else if (votesInteresting > votesMindblowing) {
    console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
    console.log("Mindblowing fact!");
}

//falsy value: 0, '', null, undefined
// truthy value: everything else;
if (votesMindblowing) {
    console.log("Mindblowing fact!");
} else {
    console.log("Not so special...");
}
