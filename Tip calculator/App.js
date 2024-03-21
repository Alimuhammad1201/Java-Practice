const billamount = document.querySelector("#bill-amount");
const tippercantage = document.querySelector("#tip-percantage");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#total-bill");


calculate.addEventListener("click", (e) =>{
    if(billamount.value === "" || tippercantage.value === ""){
        alert("Please Enter The Value");
        return;
    } else if(billamount.value < 0 || tippercantage.value < 0 ){
        alert("please Enter Your Positive Value");
        return;
    } else{
        const billamountvalue = parseFloat(billamount.value);
        const tippercantagevalue = parseFloat(tippercantage.value);
        const tipamount = billamountvalue * (tippercantagevalue/100);
        const totalbill = billamountvalue + tipamount;
        output.innerText = totalbill;
      }
    
});
