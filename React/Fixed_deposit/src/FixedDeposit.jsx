import React from 'react';
import PropTypes from 'prop-types';
import './fd.css'
function FixedDeposit(props) {
    const maturityAmount = props.depAmt * (1 + (props.intRate / 100) * props.tenure);
    
    return (
        <div className='one'>
            <h2>Fixed Deposit Summary</h2>
            <p>Deposit Amount: {props.depAmt}</p>
            <p>Interest Rate: {props.intRate}</p>
            <p>Tenure: {props.tenure}</p>
            <p>Maturity Amount: {maturityAmount}</p>
        </div>
    );
}

FixedDeposit.propTypes = {
    depAmt: PropTypes.number,
    intRate: PropTypes.number,
    tenure: PropTypes.number
};

export default FixedDeposit;