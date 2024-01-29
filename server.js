import express from "express";
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

app.get("/api", (request, response) => {
  response.json({
    message: "Hello World!",
    number: 4,
    address: "Melbourn, Cambridgeshire",
  });
});

app.post("/api", (request, response) => {
  response.json({ message: "Hello World!" });
});
