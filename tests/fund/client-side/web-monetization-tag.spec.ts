import { setWebMonetizationPointer } from "../../../src/fund/utils";

import { getCurrentPointerAddress } from "../../../src/fund/mod";
import { forceWebfundingOnBrowser } from "../../../src/fund/fund-browser";

//@ts-ignore
import { toBeInTheDocument, toHaveAttribute } from "@testing-library/jest-dom/matchers";
import { metaTagMultipleIsFound, metaTagNotFound } from "../../../src/fund/errors";

expect.extend({ toBeInTheDocument, toHaveAttribute });

describe("interacting with meta web monetization tag", () => {
  const pointer = setWebMonetizationPointer("test");
  const metaTags = document.querySelectorAll('meta[name="monetization"]')!;
  test("web monetization api meta tag is in the document", () => {
    expect(metaTags[0]).toBeInTheDocument();
  });
  test("does have correct monetization tag", () => {
    expect(pointer).toHaveAttribute("name", "monetization");
  });
  test("having same pointer as declared", () => {
    expect(pointer).toHaveAttribute("content", "test");
  });
});

describe("getCurrentPointerAddress() found incorrect meta tags", () => {
  test("too many meta tags found", () => {
    document.head.innerHTML = `
      <meta name="monetization" content="$coil.com/test1" />
      <meta name="monetization" content="$coil.com/test2" />
    `;
    forceWebfundingOnBrowser();
    expect(() => getCurrentPointerAddress()).toThrowError(metaTagMultipleIsFound);
    document.head.innerHTML = "";
  });
  test("no meta tag is found", () => {
    document.head.innerHTML = "";
    forceWebfundingOnBrowser();
    expect(() => getCurrentPointerAddress()).toThrowError(metaTagNotFound);
  });
});
