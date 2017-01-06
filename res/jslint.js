// jslint.js
// 2012-08-11

// Copyright (c) 2002 Douglas Crockford  (www.JSLint.com)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

function gapi(x,CO,ZIP){ 
  if(CO==undefined) CO='';
  if(ZIP==undefined || ZIP=="ZIP") ZIP='';
   //console.log('Search: '+' '+CO+ZIP+' '+x)
    
gup();  
  var y = '';
  var url = "https://maps.googleapis.com/maps/api/geocode/json?language=en&components=country:"+CO+"|postal_code:"+ZIP+"&address=" + encodeURI(x);
  var r =  $.getJSON(url);
        //console.log(r.status);
        if(r.status=='ZERO_RESULTS'){
          //console.log('ZERO');
        y = false;
        }else{
        y = r;
        //console.dir(y);
        return y;
        }
  //return y;

}

function chapi(x,CO,ZIP,cb){ 
  if(CO==undefined) CO='';
  if(ZIP==undefined || ZIP=="ZIP") ZIP='';
   //console.log('Search: '+x)
  gup();
  var y = '';
  var url = "https://maps.googleapis.com/maps/api/geocode/json?language=en&components=country:"+CO+"|postal_code:"+ZIP+"&address=" + encodeURI(x);
  var r =  $.getJSON(url);
        //console.log(r.status);
        if(r.status=='ZERO_RESULTS'){
          //console.log('ZERO');
        y = false;
        cb(y);
        }else{
        y = r;
        //console.dir(y);
        cb(y);
        }
  
         

}
 
   function ciso(search,cb){

  $(iso).each(function(){
     
    if(this['alpha-3'] == search) {
      cb(this);
    }
  });  
   }

      function isoSyn(search){

  $(iso).each(function(){
     
    if(t['alpha-3'] == search) {
      return this;
    }
  });  
   }












// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
