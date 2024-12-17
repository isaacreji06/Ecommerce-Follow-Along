import { useState } from 'react';
import Card from '../component/ProductCard/Card';

function HomePage() {
  const [data, setData] = useState(
    new Array(20).fill({ title: 'Product Title' })
  );

  return (
    <>
      <h1 className="text-center">Home Page Follow Along</h1>

      <div className="grid grid-cols-3">
        {data.map((ele, index) => (
          <div style={{ margin: 'auto' }} key={index}>
            <Card title={ele.title} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
