import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetailsPage.css";
import NavBar from "../components/NavBar";
import jihyo from "../jihyo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Tab,
  Tabs,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetailsPage = ({
  counters,
  changeStyle,
  getCountersWithValue,
  onDelete,
}) => {
  const params = useParams();

  const counter = counters.find((counter) => counter.id === +params.id);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <img
        style={{ height: "100vh", position: "fixed", zIndex: "-100" }}
        src={jihyo}
      />
      <NavBar
        totalCount={getCountersWithValue()}
        counters={counters}
        changeStyle={changeStyle}
        getCountersWithValue={getCountersWithValue}
      />

      <Card
        sx={{ display: "flex", maxWidth: "50vw", height: "80vh" }}
        className="product-card"
      >
        <CardMedia
          component="img"
          sx={{ height: "80vh", width: "20vw" }}
          image={counter.splash}
          alt="Shoe splash art"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <CardContent sx={{ flex: "1 0 auto", width: "25vw" }}>
              <CardHeader
                action={
                  <>
                    <Link to={`/products/`}>
                      <IconButton>
                        <ArrowBackIcon />
                      </IconButton>
                    </Link>
                    <IconButton onClick={handleOpenMenu}>
                      <MoreVert />
                    </IconButton>
                  </>
                }
                title={counter.name}
                sx={{
                  p: 0,
                  paddingBottom: 1,
                }}
                titleTypographyProps={{
                  fontFamily: "Poppins",
                  fontSize: "4vh",
                }}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
              >
                <MenuItem
                  onClick={() => navigate(`/products/${counter.id}/edit`)}
                >
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    onDelete(counter.id);
                    navigate("/");
                  }}
                >
                  Delete
                </MenuItem>
              </Menu>
              <Typography
                fontFamily="Poppins"
                fontSize="3vh"
                maxWidth="30vw"
                variant="h5"
                color="text.secondary"
                component="div"
              >
                Php {counter.price}.00
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontSize="2.5vh"
                maxWidth="30vw"
                color="text.primary"
                component="div"
              >
                {counter.description}
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="DNA" {...a11yProps(0)} />
                <Tab label="SPECS" {...a11yProps(1)} />
                <Tab label="FIT & CARE" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography fontSize="2vh" width="26vw">
                {counter.dna1}
              </Typography>
              <Typography fontSize="2vh" width="26vw">
                {counter.dna2}
              </Typography>
              <Typography fontSize="2vh" width="26vw">
                {counter.dna3}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography fontSize="2vh" width="26vw">
                {counter.specs1}
              </Typography>
              <Typography fontSize="2vh" width="26vw">
                {counter.specs2}
              </Typography>
              <Typography fontSize="2vh" width="26vw">
                {counter.specs3}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography fontSize="2vh" width="26vw">
                Regular
              </Typography>
            </TabPanel>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
