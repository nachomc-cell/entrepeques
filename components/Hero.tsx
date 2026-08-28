"use client";
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#fdfbf9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "-80px",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        backgroundColor: "#96cd66",
        opacity: 0.15,
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "-80px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        backgroundColor: "#6a8cb8",
        opacity: 0.13,
        filter: "blur(70px)",
      }} />
      <div style={{
        position: "absolute",
        top: "60%",
        left: "30%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "#efd57a",
        opacity: 0.18,
        filter: "blur(50px)",
      }} />

      <div
        style={{
          textAlign: "center",
          padding: "40px 24px",
          maxWidth: "700px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo grande */}
        <img
          src="/logo.png"
          alt="Entre Peques"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
            borderRadius: "24px",
            marginBottom: "28px",
            boxShadow: "0 8px 32px rgba(106,140,184,0.18)",
          }}
        />

        <h1
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#000",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Entre Peques
        </h1>

        <p
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#333",
            lineHeight: 1.7,
            marginBottom: "36px",
            maxWidth: "520px",
            margin: "0 auto 36px",
          }}
        >
          Cuidado, aprendizaje y celebración para los más pequeños.
          Porque cada peque merece lo mejor.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              backgroundColor: "#6a8cb8",
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "14px 32px",
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(106,140,184,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(106,140,184,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(106,140,184,0.35)";
            }}
          >
            Ver servicios
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              backgroundColor: "#efd57a",
              color: "#000",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "14px 32px",
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(239,213,122,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            }}
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
