
function profileOpen(){
    let openButton = document.getElementById("profile-dropdown");
    let emptyArea = document.getElementById("empty-area");
    if(openButton.style.display === "none"){
        openButton.style.display = "block";
        emptyArea.style.display = "block";
    }else{
        openButton.style.display = "none";
        emptyArea.style.display = "none";
    }
}

function profileClose(){
    let openButton = document.getElementById("profile-dropdown");
    openButton.style.display = "block";
    let closeButton = document.getElementById("empty-area");
    if(closeButton.style.display === "block"){
        openButton.style.display = "none";
        closeButton.style.display = "none"
    }else{
        openButton.style.display = "block";
    }
}


function menuDrop(){
    let menuOpen = document.getElementById("menu-dropdown");
    if(menuOpen.style.display === "none"){
        menuOpen.style.display = "block";
    }else{
        menuOpen.style.display = "none";
    }
}