import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomersItems from "./CustomersItems";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/customers`)
      .then((response) => response.data)
      .then((data) => setCustomers(data));
  }, []);

  return (
    <section>
      {customers.map((item) => (
        <CustomersItems
          key={item.id}
          id={item.id}
          firstname={item.firstname}
          lastname={item.lastname}
          email={item.email}
          job={item.job}
          photo={item.photo}
        />
      ))}
    </section>
  );
};

export default CustomersList;
