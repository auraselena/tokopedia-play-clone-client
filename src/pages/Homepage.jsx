// Homepage.jsx
import SearchBar from "../components/SearchBar";
import VideoBox from "../components/VideoBox";
import { Text } from "@chakra-ui/react";
import { useState } from "react";


function Homepage() {
  const [searchedProductsData, setSearchedProductsData] = useState([]);

  const handleSearch = (searchData) => {
    setSearchedProductsData(searchData);
  };

  return (
    <>
      <Text fontSize="4xl">TokPlay</Text>
      <SearchBar onSearch={handleSearch} />
      <VideoBox productsData={searchedProductsData} />
    </>
  );
}


export default Homepage;

