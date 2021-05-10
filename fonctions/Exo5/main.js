(string) => {
    let stringLength;
    if(stringLength === 1){
        stringLength = "la chaîne contient qu'un seul caractère";
        else {
            stringLength = "La chaîne continent ${string.length} caractères";
        }
    }
    return stringLength;
}