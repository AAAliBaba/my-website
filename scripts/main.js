function playSuccessAnimation()
{
    document.getElementById("image").setAttribute("src", "images/bear2.gif");
    document.getElementById("image").setAttribute("width", "500");

    document.getElementById("selector").style.visibility="visible";

    document.getElementById("title").innerText = "WOOOOOOOO!!!!!";
    document.getElementById("subtitle").style.visibility="hidden";
}

function mouseOverEvent(elem)
{
    if (elem != elem.parentNode.firstChild)
    {
        elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
    }
    else
    {
        var yesButton = document.getElementById("yes-button");
        yesButton.parentNode.insertBefore(yesButton, yesButton.parentNode.firstChild);
    }
    
}

