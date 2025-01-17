import { useEffect, useState } from 'react';
import Card from "../components/ProductCard/Card"
import axios from 'axios';

function HomePage() {
  const [data, setdata] = useState([]);
  const fetchProduct = async () => {
    const response = await axios.get(
      'http://localhost:8080/product/get-products'
    );
    setdata(response.data.data);
  };

  useEffect(() => {
    console.log('clicked');

    const callhandle = async () => {
      await fetchProduct();
    };
    callhandle();
  }, []);


  const handleDelete=async(id)=>{
    console.log(id)
    const data=await axios.delete(`http://localhost:8080/product/${id}`)
    setdata(data.data.data)
  }
  return (
    <div>
      <h1 className="text-center">Home Page for Follow along</h1>

      <div className="grid grid-cols-3">
        {data?.map((ele, index) => {
          return (
            <div key={ele._id} style={{ margin: 'auto' }} className="border border-white">
              <Card
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : 'Product Image missing'}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
                id={ele._id}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
