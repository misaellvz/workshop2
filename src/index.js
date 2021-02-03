const min = 1;
const max = 122;
const randomNum = (max, min) => Math.floor(Math.random() * ((max - min) + min));

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.src = `https://randomfox.ca/images/${randomNum(max, min)}.jpg`;

  container.appendChild(imagen);
  return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");
mountNode.append(nuevaImagen);