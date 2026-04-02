/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module "astro:env/client" {
  export const BASE_URL: string;
  export const PROD: boolean;
}

declare module "@fontsource-variable/cascadia-mono";
declare module "@fontsource-variable/noto-sans-sc";
declare module "@fontsource-variable/exo-2";
