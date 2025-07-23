let heading = document.getElementById("ele");

heading.addEventListener("click", (e) => {

    console.log("Button clicked!");
    console.log(e.target.textContent);
    e.target.textContent = "Clicked!";
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
    e.target.style.fontSize = "20px";
})