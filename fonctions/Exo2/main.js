function bold() {
    var  paragraphe = document.getElementById("text").style.fontWeight ;
 
 if(paragraphe == 'normal')
    {
        document.getElementById("text").style.fontWeight = 'bold';
    }
 else
    {
        document.getElementById("text").style.fontWeight = 'normal';
    }
}

function colorRed() {
    var  paragraphe = document.getElementById("text").style.color ;
 
 if(paragraphe == 'black')
    {
        document.getElementById("text").style.color = 'red';
    }
 else
    {
        document.getElementById("text").style.color = 'black';
    }
}

function fontSize() {
    var  paragraphe = document.getElementById("text").style.fontSize ;
 
 if(paragraphe == 'initial')
    {
        document.getElementById("text").style.fontSize = 'larger';
    }
 else
    {
        document.getElementById("text").style.fontSize = 'initial';
    }
}
