const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//bmi

document.getElementById("button").addEventListener("click", onclick )
function onclick () {
    var height = document.getElementById('heightInput').value;
    var weight = document.getElementById('weightInput').value;
    var bmi = weight/(height/100*height/100);
    var bmio = (bmi.toFixed(2))

    document.getElementById("result").innerHTML= "Your BMI is " + bmio;
    document.getElementById("info").style.display = "none";

    if (15<= bmio  && bmio <= 18) {
        document.getElementById("bodyStatus").innerHTML = "You are underweight";
        alert(bmio);
    }
    else if (19<= bmio && bmio <=25) {
        document.getElementById("bodyStatus").innerHTML = "You are normal";
    }
    else if (26<= bmio && bmio <=30) {
        document.getElementById("bodyStatus").innerHTML = "You are pre-obese";
    }
    else if (31<= bmio && bmio <=35) {
        document.getElementById("bodyStatus").innerHTML = "You are obesity class I";
    }
    else if (36<= bmio && bmio <=40) {
        document.getElementById("bodyStatus").innerHTML = "You are obesity class II";
    }
    else if (41<= bmio && bmio <=49) {
        document.getElementById("bodyStatus").innerHTML = "You are obesity class III";
    }
}

//Diet 

let caloCal;
let caloSum;
if (JSON.parse(localStorage.getItem("caloCal")) !== null) {
  caloCal = localStorage.getItem("caloCal"); 
  caloCal = JSON.parse(caloCal); 
} else {
  caloCal = [];
}
if (JSON.parse(localStorage.getItem("caloSum")) !== null) {
    caloSum = localStorage.getItem("caloSum"); 
    caloSum = JSON.parse(caloSum); 
  } else {
    caloSum = [];
  }

$("#addFood").click(function () {
  let food = $("#food").val();
  let calo = $("#calories").val();
  let result = calo + "g" + " " + food;
  caloCal.push(result);
  caloSum.push(calo);
  localStorage.setItem("caloCal", JSON.stringify(caloCal));
  localStorage.setItem("caloSum", JSON.stringify(caloSum));
  $("#food").val("");
  $("#calories").val("");
  readFood();
});

function readFood() {
  let foodHTML = "";
  let caloTotal = 0;

  for (let j = 0; j < caloSum.length; j++) {
      caloTotal += parseInt(caloSum[j]);
  }

  for (let i = 0; i < caloCal.length; i++) {
    foodHTML += `
    <div class="app__content">
        <div class="app_content-detail">
        <p class="detail-text">${caloCal[i]}</p>
        <i class="fas fa-trash fa-1x" onclick="removeFood(${i})"></i>
        </div>
    </div>
    `;
  }

  document.getElementById("calo-count").innerHTML = caloTotal;
  document.getElementsByClassName("app__content")[0].innerHTML = foodHTML;
}

function removeFood(index) {
  caloCal.splice(index, 1);
  localStorage.setItem("caloCal", JSON.stringify(caloCal));
  caloSum.splice(index, 1);
  localStorage.setItem("caloSum", JSON.stringify(caloSum));
  readFood();
}

document.getElementById("btn-clear-all").addEventListener("click", removeAll)
function removeAll() {
    caloCal = []
    localStorage.setItem("caloCal", JSON.stringify(caloCal));
    caloSum = []
    localStorage.setItem("caloSum", JSON.stringify(caloSum));
    readFood();
}

readFood();

