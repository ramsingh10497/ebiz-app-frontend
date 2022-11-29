import { getAllExpensesPath, addRecord } from "./apiPaths";



const getAllExpensesMethod = async (params) => {
  const headersList = {
    Accept: "*/*",
  };

  const url = params ? `${getAllExpensesPath}?year=${params}` : getAllExpensesPath

  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  return await response.json();
};

const addExpense = async (content) => {
  const headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  };

  const response = await fetch(addRecord, {
    method: "POST",
    body:JSON.stringify(content),
    headers: headersList,
  });

  return await response.text();
}

export { getAllExpensesMethod, addExpense };
