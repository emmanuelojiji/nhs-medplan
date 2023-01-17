import "./Questions.scss";

const Question1 = ({enteringName, nextQuestion}) => {
  return (
    <div className="question-container page-width">
      <h1 className="question">Please enter the patient's first name</h1>

      <input onChange={enteringName}></input>

      <button onclick={nextQuestion}>Next</button>
    </div>
  );
};

export default Question1;
