var danhsachmuahang=JSON.parse(localStorage.getItem("giohang"));

if(danhsachmuahang==null){
    danhsachmuahang=new Array();
}
console.log(danhsachmuahang);

function Item(ob,soluong){
    this.ob=ob;
    this.soluong=soluong;
    this.showgiohang = function (items) {
        var nf=new Intl.NumberFormat();
        var div1=document.createElement("div");
            div1.setAttribute("class","item-gio-hang");
                 var div2=document.createElement("div");
                 div2.setAttribute("class","hinhanh");
                     var img=document.createElement("img");
                    img.setAttribute("src",products[this.ob].photo);
                    img.setAttribute("class","photosp");
                    div2.appendChild(img);
                    // 
                var txtp1=document.createTextNode(products[this.ob].name);
                var p1=document.createElement("p");
                p1.setAttribute("class","ten")
                p1.appendChild(txtp1);
                //
               
                var div3=document.createElement("div");
                div3.setAttribute("class","gia");
                    var txtsp1=document.createTextNode( nf.format(products[this.ob].discount)+"₫");
                    var span1=document.createElement("span");
                    span1.setAttribute("class","giaGoc")
                    span1.appendChild(txtsp1);
                   
                    var txtsp2=document.createTextNode( nf.format(products[this.ob].price)+"₫");
                    var span2=document.createElement("span");
                    span2.setAttribute("class","giaBan");
                    span2.setAttribute("id","giaBan");

                    span2.appendChild(txtsp2);
                div3.appendChild(span1);
                div3.appendChild(span2);
                //
                var input=document.createElement("input");
                input.setAttribute("type","number");
                input.setAttribute("name","soluong");
                input.setAttribute("class","soluong");
                input.setAttribute("onkeyup","thaydoisl(this)");
                input.setAttribute("onclick","thaydoisl(this)");
                input.setAttribute("value",soluong);
                //
               
                var txttt=document.createTextNode( nf.format(products[this.ob].price*this.soluong)+"₫");
                var p2=document.createElement("p");
                p2.setAttribute("class","tongtien");
                
                p2.appendChild(txttt);
                //
                var div4=document.createElement("div");
                div4.setAttribute("class","hanhdong");
                    var icon=document.createElement("i");
                    icon.setAttribute("class","ti-trash");
                    icon.setAttribute("onclick","deleteItems(this)")
                div4.appendChild(icon);
            div1.appendChild(div2);
            div1.appendChild(p1);
            div1.appendChild(div3);
            div1.appendChild(input);
            div1.appendChild(p2);
            div1.appendChild(div4);
            items.appendChild(div1);
    }
}
var mangsp=new Array();
function demsl(x, mang){
    var dem=0;
    for(var i=0;i<mang.length;i++){
        if(x==mang[i].id) dem++;
    }
    return dem;
}
for(var i=0;i<9;i++){
    if(demsl(i,danhsachmuahang)!=0){
        var item=new Item(i,demsl(i,danhsachmuahang));
        mangsp.push(item);
    }
}
console.log(mangsp);

function addGioHang(i){
    var pd=products[i];
    danhsachmuahang.push(pd);
    var json=JSON.stringify(danhsachmuahang);
    localStorage.setItem("giohang",json);
   
    alert("Thêm vào giỏ hàng thành công 🎉🎉🎉");
    location.reload();
}
// đưa các sản phẩm đã chọn xuống local
var sanphamdachon=new Array();
var spdamua= localStorage.getItem("spdamua");
function duaGioHangXuongLocal(){
    var tensps=document.getElementsByClassName("ten");
    var hinhanhs=document.getElementsByClassName("hinhanh");
    var soluongsps=document.getElementsByClassName("soluong");
    var tongtiensps=document.getElementsByClassName("tongtien");
    for(var i=1;i<tensps.length ;i++){
        var sp=new spdachon(0, tensps[i].innerHTML,hinhanhs[i].firstChild.src,soluongsps[i].value,tongtiensps[i].innerHTML);
        sanphamdachon.push(sp);
        var json=JSON.stringify(sanphamdachon);
    localStorage.setItem("spdamua",json);
    }
    location.href="./checkout.html";
}

document.getElementById("sl").innerText=mangsp.length;

// đưa giỏ hàng xuống local
var jsongiohang = JSON.stringify(mangsp);
localStorage.setItem("danhsanpham",jsongiohang);