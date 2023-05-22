
let project = document.querySelector(".project-covers").children
  if(document.body.clientWidth>1025){
    
  }
  else{
      [...project].forEach(item=>{
          console.log(item)
       
          item.querySelector(".hideTitle").style.opacity= "1"
          item.querySelector(".hideTitle").style.paddingTop= "80px"
          
          item.querySelector(".hideTitle").style.lineHeight= "30px"
  })
  document.querySelector(".Projects").onclick= function(){
      document.querySelector(".Projects_click").style.display='block'
  }
  }