import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Inicializar el array de posts
const posts = [];
let currentDate;

// Handler para la home page
app.get("/", (req, res) => {
  if (!currentDate) {
    currentDate = new Date().toLocaleString();
  }
  res.render("index.ejs", { posts: posts, currentDate: currentDate });
});

app.post("/posts", (req, res) => {
  // Obtener los datos del formulario
  const { btitle, bcontent } = req.body;

  // Crear un nuevo objeto de publicación
  const newPost = {
    title: btitle,
    content: bcontent,
    date: new Date().toLocaleString(),
  };

  // Agregar la nueva publicación al array de publicaciones
  posts.push(newPost);

  // Redirigir al usuario de vuelta a la página principal para que se actualice la visualización
  res.redirect("/");
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  // Actualizar la publicación correspondiente en el array de posts
  posts[id].title = title;
  posts[id].content = content;

  res.sendStatus(200);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  // Eliminar la publicación correspondiente del array de posts
  posts.splice(id, 1);

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
