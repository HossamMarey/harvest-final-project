import React, { useMemo } from "react";

const SingleHotelImages = ({ images }) => {
  const moreImage = useMemo(() => {
    const m = images.length - 5;
    if (m > 0) return m;
    return 0;
  }, [images]);

  return (
    <div className="py-8 md:py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2   gap-4 lg:gap-5 px-4 lg:px-8 ">
      <div className="    ">
        <img
          src={images[0]}
          alt="sssss"
          className="w-full  object-cover h-[540px]  rounded-xl"
        />
      </div>
      <div className=" grid grid-cols-4 lg:grid-cols-2 gap-4 lg:gap-5 max-h-full h-[inherit]">
        {images?.slice(1, 5).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt="sssss"
              className="w-full  object-cover h-[150px] lg:h-[260px] rounded-xl "
            />

            {!!moreImage && index === 3 && (
              <div className="absolute inset-0 bg-black/50 rounded-lg text-background  flex items-center justify-center gap-2">
                <strong className="text-4xl">+{moreImage}</strong>
                <div className="leading-4">
                  <small> More </small>
                  <p> Photos</p>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* <div> 3 </div>
        <div> 4 </div>
        <div> 5 </div> */}
      </div>
    </div>
  );
};

export default SingleHotelImages;
