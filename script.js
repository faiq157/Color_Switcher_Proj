const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
// console.log(body);
buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "Gray":
        body.style.backgroundColor = e.target.id;
        break;
      case "Red":
        body.style.backgroundColor = e.target.id;
        break;
      case "Blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "Green":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.backgroundColor = "white";
        break;
    }
  });
});
