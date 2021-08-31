const hamopen = document.querySelector(".fa-bars")
    const hamclose = document.querySelector(".ham-cancel")
    const menubar = document.querySelector(".menu-bar")

    hamopen.addEventListener("click",openMenuBar)
    hamclose.addEventListener("click",closeMenuBar)

    function openMenuBar(e) {
        menubar.classList.add("show")
    }   
    function closeMenuBar(e) {
       menubar.classList.remove("show")
    }  