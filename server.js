
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import route from "./router/router.js";
import handler from "./error/centeralizedErrorHandler.js";




const app = express();

// Middleware configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(route);


// Error handling
app.use(handler);

// Start server
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});

