function encryptText(text) {
    const encryptingMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g ,match => encryptingMap[match]);
    }

function decryptText(text) {
    const decryptingMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g ,match => decryptingMap[match]);
    }

function copyText() {
    const text = document.getElementById("inputText").value;
    navigator.clipboard.writeText(text);
    alert("Copiado al portapapeles");
}
