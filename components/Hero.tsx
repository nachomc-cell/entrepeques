"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/foto_inicio.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "72px",
        position: "relative",
      }}
    >
      {/* Slogan */}
      <div style={{ padding: "0 5%" }}>
        <h1
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#efd57a",
            lineHeight: 1.2,
            maxWidth: "600px",
            marginBottom: "40px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          El comodín de los padres que llegan a todo
        </h1>

        {/* Botón servicios */}
        
          href="#servicios"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            backgroundColor: "#96cd66",
            color: "#000",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            padding: "14px 40px",
            borderRadius: "50px",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          servicios
        </a>
      </div>
    </section>
  );
}