export function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");
    
    if(headerToggle){
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");

            headerToggle.getAttribute("aria-expanded") === "true" 
            ? headerToggle.setAttribute("aria-expanded", "false") 
            : headerToggle.setAttribute("aria-expanded", "true");/* 아래 if문과 동일 */
        });
    }    

        // if(headerToggle.getAttribute("aria-expanded") === "true"){
        //     headerToggle.setAttribute("aria-expanded", "false")
        // } else {
        //     headerToggle.setAttribute("aria-expanded", "true");
        // }



    
};