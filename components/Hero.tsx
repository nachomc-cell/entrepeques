"use client";

import React from "react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const servicios = document.getElementById("servicios");

    if (servicios) {
      servicios.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
        paddingTop: "0px",
        marginTop: "-72px",
        position: "relative",
      }}
    >
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

        <a
          href="#servicios"
          onClick={handleScroll}
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
          Servicios
        </a>
      </div>
    </section>
  );
}