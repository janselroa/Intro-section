const btnMenu = document.querySelector(".icon-menu")
const container = document.querySelector(".menu-container")
const closeIcon = document.querySelector(".close-icon")
btnMenu.addEventListener("click",()=>{
	container.style.display="block"
})
closeIcon.addEventListener("click",()=>{
	container.style.display="none"	
})