// TODO-05: Convert this if to switch/case (You can add more options.)
const fruit: string = "42";

switch (fruit) {
	case "apple":
		console.log("An apple a day keeps the doctor away.");
		break;
	case "banana":
		console.log("Banana is good for potassium.");
		break;
	case "orange":
		console.log("Oranges are full of vitamin C.");
		break;
	default:
		console.log("Unknown fruit.");
		break;
}

// TODO BONUS: Use object lookup
type FruitType = "apple" | "banana" | "orange";
const Fruit: FruitType = "banana";

const fruitQuotes= {
	"apple": "An apple a day keeps the doctor away.",
	"banana": "Banana is good for potassium.",
	"orange": "Oranges are full of vitamin C."
}

console.log(fruitQuotes[Fruit] || "Unknown fruit.");