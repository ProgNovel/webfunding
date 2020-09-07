import { clientSideFund, isBrowser } from "./fund-browser";
import { serverSideFund } from "./fund-server";
import { noUndefinedFundOnServerSide, WebfundingError } from "./errors";

export enum FundType {
  isSingle = "single",
  isMultiple = "multiple",
  isDefault = "default",
  isFromTemplate = "template",
  isUndefined = "undefined",
}

export function fund(pointer?: WMAddress, options: fundOptions = {}): FundType | string {
  if (isBrowser(options)) {
    return clientSideFund(pointer, options);
  } else {
    if (pointer === undefined) {
      throw WebfundingError(noUndefinedFundOnServerSide);
    } else {
      return serverSideFund(pointer);
    }
  }
}
