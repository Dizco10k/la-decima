import React from "react";
import ProductItem from './ProductItem';

import './ProductList.css'

const products = [
    {id:1, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:2, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:3, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:4, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:5, nameItem:'Sneakers', price:100000, image: './sc.png'}
]

function ProductList() {
    return (
<div className="product-list">
{products.map(product => (
<ProductItem key={product.id} product={product} />
))}
</div>
    );
}

export default ProductList;