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
    if (parseInt(cadena.substr(0, 2)) > 100) {
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


ValidateSpanishID = (function() {
  'use strict';
  
  var DNI_REGEX = /^(\d{8})([A-Z])$/;
  var CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
  var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

  var ValidateSpanishID = function( str ) {

    // Ensure upcase and remove whitespace
    str = str.toUpperCase().replace(/\s/, '');

    var valid = false;
    var type = spainIdType( str );

    switch (type) {
      case 'nif':
        if(document.getElementById("tipoId").value!="NIF") valid =false;
        else valid = validDNI( str );
        break;
      case 'nie':
        if(document.getElementById("tipoId").value!="NIE") valid =false;
        valid = validNIE( str );
        break;
      case 'cif':
        if(document.getElementById("tipoId").value!="CIF") valid =false;
        valid = validCIF( str );
        break;
    }

    return valid
   

  };

  var spainIdType = function( str ) {
    if ( str.match( DNI_REGEX ) ) {
      return 'nif';
    }
    if ( str.match( CIF_REGEX ) ) {
      return 'cif';
    }
    if ( str.match( NIE_REGEX ) ) {
      return 'nie';
    }
  };

  var validDNI = function( dni ) {
    var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
    
    return letter == dni.charAt(8);
  };

  var validNIE = function( nie ) {

    // Change the initial letter for the corresponding number and validate as DNI
    var nie_prefix = nie.charAt( 0 );

    switch (nie_prefix) {
      case 'X': nie_prefix = 0; break;
      case 'Y': nie_prefix = 1; break;
      case 'Z': nie_prefix = 2; break;
    }

    return validDNI( nie_prefix + nie.substr(1) );

  };

  var validCIF = function( cif ) {

    var match = cif.match( CIF_REGEX );
    var letter  = match[1],
        number  = match[2],
        control = match[3];

    var even_sum = 0;
    var odd_sum = 0;
    var n;

    for ( var i = 0; i < number.length; i++) {
      n = parseInt( number[i], 10 );

      // Odd positions (Even index equals to odd position. i=0 equals first position)
      if ( i % 2 === 0 ) {
        // Odd positions are multiplied first.
        n *= 2;

        // If the multiplication is bigger than 10 we need to adjust
        odd_sum += n < 10 ? n : n - 9;

      // Even positions
      // Just sum them
      } else {
        even_sum += n;
      }

    }

    var control_digit = (10 - (even_sum + odd_sum).toString().substr(-1) );
    var control_letter = 'JABCDEFGHI'.substr( control_digit, 1 );

    // Control must be a digit
    if ( letter.match( /[ABEH]/ ) ) {
      return control == control_digit;

    // Control must be a letter
    } else if ( letter.match( /[KPQS]/ ) ) {
      return control == control_letter;

    // Can be either
    } else {
      return control == control_digit || control == control_letter;
    }

  };

  return ValidateSpanishID;
})();