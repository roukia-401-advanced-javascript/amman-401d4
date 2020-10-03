'use strict';

let string = 'Laith:Pa$$word';

let bcrypt = require('bcrypt');
let base64 = require('base-64');

console.log("------- encoding -------");

let encoded = base64.encode(string);
console.log("encoded >>>>> ",encoded);

let decoded = base64.decode(encoded);
console.log("decoded > >>> ",decoded);

console.log('--- Encryption : Hashing -----');

encrypt(string, 10);


async function encrypt(password, complexity) {
    let hashed = await bcrypt.hash(password, complexity);
    console.log("hashed ::: ",hashed);

    let hashedResult = '$2b$10$QwlaF/SlFXWL49II3ElOne1XNm26uoBjJJNmxBQ3clvHsz.j1N.K.';
    let hashedResult2 = '$2b$10$ZgiNSQYRtZEU5/KoIc28Xu0yGXDWsbyw60rArRIuZQ.iXRAcBV7eu';
    let changedHashedResult = '$2b$10$ZgiNSEYRtZEU5/KoIc28Xu0yGXDWsbyw60rArRIuZQ.iXRAcBV7eu';

    let isValidHash = await bcrypt.compare(password, hashedResult); 
    
    console.log("isValidHash >>>> ",isValidHash)
    let isValidHash2 = await bcrypt.compare(password, hashedResult2); 
    console.log("isValidHash2 >>>> ",isValidHash2);

    let isValidHash3 = await bcrypt.compare(password, changedHashedResult); 

    console.log("isValidHash3 ---> ",isValidHash3)
    

}
