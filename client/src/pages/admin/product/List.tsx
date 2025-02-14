import {
  Alert,
  Button,
  CardMedia,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "src/apis";
import ConfirmDialog from "src/components/ConfirmDialog";
import Flash from "src/components/Flash";
import { Product } from "src/types/Product";

function List() {
  const [showFlash, setShowFlash] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [idDelete, setIdDelete] = useState<string | null>(null);

  const getAllProduct = async () => {
    try {
      const { data } = await instance.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleConfirm = (id: string) => {
    setConfirm(true);
    setIdDelete(id);
  };

  const handleDelete = async () => {
    try {
      await instance.delete("/products/" + idDelete);
      setShowFlash(true);
      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1>Hello admin!</h1>
        <Flash isShow={showFlash} />
        <Stack gap={2}>
          <Typography variant="h2" textAlign={"center"}>
            Product List
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow component="th" sx={{ bgcolor: "#e1f5fe" }}>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Desciption</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="td" scope="row">
                      {product.title}
                    </TableCell>
                    <TableCell align="right">
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100"
                        image={product.image}
                        sx={{ objectFit: "contain" }}
                      />
                    </TableCell>
                    <TableCell align="right">${product.price}</TableCell>
                    <TableCell align="right">{product.description}</TableCell>
                    {/* <TableCell align="right">{product.category}</TableCell> */}
                    <TableCell align="right">
                      <Stack
                        direction={"row"}
                        gap={3}
                        justifyContent={"center"}
                      >
                        <Link to={`/admin/product/edit/${product.id}`}>
                          <Button
                            variant="contained"
                            sx={{ bgcolor: "warning.main" }}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "red" }}
                          onClick={() => handleConfirm(product.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ConfirmDialog
              confirm={confirm}
              onConfirm={setConfirm}
              onDelete={handleDelete}
            />
          </TableContainer>
        </Stack>
      </Container>
    </>
  );
}

export default List;
