import express from "express";
import log from "loglevel";

import { MAGIC_NUMBER } from "../common/constants";

const app = express();
const PORT = 5000;

log.setLevel("info");

app.get("/api", ({}, res) => res.send("" + MAGIC_NUMBER));
app.get("/", ({}, res) => res.send("Hello from the server! The API can be found at /api."));

app.listen(PORT, () => log.info(`Example app listening on port ${PORT}!`));
