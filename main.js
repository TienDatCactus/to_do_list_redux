import { attach } from "./function/store";
import app from "./components/app.js";

attach(app, document.getElementById("root"));
