
const button = document.querySelector("button")

function ActiveButton(){
    mostrarValorInput()
}

function mostrarValorInput(){
    let valorDoInput = document.querySelector("input").value;

    let li = document.createElement("li")

    li.innerHTML = valorDoInput + `<span onclick="deleteSpanX()">❌</span>`

    document.querySelector("ul").appendChild(li)

    valorDoInput = " "

}

function deleteSpanX(){
    const spanX = document.querySelector("span")

    spanX.parentElement.remove()
}

