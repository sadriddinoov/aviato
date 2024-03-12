import "./breadcumb.scss";

export default function Cumb({ title, sub }) {
  return (
    <div className="cumb">
        <div className="container">
        <h1 className="cumb_heading">{title}</h1>
      <div className="cumb_wrapper">
        <h2 className="cumb_home">Home</h2>
        <h2 className="cumb_code">/</h2>
        <p className="cumb_text">{sub}</p>
      </div>
        </div>
    </div>
  );
}