import { useEffect, useState } from "react";
import supabase from "./superbase";
import "./style.css";
// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

function App() {
    // 1. define state variable
    const [showForm, setShowForm] = useState(false);
    const [facts, setFacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function getFacts() {
            setIsLoading(true);
            let { data: facts, error } = await supabase
                .from("facts")
                .select("*")
                .order("votesInteresting", { ascending: false })
                .limit(1000);

            // console.log(error);

            if (!error) setFacts(facts);
            else alert("There was a problem getting data");
            setIsLoading(false);
        }

        getFacts();
    }, []);

    return (
        <>
            <Header showForm={showForm} setShowForm={setShowForm} />

            {/* 2. Use state variable */}
            {showForm ? (
                <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
            ) : null}

            <main className="main">
                <CategoryFilter />
                {isLoading ? <Loader /> : <FactList facts={facts} />}
            </main>
        </>
    );
}

function Loader() {
    return <p className="message">Loading ...</p>;
}

function Header({ showForm, setShowForm }) {
    const appTitle = "Today I Learned";

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="logo.png"
                    height="68"
                    width="68"
                    alt="Today I Learned Logo"
                />
                <h1>{appTitle}</h1>
            </div>
            <button
                className="btn btn-large btn-open"
                onClick={() => setShowForm((show) => !show)}
            >
                {showForm ? "Close" : "Share a fact"}
            </button>
        </header>
    );
}

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("http://example.com");
    const [category, setCategory] = useState("");
    const textLength = text.length;

    function handleSubmit(e) {
        // 1. Prevent browser reload
        e.preventDefault();
        console.log(text, source, category);

        // 2. Check if data is valid. If so, create a new fact
        if (text && isValidHttpUrl(source) && category && textLength <= 200) {
            // 3. Create a new fact object
            const newFact = {
                id: Math.round(Math.random() * 10000000),
                text,
                source,
                category,
                votesInteresting: 0,
                votesMindblowing: 0,
                votesFalse: 0,
                createdIn: new Date().getFullYear(),
            };

            // 4. Add the new fact to the UI: add the fact to state
            setFacts((facts) => [newFact, ...facts]);

            // 5. Reset input fields
            setText("");
            setSource("");
            setCategory("");

            // 6. Close the form
            setShowForm(false);
        }
    }

    return (
        <form className="fact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Share a fact with the world..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <span>{200 - textLength}</span>
            <input
                type="text"
                placeholder="Trustworthy source..."
                value={source}
                onChange={(e) => setSource(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Choose category</option>
                {CATEGORIES.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                        {cat.name.toUpperCase()}
                    </option>
                ))}
            </select>
            <button className="btn btn-large">Post</button>
        </form>
    );
}

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];

function CategoryFilter() {
    return (
        <aside>
            <ul>
                <li className="category">
                    <button className="btn btn-all-categories">All</button>
                </li>
                {CATEGORIES.map((cat) => (
                    <li key={cat.name} className="category">
                        <button
                            className="btn btn-category"
                            style={{ backgroundColor: cat.color }}
                        >
                            {cat.name}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

function FactList({ facts }) {
    return (
        <section>
            <ul className="facts-list">
                {facts.map((fact) => (
                    <Fact key={fact.id} fact={fact} />
                ))}
            </ul>
            <p>There are {facts.length} facts in the database. Add your own!</p>
        </section>
    );
}

// function Fact (props) {
function Fact({ fact }) {
    // console.log(props);
    // const { factObj } = props;
    // const factObj = props.factObj;

    return (
        <li className="fact">
            <p>
                {fact.text}
                <a
                    className="source"
                    href={fact.source}
                    target="_blank"
                    rel="noreferrer"
                >
                    (Source)
                </a>
            </p>
            <span
                className="tag"
                style={{
                    backgroundColor: CATEGORIES.find(
                        (cat) => cat.name === fact.category
                    ).color,
                }}
            >
                {fact.category}
            </span>
            <div className="vote-buttons">
                <button>👍 {fact.votesInteresting}</button>
                <button>🤯 {fact.votesMindblowing}</button>
                <button>⛔️ {fact.votesFalse}</button>
            </div>
        </li>
    );
}

export default App;
