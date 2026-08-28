"use client";
export default function Contacto() {
  return (
    <section
      id="contacto"
      style={{
        backgroundColor: "#fdfbf9",
        padding: "80px 24px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            marginBottom: "20px",
            color: "#000",
          }}
        >
          Contacto
        </h2>
        <p
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            color: "#555",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
          Sección de contacto próximamente.
        </p>

        {/* Placeholder box */}
        <div
          style={{
            backgroundColor: "#fff3e0",
            border: "2px dashed #efd57a",
            borderRadius: "24px",
            padding: "60px 40px",
            color: "#888",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          📬 Formulario de contacto — próximamente
        </div>
      </div>
    </section>
  );
}
