// import path from "path";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import route from "./router/router.js";
import handler from "./error/centeralizedErrorHandler.js";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);

// const file = fs.readFileSync(path.join(__dirname, "frontend", "home.html"))

app.use(handler);
app.listen(4000, () => {
    console.log("server is listning on port 4000");
})

