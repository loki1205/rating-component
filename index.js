const numbers = document.querySelectorAll(".number");
var count;
for (let number of numbers)
{
    number.onclick = function(){
        for (let number2 of numbers)
        {
            number2.classList.remove("selected");
            number2.classList.remove("no-hover");
            number.id = "selected"
        }
        number.classList.add("selected");
        number.classList.add("no-hover");
        count = number.textContent;
        localStorage.setItem("count",count);
    }
}

document.getElementById("submit").onclick = function(){
    var f = document.getElementById("frm");
    if(count===0 || count==undefined)
    {
        alert("Please rate us!")
    }
    else
    {   
        f.setAttribute('action',/rating-component/completed.html");
    }
    return true;
}
