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
    showData();
}

function clearinputs(){
    title.value = "";
    price.value = "";
    taxces.value = "";
    dicount.value = "";
    ads.value = "";
    count.value = "";
    category.value = "";
    total.value = "";
}


function showData(){
   
    let table= "";
    for (let i = 0 ;i<lisPro.length;i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${lisPro[i].title}</td>
        <td>${lisPro[i].price}</td>
        <td>${lisPro[i].taxces}</td>
        <td>${lisPro[i].ads}</td>
        <td>${lisPro[i].dicount}</td>
        <td>${lisPro[i].category}</td>
        <td><button>delet</button></td>
        <td><button>update</button>tt</td>
    </tr>   `;
    document.getElementById("tbody").innerHTML = table;
    }
   
}