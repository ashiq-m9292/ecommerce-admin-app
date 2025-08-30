import { Button, Card, CardActions, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 style={{ textAlign: "center", minHeight: "10vh", background: "linear-gradient(to bottom, #ffffff, #e6e6e6)" }}>ADMIN PANEL</h1>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", background: "linear-gradient(to bottom, #ffffff, #e6e6e6)", minHeight: "90vh" }}>
                <Card sx={{ m: 2, maxWidth: 300, height: 200, display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent>
                        <Typography variant="h5">Create Product</Typography>
                        <Typography variant="body2">Please Create your Product</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => navigate('/CreateOrder')}>Move Here</Button>
                    </CardActions>
                </Card>
                <Card sx={{ m: 2, maxWidth: 300, height: 200, display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent>
                        <Typography variant="h5">Your Products</Typography>
                        <Typography variant="body2">Hey, look at your products</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => navigate('/ProductPage')}>Move Here</Button>
                    </CardActions>
                </Card>
                <Card sx={{ m: 2, maxWidth: 300, height: 200, display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <CardContent>
                        <Typography variant="h5">Your Account</Typography>
                        <Typography variant="body2">Hey, loook at your account</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => navigate('/Account')}>Move Here</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}

export default Home;








