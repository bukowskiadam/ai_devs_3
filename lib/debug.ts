import { DEBUG } from "./env.ts";

export function debug(...args: unknown[]) {
  if (DEBUG) {
    console.log(...args);
  }
}
