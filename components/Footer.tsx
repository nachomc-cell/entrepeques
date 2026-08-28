export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fff3e0",
        padding: "32px 24px",
        textAlign: "center",
        borderTop: "1px solid #f0e4c8",
      }}
    >
      <p
        style={{
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 500,
          fontSize: "0.9rem",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Entre Peques · Todos los derechos reservados
      </p>
    </footer>
  );
}
