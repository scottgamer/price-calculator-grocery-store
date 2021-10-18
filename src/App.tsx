import React, { useState } from "react";

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Product from "./interfaces/Product";
import ProductsList from "./components/ProductList/ProductsList";

const applySale = (product: Product): string => {
  if (
    product.saleQuantity &&
    product.salePrice &&
    product.quantity >= product.saleQuantity
  ) {
    return (
      product.salePrice * Math.floor(product.quantity / product.saleQuantity) +
      product.price * (product.quantity % product.saleQuantity)
    ).toFixed(2);
  }
  return (product.price * product.quantity).toFixed(2);
};

function App() {
  const defaultProducts: Product[] = [
    { name: "Milk", quantity: 0, price: 3.97, saleQuantity: 2, salePrice: 5 },
    { name: "Bread", quantity: 0, price: 2.17, saleQuantity: 3, salePrice: 6 },
    { name: "Banana", quantity: 0, price: 0.99 },
    { name: "Apple", quantity: 0, price: 0.89 },
  ];

  const [products, setProducts] = useState<Product[]>(defaultProducts);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">Grocery Store</Typography>
      <Typography variant="h4">Available Products</Typography>

      <ProductsList products={products} setProducts={setProducts} />

      <Typography variant="h4" bottom={"bottom"}>
        Summary
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{applySale(product)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5">
        {" "}
        Total:{" "}
        {products
          .reduce(
            (acc, currentValue) =>
              acc + currentValue.price * currentValue.quantity,
            0
          )
          .toFixed(2)}{" "}
      </Typography>
      <Typography variant="h5">You saved:</Typography>
    </Container>
  );
}

export default App;
