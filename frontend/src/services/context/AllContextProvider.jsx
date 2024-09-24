import React from "react";

import ReactQueryProvider from "./ReactQueryProvider";

const AllContextProvider = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default AllContextProvider;
