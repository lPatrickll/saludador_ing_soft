import es_Mayor from "./calcularEdad";
import genero from "./generoJS";

function saludar(name, edad, gen, idioma) {
    if (idioma === "espa") {
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
    } else {
        if (idioma === "english") {
            if (es_Mayor(edad))
                if (genero(gen))
                    return "Mr. " + name;
                else
                    return "Mrs. " + name;
            else
                if (genero(gen))
                    return "Young " + name;
                else
                    return "Miss " + name;
        }
    }
}

export default saludar;