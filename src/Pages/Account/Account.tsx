import { Avatar, Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../../Redux/Actions/UserAction";
import { useEffect } from "react";

const Account = () => {
  const dispatch = useDispatch<any>();
  const { userInfo } = useSelector((state: any) => state.User);
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 50, marginInline: 60, marginBlock: 20, flexWrap: "wrap" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <Avatar alt="Remy Sharp" src={userInfo?.profilePicture?.url} sx={{ width: { xs: 100, sm: 120, md: 140, lg: 160, xl: 180 }, height: { xs: 100, sm: 120, md: 140, lg: 160, xl: 180 }, objectFit: "cover" }} />
        <Typography variant="h5">
          {userInfo?.email}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6" sx={{ border: 1, p: 1, borderColor: "secondary.main", borderRadius: 0.5 }}>
          Name: {userInfo?.name}
        </Typography>
        <Typography variant="h6" sx={{ border: 1, p: 1, borderColor: "secondary.main", borderRadius: 0.5 }}>
          Email: {userInfo?.email}
        </Typography>
        <Typography variant="h6" sx={{ border: 1, p: 1, borderColor: "secondary.main", borderRadius: 0.5 }}>
          Role: {userInfo?.role}
        </Typography>
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ width: { xs: "100%", sm: "auto", md: "auto", lg: "20%", xl: "20%" } }} onClick={handleLogout} variant="contained" color="secondary">Logout</Button>
      </div>
    </div>
  );
}

export default Account;
