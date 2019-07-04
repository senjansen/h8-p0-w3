function balikString(str) {
    let reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(balikString('hello world!'));

//input "hello world!"
//output
//"!dlrow olleh"