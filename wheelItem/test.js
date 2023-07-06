const ids = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
    "p6",
    "p7",
    "p8",
];
const elements = {};

ids.forEach((id) => {
    elements[id] = document.getElementById(id);
});

const main = document.querySelector(".middle-box");
check = Boolean(true);

main.addEventListener("click", () => {
    if (check == true) {
        document.getElementById("bon").style.rotate = "135deg";
        elements.a1.classList.add("pos1", "show");
        elements.a2.classList.add("pos2", "show");
        elements.a3.classList.add("pos3", "show");
        elements.a4.classList.add("pos4", "show");
        elements.a5.classList.add("pos5", "show");
        elements.a6.classList.add("pos6", "show");
        elements.a7.classList.add("pos7", "show");
        elements.a8.classList.add("pos8", "show");

        check = false;
    } else {
        document.getElementById("bon").style.rotate = "0deg";
        elements.a1.classList.remove("pos1", "show");
        elements.a2.classList.remove("pos2", "show");
        elements.a3.classList.remove("pos3", "show");
        elements.a4.classList.remove("pos4", "show");
        elements.a5.classList.remove("pos5", "show");
        elements.a6.classList.remove("pos6", "show");
        elements.a7.classList.remove("pos7", "show");
        elements.a8.classList.remove("pos8", "show");

        check = true;
    }
});
