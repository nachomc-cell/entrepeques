"use client";
export default function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      style={{
        backgroundColor: "#fdfbf9",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "50px",
            color: "#000",
          }}
        >
          Sobre nosotros
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="sobre-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#222",
                marginBottom: "20px",
              }}
            >
              Somos Elena y David. Nos conocimos en el A.I.V. hace más de 5 años y desde
              el primer momento compartimos la misma pasión: trabajar con niños y crear
              experiencias únicas para las familias.
            </p>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#222",
                marginBottom: "20px",
              }}
            >
              Elena es maestra especializada en Educación Infantil y Primary con certificado
              B2 en inglés. David es educador social y lleva años coordinando actividades
              de tiempo libre para niños de todas las edades.
            </p>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#222",
              }}
            >
              Juntos fundamos <strong>Entre Peques</strong> con la convicción de que cada
              niño merece una atención personalizada, llena de cariño y profesionalidad.
              Estamos certificados en primeros auxilios pediátricos y contamos con todas
              las habilitaciones necesarias.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#6a8cb8",
              borderRadius: "24px",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              opacity: 0.75,
            }}
          >
            📷 Foto del equipo próximamente
          </div>
        </div>

        {/* Values strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "60px",
          }}
          className="values-grid"
        >
          {[
            { icon: "💚", title: "Cariño", text: "Cada niño recibe atención personalizada y afectuosa." },
            { icon: "⭐", title: "Profesionalidad", text: "Tituladas, certificadas y con experiencia demostrada." },
            { icon: "🔒", title: "Confianza", text: "Transparencia total con las familias en todo momento." },
          ].map((val) => (
            <div
              key={val.title}
              style={{
                backgroundColor: "#fff",
                border: "2px solid #f0e8e0",
                borderRadius: "20px",
                padding: "28px 20px",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>{val.icon}</div>
              <h4
                style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {val.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.92rem",
                  color: "#444",
                  lineHeight: 1.6,
                }}
              >
                {val.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
