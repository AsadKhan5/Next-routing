import React from "react";
import Link from "next/link";
import DrinksList from "@/components/DrinkList";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const FetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  //   throw error ....
  if (!response.ok) {
    throw new Error("Failed to fetch the drinks ...");
  }
  const data = await response.json();
  return data;
};

const DrinkPage = async () => {
  const data = await FetchDrinks();
  return (
    <div>
      <h1 className="text-7xl">Soft Drinks Page </h1>
      <Link href="/">Home Page</Link>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinkPage;
