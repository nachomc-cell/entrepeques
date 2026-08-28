"use client";
export default function Servicios() {
  return (
    <section
      id="servicios"
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
            marginBottom: "60px",
            color: "#000",
          }}
        >
          Servicios
        </h2>

        {/* BABYSITTING */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: "80px",
          }}
          className="service-grid"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "16px",
                color: "#96cd66",
              }}
            >
              Babysitting
            </h3>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#222",
              }}
            >
              Los padres también necesitan tiempo para ellos. Por eso ofrecemos un servicio
              de cuidado de niños profesional y cercano que permite a los padres salir a
              vivir una noche tranquilos, sabiendo que sus hijos están en buenas manos.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#6a8cb8",
              borderRadius: "20px",
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              opacity: 0.7,
            }}
          >
            📷 Imagen próximamente
          </div>
        </div>

        {/* ORGANIZACIÓN DE CUMPLEAÑOS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
            marginBottom: "80px",
          }}
          className="service-grid"
        >
          <div style={{ gridColumn: "1 / -1" }}>
            <h3
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "16px",
                color: "#efd57a",
                textAlign: "center",
              }}
            >
              Organización de cumpleaños
            </h3>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#222",
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 36px",
              }}
            >
              Garantizamos el éxito que vas a tener en tu cumpleaños o el de las familias que
              nos recomiendan. Ofrecemos un servicio de acompañantes en tu fiesta para las familias.
              Nuestros presupuestos son completamente personalizados a las necesidades de cada familia.
            </p>
          </div>

          {/* Pack cards */}
          {[
            {
              label: "Pack Básico",
              items: ["2 animadoras", "Juegos y dinámicas", "Duración: 2h", "Hasta 15 niños"],
            },
            {
              label: "Pack Mágico",
              items: ["3 animadoras", "Juegos y manualidades", "Duración: 3h", "Hasta 25 niños"],
            },
            {
              label: "Pack Máximo",
              items: ["4 animadoras", "Programa personalizado", "Duración: 4h", "Sin límite de niños"],
            },
          ].map((pack, i) => (
            <div
              key={pack.label}
              style={{
                backgroundColor: "#6a8cb8",
                borderRadius: "20px",
                padding: "28px 24px",
                color: "#fff",
                flex: "1",
                minWidth: "200px",
                boxShadow: "0 4px 20px rgba(106,140,184,0.25)",
                gridColumn: i === 2 ? "2 / 3" : undefined,
              }}
            >
              <h4
                style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "16px",
                  color: "#fff",
                }}
              >
                {pack.label}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pack.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      padding: "4px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA presupuesto */}
          <div style={{ gridColumn: "1 / -1", textAlign: "center", marginTop: "8px" }}>
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
                padding: "14px 36px",
                borderRadius: "50px",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 16px rgba(239,213,122,0.4)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              }}
            >
              Pide tu presupuesto
            </a>
          </div>
        </div>

        {/* CLASES PARTICULARES */}
        <div
          style={{
            backgroundColor: "#efd57a",
            borderRadius: "24px",
            padding: "48px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="service-grid"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "16px",
                color: "#000",
              }}
            >
              Clases particulares
            </h3>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#222",
                marginBottom: "16px",
              }}
            >
              Al tener especializadas del área con experiencia en las áreas que ofrecemos,
              podemos dar clases particulares en cada asignatura y provincia con mayor probabilidad.
            </p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#333" }}>
              Las asignaturas incluyen:
            </p>
            <ul style={{ marginTop: "8px", paddingLeft: "20px", fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "#222", lineHeight: 2 }}>
              <li>Matemáticas</li>
              <li>Lengua y Literatura</li>
              <li>Lengua Castellana</li>
              <li>English (con docentes con certificados B2 y C1)</li>
            </ul>
            <p style={{ marginTop: "12px", fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#333" }}>
              Contamos con maestras con título en Educación que dominan el lenguaje pictórico y plástico.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.4)",
              borderRadius: "16px",
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#555",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            📷 Imagen próximamente
          </div>
        </div>
      </div>
    </section>
  );
}
