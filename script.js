const contenedor = document.getElementById('cronologia');
if (typeof datos !== 'undefined') {
    let htmlTotal = "";
    datos.forEach((matematico, indice) => {
        const claseLado = indice % 2 === 0 ? 'izquierda' : 'derecha';
        const htmlTarjeta = `
            <div class="tarjeta ${claseLado}">
                <div class="contenido">
                    <span class="etiqueta-fecha">
                        ${matematico.fecha_nacimiento} ${matematico.era_nacimiento} - 
                        ${matematico.fecha_fallecimiento ? matematico.fecha_fallecimiento : ''} 
                        ${matematico.era_fallecimiento ? matematico.era_fallecimiento : ''}
                    </span>
                    <h2>${matematico.nombre}</h2>
                    <span class="lugares">
                        <strong>Nacimiento:</strong> ${matematico.lugar_nacimiento} <br>
                        ${matematico.lugar_fallecimiento ? `<strong>Fallecimiento:</strong> ${matematico.lugar_fallecimiento}` : ''}
                    </span>
                    <p>${matematico.resumen}</p>
                </div>
            </div>
        `;
        htmlTotal += htmlTarjeta;
    });
    contenedor.innerHTML = htmlTotal;
} else {
    contenedor.innerHTML = "<p style='text-align:center; color:red;'>Error: No se encontró el archivo datos.js</p>";
}