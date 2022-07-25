import React from 'react'
import PropTypes from 'prop-types';

export default function Sale(props) {
    // calculate discount 
    let amount = props.qty * props.price
    let discount = amount * 0.10;
    if (props.qty > 2)
        discount = amount * 0.20;
    let net_amount = amount - discount;

    return (
        <>
            <h2>Sale Details</h2>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td style={{ textAlign: 'right' }}>{props.price}</td>
                    </tr>
                    <tr>
                        <th>Qty</th>
                        <td style={{ textAlign: 'right' }}>{props.qty}</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td style={{ textAlign: 'right' }}>{amount}</td>
                    </tr>
                    <tr>
                        <th>Discount</th>
                        <td style={{ textAlign: 'right' }}>{discount}</td>
                    </tr>
                    <tr>
                        <th>Net Amount</th>
                        <td style={{ textAlign: 'right' }}>{net_amount}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


Sale.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired
};