// Función para encriptar texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

// Función para desencriptar texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

// Función para validar y normalizar el texto
function normalizeAndValidateText(text) {
    // Convertir a minúsculas y eliminar acentos
    let normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Verificar que solo contenga letras minúsculas y espacios
    const regex = /^[a-z\s]*$/; 
    if (!regex.test(normalizedText)) {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
        return null; // Devolver null si el texto no es válido
    }
    return normalizedText;
}

// Capturar elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

// Evento para encriptar
encryptBtn.addEventListener('click', () => {
    let text = inputText.value;
    text = normalizeAndValidateText(text); // Normalizar y validar el texto
    if (text !== null) {
        const encryptedText = encryptText(text);
        outputText.textContent = encryptedText;
        copyBtn.classList.remove('hidden');
    }
});

// Evento para desencriptar
decryptBtn.addEventListener('click', () => {
    let text = inputText.value;
    text = normalizeAndValidateText(text); // Normalizar y validar el texto
    if (text !== null) {
        const decryptedText = decryptText(text);
        outputText.textContent = decryptedText;
        copyBtn.classList.remove('hidden');
    }
});

// Evento para copiar el texto
copyBtn.addEventListener('click', () => {
    const text = outputText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

// Validar entrada en tiempo real
inputText.addEventListener('input', () => {
    let text = inputText.value;
    text = normalizeAndValidateText(text);
    if (text === null) {
        inputText.value = ''; // Limpiar el campo si el texto no es válido
    } else {
        inputText.value = text; // Aplicar la normalización al campo de texto
    }
});


