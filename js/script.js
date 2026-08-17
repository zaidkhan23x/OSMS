let sidebar=document.getElementById("sidebar");
function showsidebar(){
    // v.style.display="flex";
    sidebar.style.left='40%';
    history.pushState({sidebar:true},"")
}

function hidesidebar(){
    // a.style.display="none";
    sidebar.style.left='100%';
}

window.addEventListener("popstate",(event)=>{
   hidesidebar();
});