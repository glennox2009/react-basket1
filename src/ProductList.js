import './productList.css';
import products from "./products.json";
import Product from "./product";
import {useDispatch} from "react-redux";
import {AddToBasket} from './actions';


console.log(products)
function ProductList() {

  const dispatch = useDispatch();

  const productList = products.map((product) =>
    <Product onClick={() => dispatch(AddToBasket(product))} key={product.id} name={product.title} image={product.image} price={product.price} description={product.description}/>
  );

  return (
    <div className="productList">
      <h1>Products</h1>
      {productList}
    </div>
  );
}

export default ProductList;
