const $TECH = document.getElementById("tech");

let technologies = [
  {
    name: "HTML",
    domain: 80,
    icon: "fab fa-html5",
    icon_color: "#d35400",
  },
  {
    name: "CSS",
    domain: 46,
    icon: "fab fa-css3-alt",
    icon_color: "#3498db",
  },
  {
    name: "Javascript",
    domain: 57,
    icon: "fab fa-js",
    icon_color: " #f4d03f ",
  },
  {
    name: "PHP",
    domain: 33,
    icon: "fab fa-php",
    icon_color: " #8e44ad ",
  },
  {
    name: "Java",
    domain: 30,
    icon: "fab fa-java",
    icon_color: "#85c1e9",
  },
  {
    name: "Git",
    domain: 19,
    icon: "fas fa-code-branch",
    icon_color: " #D35400 ",
  },
  {
    name: "Bootstrap",
    domain: 13,
    icon: "fab fa-bootstrap",
    icon_color: " #7d3c98 ",
  },
];

function set_bar_color( domain = 0 ){
   if(domain >= 80){
    return "#58D68D";
   }else if(domain >= 60){
    return "#F1C40F";
   }else if(domain >= 40){
    return "#F39C12";
   }else if(domain >= 20){
    return "#D35400";
   }else{
    return "#C0392B";
   }
}

function render_techs(technology = []) {
  let tech_list = "";
  $TECH.innerHTML = "";
  $TECH.innerHTML = "<h2 class='col-sm-12 pt-3 fw-9 fs-xs-4 fs-sm-3 text-primary'>Tecnologias</h2>";

  technology.forEach((tech) => {
    tech_list += `
        <div class="technology col-6 col-sm-4">
            <div class="m-3">
                <i class="${tech.icon} tech-icon mx-auto" style="color:${tech.icon_color}"></i>
            </div>
            <div class="w-100 bg-gray-20 border">
              <div class="d-flex align-items-start" style="height:10px ;width:${tech.domain}%; background-color:${set_bar_color(tech.domain)}">
                
              </div>
            </div>
        </div>
        `;
  });

  $TECH.innerHTML += tech_list;
}

render_techs(technologies);

function side_menu(e) {
  if (e.target.matches(".nav-link") && screen.width < 768) {
    const $MENU = document.getElementById("main-nav");
    $MENU.classList.remove("show");
  }
}
/************CONTROLA EL MENÚ*****************/
document.addEventListener("click",(e) => {
  side_menu(e);
},true);
document.addEventListener("mouseenter", (e) => {

});