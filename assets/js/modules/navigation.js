export default function side_menu(e) {
    if (e.target.matches(".nav-link") && screen.width < 768) {
      const $MENU = document.getElementById("main-nav");
      $MENU.classList.remove("show");
    }
  }