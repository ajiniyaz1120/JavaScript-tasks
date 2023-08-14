// Что выведется в консоль?

var theArray = ['1', '2', '3'].map(parseInt);
console.log(theArray);

// Túsindiriw:
//  map () usılı massivtiń hár bir elementi ushın parseInt funksiyasın shaqıradı ['1', '2', '3']. Biraq, parseInt eki argumentti aladı : nomerge aylantırilatuǵın qatar hám sanaq sistemasınıń tiykarı (ádetde ekinshi argument retinde kórsetilgen).

//  Bunday halda, birinshi element '1' onlıq jazıw járdeminde 1 nomerine tabıslı aylantırıladı. Biraq, qalǵan "2" hám " 3" elementleri ushın parseInt olardı massivtegi ámeldegi elementtiń indeksi bolǵan ekinshi argument járdeminde nomerlerge aylandırıwǵa háreket etedi. Sonday etip, konvertatsiya tómendegishe boladı :

//  1 tıyanaqlı '2' (indeks 0) 2 nomerine aylantırıladı. Bul jerda hesh qanday mashqala joq.
//  Baza 2 (indeks 1) menen '3' NaN (Nomer emes) ge aylantırıladı. Óytkeni, kasrda 3 joq ekenligi, sol sebepli konvertatsiya áwmetsiz tamamlandı.
//  Sonday etip, nátiyjede biz konsolda kórsetiletuǵın [1, NaN, NaN] massivti alamız.