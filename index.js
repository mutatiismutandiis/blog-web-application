import express from "express";

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Handler para la home page
app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
