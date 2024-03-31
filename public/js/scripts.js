// Funciones auxiliares
function editPost(index) {
  const newTitle = prompt("Enter the new title:");
  const newContent = prompt("Enter the new content:");

  // Envía una solicitud PUT al servidor con el índice y los nuevos datos
  fetch(`/posts/${index}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle, content: newContent }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to edit post");
      }
      // Recargar la página después de editar el post
      location.reload();
    })
    .catch((error) => console.error(error));
}

function deletePost(index) {
  // Envía una solicitud DELETE al servidor con el índice del post a eliminar
  fetch(`/posts/${index}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      // Recargar la página después de eliminar el post
      location.reload();
    })
    .catch((error) => console.error(error));
}
