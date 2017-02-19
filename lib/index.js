import "zone.js";
/*
 * We can test the component by calling the bootstrap function. We create a new file,
 * lib/index.ts, which will start the application:
 */
import "rxjs";
import "reflect-metadata";
import "es6-shim";
import { bootstrap } from "angular2/platform/browser"; import { About } from "./about";
bootstrap(About).catch(err => console.error(err));