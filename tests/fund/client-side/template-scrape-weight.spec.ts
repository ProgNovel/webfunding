import { fund, getCurrentPointerPool } from "../../../src/fund/mod";
import { forceWebfundingOnBrowser } from "../../../src/fund/fund-browser";

import { toBeInTheDocument, toHaveAttribute } from "@testing-library/jest-dom/matchers";

expect.extend({ toBeInTheDocument, toHaveAttribute });

describe('get weight from <template data-fund-weight="xx" />', () => {
  test("fund() will scrape from template", () => {
    forceWebfundingOnBrowser();
    const pointerAddress = "$coil.com/pointer-address1";
    document.body.innerHTML = `
      <template data-fund="${pointerAddress}" data-fund-weight="52" ></template>
      <template data-fund="${pointerAddress}2" data-fund-weight="22" ></template>
    `;
    fund();
    const pool = getCurrentPointerPool();
    // @ts-ignore
    expect(pool[0].weight).toBe(52);
    document.body.innerHTML = "";
  });
});
