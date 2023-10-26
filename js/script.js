let name=document.querySelector("#name");
let email=document.querySelector("#email");
let mess=document.querySelector("#mess");
let submit=document.querySelectorAll(".submit");
let error=document.querySelectorAll(".error");


for (const submits of submit) {
    submits.addEventListener("click",()=>{
        let n=name.value;
        console.log(n);
        

        if(name=="" || email=="" ||  mess==""){
            for (const errors of error) {
                error.innerHTML="Fill Details";
            }
          
        }
        else if((name=="" ){

        }
    })
}

 