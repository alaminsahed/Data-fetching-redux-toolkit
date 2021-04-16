import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthData, getRecipeSuccess } from "../data/recpieSlice";
import Recipes from "./Recipes";

import { Col, Row, Card } from "react-bootstrap";

const Recipe = () => {
  const data = useSelector((state) => state.recipes);

  const dispatch = useDispatch();
 // destructuring from current state.
  const { recepie } = data;

  useEffect(() => {
    // calling the redux-thunk function.
    dispatch(fecthData());
  }, [dispatch]);

  return (
    <div>
      {data.loading ? (
        <p>loading</p>
      ) : data.error ? (
        <p>error</p>
      ) : (
        //don't forget to import css file.
        <Row>
        {recepie.map((data, index) => (
            <Col md={4}>
            <Recipes data={data}/>
          </Col>
        ))}
      </Row>
       
      )
     
        }
    </div>
  );
};

export default Recipe;
