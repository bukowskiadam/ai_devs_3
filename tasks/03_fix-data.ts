import data from "./03_data.json" with { type: "json" };
import { AIDEVS_API_KEY } from "../lib/env.ts";
import { log } from "../lib/log.ts";
import { chatCompletion } from "../lib/openai.ts";

data.apikey = AIDEVS_API_KEY;
let fixedMathErrors = 0;
let questionsToLLM = 0;

const getAnswer = (question: string) =>
    chatCompletion([
        {
            role: "user",
            content: [
                { type: "text", text: question },
            ],
        },
    ]);

await Promise.all(data["test-data"].map(async (testData) => {
    const result = eval(testData.question);

    if (result !== testData.answer) {
        testData.answer = result;
        fixedMathErrors += 1;
    }

    if (testData.test) {
        testData.test.a = await getAnswer(testData.test.q);
        questionsToLLM += 1;
    }
}));

log("Status", { fixedMathErrors, questionsToLLM });

const REPORT_URL = "https://centrala.ag3nts.org/report";

const answer = {
    task: "JSON",
    apikey: AIDEVS_API_KEY,
    answer: data,
};

const answerResponse = await fetch(REPORT_URL, {
    method: "POST",
    body: JSON.stringify(answer),
});

console.log(await answerResponse.text());
