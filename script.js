const buttons = document.querySelectorAll('.button');

buttons.forEach((element) => {
    element.addEventListener("mousedown", function(){
        element.style.backgroundColor = '#1C1C1C';
    })
    element.addEventListener("mouseout" || "mouseout", function(){
        element.style.backgroundColor = '';
        element.style.color = '';
    })
    element.addEventListener("mouseup" || "mouseout", function(){
        element.style.backgroundColor = '';
        element.style.color = '';
    })
})
console.log(buttons)
