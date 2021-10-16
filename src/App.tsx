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

function App() {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">Grocery Store</Typography>
      <Typography variant="h4">Available Products</Typography>

      <List>
        <ListItem>
          <label>
            Milk{" "}
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                if (quantity < 1) {
                  return;
                }
                setQuantity(quantity - 1);
              }}
            >
              -
            </Button>
            <input type="number" name="" value={quantity} />
            <Button
              variant="outlined"
              size="small"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </label>
        </ListItem>
        <ListItem>Apple</ListItem>
        <ListItem>Banana</ListItem>
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
              <TableCell>Milk</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$5.00</TableCell>
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
