import { useState } from "react";
import ManagerPortal from "./components/managerPortal";

function App() {
  const [requests, setRequests] = useState([
    {
      amount: "850",
      vendor: "Dominos",
      category: "Food",
      employee: "Aakash",
      status: "Pending",
    },
    {
      amount: "2200",
      vendor: "Uber",
      category: "Travel",
      employee: "Mehek",
      status: "Pending",
    },
    {
      amount: "500",
      vendor: "Starbucks",
      category: "Food",
      employee: "Sagar",
      finalStatus: "Approved",
    },
    {
      amount: "1800",
      vendor: "Unknown",
      category: "Misc",
      employee: "Aashi",
      finalStatus: "Rejected",
    },
  ]);

  return (
    <ManagerPortal
      requests={requests}
      setRequests={setRequests}
    />
  );
}

export default App;