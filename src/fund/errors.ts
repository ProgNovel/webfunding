import { DEFAULT_WEIGHT } from './set-pointer-multiple'

export function FundmeError(err: string): string {
  return 'Fundme.js: ' + err
}

export const addressNotFound = 'address not found.'
export const addressIsNotAString = 'address must be a string.'
export const getCurrentPointerAddressMustClientSide =
  "can't use getCurrentPointerAddress() server-side."
export const weightNotFound = 'entries .weight not found.'
export function weightIsNotANumber(str: string) {
  return `${str} has weight that is not a number. It has been set to ${DEFAULT_WEIGHT} (default).`
}
export const invalidAddress = 'invalid Web Monetization pointer address is given.'

// default address
export const defaultAddressNotFound =
  'default address not found. Use setDefaultAddress(str: string) to set it first.'
export const invalidDefaultAddress = 'invalid default address.'
export const defaultAddressArrayCannotBeEmpty = 'invalid default address.'
// utils
export const canOnlyCleanStringCustomSyntax = 'can only clean custom syntax with typeof string.'

// about meta tag for Web Monetization API
export const metaTagNotFound = 'web monetization meta tag is not found.'
export const metaTagMultipleIsFound =
  'multiple <meta name="monetization" /> found - Web Monetization API only support a single meta tag.'

// pointers template
export const noTemplateFound = 'no monetization template is found.'
export const failParsingTemplate = 'fails to parse address from <template data-fund></template>.'
export const templateSinglePointerHasWeight =
  'found single <template data-fund></template> but has weight - only address will be parsed.'

// script json template
export const cannotParseScriptJson =
  'cannot parse JSON from <script fundme>. Make sure it contains a valid JSON.'
export const jsonTemplateIsInvalid = "found <script fundme> but it's not valid."
export const scriptFundmeIsNotApplicationJson =
  'found <script fundme> but its type is not "application/json"'

/*****************************
 *                           *
 *  Server-side fund()       *
 *                           *
 *****************************/
export const noUndefinedFundOnServerSide = "can't use fund() with empty parameters in server side."
export const invalidFundmeServerSide = 'invalid fundme parameters on the server-side.'
