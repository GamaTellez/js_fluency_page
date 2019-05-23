
 
function animate_circle() {
    var div_circle = document.getElementById("circle_div");
    let button = document.getElementById("circle_animation");
    if (button.innerHTML === "Start") {
        button.innerHTML = "Stop";
        div_circle.classList.add("horizontalTranslate");
    } else {
        button.innerHTML = "Start;"
        div_circle.classList.remove("horizontalTranslate");
    }
}