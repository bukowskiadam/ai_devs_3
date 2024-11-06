import "jsr:@std/dotenv/load";

const AIDEVS_API_KEY = Deno.env.get("AIDEVS_API_KEY");
const AIDEVS_API_URL = Deno.env.get("AIDEVS_API_URL");
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
const DEBUG = Boolean(Deno.env.get("DEBUG"));

export { AIDEVS_API_KEY, AIDEVS_API_URL, DEBUG, OPENAI_API_KEY };
