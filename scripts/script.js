/*function fadeOut(ele) {
    ele.style.opacity = 1;
    var fadeEffect = setInterval(() => {
        if (ele.style.opacity > 0) ele.style.opacity -= 0.1;
        else clearInterval(fadeEffect);
    }, 20);
}
function fadeIn(ele) {
    ele.style.opacity = 0;
    var fadeEffect = setInterval(() => {
        if (ele.style.opacity < 1) ele.style.opacity += 0.1;
        else clearInterval(fadeEffect);
    }, 20);
}

window.addEventListener("popstate", e => {
    //fadeOut(document.querySelector("main"));
    if (e.state) $.get(e.state.href, data => {
        let content = document.createElement("span");
        content.innerHTML = data;
        document.querySelector("main").innerHTML = content.querySelector("main").innerHTML;
        content.remove();
        //setTimeout(() => fadeIn(document.querySelector("main")), 1000)
        setupPage();
    });
})*/

function setupPage() {
    yall();
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', e => {
            let href = anchor.getAttribute("href");
            //e.preventDefault();
            if (href.startsWith("#")) {
                e.preventDefault();
                console.log("a");
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            /*else if (!href.startsWith("http")) {
                history.pushState({href: href}, "", href);
                //fadeOut(document.querySelector("main"));
                $.get((href=="/") ? "index.html" : href, data => {
                    let content = document.createElement("span");
                    content.innerHTML = data;
                    document.querySelector("main").innerHTML = content.querySelector("main").innerHTML;
                    content.remove();
                    //setTimeout(() => fadeIn(document.querySelector("main")), 1000)
                    setupPage();
                });
                return;
            }*/
        });
    });
}
setupPage();