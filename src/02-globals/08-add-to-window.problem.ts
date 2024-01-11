import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. Inside declare global, you'll need to modify the Window
 * interface to add a makeGreeting function
 */

declare global {
  interface Window {
    makeGreeting(): string;
  }
}

// DECLARATION MERGING:
/*
“declaration merging” means that the compiler merges two separate declarations 
declared with the same name into a single definition. This merged definition has 
the features of both of the original declarations.
*/

window.makeGreeting = () => "Hello, world!";

it("Should let you call makeGreeting from the window object", () => {
  expect(window.makeGreeting()).toBe("Hello, world!");

  type test1 = Expect<Equal<typeof window.makeGreeting, () => string>>;
});
