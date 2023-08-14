// Определить, является ли введенное слово идентификатором, т.е. начинается ли оно с английской буквы в любом регистре или знака подчеркивания и не содержит других символов, кроме букв английского алфавита (в любом регистре), цифр и знака подчеркивания.

//birinshi háripti tekseremiz(ASCII), angliskiy hárip bolıwı kerek. Ekinshi, arasında belgiler qatnasqanba, yamasa yaq. 

let str = 'stRing';

function checkString(str){
    let id , firstletters , code;

    str = str.toLowerCase();
    code = str[0].codePointAt(0);
    if (96 < code && code < 123) {
        firstletters = true;
    }

    for (let i = 0; i < str.length; i++) {
        code = str[i].codePointAt(0);
        if (96 < code && code < 123 || 47 < code && code < 58 || code == 39) {
            id = true;
        }else{
            id = false;
            break;
        }        
    }
    return id && firstletters;
}

let hi = checkString(str);
console.log(hi);

//end 