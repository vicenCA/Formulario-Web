/* FUNCTION */
function mostrarDNI(){
    document.getElementById('dniLabel').style.display = 'block';
    document.getElementById('rutLabel').style.display = 'none';
}

function mostrarRUT(){
    document.getElementById('rutLabel').style.display = 'block';
    document.getElementById('dniLabel').style.display = 'none';
}

function refresh(){
    document.location.reload();
}

var getData = function submitFunction() {
                var nombre = document.getElementById('nombre').value;
                var apellido = document.getElementById('apellido').value;
                var correo = document.getElementById('email').value;
                var dni = document.getElementById('dni').value;
                var rut = document.getElementById('rut').value;

                if (nombre == "" || apellido == ""){
                    document.getElementById('casillaNombre').style.display = 'block';
                }
                else{
                    if (correo == ""){
                        document.getElementById('casillaNombre').style.display = 'block';
                    }
                    else{
                        if(dni == "" || !esDNI()){
                            document.getElementById('casillaDNI').style.display = 'block';
                        }
                        else{
                            if (rut == "" || !esNumero()){
                                document.getElementById('casillaRut').style.display = 'block';
                            }
                            else {
                                document.getElementById('datosEnviados').innerHTML = "Datos enviados";
                            }
                        }
                    }
                }
            }

function esNumero(): boolean{
    var numero = document.getElementById("rut").value;
    if( isNaN(numero)) {
        return false;
    }
}

function esDNI(): boolean{
    var cadena = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(cadena)) ) {
        return false;
    }

    if(cadena.charAt(8) != letras[(cadena.substring(0, 8))%23]) {
        return false;
    }
}
