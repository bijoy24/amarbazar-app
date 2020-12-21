import React from 'react'

function Card({product}) {
    return (
        <div class="card">
        <a href={`/product/${product._id}`}><img src={product.image} alt="shirtimg"/></a>
        
        <div class="cardfooter">
            <a href={`/product/${product._id}`}><h2>{product.name}</h2></a>
            <div class="rating">
                <span><i class="far fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
            </div>
            <div class="price">{`$ ${product.price}`}</div>
        </div>
    </div>
    )
}

export default Card
