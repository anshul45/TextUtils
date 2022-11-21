import React from "react";
export default function About(props) {
  // const [darkMode, setDarkMode] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let darkMode = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "grey",
  };

  return (
    <div className="container" style={darkMode}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={darkMode}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={darkMode}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              It is shown by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the though the
              transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={darkMode}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the though the
              transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={darkMode}
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              This is the third item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classNamees that we
              use to style each element. These classNamees control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
