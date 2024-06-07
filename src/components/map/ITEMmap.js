import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './map.css';  // Import the CSS file

const MapComponent = (props) => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await props.data;

        // Filter products if needed
        const groceriesProducts = data.filter(
          (item) =>
            item.parentCatName === 'Electronics' ||
            item.parentCatName === 'groceries' ||
            item.parentCatName === 'Fashion'
        );

        if (groceriesProducts.length > 0) {
          const allProducts = groceriesProducts.reduce(
            (acc, curr) => acc.concat(curr),
            []
          );
          const top50Products = allProducts.slice(0, 50);
          setProducts(top50Products);
          setLoading(false);
        } else {
          console.error('No groceries products found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.data]);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="map-container">
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <Card key={product.id} className="product-card">
              <CardMedia
                component="img"
                height="400"
                image={product.catImg}
                alt="Product"
              />
              <CardContent>
                <Typography variant="h6">{product.productName}</Typography>
                <Typography variant="body2">{product.shop_name}</Typography>
                <Button
                  variant="contained"
                  onClick={() => handleViewProduct(product.id)}
                  style={{ backgroundColor: 'black', color: 'white', marginTop: '8px' , marginLeft:"6rem"}}
                >
                  View Product
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
