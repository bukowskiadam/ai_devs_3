import { LOG } from "./env.ts";

export function log(...args: unknown[]) {
  if (LOG) {
    console.log(...args);
  }
}
