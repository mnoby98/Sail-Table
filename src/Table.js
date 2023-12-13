import PagenationTable from "./PagenationTable";

function Table() {

  const repeatedObject = { data: "Test new Data" };
  const allData = Array.from({ length: 10000 }, () => repeatedObject);



  return (
    <div className=" border-2  rounded-lg  divide-y-2 ">
      <TableHead/>
      <PagenationTable allData={allData}/>
    </div>
  )
}

export function TableHead() {
  
  return <>
            <header>
                <h1 className=" flex justify-center">Test Table</h1>
            </header>
            <div className="grid grid-cols-[75%_25%] px-3 py-1 ">
                <h2>Data</h2>
                <div className="flex justify-center items-center gap-5">
                  <h3>Add</h3>
                  <h3>Edit</h3>
                  <h3>Delete</h3>
                </div>
            </div>
        </>
}

export default Table
