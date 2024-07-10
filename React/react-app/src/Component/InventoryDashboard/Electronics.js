import React, { useEffect, useState } from "react";
import "./Electronics.css";

function Electronics() {
  let [eletronics, setElectronics] = useState([
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
    },
  ]);


  let getElectronics = () => {
    // console.log("This is Electronis")
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        // console.log(res.json())
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        return setElectronics(data);
      });
  };
  // useEffect(()=>{
  //   getElectronics()
  // })
  return (
    <div className="container">
    <div className="electronics-container">
      {eletronics.map((device) => {
        // console.log(device)
        return (
          <div className="device-container">
            <img src={device.image} width="200px" height="200px" />
            <div className="device-details">
              <h2>{device.title}</h2>
            </div>
            <div> {device.description}</div>
            <div>Rating : {device.rating.rate}</div>
            <div> {device.rating.count} : Review</div>
          </div>
        );
      })}
    </div>
      <button onClick={getElectronics}>Electronics</button>
    </div>
  );
}

export default Electronics;
