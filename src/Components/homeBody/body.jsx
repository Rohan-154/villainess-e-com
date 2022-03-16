import { useFetch } from "../../custom-hooks/useFetch";


const Body = () => {
    const {data:products, error, loader} = useFetch('/api/products')
    console.log(products)
    return (  
     <>
     {error && <p> {error}</p>}
     {loader && <p> Loading... </p>}
     {products && <p> {products.map((items)=>(
         <p>{items.title}</p>
     ))} </p>}
     </>
    );
}
 
export {Body};