import "./Questions.scss";

const Question2 = ({ enteringName }) => {
  return (
    <div className="question-container page-width">
      <h1 className="question">
        Does the patient have dosage instructions on their medication pack?
      </h1>

      <div className="button-wrap">
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default Question2;
