import { useParams } from "react-router";
import { useProduct } from "../../Context/product";
const SingleProduct = () => { 
    const { productId } = useParams();
    const {products} = useProduct();
    const singleProduct = products?.find((item) => item._id === productId);
    return(
        <div className="productDetails-wrapper">
         <img src={singleProduct}/>
        </div>
    )
}
 
export  {SingleProduct};