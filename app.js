function myFunction() {
    console.log("myFunction called");
    var element = document.querySelector ('.general-container');
    element.classList.toggle("dark-mode");
}

const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const encryptorOutput = document.querySelector('.encryptor__output');



/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/
encryptButton.addEventListener('click', () => {
    const inputText = document.getElementById('  inputText').value;
    const encryptedText = inputText.replace(/enter|imes|ai|ober|ufat/g ,match => ({
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
    })[match]);
    // Update the output with the encrypted text (replace with your logic)
    console.log(encryptedText); 
});


function decryptText(text) {
    const decryptingMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
    };
    const decryptedText = text.replace(/enter|imes|ai|ober|ufat/g ,match => decryptingMap[match]);
    return decryptedText; // Return the decrypted text
}

/*function setTextAndShowOutput(text) {
    encryptorOutput.querySelector('.textarea--output').value = text;
    encryptorOutput.classList.add('show-output');
}*/

/*function encryptText(text) {
    const encryptingMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
    };
    const encryptedText = text.replace(/enter|imes|ai|ober|ufat/g ,match => encryptingMap[match]);
    return encryptedText; // Return the encrypted text
}

function decryptText(text) {
    const decryptingMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
    };
    const decryptedText = text.replace(/enter|imes|ai|ober|ufat/g ,match => decryptingMap[match]);
    return decryptedText; // Return the decrypted text
}

    encryptorOutput.classList.add('show-output');
    

    encryptButton.addEventListener('click', () => {

        console.log('Encrypt button clicked!');
        encryptText(document.getElementById('inputText').value);
});

    decryptButton.addEventListener('click', () => {
    console.log('Decrypt button clicked!');
    decryptText(document.getElementById('inputText').value); 
    });
    */