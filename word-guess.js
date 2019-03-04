window.onload=function()
{
    /*hide/show placeholder (start) */
    var secret=document.getElementById('secret'),
    guess=document.getElementById('guess');
    secret.onfocus=function()
    {
        
        secret.setAttribute("del",this.getAttribute("placeholder"));
        secret.setAttribute("placeholder",'');

    }
    secret.onblur=function()
    {
        
        secret.setAttribute("placeholder",this.getAttribute("del"));
        secret.setAttribute("del",'');

    }
        /*hide/show placeholder (end) */
    var i,
    dashed=document.getElementById('dashed'),
    btn0 =document.getElementById('btn0'),
    word=[];
    btn0.onclick=function()
    {
            secret.setAttribute("type","hidden");
            btn0.textContent="You are playing Now.. ";
      var  Secr=secret.value.length;
         for( i=0 ; i<Secr; i++)
         {
             word[i]="_ ";
         }
         dashed.innerHTML=word;
    }
    var  chance=3;
    check=document.getElementById('check'),
    btn =document.getElementById('btn')
    err=document.getElementById('err');
    btn.onclick=function()
    {     
      var guessLetter=guess.value;
        var  secretWord=secret.value;
        
          if(chance == 0)
          {
            btn0.textContent="Play Again !";
            btn0.onclick=function()
            {
              window.location="Gametask.html";
            }
         
              check.innerHTML="You lose the Game !";
              
          }
          else
          {
            if(secretWord.search(guessLetter)== -1 && word.indexOf("_ ") >= 0)
            { 
               var space="  ";
              check.innerHTML="Wrong";
            
             err.innerHTML += guessLetter.concat(space);
             chance--;
              
                }
            
             else{
               var j;
               
             for(var j=0 ;j< secret.value.length; j++)
             {
                 if(secretWord[j] === guessLetter)
                 {
                    word[j]=guessLetter;
                 }
              
             }
             dashed.innerHTML=word;
             check.innerHTML="";
             if( word.indexOf("_ ") <= 0 && chance >= 0)
               { btn0.textContent="Play Again !";
               btn0.onclick=function()
               {
                 window.location="Gametask.html";
               }
               check.innerHTML="Congratulation You Win!";
               }
             }
          }
        
            }
           
         
   
}