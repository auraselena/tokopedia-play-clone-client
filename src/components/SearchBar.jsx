import { Box, Input, IconButton, Flex, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import Axios from "axios";

const SearchBar = ({onSearch}) => {
  const [productsData, setProductsData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const allProducts = () => {
    Axios.get(import.meta.env.VITE_API_URL + `/products?keyword=${keyword}`)
      .then((response) => {
        setProductsData(response.data.data);
        onSearch(response.data.data);
      })
      .catch((error) => {
        console.error("Products data error", error.message);
      });
  };

  
  const resetSearch = () => {
    setKeyword(""); // Menghapus keyword pencarian
    setProductsData([]); // Mengosongkan hasil pencarian
    onSearch([]); // Mengirim array kosong ke komponen VideoBox
  };

  return (
    <>
      <Box className="search-bar" w={[300, 400, 500]}>
        <InputGroup>
          <Input placeholder="Search iphone, mouse, lipstick, cushion, concealer" onChange={(e) => setKeyword(e.target.value)} />
          <InputRightElement>
            <IconButton aria-label="Search database" icon={<SearchIcon />} onClick={allProducts} />
          </InputRightElement>
        </InputGroup>

        <Button onClick={resetSearch} ml={2} variant="outline" size="md">
          Reset
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
