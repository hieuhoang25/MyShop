// xây dựng lớp sản phẩm
class Product{
    constructor(id, name, photo, discount, price){
        this.id=id;
        this.name=name;
        this.photo=photo;
        this.discount=discount;
        this.price=price;
    }
    show(handle){
        var nf=new Intl.NumberFormat();
        var div=document.createElement("div");
        div.setAttribute("class","product");
        // 
       
        var img=document.createElement("img");
        img.setAttribute("src",this.photo);
        img.setAttribute("alt","");
        
        //
        var txta=document.createTextNode(this.name);
        var a=document.createElement("a");
        a.setAttribute("href","");
        a.appendChild(txta);

        //
        var pdnam=document.createTextNode(nf.format(this.discount)+"₫");
        var pd=document.createElement("p");
        pd.setAttribute("class","discount");
        pd.appendChild(pdnam);
        //
        var ppnam=document.createTextNode(nf.format(this.price)+"₫");
        var pp=document.createElement("pp");
        pp.setAttribute("class","price");
        pp.appendChild(ppnam);
        //
        var btnnam=document.createTextNode("Mua Ngay");
        var btn=document.createElement("button");
        btn.setAttribute("onclick","addGioHang("+this.id+")");
        btn.appendChild(btnnam);
        
        //
        div.appendChild(img);
        div.appendChild(a);
        div.appendChild(pd);
        div.appendChild(pp);
        div.appendChild(btn);
        handle.appendChild(div);

    }
  
}
