// Erin Website Script

function changeLang(lang){

    if(lang === "zh"){
        document.querySelectorAll(".zh").forEach(function(el){
            el.style.display = "block";
        });

        document.querySelectorAll(".en").forEach(function(el){
            el.style.display = "none";
        });

    }else{

        document.querySelectorAll(".zh").forEach(function(el){
            el.style.display = "none";
        });

        document.querySelectorAll(".en").forEach(function(el){
            el.style.display = "block";
        });
    }

}
