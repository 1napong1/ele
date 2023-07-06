
const a =document.getElementById("noti")
a.innerHTML = "99"
// console.log(a)
if (a.innerHTML == "0"){
    a.style.display = "none"
}
function update(temp,id) {
    const a = document.getElementById("box1")
    const b = document.getElementById("box2")
    const c = document.getElementById("box3")
    const d = document.getElementById("noti")
    if (a.classList.contains('show'))
    {
        a.classList.remove('show')
        d.classList.remove('notishow')
        d.style.display = "none"
    }
    else if (b.classList.contains('show'))
        b.classList.remove('show')
    else c.classList.remove('show')

    const e = document.getElementById("slide");
    e.style.left = temp + "px";

    const m = document.getElementById(id);
    if(id === 'box1'){
        d.classList.add('notishow')
        m.classList.add('show')
    }
    else
    m.classList.add('show')
  }
  