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

  console.log(items);

  return (
    <Carousel arrows infinite className="my-6">
      {items ? (
        items.map((item) => (
          <div key={item.id}>
            <ItemCard item={item} />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Carousel>
  );
};

export default ItemCarousel;
