const $TECH = document.getElementById("tech");

const TECHNOLOGIES = [
  {
    name: "HTML",
    domain: 80,
    img: "htm5_logo.png",
    img_color: "#d35400",
  },
  {
    name: "CSS",
    domain: 46,
    img: "css_logo.png",
    img_color: "#3498db",
  },
  {
    name: "Javascript",
    domain: 57,
    img: "js_logo.png",
    img_color: " #f4d03f ",
  },
  {
    name: ".NET",
    domain: 33,
    img: "net_core_logo.png",
    img_color: " #8e44ad ",
  },
  {
    name: "C#",
    domain: 30,
    img: "Csharp_Logo.png",
    img_color: "#85c1e9",
  },
  {
    name: "Git",
    domain: 19,
    img: "git_logo.png",
    img_color: " #D35400 ",
  },
  {
    name: "Bootstrap",
    domain: 13,
    img: "bootstrap_logo.png",
    img_color: " #7d3c98 ",
  },
  {
    name: "SQL",
    domain: 20,
    img: "iconoSQL.png",
    img_color: undefined
  }
];

// const set_bar_color = (domain = 0) => {
//   if(domain >= 80){
//     return "#58D68D";
//    }else if(domain >= 60){
//     return "#F1C40F";
//    }else if(domain >= 40){
//     return "#F39C12";
//    }else if(domain >= 20){
//     return "#D35400";
//    }else{
//     return "#C0392B";
//    }
// };

export default function render_techs() {
   let tech_list = "";
   $TECH.innerHTML = "";
   $TECH.innerHTML = "<h2 class='col-sm-12 pt-3 fw-9 fs-xs-4 fs-sm-3' style='color:var(--main-color)'>Tecnologías</h2>";
 
   TECHNOLOGIES.forEach((tech) => {
     
     tech_list += `
         <div class="technology col-6 col-sm-4 col-lg-2">
             <div class="m-3">
                 <img class="tech_logo" src="./assets/img/${tech.img}" alt="${tech.name} logo"/>
             </div>         
         </div>
         `;
   });
 
   $TECH.innerHTML += tech_list;
 }

//  <div class="w-100 bg-gray-30 border rounded" title="${tech.domain}%">
//  <div class="d-flex align-items-start rounded" style="height:10px ;width:${tech.domain}%; background-image: linear-gradient(to right, var(--main-color),  var(--second-color))"></div>
// </div>