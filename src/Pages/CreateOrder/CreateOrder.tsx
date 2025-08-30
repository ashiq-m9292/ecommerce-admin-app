import { Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createProduct, getProducts } from "../../Redux/Actions/OrderAction";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const productSchema = yup.object().shape({
        name: yup.string().required("Product Name is required"),
        price: yup.number().required("Price is required"),
        description: yup.string().required("Description is required"),
        category: yup.string().required("Category is required"),
        stock: yup.string().required("Stock is required"),
        images: yup.array().required("At least one image is required").min(1, "At least one image is required"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                price: 0,
                description: "",
                category: "",
                stock: "",
                images: []
            }}
            validationSchema={productSchema}
            onSubmit={async (values) => {
                const response = await dispatch(createProduct(values))
                dispatch(getProducts());
                if (response.success) {
                    navigate('/ProductPage');
                };
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <Form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
                        <h1>create Order Form</h1>
                        <TextField
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.name}
                            onChange={handleChange("name")}
                            onBlur={handleBlur("name")}
                            name="name" error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                        <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.price}
                            onChange={handleChange("price")}
                            onBlur={handleBlur("price")}
                            name="price"
                            error={touched.price && Boolean(errors.price)}
                            helperText={touched.price && errors.price}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.description}
                            onChange={handleChange("description")}
                            onBlur={handleBlur("description")}
                            name="description"
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                        />
                        <TextField
                            label="Category"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.category}
                            onChange={handleChange("category")}
                            onBlur={handleBlur("category")}
                            name="category"
                            error={touched.category && Boolean(errors.category)}
                            helperText={touched.category && errors.category}
                        />
                        <TextField
                            label="Stock"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={values.stock}
                            onChange={handleChange("stock")}
                            onBlur={handleBlur("stock")}
                            name="stock"
                            error={touched.stock && Boolean(errors.stock)}
                            helperText={touched.stock && errors.stock}
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
                                <div style={{ minHeight: '20px', color: 'red', marginTop: '0.5rem' }}>{errors.images}</div>
                            )}
                        </div>
                        <Button
                            sx={{ width: { xs: '100%', sm: '20%', md: '20%', lg: '20%', xl: '20%', xxl: '20%' } }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '20px' }}
                        >
                            Create Order
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}

export default CreateOrder;
