import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("handles conditional classes", () => {
    expect(cn("base", true && "conditional")).toBe("base conditional");
    expect(cn("base", false && "conditional")).toBe("base");
  });

  it("merges conflicting Tailwind classes", () => {
    expect(cn("px-2 px-4")).toBe("px-4");
    expect(cn("bg-red-500 bg-blue-500")).toBe("bg-blue-500");
  });

  it("handles undefined and null values", () => {
    expect(cn("base", undefined, null, "valid")).toBe("base valid");
  });
});
