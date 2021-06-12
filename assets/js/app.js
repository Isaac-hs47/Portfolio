import render_techs from "./modules/techs.js";
import side_menu from "./modules/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  render_techs();
});

document.addEventListener("click", (e) => {
  side_menu(e);
})







