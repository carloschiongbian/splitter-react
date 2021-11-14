import '../../components/TotalAmounts';

const CalculateFunctions = () => {

    const isValid = (percentage) => {
        var billAmount = document.getElementById("bill-amount").value;
        var noOfPeople = document.getElementById("no-of-people").value;
        
        if(noOfPeople === "0") {
            console.log("no-of-people warning");
            document.getElementById("no-of-people").style.border = "3px solid red";
            document.getElementById("no-of-people-warning").style.display = "block";

        } else {
            console.log("calculate condition");
            document.getElementById("no-of-people").style.border = "";
            document.getElementById("no-of-people-warning").style.display = "none";
            document.getElementById("reset").style.backgroundColor = "white";
            document.getElementById("reset").style.cursor = "pointer";
            Calculate(billAmount, percentage, noOfPeople);

        } 
    }

    const Calculate = (billAmount, percentage, noOfPeople) => {
        var tipAmountPerPerson = billAmount * percentage;
        document.getElementById("tip-amount-per-person").innerText = "$" + (parseInt( tipAmountPerPerson * 100 ) / 100).toFixed(2);

        var totalTipAmount = tipAmountPerPerson / noOfPeople;
        document.getElementById("total-amount").innerText = "$" + (parseInt( totalTipAmount * 100 ) / 100).toFixed(2);
    }

    return { isValid }
}

export default CalculateFunctions;