import { useState } from "react";
import "./App.css";
import logo from "./assets/EZ Works Blue@2x.png";
import { Card } from "./Components/Card";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(inputValue.email)) {
      setSubmissionStatus("Invalid email format");
      setIsLoading(false);
      return;
    }

    // Check for @ez.works
    if (inputValue.email.endsWith("@ez.works")) {
      setSubmissionStatus("Email ending with @ez.works is not allowed");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `http://3.228.97.110:9000/api/`,
        inputValue
      );

      if (response.status === 200) {
        setSubmissionStatus("Form Submitted");
      } else {
        setSubmissionStatus("Error submitting form");
      }
      setIsLoading(false);
    } catch (error) {
      setSubmissionStatus("Error submitting form");
      setIsLoading(false);
    }

    setInputValue({ email: "" });
  };

  return (
    <div id="landing_section">
      <div id="text_container">
        <img src={logo} alt="EZ Works" />
        <p id="text_heading">A Suite of Business Support Services</p>
        <div>
          <p id="text_lebal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>
          <form onSubmit={handleSubmit}>
            <div id="contactSection">
              <input
                type="email"
                placeholder="Enter your email"
                value={inputValue.email}
                onChange={(e) => setInputValue({ email: e.target.value })}
              />
              <button button type="submit">
                {isLoading ? "Submitting..." : "Contact Me"}
              </button>
            </div>
            <p className="status" id="contactSection">
              {submissionStatus}
            </p>
          </form>
        </div>
      </div>
      <div id="card_container">
        {CardItem.map((e, i) => {
          return <Card key={i} items={e} />;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div id="contactSectionMinScreen">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={inputValue.email}
              onChange={(e) => setInputValue({ email: e.target.value })}
            />
            {submissionStatus ? (
              <p className="status">{submissionStatus}</p>
            ) : (
              <p style={{ display: "none" }} className="status">
                {submissionStatus}
              </p>
            )}
          </div>

          <button button type="submit">
            {isLoading ? "Submitting..." : "Contact Me"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

const CardItem = [
  {
    image: "src/assets/presentation/Research@4x.png",
    heading: "Presentation Design",
    label:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: "src/assets/audio/Research@4x.png",
    heading: "Audio - Visual Production",
    label:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: "src/assets/translation/Research@4x.png",
    heading: "Translation Services",
    label:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: "src/assets/graphic/Research@4x.png",
    heading: "Graphic Design",
    label:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: "src/assets/Research/Research@4x.png",
    heading: "Research & Analytics",
    label:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: "src/assets/data/Research@4x.png",
    heading: "Data Processing",
    label:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
];
