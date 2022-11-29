/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { addExpense } from "../../../utils/serverRequest";
import { Link } from "@mui/material";

const formObject = {
  title: "",
  amount: 0,
  createdAt: "",
};

function FormLayout() {
  const [expenseDetail, setExpense] = useState({ ...formObject });

  const handleChange = (e) => {
    setExpense({ ...expenseDetail, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    try {
      const response = await addExpense(expenseDetail);
      alert(response);
      setExpense({ ...formObject });
    } catch (error) {
      alert("Something Wrong");
    }
  };
  return (
    <Box>
      <Box padding={{ xs: 3, sm: 6 }} width={1} boxShadow={1}>
        <Grid container spacing={4}>
          <Grid item xs={12} justifyContent="center">
            <TextField
              sx={{ height: 54 }}
              label="Title"
              variant="outlined"
              color="primary"
              size="medium"
              name="title"
              value={expenseDetail?.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <TextField
              label="Amount"
              currencySymbol="$"
              variant="outlined"
              outputFormat="string"
              decimalPlaces={2}
              color="primary"
              name="amount"
              type="number"
              value={expenseDetail?.amount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <TextField
              variant="outlined"
              outputFormat="string"
              color="primary"
              name="createdAt"
              type="date"
              value={expenseDetail?.createdAt}
              onChange={handleChange}
            />
          </Grid>
          <Grid item container xs={12}>
            <Button
              sx={{ height: 54, minWidth: 150 }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleClick}
            >
              Submit
            </Button>
            {/* <Paper > */}
              <Link sx={{
                ml:2,
                p: 2,
                backgroundColor: 'primary.main',
                color:'white',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  opacity: [0.9, 0.8, 0.7],
                },
              }} component="a" href="/" underline="none">
                Home Page.
              </Link>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FormLayout;
