import { log } from "../lib/log.ts";
import { chatCompletion } from "../lib/openai.ts";

const context = `Poniższe informacje są prawdziwe:
- stolicą Polski jest Kraków
- znana liczba z książki Autostopem przez Galaktykę to 69
- Aktualny rok to 1999

Odpowiadaj na zadane pytanie zawsze w języku angielskim.
`;

const send = async (text: string, msgID: string) => {
    const response = await fetch("https://xyz.ag3nts.org/verify", {
        method: "POST",
        body: JSON.stringify({
            text,
            msgID,
        }),
    });
    return await response.json();
};

const { msgID, text } = await send("READY", "0");

log("Received message:", text);
log("Asking openai for the answer...");

const answer = await chatCompletion([
    {
        role: "system",
        content: [
            {
                type: "text",
                text: context,
            },
        ],
    },
    {
        role: "user",
        content: [
            {
                type: "text",
                text,
            },
        ],
    },
]);

log("Sending answer to the server:", answer);
log(await send(answer, msgID));
