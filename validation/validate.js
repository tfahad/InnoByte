function nameCheck() {
//TAKING VALUE OF INPUT TEXTBOX TO A CONSTANT VARIABLE 
const name_el = document.getElementById("name").value;
const email = document.getElementById("form-email").value;
const pwd = document.getElementById("form-pwd").value;


//TAKING PATTERN INTO A CONSTANT VARIABLE
const name_pattern=/^([a-zA-Z ]){2,30}$/;
const email_pattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const pwd_pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;




//IF FOR NAME
if (name_el==""){
    document.getElementById("span-1").style.display = "inline";
  }
else{
  document.getElementById("span-1").style.display = "none";
  if(!name_el.match(name_pattern)) {
    document.getElementById("span-1a").style.display= "inline";
  }
else{
    document.getElementById("span-1a").style.display= "none";
  }
}



//IF FOR EMAIL
if(email==""){
    document.getElementById("span-2").style.display = "inline";
  }
else{
    document.getElementById("span-2").style.display = "none";  
if(!email.match(email_pattern)){
    document.getElementById("span-2a").style.display = "inline";
  }
else{
        document.getElementById("span-2a").style.display = "none";  }
  }


//IF FOR PASSWORD
if(pwd==""){
    document.getElementById("span-3").style.display="inline";
   }
else{
    document.getElementById("span-3").style.display="none";
if(!pwd.match(pwd_pattern)){
          document.getElementById("span-3a").style.display="inline";
  }
else{
          document.getElementById("span-3a").style.display="none"
    }
   }

}