import { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "../components/Pagination";
import { SneakerTable } from "../components/SneakerTable/SneakerTable.jsx";

export const Sneakers = () => {
  const [shoes, setShoes] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const shoesPerPage = 20;

  const getShoes = async () => {
    const data = await (await axios.get("http://localhost:10000/kix")).data;
    setShoes(data.data.sneakers);
  };

  useEffect(() => {
    getShoes();
  });

  const lastIndex = currentPage * shoesPerPage;
  const firstIndex = lastIndex - shoesPerPage;
  const currentShoes = shoes.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prev = (pageNumber) => {
    if (pageNumber !== 1) {
      setCurrentPage(pageNumber - 1);
    }
  };
  const next = (pageNumber) => {
    if (pageNumber < Math.ceil(shoes.length / shoesPerPage)) {
      setCurrentPage(pageNumber + 1);
    }
  };

  return (
    <div className="max-w-full h-full flex flex-col justify-center items-center mx-auto overflow-hidden md: min-w-2xl md:max-w-full p-5">
      <div className="w-full text-4xl justify-self-start font-medium mb-10 pl-5">
        <div>Sneaker Database</div>
      </div>
      <div className="w-full flex items-center my-5 p-5">
        <div class="flex-1 mr-5">
          <input
            type="text"
            id="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Search Sneakers"
          ></input>
        </div>
        <div>
          <select className="block w-full p-2.5">
            <option>Sort By</option>
            <option>Order: A-Z</option>
            <option>Price: High-Low</option>
            <option>Price: Low-High</option>
          </select>
        </div>
      </div>
      <div className="w-full p-5">
        <SneakerTable shoe={currentShoes} search={search} />
      </div>
      <Pagination
        itemPerPage={shoesPerPage}
        totalItems={shoes.length}
        paginate={paginate}
        current={currentPage}
        prev={prev}
        next={next}
      />
    </div>
  );
};
