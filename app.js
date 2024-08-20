const imagen = document.getElementById('imageOverlay');
//const textarea = document.getElementById('');//





/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/


let aeiouDecryptionKeyObj = { //Objeto de desencriptacion para reemplazar vocales
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

const inputText= document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const aeiouEncryptionKeyObj = { //Objeto de encriptacion para reemplazar vocales
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};
function encryptText(encryptionKey) {
    outputText.value = inputText.value.replace(/[aeiou]/g,match => encryptionKey [match]);
    console.log(outputText.value);
}
encryptText(aeiouEncryptionKeyObj);
encryptButton.addEventListener('click', (encryptText));
        
    
    





/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/

