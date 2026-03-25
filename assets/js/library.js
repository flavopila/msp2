import { liftLibrary } from "./lifts.js"; /* import lift library */

const libraryDiv = document.getElementById("lift-library"); /* set lift-library element as a constant */

function renderLibrary() {
  libraryDiv.innerHTML = ""; /* clear libraryDiv upon function call */

  liftLibrary.forEach((lift) => { /* iterate through liftLibrary array */
    const liftCard = document.createElement("article"); /* create article element for each lift */
    liftCard.className = "lift-card"; /* add styling class to liftCard */

    const img = document.createElement("img"); /* create img element for each lift */
    img.className = "lift-img"; /* add styling class to img */
    img.src = new URL(lift.image, import.meta.url).href; /* set img src to lift image */
    img.alt = lift.name; /* accessibility alt text for img */
    img.loading = "lazy"; /* img only loads when close to viewport */

    const name = document.createElement("p"); /* create p element for each lift */
    name.className = "lift-name"; /* add styling class to p element */
    name.textContent = lift.name; /* set p text to lift name */

    liftCard.appendChild(img); /* add img to liftCard */
    liftCard.appendChild(name); /* add name to liftCard */

    libraryDiv.appendChild(liftCard); /* add liftCard to libraryDiv */
  });
}

document.addEventListener("DOMContentLoaded", renderLibrary);
/* once page is loaded, render the library */
