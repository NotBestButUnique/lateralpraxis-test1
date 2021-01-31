import React from "react";
import logo from "./lateral-praxis.jpg";
import firstImage from "./fruits-images/firstImage.png";
import secondImage from "./fruits-images/secondImage.png";
import thirdImage from "./fruits-images/thirdImage.png";

import "./css/Form.css";

const App = () => {
  return (
    <div className="pageBodyContainer">
      <div className="overFlowAuto">
        <div className="floatLeft spaceBetween">
          <img alt="" src={logo} />
        </div>
        <div className="floatLeft leftBorder leftMargin">
          <h1 className="title leftMargin topMargin">Healthy Fruits</h1>
        </div>
      </div>
      <div>
        <section className="container">
          <div className="first-left-half">
            <article className="firstImg">
              <h1 className="firstImgTitle">Lorem Ipsum</h1>
              <p className="firstImgDesc">
                Lorem Ipsum is the simply dummy text of the printing and
                typesetting industry. Lorem
              </p>
            </article>
          </div>
          <div className="first-right-half">
            <img alt="" src={firstImage} className="orangeImg" />
          </div>
        </section>
        {/* Second Half */}
        <section className="container">
          <div className="second-right-half">
            <img alt="" src={secondImage} className="orangeImg" />
          </div>
          <div className="second-left-half">
            <article className="firstImg">
              <h1 className="secondImgTitle">Lorem Ipsum</h1>
              <p className="secondImgDesc">
                Lorem Ipsum is the simply dummy text of the printing and
                typesetting industry. Lorem
              </p>
            </article>
          </div>
        </section>
        <section className="container">
          <div className="third-left-half">
            <article className="firstImg">
              <h1 className="thirdImgTitle">Lorem Ipsum</h1>
              <p className="thirdImgDesc">
                Lorem Ipsum is the simply dummy text of the printing and
                typesetting industry. Lorem
              </p>
            </article>
          </div>
          <div className="third-right-half">
            <img alt="" src={thirdImage} className="orangeImg" />
          </div>
        </section>
      </div>
      <div className="tableParent">
        <div className="content contentShadow">
          <h2>Nutrition Facts</h2>

          {/* <div style={{ overflow: "auto" }} className=" bottomBorder">
            <div className="floatLeft">
              <h4>Serving Size</h4>
            </div>
            <div className="floatRight">
              <h4>100g</h4>
            </div>
          </div>
          <div>
            <h4>Amount Per Saving</h4>
          </div>
          <div style={{ overflow: "auto" }} className="bottomBorder">
            <div className="floatLeft">
              <h1>Calories</h1>
            </div>
            <div className="floatRight">
              <h4>900</h4>
            </div>
          </div> */}

          <br />
          <table>
            <tbody>
              <tr className="bottomBorder">
                <td className="alignLeft">
                  <span className="boldText"> Serving Size </span>
                </td>
                <td className="alignRight">
                  <span className="boldText">100 g</span>
                </td>
              </tr>
              <tr className="noBorder">
                <td className="alignLeft">
                  <span className="boldText">Amount Per Saving </span>
                </td>
                <td className="alignRight"></td>
              </tr>
              <tr className="bottomBorder">
                <td className="alignLeft">
                  <span className="biggerText">Calories</span>
                </td>
                <td className="alignRight">
                  <span className="biggerText">89</span>
                </td>
              </tr>
              <tr>
                <td className="alignLeft"></td>
                <td className="alignRight boldText"> % Default Value</td>
              </tr>
              <tr>
                <td className="alignLeft">
                  <span className="boldText"> Total Fat </span> 0.3g
                </td>
                <td className="alignRight boldText">0 %</td>
              </tr>
              <tr>
                <td className="alignLeft leftPadding">Saturated fat 0.1g</td>
                <td className="alignRight boldText">0 %</td>
              </tr>
              <tr>
                <td className="alignLeft">
                  <span className="boldText"> Sodium </span> 1mg
                </td>
                <td className="alignRight boldText">0 %</td>
              </tr>
              <tr>
                <td className="alignLeft">
                  <span className="boldText"> Total Carbohydrate </span> 23g
                </td>
                <td className="alignRight boldText">8 %</td>
              </tr>

              <tr>
                <td className="alignLeft leftPadding">Dietary Fiber 2.6g</td>
                <td className="alignRight boldText">9 %</td>
              </tr>
              <tr>
                <td className="alignLeft leftPadding">Sugar 12g</td>
                <td className="alignRight boldText"></td>
              </tr>
              <tr className="bottomBorder">
                <td className="alignLeft">
                  <span className="boldText"> Protein </span> 1.1g
                </td>
                <td className="alignRight boldText">2 %</td>
              </tr>
              <tr>
                <td className="alignLeft">Vitamin D 0.00mcg</td>
                <td className="alignRight">0 %</td>
              </tr>
              <tr>
                <td className="alignLeft">Calcium 5.00mg</td>
                <td className="alignRight">0 %</td>
              </tr>
              <tr>
                <td className="alignLeft">Iron 0.26mg</td>
                <td className="alignRight">1 %</td>
              </tr>
              <tr className="bottomBorder">
                <td className="alignLeft">Potassium 358mg</td>
                <td className="alignRight">8 %</td>
              </tr>
              <tr className="noBorder">
                <td>
                  Some Content, that Unable to read, Because there is page break
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="bottomBorder">
            <h1 className="featuredText bottomMargin">
              • Delivering with love and care for you to relish
            </h1>
          </div>
        </div>
        <div>
          <div className="bottomBorder">
            <br />

            <h3>About Demo Group</h3>
            <p className="bottomMargin">
              Leading the Crops Division for Demo Group in India's best branded
              fruit company and a market leader in controlled cultivation and
              marketing of high-quality fruits to domestic and international
              customers in a social responsible manner.
              <br />
              <br />
              We are happy to serve fresh & delicious fruits.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
// •
export default App;
