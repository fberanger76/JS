var Year;
function IsLeapYear(Year) {
    return (((Year & 3) == 0) && ((Year % 100 != 0) || (Year % 400 == 0)));
   }
for (Year=2020;Year <=2030;Year++) {
    document.write(Year+"<br>");
    if(IsLeapYear(Year)) document.write(" est une année bissextile<BR>".fontcolor("red"));
}