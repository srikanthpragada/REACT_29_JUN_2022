import React from 'react'

export default function Products() {
    const products = [
        { id: 1, title: 'Bose Speakers', price: 23000, disrate: 20 },
        { id: 2, title: 'Logitech MX Mouse', price: 12000, disrate: 30 },
        { id: 3, title: 'LG Monitor', price: 15000, disrate: 10 }
    ];

    return (
        <>
            <h2>Products List</h2>
            <table className="table table-bordered">
                <thead>
                    <PrintHead />
                </thead>
                <tbody>
                    {
                        products.map(
                            prod => <PrintProduct key={prod.id}
                                product={prod} />
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

function PrintHead() {
    return (
        <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Discount %</th>
            <th>Sale Price</th>
        </tr>
    )
}

function PrintProduct({ product }) {
    return (
        <tr>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.disrate}</td>
            <td>{product.price - (product.price * product.disrate / 100)}</td>
        </tr>
    )
}
