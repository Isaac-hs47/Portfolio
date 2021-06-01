let technologies = [
{
    name: "HTML",
    domain: 80,
    bar_color:"#58D68D",
    icon: "fab fa-html5",
    icon_color: "#d35400"

},
{
    name: "JAVASCRIPT",
    domain: 57,
    bar_color: "#F1C40F",
    icon: "fab fa-js",
    icon_color: " #f4d03f "
},
{
    name: "CSS",
    domain: 46,
    bar_color:"#F39C12",
    icon: "fab fa-css3-alt",
    icon_color: "#3498db"
},
{
    name:"PHP",
    domain: 33,
    bar_color: "#D35400",
    icon: "fab fa-php",
    icon_color: " #8e44ad "
},
{
    name: "JAVA",
    domain: 30,
    bar_color: "#D35400",
    icon: "fab fa-java",
    icon_color: "#85c1e9"
},
{
    name: "BOOTSTRAP",
    domain: 7,
    bar_color: "#C0392B",
    icon: "fab fa-bootstrap",
    icon_color: " #7d3c98 "
}
];

const $TECH = document.getElementById("tech");

function render_techs(technology = []){
    let tech_list = "";
    $TECH.innerHTML = "";
    $TECH.innerHTML = "<h2 class='col-sm-12'>Tecnologias</h2>";

    technology.forEach(tech => {
        tech_list += `
        <div class="technology col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="technology-item">
                <i class="${tech.icon} tech-icon" style="color:${tech.icon_color}"></i>
                <h3 class="tech-name">${tech.name}</h3>
            </div>
            <div class="progres-bar">
                <div class="bar" style="background-color: ${tech.bar_color}; width: ${tech.domain}%;"></div>
                <span class="porcent">${tech.domain}%</span>
            </div>
        </div>
        `;
    });

    $TECH.innerHTML += tech_list;
}

render_techs(technologies);

/************CONTROLA EL MENÚ*****************/
function side_menu(){
    const $MENU = document.getElementById("menu");
    const $LINKS_MENU = document.getElementById("links-menu");

    if(screen.width < 576){
        $LINKS_MENU.classList.remove("justify-content-center");
        $MENU.classList.toggle("bar-menu-activate");
    }
}

(function(){

    document.addEventListener("click", (e) => {
        
        
        if(e.target.matches(".nav-link") || e.target.matches(".menu-ham")){
            side_menu();
        }

    }, true);
})();

