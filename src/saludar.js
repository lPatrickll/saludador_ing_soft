import es_Mayor from "./calcularEdad";
import genero from "./generoJS";

function saludar(name, edad, gen) {
    if (es_Mayor(edad))
        if (genero(gen))
            return "Sr. " + name;
        else
            return "Sra. " + name;
    else
        return name;
}

export default saludar;