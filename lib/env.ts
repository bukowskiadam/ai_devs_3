import "jsr:@std/dotenv/load";

const AIDEVS_API_KEY = Deno.env.get("AIDEVS_API_KEY")!;
const AIDEVS_API_URL = Deno.env.get("AIDEVS_API_URL")!;
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;
const LOG = Boolean(Deno.env.get("LOG"));

export { AIDEVS_API_KEY, AIDEVS_API_URL, LOG, OPENAI_API_KEY };
