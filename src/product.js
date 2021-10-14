import './product.css';

function Product(props) {
    return (
        <div className="singleProduct">
            <div className="productImage">
                <img alt="" src={props.image}/>
            </div>
            <h3>{props.name}</h3>
            <p>{truncateWithEllipses(props.description,100)}</p>
            <p>{props.price.toFixed(2)} Euro <button onClick={props.onClick}>Add</button></p>

        </div>
    );
}

function truncateWithEllipses(text, max)
{
    return text.substr(0,max-1)+(text.length>max?'...;':'');
}

export default Product;
