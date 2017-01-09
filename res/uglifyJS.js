
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
 
   function ciso(search,cb,cb2){
    var res = false;
  $(iso).each(function(){
     
    if(this['alpha-3'] == search) {
      res = true;
      cb(this);
    } 
  }); 
  if(res == false){
      cb2(res); 
  }
   }

      function isoSyn(search){

  $(iso).each(function(){
     
    if(t['alpha-3'] == search) {
      return this;
    }
  });  
   }
