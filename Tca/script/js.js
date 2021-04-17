function navegacao(x){
	
    if (x===1){
        document.getElementById("home").style.display="block";
        document.getElementById("sobre").style.display="none";
        document.getElementById("produtos").style.display="none";
        document.getElementById("fotos").style.display="none";
    } else	if (x===2){
        document.getElementById("home").style.display="none";
        document.getElementById("sobre").style.display="block";
        document.getElementById("produtos").style.display="none";
        document.getElementById("fotos").style.display="none";
    }else if (x===3){
        document.getElementById("home").style.display="none";
        document.getElementById("sobre").style.display="none";
        document.getElementById("produtos").style.display="block";
        document.getElementById("fotos").style.display="none";
    }else{
        document.getElementById("home").style.display="none";
        document.getElementById("sobre").style.display="none";
        document.getElementById("produtos").style.display="none";
        document.getElementById("fotos").style.display="block";
    }
            
    }