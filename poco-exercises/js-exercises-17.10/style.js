
function translator(language){
    let result;

    if(language==="en"){
    result ="Hello World"; 
    } else if (language ==="tr"){
        result= "Merhaba Dunya";
    } else {
        result ="Ciao Mondo";
    }
        
    return console.log(result);
    }

translator("it");

