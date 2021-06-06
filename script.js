const MainForm = document.getElementById("main--form");
const MainInput = document.getElementById("main--input");
const MainBtn = document.getElementById("main--button");
const result1 = document.getElementById("result--1");
const result2 = document.getElementById("result--2");
const result3 = document.getElementById("result--3");
//Regex to Match Non Alpha Numerics :v
const noAlphaNumeric = /[^a-zA-Z\d\s:]/g;

MainForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

MainBtn.addEventListener("click", () => {
  let myValue = MainInput.value;
  if (myValue !== "") {
    handlePalindrome(myValue);
  }
  MainInput.value = "";
});

// const nameCleaned = name.replace(/\s/g, '')

const handlePalindrome = (value) => {
  //Remove all No AlphaNumeric :v
  let newValue = value.replace(noAlphaNumeric, "");

  //Regex to Remove all white spaces :v
  let finalValue = newValue.replace(/\s/g, "");

  //Reverse an String :v
  //.split("").reverse().join("")

  let value1 = finalValue.toLowerCase();
  let value2 = finalValue.split("").reverse().join("").toLowerCase();

  if (value1 == value2) {
    result1.innerText = value1;
    result1.style.color = "#000000";

    result2.innerText = value2;
    result2.style.color = "#0e83cd";

    result3.innerText = "True";
    result3.style.color = "#04ab6c";
  } else {
    result1.innerText = value1;
    result1.style.color = "#000000";

    result2.innerText = value2;
    result2.style.color = "#0e83cd";

    result3.innerText = "False";
    result3.style.color = "#cf0000";
  }
};
