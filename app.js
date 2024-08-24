/*const imagen = document.getElementById('imageOverlay');*/









/*let aeiouDecryptionKeyObj = { //Objeto de desencriptacion para reemplazar vocales
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}*/








const aeiouEncryptionKeyObj = {//Objeto de encriptacion para reemplazar vocales
    
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'  
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
        document.getElementById('validationAlert').style.animation = "vibrar 0.5s infinite alternate"; 
        return outputText.value = '';
    }
    document.getElementById('validationAlert').style.animation = "";
    outputElement.value = '';
    const textToAppend = textEntry.replace(/[aeiou]/g,match => encryptionKey [match]);
    outputText.value += textToAppend;

}

function handleEncryptButton() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    encryptText(inputText, aeiouEncryptionKeyObj,outputText); // Pasa el objeto de encriptación
}

const encryptButton = document.getElementById('encryptButton'); 
encryptButton.addEventListener('click', (handleEncryptButton));
















