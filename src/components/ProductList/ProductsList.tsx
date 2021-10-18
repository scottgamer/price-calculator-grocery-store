import React from "react";

import { Button, List, ListItem } from "@mui/material";
import Product from "../../interfaces/Product";

interface ProductsListProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductsList = ({ products, setProducts }: ProductsListProps) => {
  return (
    <List>
      {products.map((product, index) => (
        <ListItem key={product.name}>
          <label style={{ minWidth: "4rem" }}>{product.name}</label>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              if (product.quantity < 1) {
                return;
              }

              const updatedProducts = [...products];
              updatedProducts[index] = {
                ...product,
                quantity: product.quantity - 1,
              };
              setProducts([...updatedProducts]);
            }}
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
            onClick={() => {
              const updatedProducts = [...products];
              updatedProducts[index] = {
                ...product,
                quantity: product.quantity + 1,
              };
              setProducts([...updatedProducts]);
            }}
          >
            +
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsList;
