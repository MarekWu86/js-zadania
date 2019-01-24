var num1 = 35;
var num2 = 78;

function getTheResults(a, b) {
  var suma = a + b;
  var roznica = a - b;
  var iloczyn = a * b;
  if (suma < 0) {
    console.log("Wynik jest ujemny");
  }else {
    console.log("Wynik dodawania wynosi " + suma + ".");
  }
  
  if (roznica < 0) {
    console.log("Wynik jest ujemny");
  }else {
    console.log("Wynik odejmowania wynoci " + roznica + ".");
  }
  
  if (iloczyn < 0) {
    console.log("Wynik jest ujemny");
  }else {
    console.log("Wynik mnożenia wynosi " + iloczyn + ".");
  }
}
  
    getTheResults(num1, num2);
