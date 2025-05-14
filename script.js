// script.js  

// Funci�n para mostrar el formulario seg�n la opci�n seleccionada  
function mostrarFormulario() {  
    const seleccion = document.getElementById('calculoSeleccionado').value;  
    const formulario = document.getElementById('formulario');  
    formulario.innerHTML = '';  

    switch (seleccion) {  
        case 'velocidad':  
            formulario.innerHTML = `  
                <label>Distancia (m): <input type="number" id="valor1" required></label>  
                <label>Tiempo (s): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('velocidad')">Calcular</button>  
            `;  
            break;  
        case 'aceleracion':  
            formulario.innerHTML = `  
                <label>Velocidad final (m/s): <input type="number" id="valor1" required></label>  
                <label>Velocidad inicial (m/s): <input type="number" id="valor2" required></label>  
                <label>Tiempo (s): <input type="number" id="valor3" required></label>  
                <button type="button" onclick="calcular('aceleracion')">Calcular</button>  
            `;  
            break;  
        case 'fuerza':  
            formulario.innerHTML = `  
                <label>Masa (kg): <input type="number" id="valor1" required></label>  
                <label>Aceleraci�n (m/s^2): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('fuerza')">Calcular</button>  
            `;  
            break;  
        case 'trabajo':  
            formulario.innerHTML = `  
                <label>Fuerza (N): <input type="number" id="valor1" required></label>  
                <label>Distancia (m): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('trabajo')">Calcular</button>  
            `;  
            break;  
        case 'energiaCinetica':  
            formulario.innerHTML = `  
                <label>Masa (kg): <input type="number" id="valor1" required></label>  
                <label>Velocidad (m/s): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('energiaCinetica')">Calcular</button>  
            `;  
            break;  
        case 'energiaPotencial':  
            formulario.innerHTML = `  
                <label>Masa (kg): <input type="number" id="valor1" required></label>  
                <label>Altura (m): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('energiaPotencial')">Calcular</button>  
            `;  
            break;  
        case 'densidad':  
            formulario.innerHTML = `  
                <label>Masa (kg): <input type="number" id="valor1" required></label>  
                <label>Volumen (m�): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('densidad')">Calcular</button>  
            `;  
            break;  
        case 'presion':  
            formulario.innerHTML = `  
                <label>Force (N): <input type="number" id="valor1" required></label>  
                <label>�rea (m�): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('presion')">Calcular</button>  
            `;  
            break;  
        case 'carga':  
            formulario.innerHTML = `  
                <label>Carga (C): <input type="number" id="valor1" required></label>  
                <button type="button" onclick="calcular('carga')">Calcular</button>  
            `;  
            break;  
        case 'ohm':  
            formulario.innerHTML = `  
                <label>Voltaje (V): <input type="number" id="valor1" required></label>  
                <label>Resistencia (O): <input type="number" id="valor2" required></label>  
                <button type="button" onclick="calcular('ohm')">Calcular</button>  
            `;  
            break;  
        default:  
            break;  
    }  
}  

// Funci�n que realiza los c�lculos dependiendo de la opci�n  
function calcular(tipo) {  
    // Obtener valores como n�meros  
    const val1 = parseFloat(document.getElementById('valor1').value);  
    const val2 = parseFloat(document.getElementById('valor2') ? document.getElementById('valor2').value : null);  
    const val3 = parseFloat(document.getElementById('valor3') ? document.getElementById('valor3').value : null);  

    let resultado;  

    switch (tipo) {  
        case 'velocidad':  
            if (!isNaN(val1) && !isNaN(val2) && val2 !== 0) {  
                resultado = val1 / val2; // distancia / tiempo  
                mostrarResultado(`Velocidad: ${resultado.toFixed(2)} m/s`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'aceleracion':  
            if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3) && val3 !== 0) {  
                resultado = (val1 - val2) / val3; // (vf - vi) / t  
                mostrarResultado(`Aceleraci�n: ${resultado.toFixed(2)} m/s�`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'fuerza':  
            if (!isNaN(val1) && !isNaN(val2)) {  
                resultado = val1 * val2; // masa * aceleraci�n  
                mostrarResultado(`Fuerza: ${resultado.toFixed(2)} N`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'trabajo':  
            if (!isNaN(val1) && !isNaN(val2)) {  
                resultado = val1 * val2; // fuerza * distancia  
                mostrarResultado(`Trabajo: ${resultado.toFixed(2)} J`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'energiaCinetica':  
            if (!isNaN(val1) && !isNaN(val2)) {  
                resultado = 0.5 * val1 * Math.pow(val2, 2); // 1/2 m v�  
                mostrarResultado(`Energ�a Cin�tica: ${resultado.toFixed(2)} J`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'energiaPotencial':  
            if (!isNaN(val1) && !isNaN(val2)) {  
                const g = 9.81; // gravedad standard  
                resultado = val1 * g * val2; // m * g * h  
                mostrarResultado(`Energ�a Potencial: ${resultado.toFixed(2)} J`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'densidad':  
            if (!isNaN(val1) && !isNaN(val2) && val2 !== 0) {  
                resultado = val1 / val2; // masa / volumen  
                mostrarResultado(`Densidad: ${resultado.toFixed(2)} kg/m�`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'presion':  
            if (!isNaN(val1) && !isNaN(val2) && val2 !== 0) {  
                resultado = val1 / val2; // fuerza / �rea  
                mostrarResultado(`Presi�n: ${resultado.toFixed(2)} Pa`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'carga':  
            if (!isNaN(val1)) {  
                resultado = val1; // carga en Coulombs  
                mostrarResultado(`Carga el�ctrica: ${resultado.toFixed(2)} C`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos.');  
            }  
            break;  
        case 'ohm':  
            if (!isNaN(val1) && !isNaN(val2) && val2 !== 0) {  
                resultado = val1 / val2; // V / R = I  
                mostrarResultado(`Corriente: ${resultado.toFixed(2)} A`);  
            } else {  
                mostrarResultado('Ingresa valores v�lidos y R distinto de cero.');  
            }  
            break;  
        default:  
            mostrarResultado('Error.');  
    }  
}  

// Funci�n para mostrar resultados  
function mostrarResultado(texto) {  
    document.getElementById('resultado').innerText = texto;  
}