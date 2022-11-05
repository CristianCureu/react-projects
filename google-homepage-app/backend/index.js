const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");
const ShortcutRouter = require("./Routes/ShortcutRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/shortcut", ShortcutRouter);

async function connectToDb() {
  await mongoose.connect(config.MONGO_CONNECTION_STRING);
}

async function main() {
  try {
    await connectToDb();
    app.listen(config.SERVER_PORT, () => {
      console.log(`Backend app listening on port ${config.SERVER_PORT}`);
    });
  } catch (err) {
    console.log("index::main errro", err.message);
  }
}

main();
