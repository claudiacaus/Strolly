import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ShowSpinnerOrErrors from "../../components/ShowSpinnerOrErrors";
import SuccessMsg from "../../components/SuccessMsg";
import { userContext } from "../../context/userContext";
import useFetch from "../../hooks/useFetch";
import "../../styles/PaymentSuccess.css";
function PaymentSuccess() {
  //write code here
  const { userId } = useParams();
  const { updateUser } = useContext(userContext);

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/user/update/${userId}`,
    (res) => {
      updateUser(res.result);
    }
  );

  useEffect(() => {
    performFetch({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActivated: true }),
    });

    return cancelFetch;
  }, []);

  return (
    //! don't remove page-container or page-content-container classes unless you know what you're doing
    <div className="page-container">
      <div className="page-content-container">
        {/* You can put all your element inside this container */}
        <ShowSpinnerOrErrors
          isLoading={isLoading}
          error={error ? true : false}
          errorTxt={error}
        />
        {!isLoading && !error && (
          <SuccessMsg
            isSuccessful={true}
            msg={
              "Congratulations, you can start renting strollers now! Enjoy your ride!"
            }
            msg2={"redirecting to find stroller page in 5 seconds ..."}
            timeout={5000}
            href="/find_strollers"
          />
        )}
      </div>
    </div>
  );
}
export default PaymentSuccess;
