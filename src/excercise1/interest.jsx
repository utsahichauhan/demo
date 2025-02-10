import { useState } from "react";

const InterestCalculator = () => {
  const [stage, setStage] = useState(1);
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [totalInterest, setTotalInterest] = useState(null);

  const handleNext = () => {
    if (stage === 3) {
      const interest = (parseFloat(principal) * parseFloat(rate) * parseFloat(duration)) / 100;
      setTotalInterest(interest);
    }
    setStage(stage + 1);
  };

  const handlePrev = () => {
    setStage(stage - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ display: "inline-block", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        {stage === 1 && (
          <div>
            <label>Principal Amount:</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter Principal"
            />
          </div>
        )}
        {stage === 2 && (
          <div>
            <label>Rate of Interest (% per year):</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter Interest Rate"
            />
          </div>
        )}
        {stage === 3 && (
          <div>
            <label>Duration (years):</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter Duration"
            />
          </div>
        )}
        {stage === 4 && (
          <div>
            <h3>Total Interest: ₹{totalInterest?.toFixed(2)}</h3>
          </div>
        )}
        <div style={{ marginTop: "20px" }}>
          {stage > 1 && (
            <button onClick={handlePrev} style={{ marginRight: "10px" }}>Previous</button>
          )}
          {stage < 4 && (
            <button onClick={handleNext}>{stage === 3 ? "Calculate" : "Next"}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestCalculator;
