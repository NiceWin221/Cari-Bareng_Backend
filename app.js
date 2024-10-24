import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
