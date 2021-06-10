const $CONTAINER_TEXT = document.getElementById("container-text");
const $INPUT_TEXT = document.getElementById("sentence");

function binary_to_text(binary = "") {
  let bin = binary.split(" ");
  let unicodes = bin.map((e) => parseInt(e, 2));
  let sentence = String.fromCharCode(...unicodes);
  $CONTAINER_TEXT.innerHTML = sentence;
}

function text_to_binary(text = "") {
  let characters = text.split("");

  let binary;
  let binary_text = "";

  characters.forEach((char) => {
    binary = char.charCodeAt().toString(2);//Convert from ASCII Code to BINARY Code
    binary_text += `${binary} `;
  });
  $CONTAINER_TEXT.innerHTML = `<p>${binary_text}</p>`;
}

document.getElementById("btn_action").addEventListener("click", (e) => {
  let checked = document.getElementById("binary_text").checked;
  
  if($INPUT_TEXT.value == ""){

    document.getElementById("alert").classList.remove("d-none");
    
    setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 2500);

  }else{

    document.getElementById("reverse").disabled = false;

    if (checked) {
      binary_to_text($INPUT_TEXT.value);
    } else {
      text_to_binary($INPUT_TEXT.value);
    }
    $INPUT_TEXT.value = null;
    
  }
});

const $RADIOS = document.getElementsByName("option");
$RADIOS.forEach(r => {
  r.addEventListener("change", () => {
    $CONTAINER_TEXT.innerText = "";
    document.getElementById("reverse").disabled = true;
  });
});

document.getElementById("reverse").addEventListener("click", (e) => {
    e.stopPropagation();

    let value = $CONTAINER_TEXT.innerText;

    let radios = document.getElementsByName("option");
    let radio_checked, radio_unchecked;

    radios.forEach(r => {
        if(r.checked){
            radio_checked = r;         
        }else{
            radio_unchecked = r;
        }
    });

    switch (radio_checked.id) {
        case "binary_text":
            text_to_binary(value);
            radio_unchecked.checked = true;
            break;
        case "text_binary":
            binary_to_text(value);
            radio_unchecked.checked = true;
            break;
        default:
            console.error("An error has occured!");
            break;
    }
    $INPUT_TEXT.value = value;
});