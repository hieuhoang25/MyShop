//slideshow ảnh
var anhs=[
    "./img/1.png","./img/2.jpg","./img/3.png","./img/4.png"
];
var index=0;
function nextAnh(){
    index++
    if(index>=4) index=0;
    
        document.getElementById("slide").src=anhs[index];

}
function backAnh(){
    index--
    if(index<=0) index=3;
    
        document.getElementById("slide").src=anhs[index];
 
}
setInterval(() => {
 nextAnh();
}, 2000);
// hiện thị danh mục sản phẩm
function onLoad(){
    const menu=document.getElementById("menu");
    for (var value of course) {
    var vl=document.createTextNode(value);
    var tga=document.createElement("a");
    tga.setAttribute("href","");
    tga.appendChild(vl);
    menu.appendChild(tga);
    }
   
}
// Hiện thị sản phẩm
var handle=document.getElementById("products");
for(let i in products){
 var product=new Product(products[i].id,products[i].name,products[i].photo,products[i].discount,products[i].price);
 product.show(handle);
}
// Thòi gian
function getTimeNow(){
    var now= new Date();
    var h=now.getHours();
    if(h<10) {
        h="0"+h;
    }
   
    var m=now.getMinutes();
    if(m<10) m="0"+m;
    var s=now.getSeconds();
    if(s<10) s="0"+s;
    document.getElementById("gio").innerHTML=h;
    document.getElementById("phut").innerHTML=m;
    document.getElementById("giay").innerHTML=s;
    if(h<12){
        document.getElementById("sun").src="./img/littesun.png";
    }
    else
        if(h<18){
        document.getElementById("sun").src="./img/sun.png";

        }
        else 
        document.getElementById("sun").src="./img/moon 48px.png";

}
setInterval(() => {
    getTimeNow() 
 }, 1000);