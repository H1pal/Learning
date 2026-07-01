const description = document.getElementById("description");
const message = ["세상을 이롭게 하는 소프트웨어를 개발하고 있는 유희성입니다.", "협업을 통해서 길러진 능력이 있씁니다."];

function changeMessage() {
    if (description.innerHTML == message[0]) {
        description.innerHTML = message[1];
    } else {
        description.innerHTML = message[0];
        description.querySelector();
    }
};

description.addEventListener("click", changeMessage);

let pos = 0;

function animate() {
    pos += 2;
    description.style.left = pos + "px";

    if (pos < 300) {
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate)