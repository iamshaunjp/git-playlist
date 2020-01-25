const form = document.querySelector("#currency-form");
const result = document.querySelector("#result");
const loader = document.querySelector(".loader");
const UI_dollar = document.querySelector("#us-dollar");
const UI_Euro = document.querySelector("#british-pound");
const UI_Rupee = document.querySelector("#indian-rupee");
const currency = document.querySelector("#currency");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", e => {
    result.style.display = "none";
    loader.style.display = "block";
    // covertCurrency();
    setTimeout(covertCurrency, 1000);
    e.preventDefault();
  });
});

function covertCurrency() {
  //get input value
  let amount = document.querySelector("#amount");

  //check input field
  if (amount.value === "") {
    showAlert("Please input a value ");
  }

  checkCurrency(amount);
}

//check currency value
function checkCurrency(value) {
  if (currency.value === "" && value.value !== "") {
    showAlert("Choose denomination");
  } else if (currency.value !== "") {
    result.style.display = "block";
    loader.style.display = "none";
  }

  if (currency.value === "dollar") {
    const dollarAmount = parseFloat(amount.value) * 360.69;
    // display the amount in the UI
    UI_dollar.value = "$" + dollarAmount.toFixed(4);
    document.querySelector(".dollarContainer").style.display = "block";
    document.querySelector(".rupeeContainer").style.display = "none";
    document.querySelector(".poundContainer").style.display = "none";
  } else if (currency.value === "euro") {
    const euroAmount = parseFloat(amount.value) * 458.3758;
    // display the amount in the UI
    UI_Euro.value = euroAmount.toFixed(4) + " EUR";
    document.querySelector(".poundContainer").style.display = "block";
    document.querySelector(".rupeeContainer").style.display = "none";
    document.querySelector(".dollarContainer").style.display = "none";
  } else if (currency.value === "rupee") {
    const rupeeAmount = parseFloat(amount.value) * 5.1911;
    //display the amount in the UI
    UI_Rupee.value = rupeeAmount.toFixed(4) + " INR";
    document.querySelector(".poundContainer").style.display = "none";
    document.querySelector(".rupeeContainer").style.display = "block";
    document.querySelector(".dollarContainer").style.display = "none";
  }
}

//showAlert
function showAlert(value) {
  result.style.display = "none";
  loader.style.display = "none";
  const card = document.querySelector(".card");
  const header = document.querySelector(".card-body");

  const div = document.createElement("div");
  div.className = "alert alert-danger p-4 text-center";
  div.innerHTML = `${value}`;

  card.insertBefore(div, header);

  //set time
  setTimeout(setTiming, 3000);
}

//end alert
function setTiming() {
  document.querySelector(".alert").remove();
}
