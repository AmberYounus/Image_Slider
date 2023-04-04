let a = 0; //current slide
let b=4;   //total slides

const dots = document.querySelectorAll(".dot-container button ");
const imags = document.querySelectorAll(".image-container img");

function next() {
    document.getElementById("content" + (a+1)).classList.remove("active")
    a=(b+a+1) % b;
    document.getElementById("content" + (a+1)).classList.add("active")
    indicator(a+1);
}
function prev() {
    document.getElementById("content" + (a+1)).classList.remove("active")
    a=(b+a-1) % b;
    document.getElementById("content" + (a+1)).classList.add("active")
    indicator(a+1);
}
function indicator(num) {
    dots.forEach(function (dot) {
        dots.style.backgroundColor = "tranparent"
    })
    document.querySelector(".dot-container button:nth-child("+num+")")
    .style.backgroundColor="#8052ec";
}
function dot(index) {
    imags.forEach(function (image) {
        image.classList.remove("active");
    });
    document.getElementById("content"+index).classList.add("active");
    a=index-1;
    indicator(index)
}

















