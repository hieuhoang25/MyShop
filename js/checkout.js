class spdachon{
    constructor(giamgia, tensp,photo, soluong, tienthanhtoan){
        this.giamgia=giamgia;
        this.tensp=tensp;
        this.photo=photo;
        this.soluong=soluong,
        this.tienthanhtoan=tienthanhtoan
    }
    showds(handle){
        var div=document.createElement("div");
        div.setAttribute("class","item");
            var img=document.createElement("img");
            img.setAttribute("src",this.photo);
            var div2=document.createElement("div");
                div2.setAttribute("class","tensp-soluong");
                    var txtp1=document.createTextNode(this.tensp);
                    var p1=document.createElement("p");
                        p1.setAttribute("class","tensp");
                        p1.appendChild(txtp1);
                    var txt2=document.createTextNode(this.soluong);
                    var p2=document.createElement("p");
                    p2.innerHTML="SL: ";
                    p2.setAttribute("class","soluong");
                     var strong=document.createElement("strong");
                        strong.appendChild(txt2);
                    p2.appendChild(strong);
                div2.appendChild(p1);
                div2.appendChild(p2);
            var p3=document.createElement("p");
            p3.setAttribute("class","tiensp");
            var txtp3=document.createTextNode(this.tienthanhtoan);
            p3.appendChild(txtp3);
        div.appendChild(img);
        div.appendChild(div2)
        div.appendChild(p3);
        handle.appendChild(div);
    }
}