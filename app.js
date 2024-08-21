const imagen = document.getElementById('imageOverlay');
//const textarea = document.getElementById('');//





/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/


/*let aeiouDecryptionKeyObj = { //Objeto de desencriptacion para reemplazar vocales
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

function encryptText(textEntry,encryptionKey) {
    
    outputText.value = textEntry.replace(/[aeiou]/g,match => encryptionKey [match]);
    
}
encryptText(inputText,aeiouEncryptionKeyObj);
function encriptAnAppendText() {

const encrptedText = encryptText(inputText,aeiouEncryptionKeyObj);
    outputText.value += (outputText.value === "" ? "" : " ") + encrptedText;
    console.log('Encrypted text:', encryptText);
}   
encryptButton.addEventListener('click', (encryptText));





/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/

const aeiouEncryptionKeyObj = {//Objeto de encriptacion para reemplazar vocales
    
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'  
    }
    

function encryptText(textEntry,encryptionKey) {
    if (!/^[a-z0-9\s]+$/.test(textEntry)) {
        return outputText.value = '';
    }
    return textEntry.replace(/[aeiou]/g,match => encryptionKey [match]);
}
function handleEncryptButton() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText, aeiouEncryptionKeyObj); // Pasa el objeto de encriptación
    const outputText = document.getElementById('outputText');
    outputText.value = encryptedText;
}
function encriptAnAppendText() {
    if (!/^[a-z0-9\s]+$/.test(inputText)) {
        return outputText.value = '';
        
    }

    const encryptedNewText = encryptText(textEntry, encryptionKey);
    const outputText = document.getElementById('outputText');
    outputText.value +=  encryptedNewText;
}
const encryptButton = document.getElementById('encryptButton'); 
encryptButton.addEventListener('click', (handleEncryptButton));













