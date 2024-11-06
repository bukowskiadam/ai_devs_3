import { AIDEVS_API_KEY } from "../lib/env.ts";

const response = await fetch("https://poligon.aidevs.pl/dane.txt");
const data = await response.text();

const lines = data.trim().split("\n");

const answer = {
  task: "POLIGON",
  apikey: AIDEVS_API_KEY,
  answer: lines,
};

console.log("answer", answer);

const answerResponse = await fetch("https://poligon.aidevs.pl/verify", {
  method: "POST",
  body: JSON.stringify(answer),
});

console.log(await answerResponse.text());
