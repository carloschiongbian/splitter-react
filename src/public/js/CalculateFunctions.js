import "../../components/TotalAmounts";

const CalculateFunctions = () => {
  const isValid = (percentage) => {
    var billAmount = Number(document.getElementById("bill-amount").value);
    var noOfPeople = Number(document.getElementById("no-of-people").value);

    if (noOfPeople === 0) {
      document.getElementById("no-of-people").style.border = "3px solid red";
      document.getElementById("no-of-people-warning").style.display = "block";
    } else {
      document.getElementById("no-of-people").style.border = "";
      document.getElementById("no-of-people-warning").style.display = "none";
      document.getElementById("reset").style.backgroundColor = "white";
      document.getElementById("reset").style.cursor = "pointer";
      Calculate(billAmount, percentage, noOfPeople);
    }
  };

  const Calculate = (billAmount, percentage, noOfPeople) => {
    if (isNaN(billAmount) || billAmount === 0) {
      document.getElementById("total-amount").innerText = `$${(0).toFixed(2)}`;
      return;
    }

    var tipAmountPerPerson = billAmount * percentage;
    document.getElementById("tip-amount-per-person").innerText =
      "$" + ((Number(tipAmountPerPerson) * 100) / 100).toFixed(2);

    var totalTipAmount = tipAmountPerPerson / noOfPeople;
    document.getElementById("total-amount").innerText =
      "$" + ((Number(totalTipAmount) * 100) / 100).toFixed(2);
  };

  return { isValid };
};

export default CalculateFunctions;
