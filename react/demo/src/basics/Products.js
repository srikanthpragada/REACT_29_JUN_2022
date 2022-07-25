import React from 'react'

export default function Products() {
    const products = [
        { title: 'Bose Speakers', price: 23000, disrate: 20 },
        { title: 'Logitech MX Mouse', price: 12000, disrate: 30 },
        { title: 'LG Monitor', price: 15000, disrate: 10 }
    ];

    return (
        <>
            <h2>Products List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Discount %</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod, idx) =>
                            <tr key={idx}>
                                <td>{prod.title}</td>
                                <td>{prod.price}</td>
                                <td>{prod.disrate}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

