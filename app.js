function ShowHideDiv(obj) {
    var hiring = document.getElementById("hiring");
    var rateTxt = document.getElementById("rateTxt");
    rateTxt.style.display = hiring.checked ? "block" : "none";
    if (hiring.checked) {
        var rateInput = document.getElementById("rate");
        rate.setAttribute("required", true);
    }
}
