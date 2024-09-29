import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Slider } from "@/components/ui/slider";

import { useClientSearchParams } from "@/services/hooks";
import { SEARCH_PARAMS } from "@/services/constant";

const FiltersDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [searchParams, setSearchParams] = useClientSearchParams();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);

  useEffect(() => {
    setMinPrice(searchParams.get(SEARCH_PARAMS.minPrice) || 0);
    setMaxPrice(searchParams.get(SEARCH_PARAMS.maxPrice) || 0);
    setCapacity(searchParams.get(SEARCH_PARAMS.capacity) || 0);
    setBathrooms(searchParams.get(SEARCH_PARAMS.bathrooms) || 0);
    setBedrooms(searchParams.get(SEARCH_PARAMS.bedrooms) || 0);
  }, []);

  const handleSubmit = () => {
    const filters = {};

    filters.minPrice = minPrice;

    filters.maxPrice = maxPrice;

    filters.capacity = capacity;

    filters.bathrooms = bathrooms;

    filters.bedrooms = bedrooms;

    setSearchParams(filters);
    setOpen(false);
  };

  const clearFilters = () => {
    const filters = {};

    filters.minPrice = 0;

    filters.maxPrice = 0;

    filters.capacity = 0;

    filters.bathrooms = 0;

    filters.bedrooms = 0;

    setMinPrice(0);
    setMaxPrice(0);
    setBathrooms(0);
    setBedrooms(0);
    setCapacity(0);

    setSearchParams(filters);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center justify-between">
                Filters
                <small
                  className="hover:underline cursor-pointer"
                  onClick={() => clearFilters()}
                >
                  {" "}
                  Clear filters{" "}
                </small>
              </div>{" "}
            </DrawerTitle>
          </DrawerHeader>
          <div>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className=" "> Price </div>
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <div className="flex items-center gap-2 ">
                    <strong> Min: </strong>
                    <Slider
                      value={[minPrice]}
                      max={1000}
                      step={10}
                      min={0}
                      onValueChange={(vals) => {
                        setMinPrice(vals[0]);
                      }}
                    />
                    {!!minPrice && <span> ${minPrice}</span>}
                  </div>
                  <div className="flex items-center gap-2 ">
                    <strong> Max: </strong>
                    <Slider
                      value={[maxPrice]}
                      max={1000}
                      step={10}
                      min={0}
                      onValueChange={(vals) => {
                        setMaxPrice(vals[0]);
                      }}
                    />
                    {!!maxPrice && <span> ${maxPrice}</span>}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className=" "> Capacity </div>
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <div className="flex items-center gap-2 ">
                    <Slider
                      value={[capacity]}
                      max={6}
                      step={1}
                      min={0}
                      onValueChange={(vals) => {
                        setCapacity(vals[0]);
                      }}
                    />
                    {!!capacity && <span> ${capacity}</span>}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className=" "> BathRooms: </div>
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <div className="flex items-center gap-2 ">
                    <Slider
                      value={[bathrooms]}
                      max={6}
                      step={1}
                      min={0}
                      onValueChange={(vals) => {
                        setBathrooms(vals[0]);
                      }}
                    />
                    {!!bathrooms && <span> {bathrooms}</span>}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className=" "> BedRooms: </div>
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <div className="flex items-center gap-2 ">
                    <Slider
                      value={[bedrooms]}
                      max={6}
                      step={1}
                      min={0}
                      onValueChange={(vals) => {
                        setBedrooms(vals[0]);
                      }}
                    />
                    {!!bedrooms && <span> {bedrooms}</span>}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <DrawerFooter>
            <Button onClick={() => handleSubmit()}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FiltersDrawer;
