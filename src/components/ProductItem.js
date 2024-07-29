import React from "react";
import './ProductItem.css';

function ProductItem({product}) {
    return(
        <div className="product-item">
            <img src={product.image} alt={product.nameItem} />
            <h3>{product.nameItem}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductItem;