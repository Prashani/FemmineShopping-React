import React from "react";

// import CollectionBanner from "./Components/CollectionBanner/CollecdtionBanner";
// import Filters from "./Components/Filtures/Filters";
// import ItemCategory from "./Components/ItemCategory/Itemcategory";
// import SingleItem_image from "./Components/SingleItem_Component/Singleitem_image";
import HeadPage from "./Components/Homepage/HeadPage";
import NewArivels from "./Components/Homepage/HeadBody";
import HeadItem from "./Components/Homepage/HeadItem";
import HeadCollection from "./Components/Homepage/HeadCollection";
function App() {
  return (
    <div className="App">
      <HeadPage />
      <NewArivels />
      <HeadItem />
      <HeadCollection />

      {/*<CollectionBanner />*/}
      {/*<Filters />*/}
      {/*<ItemCategory />*/}
      {/*<SingleItem_image />*/}
    </div>
  );
}

export default App;
