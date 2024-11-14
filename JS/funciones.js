function entraFoco(elemento) {
  elemento.style.backgroundColor = "lightblue";
}

function saleFoco(elemento) {
  elemento.style.backgroundColor = "";
}

function validarString(cadena, min, max) {
  var res = false;

  if (min == 0 && max != null) {
    if ((isNaN(cadena) && cadena.length <= max) || cadena == "") res = true;
  }

  if (min > 0 && max == null) {
    if (isNaN(cadena) && cadena.length >= min) res = true;
  }

  if (min > 0 && max != null) {
    if (isNaN(cadena) && cadena.length >= min && cadena.length <= max)
      res = true;
  }

  return res;
}
function validarNumber(cadena, min, max) {
  var res = false;
  if (!isNaN(cadena) && cadena.length >= min && cadena.length <= max) {
    if (parseInt(cadena.substr(0, 2)) > 52) {
      res = false;
    } else {
      res = true;
    }
  }
  return res;
}
function validarEmail(elemento) {
  var res = false;
  if (elemento.value === "") res = true;
  if (elemento.value != "") {
    var dato = elemento.value;
    var expresion =
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (expresion.test(dato)) {
      res = true;
    }
  }
  return res;
}
function validarTelefono(cadena) {
  res = false;
  var primerDigito = parseInt(cadena.value.charAt(0));
  if (cadena.value == "") {
    res = false;
  }
  if (
    cadena.value.length == 9 &&
    (primerDigito === 6 || primerDigito === 7 || primerDigito === 9)
  ) {
    res = true;
  }
  return res;
}

function cambiarDestinatario(radio) {
  document.getElementById("persona").setAttribute("hidden", "");
  document.getElementById("companhia").setAttribute("hidden", "");
  if (radio.value === "particular") {
    document.getElementById("persona").removeAttribute("hidden");
  } else if (radio.value === "empresa") {
    document.getElementById("companhia").removeAttribute("hidden");
  }
}

function calcularVolumetrico() {
  let alto = document.getElementById("alto").value;
  let ancho = document.getElementById("ancho").value;
  let largo = document.getElementById("largo").value;
  let pVolumetrico;
  pVolumetrico = (alto * ancho * largo) / 5000;
  document.getElementById("pVolumetrico").value = pVolumetrico.toFixed(2);
}

function validarFechaDes(fechaDes) {
  var res = true;
  var anho_actual = new Date().getFullYear();
  var dia_actual = new Date().getDate();
  var mes_actual = new Date().getMonth()+1
  var reGex_fecha = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
  anho = parseInt(fechaDes.split("/")[2]);
  dia = parseInt(fechaDes.split("/")[0]);
  mes = parseInt(fechaDes.split("/")[1]);
  dias_mes = new Date(anho, mes, 0).getDate();
  if (dia > dias_mes) return false;
  if (dia <= dia_actual+7) res = false;
  if(mes < mes_actual) res = false;
  if (!reGex_fecha.test(fechaDes)) return false;

  if (anho < anho_actual) res = false;
  
  return res;
}

function validarVia(vias){
  res = false
  if(vias ==""){
res = false
  }else{
    res = true
  }
  return res;
}

function checkActivo(elemento, inputt) {
  if (elemento.checked) {
    inputt.removeAttribute("disabled");
  } else {
    inputt.setAttribute("disabled", "disabled");
  }
}
function checkActivo2(elemento, inputt, inputt2) {
  if (elemento.checked) {
    inputt.removeAttribute("disabled");
    inputt2.removeAttribute("disabled");
  } else {
    inputt.setAttribute("disabled", "disabled");
    inputt2.setAttribute("disabled", "disabled");
  }
}

function validarIban(IBAN) {
  res = false;
  IBAN = IBAN.toUpperCase();
  IBAN = IBAN.trim();
  IBAN = IBAN.replace(/\s/g, "");

  var letra1, letra2, num1, num2;
  var isbanaux;
  var numeroSustitucion;

  if (IBAN.length != 24) {
    return false;
  }

  letra1 = IBAN.substring(0, 1);
  letra2 = IBAN.substring(1, 2);
  num1 = getnumIBAN(letra1);
  num2 = getnumIBAN(letra2);

  isbanaux = String(num1) + String(num2) + IBAN.substring(2);
  isbanaux = isbanaux.substring(6) + isbanaux.substring(0, 6);

  resto = modulo97(isbanaux);
  if (resto == 1) {
    res = true;
  } else {
    res = false;
  }
  return res;
}

function modulo97(iban) {
  var parts = Math.ceil(iban.length / 7);
  var remainer = "";

  for (var i = 1; i <= parts; i++) {
    remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
  }

  return remainer;
}

function getnumIBAN(letra) {
  ls_letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return ls_letras.search(letra) + 10;
}

var provincias = {
  1: "\u00C1lava",
  2: "Albacete",
  3: "Alicante",
  4: "Almer\u00EDa",
  5: "\u00C1vila",
  6: "Badajoz",
  7: "Baleares",
  8: "Barcelona",
  9: "Burgos",
  10: "C\u00E1ceres",
  11: "C\u00E1diz",
  12: "Castell\u00F3n",
  13: "Ciudad Real",
  14: "C\u00F3rdoba",
  15: "Coruña",
  16: "Cuenca",
  17: "Gerona",
  18: "Granada",
  19: "Guadalajara",
  20: "Guip\u00FAzcoa",
  21: "Huelva",
  22: "Huesca",
  23: "Ja\u00E9n",
  24: "Le\u00F3n",
  25: "L\u00E9rida",
  26: "La Rioja",
  27: "Lugo",
  28: "Madrid",
  29: "M\u00E1laga",
  30: "Murcia",
  31: "Navarra",
  32: "Orense",
  33: "Asturias",
  34: "Palencia",
  35: "Las Palmas",
  36: "Pontevedra",
  37: "Salamanca",
  38: "Santa Cruz de Tenerife",
  39: "Cantabria",
  40: "Segovia",
  41: "Sevilla",
  42: "Soria",
  43: "Tarragona",
  44: "Teruel",
  45: "Toledo",
  46: "Valencia",
  47: "Valladolid",
  48: "Vizcaya",
  49: "Zamora",
  50: "Zaragoza",
  51: "Ceuta",
  52: "Melilla",
};

function darProvincia(cpostal) {
  if (cpostal.length == 5 && cpostal <= 52999 && cpostal >= 1000) {
    var provinciaCp = provincias[parseInt(cpostal.substring(0, 2))];
    document.getElementById("provincia").value = provinciaCp;
  } else {
    document.getElementById("provincia").value = "Código postal inexistente";
  }
}
