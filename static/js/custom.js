var title = document.getElementById("title");
var price = document.getElementById("price");
var taxces = document.getElementById("taxces");
var ads = document.getElementById("ads");
var dicount = document.getElementById("dicount");
var count = document.getElementById("count");
var category = document.getElementById("category");
var total = document.getElementById("total");
var submit = document.getElementById("submit");

// function get cotal

function getTotal() {
    if (price.value != null) {
        var result = +price.value * +count.value + +taxces.value - +dicount.value + +ads.value;
        total.innerHTML = result;
        total.style.backgroundColor = "green";
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = "red";
    }
};
var lisPro;
if (localStorage.lisPro != null) {
    var lisPro = JSON.parse(localStorage.lisPro);
} else {
    var lisPro = [];
}
submit.onclick = function () {
    var pro = {
        title: title.value,
        price: price.value,
        taxces: taxces.value,
        ads: ads.value,
        dicount: dicount.value,
        count: count.value,
        category: category.value,
        total: total.value

    }
    lisPro.push(pro);
    localStorage.setItem("lisPro", JSON.stringify(lisPro));
    console.log(lisPro);
    clearinputs();
}

function clearinputs(){
    title.value = "";
    price.value = "";
    taxces.value = "";
    ads.value = "";
    dicount.value = "";
    count.value = "";
    category.value = "";
    total.value = "";
}
function showData(){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbody");
    for (var i = 0 ;i<lisPro.lenght;i++){
    }


}