let elements=document.getElementsByClassName("ss")

searKaro=()=>{
    let input=document.getElementById("search").value.toLowerCase()
    
    for(let i=0;i<elements.length;i++){
        
        if(!elements[i].innerHTML.toLowerCase().includes(input)){
            elements[i].parentElement.style.display="none"
        }
        else{
            elements[i].parentElement.style.display="block" 
        }
    }
}