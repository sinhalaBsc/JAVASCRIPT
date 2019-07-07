
/* object එකක් තුල ඇති key සහ values එක්ව loop කිරීම.
   [link >> https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members]
*/
// I. the keys need to be accessed,

//the of and Object.keys approach

let k;
for (k of Object.keys(obj)) {

    /*        k : key
     *   obj[k] : value
     */
}


// the in approach

let k;
for (k in obj) {

    /*        k : key
     *   obj[k] : value
     */
}


// the ES7 approach

for (const [key, value] of Object.entries(YOUR_OBJECT)) {
    console.log(key , value);
  }
  
//  II. we just need to access each values,

//the of and Object.values approach

let v;
for (v of Object.values(obj)) {

}
  

// Caching Object.keys or Object.values performance is negligible

const keys = Object.keys(obj);
let i;
for (i of keys) {
  //
}
// same as
for (i of Object.keys(obj)) {
  //
}

/*
  * For Object.values case, using a native for loop with cached variables in Firefox seems to be a little
    faster than using a for...of loop. However the difference is not that important and Chrome is running
    for...of faster than native for loop, so I would recommend to use for...of when dealing with 
    Object.values in any cases (4th and 6th tests).

  * In Firefox, the for...in loop is really slow, so when we want to cache the key during the iteration it
    is better to use Object.keys. Plus Chrome is running both structure at equal speed (1st and last tests).
*/
  
  
//  [link >> https://stackoverflow.com/questions/43773092/how-to-sort-objects-by-value]
  
