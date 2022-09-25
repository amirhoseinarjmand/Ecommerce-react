import './Header.css'

export default function Head() {
  return (
    <div className="Head d-none d-sm-block">
      <img
        src={require("../../assets/headPic.jpg")}
        className="img-fluid"
        style={{ cursor: "pointer" }}
        alt=""
      />
    </div>
  );
}
