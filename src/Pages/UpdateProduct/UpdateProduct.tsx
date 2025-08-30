import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProducts, updateProduct } from "../../Redux/Actions/OrderAction";

const UpdateProduct = () => {
    const location = useLocation();
    const { product } = location.state || {};
    if (!product) {
        return <div>No product found</div>;
    }
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const updateProductSchema = Yup.object().shape({
        name: Yup.string().required("Name is Required"),
        description: Yup.string().required("Description is Required"),
        price: Yup.number().required("Price is Required").min(0),
        stock: Yup.string().required("Stock is Required"),
        category: Yup.string().required("Category is Required"),
        images: Yup.array().required("At least one image is required").min(1),
    });
    return (
        <Formik
            initialValues={{
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock,
                category: product.category,
                images: product.images || []
            }}
            validationSchema={updateProductSchema}
            onSubmit={async (values) => {
                const response = await dispatch(updateProduct(product._id, values));
                if (response.success) {
                    dispatch(getProducts());
                    navigate("/ProductPage");
                };
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <Box marginInline="40px">
                        <h1>Update Product</h1>
                        <TextField
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.name}
                            onChange={handleChange("name")}
                            onBlur={handleBlur("name")}
                            name="name"
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name?.toString()}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.description}
                            onChange={handleChange("description")}
                            onBlur={handleBlur("description")}
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description?.toString()}
                        />
                        <TextField
                            name="price"
                            label="Price"
                            value={values.price}
                            onChange={handleChange("price")}
                            onBlur={handleBlur("price")}
                            error={touched.price && Boolean(errors.price)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            helperText={touched.price && errors.price?.toString()}

                        />
                        <TextField
                            name="stock"
                            label="Stock"
                            value={values.stock}
                            onChange={handleChange("stock")}
                            onBlur={handleBlur("stock")}
                            error={touched.stock && Boolean(errors.stock)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            helperText={touched.stock && errors.stock?.toString()}
                        />
                        <TextField
                            name="category"
                            label="Category"
                            value={values.category}
                            onChange={handleChange("category")}
                            onBlur={handleBlur("category")}
                            error={touched.category && Boolean(errors.category)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            helperText={touched.category && errors.category?.toString()}
                        />
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                multiple={true}
                                onChange={(event) => {
                                    const files = Array.from(event.currentTarget.files || [])
                                    setFieldValue("images", files);
                                }}
                            />
                            {touched.images && errors.images && (
                                <div style={{ minHeight: '20px', color: 'red', marginTop: '0.5rem' }}>{errors.images?.toString()}</div>
                            )}
                        </div>
                        <Button type="submit" variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                            Update Product
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}

export default UpdateProduct;
