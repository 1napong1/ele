let isClicked = false;

function picHover() {
    const pic = document.getElementById("sun");
    // let rec = document.querySelectorAll(".rec")

    if (!isClicked) {
        pic.classList.remove("fa-sun");
        pic.classList.add("fa-moon");
        pic.style.transform = "rotateY(180deg)"

    }
    else {
        pic.classList.remove("fa-moon");
        pic.classList.add("fa-sun");
        pic.style.transform = "rotateY(0deg)"

    }
}

function picOut() {
    const pic = document.getElementById("sun");
    if (!isClicked) {
        pic.classList.remove("fa-moon");
        pic.classList.add("fa-sun");
        pic.style.transform = "rotateY(0deg)"
    }
    else {
        pic.classList.remove("fa-sun");
        pic.classList.add("fa-moon");
        pic.style.transform = "rotateY(180deg)"
    }
}



function toggleIcon() {
    const pic = document.getElementById("sun");
    const body = document.body
    let mainBox = document.querySelectorAll(".mainBox")
    let cir = document.querySelectorAll(".cir")
    let btnstart = document.getElementById("mainBtn")
    // let rec = document.querySelectorAll(".rec")
    isClicked = !isClicked;
    if (isClicked) {
        pic.classList.remove("fa-sun");
        pic.classList.add("fa-moon");
        pic.style.transform = "rotateY(180deg)"
        btnstart.style.background = "rgb(10, 80, 177)";
        btnstart.style.color = "rgb(255, 255, 255)";
        body.style.background = "linear-gradient(30deg, rgb(10, 38, 71) 0%, rgb(37, 97, 150) 100%)"
        mainBox.forEach((mainBox) => {
            mainBox.style.background = "rgba(20, 66, 114,0.76)";
        })
        cir.forEach((cir) =>{
            cir.style.background = "rgb(10, 80, 177)";
            cir.style.color = "rgb(255, 255, 255)";
        })

        
        body.setAttribute("theme","dark");
        

    } else {
        pic.classList.remove("fa-moon");
        pic.classList.add("fa-sun");
        pic.style.transform = "rotateY(0deg)";
        body.setAttribute("theme","light");
        btnstart.style.background = "whitesmoke";
        btnstart.style.color = "rgb(24, 94, 224)";

        body.style.background = "linear-gradient(30deg, rgba(203,64,104,1) 0%, rgba(253,223,45,1) 100%)"
        mainBox.forEach((mainBox) => {
            mainBox.style.background = "rgba(238, 222, 6, 0.76)";
        })
        cir.forEach((cir) =>{
            cir.style.background = "whitesmoke";
            cir.style.color = "rgb(24, 94, 224)";
        })
       
        body.setAttribute("theme","light");
    }
}


let isBoxMoved = true 

document.getElementById("mainBtn").addEventListener("click", () =>{
    const mainBox = document.getElementById("mainBox")
    const minor = document.getElementById("minor")
    if (isBoxMoved) {
        showEle()
        mainBox.style.left = "-550px";
        setTimeout(() =>{
            minor.style.left = "-1670px";
        }, 200)
    } else {
        delShowEle()
        minor.style.left = "-2250px";
        setTimeout(() =>{
            mainBox.style.left = "-1080px";
        }, 100)
    }

    isBoxMoved = !isBoxMoved;
})

function showEle(){
    const cires = document.getElementsByClassName("cir")
    const reces = document.getElementsByClassName("rec")
    
    for (let i = 0 ;i<cires.length ;i++) {
        const cir = cires[i];
        const duration = ((i+1) * 0.2)+'s';
        cir.style.transitionDuration = duration;
        cir.classList.add('show');
    }
    for (let i = 0 ;i<reces.length ;i++) {
        const rec = reces[i];
        rec.style.transitionDuration = ".5s";
        rec.classList.add('show');
    }
}

function delShowEle(){
    const cires = document.getElementsByClassName("cir")
    const reces = document.getElementsByClassName("rec")
    let e = 1
    for (let i = cires.length-1 ;i>=0 ;i--) {
        const cir = cires[i];
        const duration = (e*.1)+'s';
        cir.style.transitionDuration = duration;
        cir.classList.remove('show');
        e++
    }
    for (let i = 0 ;i<reces.length ;i++) {
        const rec = reces[i];
        rec.style.transitionDuration = ".2s";
        rec.style.translate
        rec.classList.remove('show');
        rec.style.transform = "translateX(-10px)";

    }
}