// server.ts
// todo: Make typesafe
import express from "express";
import { addSnippet, getSnippets } from "./DB/methods";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/snippets", async (req, res) => {
  try {
    res.json("Conncted");
    await addSnippet(req.body);
    res.status(201).send("Snippet added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/snippets", async (req, res) => {
  try {
    res.json("Conncted");
    const snippets = await getSnippets();
    res.json(snippets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
