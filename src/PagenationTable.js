import { useState } from "react";

function PagenationTable({ allData }) {
  
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allData.slice(startIndex, endIndex);



  return (
    <div>
      <div className=" divide-y-2 py-1">
      {currentItems.map((item, index) => (
        <Item key={index}  index={index} item={item} />
      ))}
      </div>
      <Pagenation currentPage={currentPage} setCurrentPage={setCurrentPage} endIndex={endIndex} allData={allData} />
      
    </div>
  );
  

}

export function Item({ item,index }) {
    function handleAdd(){}
  function handleEdit(){}
  function handleDelete(){}
  
  return  <div className=" px-3 py-1 grid grid-cols-[75%_25%]">
    <h3> { index + 1 } {item.data} </h3>
        <div className="flex justify-center items-center gap-5">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
  
}

export function Pagenation({currentPage,setCurrentPage,endIndex,allData}) {

    const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return<div className=" flex  justify-center items-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
    <span>{currentPage} - {allData.length /20 }</span>
        <button
          disabled={endIndex >= allData.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
}

export default PagenationTable;
