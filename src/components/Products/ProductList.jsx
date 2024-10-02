import ProductItem from "./ProductItem";
import { usePro } from "../../Context/ProductsProvider";
function ProductList({ items }) {
  const { isGridView } = usePro();
  return (
    
    <div>
      <div
        className={`basis-3/4 ${
          isGridView ? "grid grid-cols-1 gap-4" : "grid grid-cols-3  gap-4"
        }`}
      >
        {items.map((d,i) => {
          return (
            <div key={i}>
              <ProductItem   {...d} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
