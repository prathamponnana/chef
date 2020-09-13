const container = document.querySelector("#container");
const submitBtn = document.querySelector(".submitBtn");
const showcase = document.querySelector(".showcase");
const pElem = document.querySelector("p");
let listLength = '';

class UI {
    showRes(recepieList) {
      let rangeStart, rangeEnd;
      listLength = recepieList.length;
      [rangeStart , rangeEnd]=[1, 2]
      console.log(rangeStart,rangeEnd);
      document.querySelector(".showcase").style.display = "none";
      let output = recepieList.splice(0,3);
      paint(output);
    }

    showErr(message) {
      document.querySelector(".inpItem").value = "";
      const errDiv = document.createElement("div");
      errDiv.className = "error";
      errDiv.appendChild(document.createTextNode(message));
      showcase.insertBefore(errDiv, pElem);
      setTimeout(this.clearErr, 4000);
    }

    clearErr() {
      document.querySelector(".error").remove();
    }
}

function paint(out){
  let html = "";
  out.forEach((ele,index) => {
    html += `<div id=item-${index+1}>
            <h1>${ele.strMeal}</h1>
            <a href="${ele.strYoutube}">Watch <i class="fab fa-youtube"></i>
            <i class="fas fa-map-marker-alt"></i></a>
            </div>`;
  });
  resDiv = document.createElement("div");
  resDiv.id = 'outputList'
  resDiv.innerHTML = html;
  console.log(resDiv);
  container.insertBefore(resDiv, submitBtn);
  submitBtn.value = "BACK";

  submitBtn.addEventListener("mousedown", function(e) {
    if (e.target.value === "BACK") {
      window.location.reload();
    }
  });
}

function randomRange(listLength){
  let arr = [],a,b;
  a = Math.floor(Math.random() * listLength);
  b = Math.floor(Math.random() * listLength);
  if(a>=b){
    randomRange(listLength);
  } else{
    arr.push(a);
    arr.push(b);
    return arr;
  }
}
