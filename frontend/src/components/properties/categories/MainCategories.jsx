import React from "react";
import CategoriesData from "./CategoriesData";
import CategoriesFilters from "./CategoriesFilters";

const MainCategories = () => {
  return (
    <>
      <section className="py-12">
        <CategoriesFilters />
      </section>
      <section>
        <CategoriesData />
      </section>
    </>
  );
};

export default MainCategories;
