/* Name: Ansh Singh Sachdev
Student Number: 156187213
Email: asachdev2@myseneca.ca
Section: ZBB */


function ShowHideDiv(obj) {
    var hiring = document.getElementById("hiring");
    var rateTxt = document.getElementById("rateTxt");
    rateTxt.style.display = hiring.checked ? "block" : "none";
    if (hiring.checked) {
        var rateInput = document.getElementById("rate");
        rate.setAttribute("required", true);
    }
}
