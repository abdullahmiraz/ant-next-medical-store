import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { getInventoryDetails } from "../../api";
import ItemCard from "../ItemCard/ItemCard";

const contentStyle: React.CSSProperties = {
  height: "60vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

interface Item {
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  stock: number;
  manufacturer: string;
  expiry_date: string;
  batch_number: string;
  aisle_location: string;
  prescription_required: boolean;
  image: string;
}

const ItemCarousel: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getInventoryDetails();
        setItems(itemsData.medicine);
      } catch (error) {
        console.error("Error fetching medical items:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(items);

  // Group items into sets of 4
  const groupedItems = items.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);

  return (
    <div className="">
      {groupedItems.map((group, index) => (
        <div
          key={index}
          className="flex gap-4 h-full mx-4 flex-wrap justify-evenly"
        >
          {group.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemCarousel;
