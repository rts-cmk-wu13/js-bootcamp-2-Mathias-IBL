let colorBtn = document.querySelector("#my-button");

let colors = ["#eee", "#7f7"];
let i = 0;

colorBtn.addEventListener("click", function() {
    document.querySelector("#my-button").style.backgroundColor = colors[i];
    i = (i + 1) % colors.length; 
});
