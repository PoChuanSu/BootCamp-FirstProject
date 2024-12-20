console.log("Hello World");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// No list will be there in the beginning
factsList.innerHTML = "";

// Can see the DOM properties
console.dir(btn);

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

// const factObj = {
//     text: "Lisbon is the capital of Portugal",
//     category: "society",
//     createdIn: 2015,
//     isCorrect: true,
//     createSummary: function () {
//         return `The fact ${
//             this.text
//         } is from the category ${this.category.toUpperCase()}`;
//     },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);

// const { category, isCorrect } = factObj;
// console.log(category);
// console.log(factObj.createSummary());

// // Array loop

// // classical
// const test1 = [2, 4, 6, 8];
// for (let i = 0; i < test1.length; i++) {
//     console.log(test1[i]);
// }

// // for each
// [2, 4, 6, 8].forEach(function (el) {
//     console.log(el);
// });

// Regular function
// const times10 = [2, 4, 6, 8].map(function (el) {
//     return el * 10;
// });

// Arrow function
// const times10 = [2, 4, 6, 8].map((el) => el * 10);

// console.log(times10);

// const CATEGORIES = [
//     { name: "technology", color: "#3b82f6" },
//     { name: "science", color: "#16a34a" },
//     { name: "finance", color: "#ef4444" },
//     { name: "society", color: "#eab308" },
//     { name: "entertainment", color: "#db2777" },
//     { name: "health", color: "#14b8a6" },
//     { name: "history", color: "#f97316" },
//     { name: "news", color: "#8b5cf6" },
// ];

// const allcategories = CATEGORIES.map((el) => el.name);
// console.log(allcategories);

// const initialFacts = [
//     {
//         id: 1,
//         text: "React is being developed by Meta (formerly facebook)",
//         source: "https://opensource.fb.com/",
//         category: "technology",
//         votesInteresting: 24,
//         votesMindblowing: 9,
//         votesFalse: 4,
//         createdIn: 2021,
//     },
//     {
//         id: 2,
//         text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//         source: "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//         category: "society",
//         votesInteresting: 11,
//         votesMindblowing: 2,
//         votesFalse: 0,
//         createdIn: 2019,
//     },
//     {
//         id: 3,
//         text: "Lisbon is the capital of Portugal",
//         source: "https://en.wikipedia.org/wiki/Lisbon",
//         category: "society",
//         votesInteresting: 8,
//         votesMindblowing: 3,
//         votesFalse: 1,
//         createdIn: 2015,
//     },
// ];

// function calcFactAge(year) {
//     // const currentYear = 2024;
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - year;

//     if (age >= 0) return age;
//     else
//         return `Impossible year. Year needs to be less or equal ${currentYear}`;
// }

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges);
// console.log(factAges.join(" - "));
