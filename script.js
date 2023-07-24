let boxEl = document.getElementById("box")
boxEl.addEventListener('input', function(){
    var text=this.value;
     var char=text.length;
     document.getElementById("char").innerHTML=char;
     
     text=text.trim();

     let words=text.split(" ");
       let cleanList=words.filter(function(elm){
        return elm!="";
       })      
    console.log(words)
    document.getElementById("word").innerHTML=cleanList.length;
})