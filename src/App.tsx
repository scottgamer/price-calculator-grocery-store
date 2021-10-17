import React, { useState } from "react";

import {
  Button,
  Container,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Product {
  name: string;
  quantity: number;
  price: number;
}

function App() {
  const defaultProducts: Product[] = [
    { name: "Milk", quantity: 0, price: 3.97 },
    { name: "Bread", quantity: 0, price: 2.17 },
    { name: "Banana", quantity: 0, price: 0.99 },
    { name: "Apple", quantity: 0, price: 0.89 },
  ];

  const [products, setProducts] = useState<Product[]>(defaultProducts);

  // Delete after testing
  const item: Product = {
    name: "Milk",
    quantity: 1,
    price: 5,
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">Grocery Store</Typography>
      <Typography variant="h4">Available Products</Typography>

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
                width: "1rem",
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
            <TableRow>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography> Total:</Typography>
      <Typography>You saved:</Typography>
    </Container>
  );
}

export default App;
