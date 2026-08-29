"use client";
import { useState } from "react";

export default function Contacto() {
  const [servicio, setServicio] = useState("");
  const [pack, setPack] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleWhatsApp = () => {
    const texto = `Hola Entre Peques! Me llamo ${nombre} y me interesa el servicio de *${servicio}*.${pack ? `\nPack de referencia: *${pack}*.` : ""}${fecha ? `\nFecha del evento: *${fecha}*.` : ""}\n${mensaje ? `\n${mensaje}` : ""}`;
    const url = `https://wa.me/34611577230?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: "#fdfbf9",
        padding: "80px 24px 60px",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>

        <h2
          style={{
            fontFamily: "'MoreSugar', cursive",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "16px",
            color: "#6a8cb8",
          }}
        >
          Contacto
        </h2>

        {/* Redes sociales */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: "1rem", color: "#444", marginBottom: "6px" }}>
            Encuéntranos en nuestras redes sociales:
          </p>
          <p style={{ fontFamily: "'MoreSugar', cursive", fontSize: "1.3rem", color: "#6a8cb8", marginBottom: "12px" }}>
            @entrepeques.vlc
          </p>
          <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#444" }}>
            ¡Contáctanos por WhatsApp! 📱
          </p>
        </div>

        {/* Formulario */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          {/* Nombre */}
          <div>
            <label style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#333", display: "block", marginBottom: "8px" }}>
              Nombre y apellidos
            </label>
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "2px solid #e8e0d8",
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "0.95rem",
                backgroundColor: "#fff",
                outline: "none",
              }}
            />
          </div>

          {/* Servicio */}
          <div>
            <label style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#333", display: "block", marginBottom: "8px" }}>
              Servicio
            </label>
            {["Babysitting", "Organización de cumpleaños", "Clases Particulares"].map((s) => (
              <div
                key={s}
                onClick={() => { setServicio(s); setPack(""); }}
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: `2px solid ${servicio === s ? "#6a8cb8" : "#e8e0d8"}`,
                  backgroundColor: servicio === s ? "#eef3fa" : "#fff",
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  color: servicio === s ? "#6a8cb8" : "#444",
                  cursor: "pointer",
                  marginBottom: "8px",
                  transition: "all 0.2s",
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Packs — solo si cumpleaños */}
          {servicio === "Organización de cumpleaños" && (
            <div>
              <label style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#333", display: "block", marginBottom: "8px" }}>
                Paquete de referencia
              </label>
              {["Pack básico", "Pack completo", "Pack temático"].map((p) => (
                <div
                  key={p}
                  onClick={() => setPack(p)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: `2px solid ${pack === p ? "#6a8cb8" : "#e8e0d8"}`,
                    backgroundColor: pack === p ? "#eef3fa" : "#fff",
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: pack === p ? "#6a8cb8" : "#444",
                    cursor: "pointer",
                    marginBottom: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          )}

          {/* Fecha */}
          <div>
            <label style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#333", display: "block", marginBottom: "8px" }}>
              Fecha del evento
            </label>
            <input
              type="date"
              onChange={(e) => setFecha(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "2px solid #e8e0d8",
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "0.95rem",
                backgroundColor: "#fff",
                outline: "none",
              }}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#333", display: "block", marginBottom: "8px" }}>
              Cuéntanos algo más...
            </label>
            <textarea
              rows={4}
              onChange={(e) => setMensaje(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "2px solid #e8e0d8",
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "0.95rem",
                backgroundColor: "#fff",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleWhatsApp}
            style={{
              backgroundColor: "#efd57a",
              color: "#000",
              fontFamily: "'MoreSugar', cursive",
              fontSize: "1.2rem",
              fontWeight: 400,
              padding: "16px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              boxShadow: "0 4px 0px #c9a800",
            }}
          >
            Solicitar presupuesto
          </button>

        </div>
      </div>
    </section>
  );
}