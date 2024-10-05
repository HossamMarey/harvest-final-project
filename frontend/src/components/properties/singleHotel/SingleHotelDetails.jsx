import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { BiBath, BiBed, BiUser } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
const Feature = ({ icon, title }) => {
  return (
    <div className="  items-center gap-4 h-44 flex flex-col justify-center bg-card rounded-md text-foreground/80">
      {icon}
      <p className="font-semibold">{title}</p>
    </div>
  );
};

const SingleHotelDetails = ({ hotel }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="container grid grid-cols-1 md:rid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-14 xl:gap-16">
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* title  */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{hotel?.name}</h1>
            <p>{hotel?.summary}</p>
          </div>
          <div>
            <Button
              className="  bg-transparent px-2 py-3 shadow-none text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsFavourite(!isFavourite);
              }}
            >
              {" "}
              {!isFavourite ? (
                <FaRegHeart size={24} />
              ) : (
                <FaHeart size={24} />
              )}{" "}
            </Button>

            <Button className="  bg-transparent px-2 py-3 shadow-none text-foreground">
              <FiShare2 size={24} />
            </Button>
          </div>
        </div>
        {/* Main Features  */}
        <div className="grid  lg:grid-cols-3 gap-4 lg:gap-6 ">
          <Feature
            title={hotel?.bedrooms + " Bedrooms"}
            icon={<BiBed size={36} />}
          />
          <Feature
            title={hotel?.bathrooms + " Bathrooms"}
            icon={<BiBath size={36} />}
          />
          <Feature
            title={"up to " + hotel?.capacity + " members"}
            icon={<BiUser size={36} />}
          />
        </div>
        {/* full description  */}
        <div>
          <h2 className="text-xl font-bold mb-6"> Apartment Description </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iure
            tempore earum aliquam, vitae harum exercitationem quibusdam dicta
            enim cumque? Quas tempore, aut a sunt facilis eveniet reiciendis
            dolore quam molestias ratione, maiores optio doloribus itaque ullam
            cumque deserunt illum delectus eos quidem accusamus culpa! Eligendi
            vitae laudantium ipsa provident.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-card rounded-md p-5 lg:p-6 ">
          <div className="font-bold text-xl pb-6 border-b border-foreground/20 ">
            ${hotel?.price}
          </div>

          <div className="py-6 flex flex-col gap-1">
            <p> Short Period: $ 1000 </p>
            <p> Short Period: $ 1000 </p>
            <p> Short Period: $ 1000 </p>
          </div>

          <div>
            <Button className="rounded-full w-full py-6 text-lg" size="lg">
              {" "}
              Reserve Now{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelDetails;
