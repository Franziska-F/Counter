let count = 0;

let value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

console.log(btns);
// forEach to loop thrue node list

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList; // get class that item has

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
