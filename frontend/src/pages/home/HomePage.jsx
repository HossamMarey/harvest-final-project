import { ProprtiesListing } from "@/components/properties";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section> Hero </section>
      <section>
        {" "}
        <ProprtiesListing title="Latest on the Property Listing" />{" "}
      </section>
      <section>
        {" "}
        <ProprtiesListing title="Latest on the Property Listing" />{" "}
      </section>
      <section>
        {" "}
        <ProprtiesListing title="Nearby Listed Properties" showMapButton />{" "}
      </section>
      <section>
        {" "}
        <ProprtiesListing title="Top Rated Properties" showReviews />{" "}
      </section>
      {/* <section>Top Rated Properties</section>
      <section>Try Hosting With Us</section>
      <section>Featured Properties on our Listing</section>
      <section>Browse For More Properties</section>
      <section>Property Rental Guides & Tips</section> */}

      <section>Discover More About Property Rental</section>
    </>
  );
};

export default HomePage;
