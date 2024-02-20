function obtenerSaludoSegunHora(idioma) {
    const ahora = new Date();
    const horas = ahora.getHours();
  
    let saludo = "";
    if (idioma === "espa") {
        if (horas >= 5 && horas < 12) {
            saludo = "buenos días ";
        } else if (horas >= 12 && horas < 18) {
            saludo = "buenas tardes ";
        } else {
            saludo = "buenas noches ";
        }
    } else {
        if (idioma === "english") {
            if (horas >= 5 && horas < 12) {
                saludo = "good morning ";
            } else if (horas >= 12 && horas < 18) {
                saludo = "good afternoon ";
            } else {
                saludo = "good night ";
            }
        }
    }
  
    return saludo;
}

export default obtenerSaludoSegunHora;