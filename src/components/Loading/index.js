import "./Loading.css";

function Loading({ text }) {
  return (
    <div className="loading-container">
      {text ? text : ""}
      <i className="fas fa-compact-disc loading-icon"></i>
    </div>
  );
}

export default Loading;
