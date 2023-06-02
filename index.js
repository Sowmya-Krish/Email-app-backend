import express from "express";
import cors from "cors";
import Connection from "./database/db.js";
import routes from "./routes/route.js";

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/", routes);

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
