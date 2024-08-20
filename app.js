const imagen = document.getElementById('imageOverlay');
//const textarea = document.getElementById('');//

const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const encryptorOutput = document.querySelector('.encryptor__output');



/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/
let aeiouEncryptionKeyObj = { //Objeto de encriptacion para reemplazar vocales
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}
let aeiouDecryptionKeyObj = { //Objeto de desencriptacion para reemplazar vocales
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}
const inputText = document.getElementById('inputText')
const outputText = document.getElementById('outputText');
function encryptText() {
    outputText.value = inputText.value.replace(/[aeiou]/g,match => aeiouEncryptionKeyObj [match]);
    console.log(outputText.value);
}
    encryptButton.addEventListener('click', (encryptText));
        
    
    





/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/

