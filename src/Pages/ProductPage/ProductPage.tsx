import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletProduct, getProducts } from "../../Redux/Actions/OrderAction";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ProductPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const { products, error, loading } = useSelector((state: any) => state.Order)

    const handleDelete = (id: string) => {
        dispatch(deletProduct(id));
        dispatch(getProducts());
    };


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <h1 style={{ textAlign: "center", marginInline: 200 }}>Products</h1>
            {loading ? <p>Loading...</p> : null}
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            <ul>
                {
                    products.length ?
                        products.map((product: any) => (
                            <Card sx={{ width: 400, height: 500, display: 'inline-grid', m: 2, overflow: 'hidden', cursor: 'pointer', flexWrap: "wrap" }} key={product._id}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 400, height: 300, objectFit: 'cover', transform: 'scale(1)', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' } }}
                                    image={product.images[0].url}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5">{product.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: ${product.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Stock: {product.stock}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {product.category}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button onClick={() => navigate('/updateproduct', { state: { product } })}>Update Now</Button>
                                    <Button onClick={() => handleDelete(product._id)}>Delete Now</Button>
                                </CardActions>
                            </Card>
                        ))
                        : <p>No products found</p>
                }
            </ul>
        </div>
    );
}

export default ProductPage;
