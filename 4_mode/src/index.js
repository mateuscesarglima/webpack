import sum from "./calc";
import Header from "./components/header";

console.log(sum(1, 2));
console.log(sum(10, 20));
console.log(sum(12, 23));

const header = new Header();

header.create();
