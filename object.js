
var obj ={
   one:"samadhi",
   two:"pasindu",
   three:{
     amma:"rathnayaka",
     tatta : {up:"uuu",down:"ddd"}
   },
   four:{
     col:"cool",
     hot:"sun"
   }
  
}



var k = Object.keys(obj);
console.log(k);

console.log(typeof(obj.three));

var t ='string';
var i =0;
var type;


function getObj(str){
  var list= str.split(".");
  var rdata=obj;
  for(var q =0;q<list.length;q++){
    console.log("qq : ",list[q]);
    rdata=rdata[list[q]];
  }
  console.log("rdata : ",rdata);
  return rdata
}




while(t=='string'){

  
  if( typeof(getObj(k[i])) =='object'){
   var nobj = getObj(k[i]);              // var nobj = obj[k[i]]; 
   var nk =Object.keys(  nobj );
   for(var p=0;p<nk.length;p++){
     k.push(k[i]+'.'+nk[p] );
   
   }
   //k.push(Object.keys(  nobj ));
 //   console.log("founde" , i ,k[i] ,"is object");
    
  }
  console.log("k++",k[i],i,"type:", typeof(obj[k[i]]) );
  
  i=i+1;
  if(i>=k.length){t=0;}
}




console.log(getObj(k[1]));

console.log(k);
