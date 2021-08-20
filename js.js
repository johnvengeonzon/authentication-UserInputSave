var email=[
  
  
  
  
  ]
  var pass=[
    ]
  
  
  
  function create(){
   var username1=document.getElementById("username1").value
    var password1=document.getElementById("password1").value





  if(username1!=""&& password1!=""){
    alert("Created successfully")
    email.push(username1);
    pass.push(password1);
    window.open("log-in.html")
  }
  
  if(username1==""&&password1==""){
    alert("please input username and password")
  }
  else if(username1==""){
    alert("Please input username")
  }
  else if(password1==""){
    alert("Please input Password")
  }
  
  
   
    
    
    
  }
  
  function login(){
    var username2=document.getElementById("username2").value
    var password2=document.getElementById("password2").value
    
    if(username2==email&& password2==pass&&username2!=""&& password2!="")
    {  alert("Log-in successfully")
    
   window.open("newpage.html");
    }
    if(username2!=email&&password2!=pass&&username2!=""&& password2!="")
  {
    alert("wrong username and password")
  }
   else if(username2!=email&&password2!=pass){
      alert("wrong username and password")
    }
    else if(username2!=email){
      alert("wrong username")
      
    }
    else if(password2!=pass){
      alert("wrong password")
    }
    if(username2=="" && password2==""){
      alert("Please input username and password")
    }
   else if(username2==""){
      alert("Please input username")
    }
    else if(password2==""){
      alert("please input password")
    }
    
    
    
  }