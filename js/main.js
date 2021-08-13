function get_vn_Time(){
    var time=new Date();
    var dow=time.getDay();
    switch (dow) {
        case 0:
            dow="Chủ nhật";
            break;
            case 1:
                dow="Thứ 2";
                break;
                case 2:
                    dow="Thứ 3";
                    break;
                    case 3:
                        dow="Thứ 4";
                        break;
                        case 4:
                            dow="Thứ 5";
                            break;
                            case 5:
                                dow="Thứ 6";
                                break;
                                case 6:
                                    dow="Thứ 7";
                                    break;
    }
    var day=time.getDate();
    var month=time.getMonth()+1;
    var year=time.getFullYear();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    setTimeout("get_vn_Time()",1000);
    var fullTime=dow+" "+day+"/"+month+"/"+year+" "+h+":"+m+":"+s;
    document.getElementById("time").innerHTML=fullTime;

}
get_vn_Time();
var slx=sessionStorage.getItem('soLanXem');
if(slx==null) slx=0;



document.getElementById("giai").disabled=true;
function choSo(){
        var a=Math.floor(Math.random()*11);
         var b=Math.floor(Math.random()*11);   
        var c=Math.floor(Math.random()*11);
     document.forms["my_form"]["hsa"].value=a;
     document.forms["my_form"]["hsb"].value=b;
     document.forms["my_form"]["hsc"].value=c;
     document.getElementById("giai").disabled=false;
}
function check(){
    document.getElementById("giai").disabled=false;
}
function PTB2(hesoa, hesob, hesoc){
    this.hesoa=hesoa;
    this.hesob=hesob;
    this.hesoc=hesoc;
    this.giaPT= function() {
        var a=this.hesoa;
        var b=this.hesob;  
        var c=this.hesoc;
        if(a==0){
            if(b==0){
                if(c==0) {
                    document.getElementById("result-heading").innerHTML="Phương trình vô số nghiệm !";
                    document.getElementById("result-main").innerHTML="";
                }
                else{
                    document.getElementById("result-heading").innerHTML="Phương trình vô nghiệm !";
                    document.getElementById("result-main").innerHTML="";
                    
                }
            }
            else{
                var x=-c/b;
                document.getElementById("result-heading").innerHTML="Phương trình có 1 nghiệm :";
                document.getElementById("result-main").innerHTML="x = "+x.toFixed(2);
            }
        }
        else{
            var denta=b*b-4*a*c;
            if(denta==0){
                var x=-b/(2*a);
                document.getElementById("result-heading").innerHTML="Phương trình có nghiệm kép :";
                document.getElementById("result-main").innerHTML="x1, x2 = "+x.toFixed(2);
            }
            else{
                if(denta<0) {
                    document.getElementById("result-heading").innerHTML="Phương trình vô nghiệm !";
                    document.getElementById("result-main").innerHTML="";
                    
                }
                else{
                    var x1=(-b+Math.sqrt(denta))/(2*a);
                    var x2=(-b-Math.sqrt(denta))/(2*a);
                    document.getElementById("result-heading").innerHTML="Phương trình có nghiệm có 2 nghiệm phân biệt :";
                    document.getElementById("result-main").innerHTML="x<sub>1</sub> = "+x1.toFixed(2)+ " "+", x<sub>2</sub> = "+x2.toFixed(2);
                }
            }
        }
    }
}
function giai_Pt(){
    var a=document.forms["my_form"]["hsa"].value;
    var b=document.forms["my_form"]["hsb"].value;
    var c=document.forms["my_form"]["hsc"].value;
    var hesoa=Number(a);
    var hesob=Number(b); 
    var hesoc=Number(c);
    var pt=new PTB2(hesoa,hesob,hesoc);
    pt.giaPT();
    slx++;
    sessionStorage.setItem('soLanXem',slx);
    document.getElementById("slg").innerHTML=slx;
}
