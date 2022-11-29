import { Typography } from "@mui/material";
import FiltersWithDropdown from "../src/components/FiltersWithDropdown/ProductPage";
import { getAllExpensesMethod } from "../utils/serverRequest";

export default function Home({ products }) {
  if(!products) {
    <Typography varinat="h3">
      Something Wrong
    </Typography>
  }
  return <FiltersWithDropdown products={products} />;
}
export async function getStaticProps() {
  const products = await getAllExpensesMethod();
  return {
    props: {
      products,
    },
  };
}
