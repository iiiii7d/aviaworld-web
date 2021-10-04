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
}*/

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
})

function setupPage() {
    yall();
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            if (anchor.getAttribute("href").startsWith("#")) {
                console.log("a");
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            else if (!anchor.getAttribute("href").startsWith("http")) {
                history.pushState({href: anchor.getAttribute("href")}, "", anchor.getAttribute("href"));
                //fadeOut(document.querySelector("main"));
                $.get(anchor.getAttribute("href"), data => {
                    let content = document.createElement("span");
                    content.innerHTML = data;
                    document.querySelector("main").innerHTML = content.querySelector("main").innerHTML;
                    content.remove();
                    //setTimeout(() => fadeIn(document.querySelector("main")), 1000)
                    setupPage();
                });
                return;
            }
        });
    });
}
setupPage();