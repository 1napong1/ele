

function test(temp,cass) {
    const a = document.getElementById("sm1")
    const b = document.getElementById("sm2")
    const c = document.getElementById("sm3")
    const d = document.getElementById("noti1")

    if (a.classList.contains('notishow'))
    {
        a.classList.remove('notishow')
        // d.classList.remove('')
    }
    else if (b.classList.contains('show'))
        b.classList.remove('show')
    else c.classList.remove('show')

    const e = document.getElementById("slider");
    e.style.left = temp + "%";

    const m = document.getElementById(cass);
    if(cass === 'sm1')
        m.classList.add('notishow')
    else
    m.classList.add('show')
  }
  