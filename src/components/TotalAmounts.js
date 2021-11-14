import '../css/totalAmounts_layout/totalAmount.css';

const TotalAmounts = () => {

    const resetCalculator = () => {
        // Found in "UserInput.js"
        document.getElementById("bill-amount").value = "";
        document.getElementById("no-of-people").value = "";
        document.getElementById("no-of-people").style.border = "";
        document.getElementById("custom-tip").style.display = "block";
        document.getElementById("input-custom-tip").style.display = "none";
        document.getElementById("input-custom-tip").value = "";
        
        // Found in TotalAmounts.js
        document.getElementById("tip-amount-per-person").innerText = "$0.00";
        document.getElementById("total-amount").innerText = "$0.00";

        document.getElementById("reset").style.backgroundColor = "hsl(184, 14%, 56%)";
    }

    return (
        <div className="total-amounts">
            <div className="heading-and-subheading">
                <label>Tip Amount</label>
                <label htmlFor = "subheading">/ person</label>

                <label>Total</label>
                <label htmlFor = "subheading">/ person</label>
            </div>

            <div className="results">
                <div id="tip-amount-per-person">
                    <span>$0.00</span>
                </div>

                <div id="total-amount">
                    $0.00
                </div>
            </div>

            <div className="reset-button">
                <button name = "reset" id = "reset" onClick = {() => resetCalculator()}>RESET</button>
            </div>
        </div>
    );
}
 
export default TotalAmounts;