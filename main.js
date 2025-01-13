


document.addEventListener("DOMContentLoaded" ,()=> {
    const savedBackGroundColor = localStorage.getItem("backgroundcolor");
    if(savedBackGroundColor)
    {
        document.body.style.backgroundColor = savedBackGroundColor;
        document.getElementById("colorpicker").value = savedBackGroundColor;
    }
});

document.getElementById("colorpicker").addEventListener("input",(event)=> {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor= selectedColor;
    localStorage.setItem("backgroundcolor",selectedColor);

});