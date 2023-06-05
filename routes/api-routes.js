const express = require("express");
const app = express();
const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const database = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    const data = database;
    res.status(200).json(data);
});

router.post("/api/notes", (req, res) => {
    const data = database;
    const input = req.body;
    data.push(input);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
    res.status(200).json(data);
});

module.exports = router