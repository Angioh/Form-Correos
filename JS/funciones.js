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

function cambiarDestinatario(radio){

    document.getElementById('persona').setAttribute('hidden',"");
            document.getElementById('companhia').setAttribute('hidden',"");
    if (radio.value === 'particular') {
        document.getElementById('persona').removeAttribute('hidden');
    } else if (radio.value === 'empresa') {
        document.getElementById('companhia').removeAttribute('hidden');
    }
}



lala