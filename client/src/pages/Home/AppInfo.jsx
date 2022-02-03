import React from "react";
import "../../styles/AppInfo.css";
import geolocation from "../../images/geolocation.png";
import costTime from "../../images/cost-time.png";
import findInMap from "../../images/find-in-map.png";
import paymentIcon from "../../images/pay.png";
import strollerIcon from "../../images/stroller-icon.png";
import userWithStroller from "../../images/user-with-stroller.png";
import familyPic from "../../images/family-pic.jpeg";
import fifteenMinutes from "../../images/15min.png";

const AppInfo = () => {
  return (
    <section className="app-info">
      <div className="app-info-content">
        <div className="how-it-works-container">
          <div className="grid-app-info-container">
            <div className="group">
              <img
                src={geolocation}
                alt="geolocation icon"
                className="icon-image"
              />
              <div className="app-info-text">
                <p data-cy="info-text">
                  Choose the nearest location in the Map at the Find Stroller
                  page.
                </p>
              </div>
            </div>

            <div className="group group-reverse">
              <img
                data-cy="info-img"
                src={strollerIcon}
                alt="stroller icon"
                className="icon-image"
              />
              <div className="app-info-text">
                <p data-cy="info-text">
                  Select among the multiple strollers types which one is perfect
                  for your kid.
                </p>
              </div>
            </div>

            <div className="group">
              <img
                src={fifteenMinutes}
                alt="time icon"
                className="icon-image"
                data-cy="info-img"
              />

              <div className="app-info-text">
                <p data-cy="info-text">
                  Reserve the stroller and you will have 15 minutes to pick it,
                  clicking in the Unlock Stroller button.
                </p>
              </div>
            </div>

            <div className="group group-reverse">
              <img
                data-cy="info-img"
                src={userWithStroller}
                alt="woman with stroller icon"
                className="icon-image"
              />

              <div className="app-info-text">
                <p data-cy="info-text">
                  Enjoy the stroller safelly with your children.
                </p>
              </div>
            </div>

            <div className="group">
              <img
                src={findInMap}
                alt="find in the map icon"
                className="icon-image"
                data-cy="info-img"
              />
              <div className="app-info-text">
                <p data-cy="info-text">
                  Select the nearest location to drop off the stroller. And
                  click on the Lock Stroller button to finalize your order.
                </p>
              </div>
            </div>

            <div className="group group-reverse">
              <img
                src={costTime}
                alt="money with clock icon"
                className="icon-image"
                data-cy="info-img"
              />
              <div className="app-info-text">
                <p data-cy="info-text">
                  The cost will be calculated for minutes of use and you will
                  see the value in your account.
                </p>
              </div>
            </div>

            <div className="group">
              <img
                src={paymentIcon}
                alt="credit card icon"
                className="icon-image"
                data-cy="info-img"
              />
              <div className="app-info-text">
                <p data-cy="info-text">
                  The payment will be debited from your payment method.
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="family-pic">
          <img
            src={familyPic}
            alt="family picture"
            className="family-pic-image"
            data-cy="info-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
