import es_Mayor from "./calcularEdad";

function saludar(name, edad) {
    if (es_Mayor(edad))
        return "Sr. " + name;
    else
        return name;
}

export default saludar;