/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.12.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as adminMutations from "../adminMutations.js";
import type * as adminQueries from "../adminQueries.js";
import type * as auth from "../auth.js";
import type * as crons from "../crons.js";
import type * as files from "../files.js";
import type * as mutations from "../mutations.js";
import type * as novu from "../novu.js";
import type * as onboarding from "../onboarding.js";
import type * as queries from "../queries.js";
import type * as telegram from "../telegram.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  adminMutations: typeof adminMutations;
  adminQueries: typeof adminQueries;
  auth: typeof auth;
  crons: typeof crons;
  files: typeof files;
  mutations: typeof mutations;
  novu: typeof novu;
  onboarding: typeof onboarding;
  queries: typeof queries;
  telegram: typeof telegram;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
