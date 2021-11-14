import '../css/calc_layout/calc_layout.css';
import UserInput from './UserInput';
import TotalAmounts from './TotalAmounts';

const CalculatorLayout = () => {
    return (
        <div className="calculator-layout"> 
            
            <div className="left-section">
                <UserInput />
            </div>

            <div className="right-section">
                <TotalAmounts />
            </div>
        </div>
    );
}
 
export default CalculatorLayout;