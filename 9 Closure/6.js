// Каков будет результат выполнения приведенного кода и почему?
// Tómendegi kodtı orınlaw nátiyjesi ne boladı hám ne ushın?

var num = 7;

function getNum() {
    var num = 8;
    function getValue() {
        return num;
    }
    return getValue;
}
var res = getNum();
console.log(res());

// Joqarıdaǵı kodtı orınlaw nátiyjesi 8 boladı.

//  Keling, ne ushın bunday bolǵanın kórip shıǵayıq :

//  num ózgeriwshisi global kólemde daǵaza etiledi hám 7 mánisi menen iske túsiriledi.

//  Keyin getNum () funksiyası anıqlanadı.getNum () funksiyası ishinde num ózgeriwshisi de daǵaza etiledi, lekin mánisi 8. Bul getNum () funksiyası ushın jergilikli qamtılǵan ózgeriwshi bolıp tabıladı.

//  getNum () funksiyası ishinde num ózgeriwshisiniń mánisin qaytarıwshı basqa getvalue () funksiyası anıqlanǵan.

//  getNum () funksiyası getvalue () funksiyasına siltemenı qaytaradı.

//  Sonnan keyin, res ózgeriwshisine getNum () funksiyasın orınlaw nátiyjesi, yaǵnıy getvalue () funksiyasına silteme beriledi.

//  Aqır-aqıbetde, res menen kórsetilgen funksiya console. log (res ()) menen shaqırıladı. Bul getNum () funksiyası ishindegi getvalue () funksiyasınıń orınlanıwına alıp keledi hám ol num ózgeriwshisiniń mánisin qaytaradı, yaǵnıy 8.

//  Num ózgeriwshisine kirisiw múmkin bolǵan getvalue () funksiyası ishinde ol bul ózgeriwshiniń bawırlas deklaratsiyasın qıdıradı jáne bul halda ol global emes, getNum () funkciyasınan num ózgeriwshisi ekenligin túsiniw zárúrli bolıp tabıladı. 7 ma`nisine iye bolǵan ózgeriwshen san.