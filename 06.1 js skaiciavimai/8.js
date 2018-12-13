var pirmas = 8;
var antras = 9;
var trecias = 15;

var suma = pirmas + antras;
var skirtumas = pirmas - antras;
var sandauga = pirmas * antras;
var dalmuo = pirmas / antras;
var suma2 = pirmas + antras + trecias;
var skirtumas2 = pirmas - antras - trecias;
var sandauga2 = pirmas * antras * trecias;
var dalmuo2 = pirmas / antras / trecias;

document.getElementById("suma").innerHTML = pirmas + "+" + antras + "=" + suma;
document.getElementById("skirtumas").innerHTML = pirmas + "-" + antras + "=" + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas + "*" + antras + "=" + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas + "/" + antras + "=" + dalmuo;


document.getElementById("suma2").innerHTML = pirmas + "+" + antras + "+" + trecias + "=" + suma2;
document.getElementById("skirtumas2").innerHTML = pirmas + "-" + antras + "-" + trecias + "=" + skirtumas2;
document.getElementById("sandauga2").innerHTML = pirmas + "*" + antras + "*" + trecias + "=" + sandauga2;
document.getElementById("dalmuo2").innerHTML = pirmas + "/" + antras + "/" + trecias + "=" + dalmuo2;