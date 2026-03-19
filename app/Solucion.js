conversiones = {
  temperatura: {
    "c-f": v => v * 9/5 + 32,
    "c-k": v => v + 273.15,
    "f-c": v => (v - 32) * 5/9,
    "f-k": v => (v - 32) * 5/9 + 273.15,
    "k-c": v => v - 273.15,
    "k-f": v => (v - 273.15) * 9/5 + 32,
  },
  longitud: {
    "m-cm":  v => v * 100,
    "m-km":  v => v / 1000,
    "cm-m":  v => v / 100,
    "cm-km": v => v / 100000,
    "km-m":  v => v * 1000,
    "km-cm": v => v * 100000,
  },
  peso: {
    "kg-g":  v => v * 1000,
    "kg-lb": v => v * 2.20462,
    "g-kg":  v => v / 1000,
    "g-lb":  v => v / 453.592,
    "lb-kg": v => v / 2.20462,
    "lb-g":  v => v * 453.592,
  },
};
 
function convertir(valor, origen, destino) {
  try {
    if (valor === null || valor === undefined || isNaN(valor))
      throw new Error("El valor debe ser un número válido.");
 
    valor  = Number(valor);
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();
 
    if (origen === destino) return `${valor} ${origen} = ${valor} ${destino}`;
 
    const clave = `${origen}-${destino}`;
 
    for (const categoria of Object.values(conversiones)) {
      if (clave in categoria)
        return `${valor} ${origen} = ${categoria[clave](valor).toFixed(2)} ${destino}`;
    }
 
    throw new Error("Las unidades no son válidas o no pertenecen a la misma categoría.");
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
 
// Ejemplos de uso
console.log(convertir(25,  "C",   "F"  ));
console.log(convertir(5,   "km",  "m"  ));
console.log(convertir(10,  "kg",  "lb" ));
console.log(convertir("abc", "kg", "g" ));
console.log(convertir(100, "kg",  "m"  ));

