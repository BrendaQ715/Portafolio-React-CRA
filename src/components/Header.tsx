import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        background: "#b3a1c0ff",
        color: "purple",
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Portafolio Brenda Quiroz</h1>
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/" style={{ color: "purple" }}>Inicio</Link>
        <Link to="/experience" style={{ color: "black" }}>Experiencia</Link>
        {/* <Link to="/typescript" style={{ color: "white" }}>TypeScript</Link>
        <Link to="/react" style={{ color: "white" }}>React</Link> */}
        <Link to="/contact" style={{ color: "black" }}>Contacto</Link>
      </nav>
    </header>
  );
}