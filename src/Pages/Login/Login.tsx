import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { TextField, Button, Box, } from '@mui/material';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/Actions/UserAction';

const Login = () => {
    const dispatch = useDispatch<any>();
    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(4, "Password must be at least 4 characters").required("Password is required"),
    });

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                    dispatch(userLogin(values.email, values.password))
                }}
            >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box sx={{ m: 2 }}>
                            <h1>Login Page</h1>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
