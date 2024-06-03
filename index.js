import { promises as fsp } from "fs";
import ventojs from "ventojs";

const result = await ventojs().run("./test.vto");

await fsp.writeFile("./test.html", result.content, "utf8");
