import '../css/userInput_layout/userInput_layout.css';
import CalculateFunctions from '../public/js/CalculateFunctions';

const UserInput = () => {

    const { isValid } = CalculateFunctions();

    const inputCustomTip = () => {
        document.getElementById("custom-tip").style.display = "none";
        document.getElementById("input-custom-tip").style.display = "block";
        document.getElementById("reset").style.backgroundColor = "white";
    }

    const convertTipAmount = () => {
        var customTip = document.getElementById("input-custom-tip").value;
        var percentage = customTip / 100;
        isValid(percentage);
    }

    return (

        <div className="user-inputs">
            <label>Bill</label>
            <input type = "number" name = "bill-amount" id = "bill-amount" placeholder = "0" />

            <label>Select Tip %</label>
            <div className="tip-options">
                <button name = "five-percent" onClick = {() => isValid(0.05)}>5%</button>
                <button name = "ten-percent" onClick = {() => isValid(0.10)}>10%</button>
                <button name = "fifteen-percent" onClick = {() => isValid(0.15)}>15%</button>
                <button name = "twentyfive-percent" onClick = {() => isValid(0.25)}>25%</button>
                <button name = "fifty-percent" onClick = {() => isValid(0.5)}>50%</button>
                <button name = "custom-tip" id = "custom-tip" onClick = {() => inputCustomTip()}>Custom</button>
                <input type = "number" name = "input-custom-tip" id = "input-custom-tip" onKeyUp = {() => convertTipAmount()} />
            </div>
            
            <label htmlFor = "no-of-people-label">Number of People</label>
            <label htmlFor = "no-of-people-warning" id = "no-of-people-warning">Can't be zero</label>
            <input type = "number" name = "no-of-people" id = "no-of-people" onKeyUp = {() => isValid()} placeholder = "0" />

            
        </div>

    );
}
 
export default UserInput;