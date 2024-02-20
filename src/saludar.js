import es_Mayor from "./calcularEdad";
import genero from "./generoJS";

function saludar(name, edad, gen) {
    if (es_Mayor(edad))
        if (genero(gen))
            return "Sr. " + name;
        else
            return "Sra. " + name;
    else
        if (genero(gen))
            return "Joven " + name;
        else
            return "Señorita " + name;
}

export default saludar;