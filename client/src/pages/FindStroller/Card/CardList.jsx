import React, { useEffect, useContext, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Card from "./Card";
import TEST_ID from "../FindStroller.testid";
import { MapContext } from "../../../context/mapContext";
import Error from "../../../components/Error";
import Spinner from "../../../components/Spinner";

const CardList = () => {
  const { oneCenter } = useContext(MapContext);
  const [strollers, setStrollers] = useState(null);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/centers/location/${oneCenter}`,
    (response) => {
      setStrollers(response.result.strollers);
    }
  );

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, [oneCenter]);

  let content = null;
  if (error != null) {
    content = <Error errorTxt={error} />;
  } else if (isLoading) {
    content = (
      <div data-testid={TEST_ID.loadingContainer}>
        <Spinner />
      </div>
    );
  } else {
    content = (
      <>
        <ul
          className="findStroller-result-list"
          data-testid={TEST_ID.cardList}
          data-loaded={strollers != null}
          data-cy="card-list"
        >
          {strollers &&
            strollers.map((type) => {
              if (type.strollers.length === 0) return;
              return <Card key={type.strollerTypeId} type={type} />;
            })}
        </ul>
      </>
    );
  }
  return (
    <div
      data-testid={TEST_ID.cardListContainer}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {content}
    </div>
  );
};
export default CardList;
