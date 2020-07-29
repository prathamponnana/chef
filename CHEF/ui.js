const container = document.querySelector("form");
const button = document.querySelector(".btn");
const inpSec = document.querySelector('#inpSection');
const pElem = document.querySelector('p');
let html = "";
class UI {

  showRes(recepieList) {
    document.querySelector("#inpSection").style.display = "none";
    let output = recepieList.splice(0, 3);
    paint(output);
  }

  showErr(message){
    document.querySelector(".item").value = "";
    const errDiv = document.createElement('div');
    errDiv.className = 'error';
    errDiv.appendChild(document.createTextNode(message));
    inpSec.insertBefore(errDiv,pElem);
    setTimeout(this.clearErr,4000);
  }

  clearErr(){
    document.querySelector('.error').remove();
  }
}

function paint(out) {
  out.forEach((ele) => {
    html += `<h1>${ele.strMeal}</h1><br>
            <a href="${ele.strYoutube}"><i class="fab fa-youtube"></i>
            <i class="fas fa-map-marker-alt"></i></a><hr>`;
  });
  resDiv = document.createElement("div");
  resDiv.innerHTML = html;
  container.insertBefore(resDiv, button);
  button.value = "BACK";

  button.addEventListener("mousedown", function (e) {
    if (e.target.value === "BACK") {
      window.location.reload();
    }
  });
}
