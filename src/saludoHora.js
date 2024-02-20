function obtenerSaludoSegunHora() {
    const ahora = new Date();
    const horas = ahora.getHours();
  
    let saludo = "";
  
    if (horas >= 5 && horas < 12) {
        saludo = "buenos días ";
    } else if (horas >= 12 && horas < 18) {
        saludo = "buenas tardes ";
    } else {
        saludo = "buenas noches ";
    }
  
    return saludo;
}

export default obtenerSaludoSegunHora;