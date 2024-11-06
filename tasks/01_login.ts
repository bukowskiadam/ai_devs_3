import { DOMParser } from "jsr:@b-fuze/deno-dom";
import { chatCompletion } from "../lib/openai.ts";

const username = "tester";
const password = "574e112a";

const pageResponse = await fetch("https://xyz.ag3nts.org/");
const pageHtml = await pageResponse.text();

const doc = new DOMParser().parseFromString(pageHtml, "text/html");

const question = doc.querySelector("#human-question")?.textContent;
if (!question) {
  throw new Error("Question not found");
}

console.log(question);
console.log("Asking OpenAI for the answer...");

const answer = await chatCompletion([
  {
    role: "system",
    content: [
      {
        type: "text",
        text:
          "Answer the following question. The answer is the year. Give the year only",
      },
    ],
  },
  {
    role: "user",
    content: [
      {
        type: "text",
        text: question,
      },
    ],
  },
]);

const body = new FormData();

body.append("username", username);
body.append("password", password);
body.append("answer", answer);

console.log("Sending answer to the server...", body);

const answerResponse = await fetch("https://xyz.ag3nts.org/", {
  method: "POST",
  body,
});

console.log(await answerResponse.text());
