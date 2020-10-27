var dodger = document.getElementById("dodger")
function pos(element) {
    return [parseInt(element.style.left.replace("px", '')), parseInt(element.style.bottom.replace("px",""))];
}

function updatePos(element, leftish, bottomish) {
    element.style.left = `${leftish}px`;
    element.style.bottom = `${bottomish}px`;
}

document.addEventListener("keydown", function(e) {
    let press = e.key;
    let posit = pos(dodger);
    posit[0] += ((press === "ArrowRight") - (press === "ArrowLeft")) * 8;
    posit[1] += ((press === "ArrowUp") - (press === "ArrowDown")) * 8;
    updatePos(dodger,posit[0],posit[1])
    console.log(posit)
});

function moveDodgerLeft() {
    let posit = pos(dodger);
    posit[0] -= 1
    updatePos(dodger,posit[0],posit[1]);
}
function moveDodgerRight() {
    let posit = pos(dodger);
    posit[0] += 1
    updatePos(dodger,posit[0],posit[1]);
}
