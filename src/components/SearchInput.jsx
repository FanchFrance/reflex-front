import React from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchInput = () => {
  return (
    <Form inline className="mr-2">
      <FormControl type="text" placeholder="Rechercher" className="mr-2" />
      <span className="fas fa-search" />
    </Form>
  );
};

export default SearchInput;
