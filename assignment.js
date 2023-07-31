var ammount=parseInt(prompt());
function calculateDiscount(x)
{
    if(x<50){
        return x=0;
       
    }
    else if(x>=50 && x<=100)
    {
        return x*0.05;

    }
     else if(x>=100 && x<=200)
    {
        return x*0.1;
     
    }
     else if(x>=200)
    {
        return x*0.15;
     
    }
    
}

var discount=(calculateDiscount(ammount));

var total=discount+ammount;
document.write(total);


console.log("discounted amount= "+discount.toFixed(3)+"    " +"total amount= "+total);



