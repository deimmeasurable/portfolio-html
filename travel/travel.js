document.addEventListener("DOMContentLoaded",function (e) {
    console.log(e)
});

function handleClickEvent() {
    let element = document.getElementsByClassName("top-header-container")
     
    element[0].style.backgroundImage=
        `linear-gradient(rgba(0,0,0,527),rgba(0,0,0,0.5)),
        url('https://media.istockphoto.com/photos/happy-to-travel-again-picture-id1318138963?b=1&k=20&m=1318138963&s=170667a&w=0&h=G1iMYvMoYoMFPfJmIWs6sRbi79OKQ77nVQPC9J0euHQ=')`
    
     }
     function showModal(){
        let element = document.getElementsByClassName("container")
        let modalContainer = document.createElement("div")

        let closeButton = document.createElement("button")
        closeButton.innerText ="x"
        closeButton.style.border = "1px solid black"
            closeButton.style.borderRadius = "50%"
            closeButton.style.padding = "5%"
            closeButton.style.backgroundColor = "white"
            closeButton.style.float ="right"
            closeButton.style.fontWeight="bold"
            
            
            closeButton.addEventListener("click",function(e) {
                modalContainer.style.display = "none"
            })
            
            modalContainer.appendChild(closeButton)

        modalContainer.className ="show_modal"
        containerElement[0].appendChild(modalContainer)
     }

   
function handleInputChange(event) {
    console.log(event)

}