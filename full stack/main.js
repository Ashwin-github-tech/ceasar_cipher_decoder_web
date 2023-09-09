    function decode() {
    var input = document.getElementById('input').value;
    var shift = parseInt(document.getElementById('shift').value);
    var output = '';
    for (var i = 0; i < input.length; i++) {
        var charCode = input.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            output += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            output += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            output += input.charAt(i);
        }
    }
    document.getElementById('output').textContent = 'Decoded message: ' + output;
}