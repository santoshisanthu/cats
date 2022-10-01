"use strict"

const generate_btn = document.querySelector(".generate_btn");

generate_btn.onclick = async () => { 
    console.log()

const res = await fetch(`https://catfact.ninja/fact`,
{method:'GET', redirect:'follow'})
.then(response => response.json())
.then(result =>{
    return result
})
.catch(error => console.log('error',error))
console.log(res)

document.getElementById("catfact").innerHTML = res.fact
}

 



