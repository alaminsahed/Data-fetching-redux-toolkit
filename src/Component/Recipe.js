import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthData, getRecipeSuccess } from "../data/recpieSlice";
import Recipes from "./Recipes";

import { Col, Row, Card } from "react-bootstrap";

const Recipe = () => {
  const data = useSelector((state) => state.recipes);

  const dispatch = useDispatch();

  const { recepie } = data;

  useEffect(() => {
    dispatch(fecthData());
  }, [dispatch]);

  return (
    <div>
      {data.loading ? (
        <p>loading</p>
      ) : data.error ? (
        <p>error</p>
      ) : (
        <div className="row">
        {recepie.map((data, index) => (
            <div className="col-md-4">
            <Recipes data={data}/>
          </div>
        ))}
      </div>
       
      )
     
        }
    </div>
  );
};

export default Recipe;
