/*const imagen = document.getElementById('imageOverlay');*/









/*let aeiouDecryptionKeyObj = { //Objeto de desencriptacion para reemplazar vocales
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}*/






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
function getInputText() {
    return document.getElementById('inputText').value;
    }

function encryptText(textEntry,encryptionKey,outputElement) {
    if(!textEntry.trim()) {
        return outputText.value = '';
}
document.querySelectorAll('#imgMissText, #noFoundText, #requestImputText').forEach(element => {
    element.style.display = 'none';// se usa forEach recorre cada elemento y lo oculta individuamente
});
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

const inputText = document.getElementById('inputText');
inputText.addEventListener('input', () => {
const inputValue = getInputText(); 
    if (inputValue.trim() === '') {
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
    const inputText = getInputText();
    const outputText = document.getElementById('outputText');
    encryptText(inputText, aeiouEncryptionKeyObj,outputText); // Pasa el objeto de encriptación
}

function decryptText(textEntry) {
    textEntry = inputText.value;
    /*return textEntry.replace(/ai|enter|imes|ober|ufat/g,match => aeiouEncryptionKeyObj [match]);*/
    const decryptedText = textEntry.replace(/ai|enter|imes|ober|ufat/g, match => aeiouDecryptionKeyObj[match]);

  console.log(decryptedText); // or do something with the decrypted text
  outputText.value = decryptedText;
}

const encryptButton = document.getElementById('encryptButton'); 
encryptButton.addEventListener('click', (handleEncryptButton));
decryptButton.addEventListener('click', decryptText);
















