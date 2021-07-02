function fillcompy()
{ 
    
    removcomp()
 
    switch(pr.selectedIndex)
    {
        case 1:
            var pr1=["-CHOOSE COMPANY-","SAMSUNG","APPLE","MI"]
            fillpr(pr1)
            break;

        case 2:
            var pr2=["-CHOOSE COMPANY-","BOSE","JBL","BOAT"]  
            fillpr(pr2)
            break;

        case 3:
            var pr3=["-CHOOSE COMPANY-","Samsung","Sony"]  
            fillpr(pr3)
            break;
    }
}

function fillpr(array_company)
{ for(i=0;i<array_company.length;i++)
    { var opt=document.createElement("option")
      opt.text=array_company[i]
      opt.value=array_company[i]
      co.add(opt)
    }
}

function removcomp()
{
    for(i=co.options.length-1;i>=0;i--)
    {
        co.remove(i)
    }
}

function fillmodel()
{ removmod()
    switch(pr.selectedIndex) 
  {
      case 1:

    switch(co.selectedIndex)
    { case 1:
        var mod1=["-CHOOSE MODEL-","Galaxy F02s","Galaxy F12","Galaxy M42"]
        var pmod1=["0","17000","18000","20000"]
        fillmodl(mod1,pmod1)
        break;

        case 2:
        var mod2=["-CHOOSE MODEL-","Iphone 12 mini","Iphone 12 pro","Iphone 12"]
        var pmod2=["0","22000","21000","21500"]
        fillmodl(mod2,pmod2)
        break;

        case 3:
        var mod3=["-CHOOSE MODEL-","Xiaomi Mi 10T","Xiaomi Mi 11X","Xiaomi Redmi K20 Pro"]
        var pmod3=["0","15000","16500","23000"]
        fillmodl(mod3,pmod3)
        break;


    }
    break; 

    case 2:
  
     switch(co.selectedIndex)

  
     { case 1:
        var mod4=["-CHOOSE MODEL-"," Bose 700 "," Bose S1 Pro system ","Bose SoundTouch 20"]
        var pmod4=["0","30000","31000","35000"]
        fillmodl(mod4,pmod4)   
        break;

        case 2:
            var mod5=["-CHOOSE MODEL-"," JBL Flip Essential ","JBL Flip 3 Splashproof 16W","JBL GO3 4.2 W"]
            var pmod5=["0","37000","40000","45000"]
            fillmodl(mod5,pmod5)
            break;

        case 3:
            var mod6=["-CHOOSE MODEL-","boAt Stone 190F","boAt Stone 260"," boAt Stone 200 "]
            var pmod6=["0","48000","55000","60000"]
            fillmodl(mod6,pmod6)
            break;
     }
     break;     

     case 3:
    
     switch(co.selectedIndex)
        {
            case 1:
                var mod7=["-CHOOSE MODEL-"," Samsung TU8000 4K "," Samsung TU8570 4K "," Samsung Neo QLED "]
                var pmod7=["0","25600","28000","29000"]
                fillmodl(mod7,pmod7)
                break;

            case 2:
                var mod8=["-CHOOSE MODEL-"," Sony Bravia 4K Ultra HD "," Sony KLV-32R202 "," Sony 32 Inch LED "]
                var pmod8=["0","62617","24490","19894"]  
                fillmodl(mod8,pmod8)
       
             break;
         }
      break;
  }     

    

}

function fillmodl(array_model,pmodl)
{ 
    for(i=0;i<array_model.length;i++)
    { var opt=document.createElement("option")
      opt.text=array_model[i]
      opt.value=pmodl[i]
      mo.add(opt)

    }

}

function removmod()
{ for(i=mo.options.length-1;i>=0;i--)
    {
        mo.remove(i)
    }

}

function show()
{
    modimg.src=mo.options[mo.selectedIndex].text+".jpg"
    priz.innerHTML="<ins>PRICE:"+mo.options[mo.selectedIndex].value+"</ins>"
}


window.oncontextmenu=function(){
    console.log("Right Click Disabled");
    return false; 
}