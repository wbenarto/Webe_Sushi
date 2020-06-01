import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import SearchFeature from "./Sections/SearchFeature";
import { categories, price } from './Sections/Datas';

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [Filters, setFilters] = useState({
    categories: [],
    price: [],
  });
  const [SearchTerm, setSearchTerms] = useState('')

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }

        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fetch product datas");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(variables);

    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
 
    return (
      <Col lg={6} md={8} xs={24}>
        <Card 
          style={{width:'100%'}}
          hoverable={true} 
          cover={<a href={`/product/${product._id}`}><ImageSlider images={product.images} /></a>}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getProducts(variables);
    setSkip(0);
  };

const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
        console.log('key', key)
        console.log('value', value)
        if(data[key]._id === parseInt(value, 10)){
            array = data[key].array;
        }
    }
    console.log('array', array)
    return array
}

  const handleFilters = (filters, filterCategory) => {
    console.log(filters)
    const newFilters = { ...Filters };
    
    newFilters[filterCategory] = filters;

    if (filterCategory === "price") {
        let priceValues = handlePrice(filters)
        newFilters[filterCategory] = priceValues
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
 
    console.log(newSearchTerm)

    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm
    };
    setSkip(0)
    setSearchTerms(newSearchTerm)

    getProducts(variables)
    
  }

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          {" "}
          Pick Up or Delivery only <Icon type="rocket" />
        </h2>
      </div>



      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={categories}
            handleFilters={(filters) => handleFilters(filters, "categories")}
          />
        </Col>
        <Col lg={12} xs={24}>
          <RadioBox
            list={price}
            handleFilters={(filters)=> handleFilters(filters, 'price')}  
          />
        </Col>
      </Row>
      
      <div style={{ display:'flex', justifyContent:'flex-end', margin:'1rem auto'}}>
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div>
      

      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "middle"
          }}
        >
          <h2>Cookin up something good for you...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
