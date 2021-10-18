import React from "react";

import { Button, List, ListItem } from "@mui/material";
import Product from "../../interfaces/Product";

interface ProductsListProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductsList = ({ products, setProducts }: ProductsListProps) => {
  const addProduct = (product: Product, index: number) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...product,
      quantity: product.quantity + 1,
    };
    setProducts([...updatedProducts]);
  };

  const removeProduct = (product: Product, index: number) => {
    if (product.quantity >= 1) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...product,
        quantity: product.quantity - 1,
      };
      setProducts([...updatedProducts]);
    }
  };

  return (
    <List>
      {products.map((product, index) => (
        <ListItem key={product.name}>
          <label style={{ minWidth: "4rem" }}>{product.name}</label>
          <Button
            variant="outlined"
            size="small"
            onClick={() => removeProduct(product, index)}
          >
            -
          </Button>
          <input
            style={{
              width: "2rem",
              margin: "0 0.5rem",
              padding: "5px 0.7rem",
              border: "1px solid #1976D2",
              borderRadius: "4px",
            }}
            type="number"
            name=""
            readOnly
            value={product.quantity}
          />
          <Button
            variant="outlined"
            size="small"
            onClick={() => addProduct(product, index)}
          >
            +
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsList;
