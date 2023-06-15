/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { type RenderFunction, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

const render: RenderFunction = (ctx, render) => {
  ctx.lang = "ja";
  render();
};

await start(manifest, { render, plugins: [twindPlugin(twindConfig)] });
