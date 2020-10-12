import React from "react";
import HeaderOne from "./Components/HeaderOne/HeaderOne";
import CollectionBanner from "./Components/CollectionBanner/CollecdtionBanner";
import Filters from "./Components/Filtures/Filters";
import ItemCategory from "./Components/ItemCategory/Itemcategory"
import  SingleItem_image from "./Components/SingleItem_Component/Singleitem_image";

function App() {
  return (
    <div className="App">
      <HeaderOne />
      <CollectionBanner />
      <Filters />
      <ItemCategory />
      <SingleItem_image />
    </div>
  );
}

export default App;
