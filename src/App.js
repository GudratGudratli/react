const navbarStyle = {
  color:"red"
}
const mainStyle = {
  backgroundColor:"red"
}
const buttonStyle = {
  color: "red",
  backgroundColor: "black"
}
const footerStyle = {
  color: "purple",
}
export default function App() {
  return (
    <div className="App">
      <p style={navbarStyle}>Navbar</p>
      <p style={mainStyle}>Main</p>
      <button style={buttonStyle}>Clickme</button>
      <p style={footerStyle}>footer</p>
    </div>
  );
}
