import { useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import { useRef } from "react";
import UseRefComp from "./components/UseRefComp";
import axios from "axios";
import { useEffect } from "react";
import Card from "./components/Card";function App() {
  const [count, setCount] = useState(0) 
   const [user, setUser] = useState("Mahmut") 
    const [taxDataState, setTaxDataState] = useState({taxRate:0.18,ship:25})
     const taxData = {taxRate:0.18,ship:25} 
     const taxData1 = useRef({taxRate:0.18,ship:25})
     //UseState-güncellendiğinde içindeki veriyi render eder
// useRef güncellendiğinde içindeki veriyi render etmez
const [data, setData] = useState([])
const [search, setSearch] = useState("")

const getData = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
//  console.log(data)
  setData(data.products)
}
useEffect(() => {
  getData();
}, []) 
 return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button className='btn btn-danger d-flex mx-auto' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div className="">        <button className='btn btn-danger d-flex mx-auto' onClick={() => setUser("İbrahim")}>Change User</button>
      </div>
      <hr />
      {/* <HeaderMemo user={user}/> */}
      <HeaderMemo count={count}/>
      <hr />      {/* <TaxComp taxData={taxData}/> */}
      {/* <TaxComp taxData={taxDataState}/> */}
      {/* <TaxComp taxData={taxData1}/> */}
      <hr />
      <UseRefComp/>
      <Card   data={data}/>
    </div>
  );
}
export default App;