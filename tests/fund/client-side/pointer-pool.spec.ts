import { getCurrentPointerPool, fund } from "../../../src/fund/mod";
import { forceFundmeOnBrowser } from "../../../src/fund/fund-browser";
import { convertToPointerPool, hasAddress } from "../../../src/fund/utils";

describe("test getCurrentPointerPool()", () => {
  test("it returns correct pool", () => {
    const pointers = [
      {
        address: "$coil.com/pointer-test",
        weight: 44,
      },
      {
        address: "$coil.com/pointer-test2",
        weight: 33,
      },
    ];
    document.body.innerHTML = `
      <script webfunding type="application/json">
        ${JSON.stringify(pointers)}
      </script>
    `;
    forceFundmeOnBrowser();
    fund();
    expect(getCurrentPointerPool()).toEqual(pointers);
    document.body.innerHTML = "";
  });

  test("convertToPointerPool ensure returning an array", () => {
    const pointer = "$coil.com/pointer";

    expect(convertToPointerPool(pointer)).toEqual([pointer]);
  });
});

describe("pointer object has address", () => {
  test("hasAddress() return true", () => {
    expect(hasAddress({ address: "$wallet.address.com/test" })).toBeTruthy();
  });
  test("hasAddress() return false if not have address", () => {
    expect(hasAddress({})).toBeFalsy();
  });
  test("hasAddress() return false if undefined", () => {
    expect(hasAddress(undefined)).toBeFalsy();
  });
  test("hasAddress() return false if invalid", () => {
    expect(hasAddress(4)).toBeFalsy();
    expect(hasAddress("$wallet.example.com/test")).toBeFalsy();
  });
});
