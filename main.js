import sites from "../src/db.json" with {type: "json"};
import template from "./template.js";

await Deno.writeTextFile("out/index.html", template(sites))