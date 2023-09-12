window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    loader.classList.add(".loader--hidden");
    loader.addEventListener("transitioned", () => {
        document.body.removeChild(loader);
    })
});

//Menu
/*$("#closemenu").hide();

$("#menubutton").click(function () {
    $("#menubutton").hide();
    $("#closemenu").fadeIn(200);
});

$("#closemenu").click(function () {
    $("#closemenu").hide();
    $("#menubutton").fadeIn(200);
});*/