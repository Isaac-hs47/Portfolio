let technologies = [
{
    name: "HTML",
    domain: 80,
    bar_color:"#58D68D"
},
{
    name: "JAVASCRIPT",
    domain: 57,
    bar_color: "#F1C40F"
},
{
    name: "CSS",
    domain: 46,
    bar_color:"#F39C12"
},
{
    name:"PHP",
    domain: 33,
    bar_color: "#D35400"
},
{
    name: "JAVA",
    domain: 30,
    bar_color: "#D35400"
},
{
    name: "BOOTSTRAP",
    domain: 16,
    bar_color: "#C0392B"
}
];

const $TECHS = document.getElementById("tech");

function render_techs(techs = []){
    let techs_list = "";
    $TECHS.innerHTML = "";
    $TECHS.innerHTML = "<h2 class='col-sm-12'>Tecnologias</h2>";

    techs.forEach(tech => {
        techs_list += `
        <div class="technology col-12 col-sm-12 col-md-9 col-lg-8">
            <h3 class="name-tech">${tech.name}</h3>
            <div class="progres-bar">
                <div class="bar" style="background-color: ${tech.bar_color}; width: ${tech.domain}%;"></div>
                <span class="porcent">${tech.domain}%</span>
            </div>
        </div>
        `;
    });

    $TECHS.innerHTML += techs_list;
}

render_techs(technologies);