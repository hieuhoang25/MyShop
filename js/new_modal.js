class New{
    constructor(photo, heading, title, date){
        this.photo = photo;
        this.heading = heading;
        this.title = title;
        this.date = date;
    }
    show(hander){
        var div=document.createElement("div");
            div.setAttribute("class","new")
            var img=document.createElement("img");
                img.setAttribute("src",this.photo);
            var div1=document.createElement("div");
                div1.setAttribute("class","info-new");
                    var txta=document.createTextNode(this.heading);
                  var a=document.createElement("a");
                    a.setAttribute("href","");
                    a.appendChild(txta);

                    var txtp=document.createTextNode(this.title);
                  var p1=document.createElement("p");
                     p1.setAttribute("class","text-new");
                     p1.appendChild(txtp);

                   var p2=document.createElement("p");
                     p2.setAttribute("class","calendar-new");
                        var i=document.createElement("i");
                            i.setAttribute("class","ti-calendar");
                        var txtp=document.createTextNode(this.date);
                           var span=document.createElement("span");
                            span.appendChild(txtp);
                    p2.appendChild(i);
                    p2.appendChild(span);
                div1.appendChild(a);
                div1.appendChild(p1);
                div1.appendChild(p2);
        div.appendChild(img);	
        div.appendChild(div1);
        hander.appendChild(div);

    }
}