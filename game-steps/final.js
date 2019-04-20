var myLink = document.getElementById('mylink');
var c =0;
var strikes = 0;
var word;
var secret = [];
var pass=0;
function startgame(){
if(c==0){
 word =document.getElementById("word").value;        
for (i = 0; i < word.length; i++) {
  secret.push("_");
}
result.innerText = secret.join(" ")+" player2 enter the secrect";
  linkbtn.innerText = "check";
        document.getElementById('word').value = '';
c++;
}
    else{
   var letter=document.getElementById('word').value;
  
        while(strikes < 3 && secret.indexOf("_") >= 0){
   if (word.indexOf(letter) < 0) {

    strikes++;
 var div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.background = "red";
    div.style.margin="5px";
    div.style.color = "white";
    div.innerHTML = letter;
	div.style.display="inline-block";
	div.style.borderRadius ="5px";
    document.getElementById("mainbad").appendChild(div);
    document.getElementById('word').value = '';
	break;

  } else {

    for (i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        secret[i] = letter;
		result.innerText = secret;
        document.getElementById('word').value = '';	
      }
    }
    break;
  }

    }
  if (strikes === 3) {
   result.innerText="U Loss the secret word is "+word;
            document.getElementById("m").style.display="none";
            document.getElementById('result').style.color="white";
            document.getElementById("myDiv").style.backgroundColor = "red  ";
		
			gameover
}if( arraysEqual(word,secret)){
             result.innerText="U win";
             document.getElementById("m").style.display="none";
            document.getElementById('result').style.color="white";
                 document.getElementById("myDiv").style.backgroundColor = "green";



         }

   
}

    

}




    function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

