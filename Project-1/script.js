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

// let votesInteresting = 23;
// let votesMindblowing = 5;
// // const text = "Lisbon is the capital of Portugal";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;

// let votesFalse = 4;
// let totalUpvotes = votesInteresting + votesMindblowing;

// // Function Demo
// function calcFactAge(year) {
//     // const currentYear = 2024;
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - year;

//     if (age >= 0) return age;
//     else
//         return `Impossible year. Year needs to be less or equal ${currentYear}`;
// }

// const age1 = calcFactAge(2015);
// console.log(age1);
// console.log(calcFactAge(2037));

// const calcFactAge2 = (year) =>
//     year <= new Date().getFullYear()
//         ? new Date().getFullYear() - year
//         : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

// console.log(calcFactAge2(2015));
// console.log(calcFactAge2(2037));

// if (votesInteresting === votesMindblowing) {
//     alert("This is the first if / else statement");
// } else if (votesInteresting > votesMindblowing) {
//     console.log("Interesting fact!");
// } else if (votesInteresting < votesMindblowing) {
//     console.log("Mindblowing fact!");
// }

// //falsy value: 0, '', null, undefined
// // truthy value: everything else;
// if (votesMindblowing) {
//     console.log("Mindblowing fact!");
// } else {
//     console.log("Not so special...");
// }

// const text = "Lisbon is the capital of Portugal";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is ${text}. It is ${calcFactAge(
//     2015
// )} years old. It is probably ${
//     totalUpvotes > votesFalse ? "correct" : "not ture"
// }`;

// console.log(str);

// Array Demo
// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

// const [text, createdIn, isCorrect] = fact;
// console.log(text);

// const newFact = [...fact, "society"];
// console.log(newFact);

// let society = newFact.at(3);
// console.log(society);

// newFact.push("push 1 element");
// console.log(newFact);

// let popElement = newFact.pop();
// console.log(popElement);
// console.log(newFact);

const factObj = {
    text: "Lisbon is the capital of Portugal",
    category: "society",
    createdIn: 2015,
    isCorrect: true,
    createSummary: function () {
        return `The fact ${
            this.text
        } is from the category ${this.category.toUpperCase()}`;
    },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
