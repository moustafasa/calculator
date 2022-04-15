let numbers = Array.from(document.querySelectorAll(".numbers button"));
let operators = Array.from(document.querySelectorAll(".operators button"));
let result = document.querySelector(".result");

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    if (result.innerHTML.length < 35) {
      result.innerHTML += e.innerHTML;
    }
  });
});

operators.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML == "=") {
      let r = /(\d+\s[+-/*]\s\d+)+$/gi;
      if (result.innerHTML.match(r)) {
        result.innerHTML = eval(result.innerHTML);
      }
    } else if (e.innerHTML == "C") {
      result.innerHTML = "";
    } else {
      if (result.innerHTML != false) {
        let re = /[*+/-]\s$/gi;
        if (re.test(result.innerHTML)) {
          result.innerHTML =
            result.innerHTML.slice(0, -3) + " " + e.innerHTML + " ";
        } else {
          result.innerHTML += " " + e.innerHTML + " ";
        }
      }
    }
  });
});
