
const textareaImput = document.getElementById('imputText');
const clearButton = document.getElementById('clearButton');
const formatButtom = document.getElementById('formatButton');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton'); 
const copyButton = document.getElementById('copyButton');
const aeiouEncryptionKeyObj = {//Objeto de encriptacion para reemplazar vocales
    
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'  
}
const aeiouDecryptionKeyObj = { //Objeto de desencriptacion para reemplazar vocales
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}
function getImputText() {
    return document.getElementById('imputText').value;
    }

function hideOutputElements() {
    document.querySelectorAll('#imgMissText, #noFoundText, #requestImputText').forEach(element => {// se usa forEach recorre cada elemento y lo oculta individuamente
        element.style.display = 'none';
    });
    
}
function encryptText(textEntry,encryptionKey,outputElement) {
    if(!textEntry.trim()) {
        return outputText.value = '';
}
    hideOutputElements();
    document.getElementById('outputText').style.display = 'block';


if (!/^[a-z0-9\s]+$/.test(textEntry)) {
    document.getElementById('validationAlert').style.animation = "vibrate 0.5s infinite alternate"; 
        return outputText.value = '';
}
document.getElementById('validationAlert').style.animation = "";
    outputElement.value = '';
    const textToAppend = textEntry.replace(/[aeiou]/g,match => encryptionKey [match]);
    outputText.value += textToAppend;
}

    const imputText = document.getElementById('imputText');
    imputText.addEventListener('imput', () => {
const imputValue = getImputText(); 
    if (imputValue.trim() === '') {
        copyButton.classList.add('hidden');
    }  
    else {
        copyButton.classList.remove('hidden');
    }
});

    copyButton.addEventListener('click', () => {
    const encryptedText = document.getElementById('outputText').value;

    if (encryptedText) {
        navigator.clipboard.writeText(encryptedText)
            .then(() => {
                
})
            .catch(error => {
                console.error('Error al copiar al portapapeles:', error);
            });
    } else {
        alert('No hay texto para copiar.');
    }
});

function handleEncryptButton() {
    const imputText = getImputText();
    const outputText = document.getElementById('outputText');
    encryptText(imputText, aeiouEncryptionKeyObj,outputText); // Pasa el objeto de encriptación
}

function decryptText(textEntry) {
    hideOutputElements();
    textEntry = imputText.value;
    const decryptedText = textEntry.replace(/ai|enter|imes|ober|ufat/g, match => aeiouDecryptionKeyObj[match]);
    console.log(decryptedText); 
    outputText.value = decryptedText;
}

function formatText(textEntry) {
    return textEntry.replace(/[^a-z0-9\s]/gi, '').toLowerCase();
}


encryptButton.addEventListener('click', (handleEncryptButton));
decryptButton.addEventListener('click', decryptText);
formatButtom.addEventListener('click', () => {
    imputText.value = formatText(imputText.value);
});
clearButton.addEventListener('click', () => { //la funcion esta directamente dentro del eventListener
    const textAreasToClear = document.querySelectorAll('#imputText, #outputText');
    textAreasToClear.forEach(textArea => {
        textArea.value = '';
    });
});
textareaImput.addEventListener('imput', () => {
    if(textareaImput.value.length > 4000) {
        textareaImput.value = textareaImput.value.substring(0, 1000);
    }
});














