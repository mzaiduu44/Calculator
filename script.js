let str = ""; 
let buttons = document.querySelectorAll(".btn"); 
let inputField = document.querySelector("input")

Array.from(buttons).forEach((item) => {
    item.addEventListener("click", (e) => {
        const clickedValue = e.currentTarget.value || e.target.innerHTML; 

        if (clickedValue === "=") {
            str = eval(str); 
            inputField.value = str
            inputField.style.backgroundColor = "rgba(129, 219, 137, 0.744)"
        } else if (clickedValue === "C") {
            str = ""; 
            inputField.value = str
            inputField.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        } else if (clickedValue === "B") {
            console.log(str)
            console.log("test",inputField.value.length)
            str = str.slice(0,inputField.value.length-1) 
            console.log(str)
            inputField.value = str
            inputField.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        } else {
            console.log(str)
            str += clickedValue;
            console.log(str)
            document.querySelector("input").value = str; 
        }
        console.log(clickedValue)
    });
});
