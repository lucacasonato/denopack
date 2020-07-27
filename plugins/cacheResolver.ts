const deno_dir = Deno.env.get("DENO_DIR"); // set once
if (!deno_dir) throw new Error(`DENO_DIR is not set`);

import { path, Plugin } from "../deps.ts";
import { isFile } from "../util/isFile.ts";
import { isHttpUrl } from "../util/isHttpUrl.ts";

const extensions = [".js", ".jsx"];
type Opts = {
  lazy?: boolean;
};

function resolveImporteeLocation(importee: string) {
  let importeeLocation: string | undefined;

  if (isHttpUrl(importee)) {
    importeeLocation = `${importee.replace("https://", `${deno_dir}/gen/https/`)}${
      importee.endsWith(".tsx") ? ".jsx" : ".js"
    }`;
  } else {
    const { dir, ext } = path.parse(importee);

    if (dir.startsWith(`${deno_dir}/gen/https/`) && !extensions.includes(ext)) {
      importeeLocation = `${importee}${ext === ".tsx" ? ".jsx" : ".js"}`;
    }
  }

  return importeeLocation;
}

export function pluginCacheResolver(opts: Opts = { lazy: false }): Plugin {
  return {
    name: "denopack-plugin-cacheResolver",
    async resolveId(importee: string) {
      const importeeLocation: string | undefined = resolveImporteeLocation(importee);
      return importeeLocation && (opts.lazy || (await isFile(importeeLocation))) ? importeeLocation : importee;
    },
  };
}