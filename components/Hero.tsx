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
    <section id="hero-section"
      style={{
        height: "100vh",
        backgroundImage: "url('/foto_inicio.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ padding: "0 5%", textAlign: "center", width: "100%" }} className="hero-content">
        <h1
          style={{
            fontFamily: "'MoreSugar', cursive",
            fontSize: "clamp(1.6rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#efd57a",
            lineHeight: 1.2,
            maxWidth: "100%",
            marginBottom: "24px",
            textShadow: "3px 3px 0px #c9a800",
          }}
        >
          El comodín de los padres <br /> que llegan a todo
        </h1>

        <a
          href="#servicios"
          onClick={handleScroll}
          style={{
            backgroundColor: "#96cd66",
            color: "#000",
            fontFamily: "'MoreSugar', cursive",
            fontWeight: 400,
            fontSize: "1.4rem",
            padding: "18px 56px",
            borderRadius: "50px",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 6px 0px #5a9e2f, 0 8px 20px rgba(0,0,0,0.25)",
            letterSpacing: "0.5px",
          }}
        >
          Ver servicios
        </a>
      </div>
    </section>
  );
}