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
            fontFamily: "'MoreSugar', cursive",
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
                fontFamily: "'MoreSugar', cursive",
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
              textAlign: "justify",
 
            }}
            >
              Los padres también necesitan tiempo para ellos, por eso ofrecemos este servicio para permitir a los padres salir a cenar una noche.
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
                fontFamily: "'MoreSugar', cursive",
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
                textAlign: "justify",
   
                maxWidth: "700px",
                margin: "0 auto 36px",
              }}
            >
              Conocemos el estrés que puede ser para las familias organizar un cumpleaños correctamente. Por ello, ofrecemos encargarnos de esa carga para las familias. Nuestro servicio de cumpleaños ofrece los siguientes packs orientativos como referencia. El presupuesto sigue siendo completamente personalizado a las necesidades del cliente .
            </p>
          </div>

          {/* Pack cards */}
          <div className="packs-grid" style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                label: "Pack básico",
                color: "#efd57a",
                items: ["Monitores", "Juegos", "Dinámicas infantiles", "Actividades adaptadas a la edad"],
              },
              {
                label: "Pack completo",
                color: "#efd57a",
                items: ["Organización integral del cumpleaños", "Decoración básica", "Coordinación del evento", "Actividades", "Monitores", "Gestión completa"],
              },
              {
                label: "Pack temático",
                color: "#efd57a",
                items: ["Decoración temática", "Ambientación", "Monitores de animación", "Actividades personalizadas"],
              },
            ].map((pack) => (
              <div
                key={pack.label}
                style={{
                  backgroundColor: "#6a8cb8",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  boxShadow: "0 4px 20px rgba(106,140,184,0.25)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'MoreSugar', cursive",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    marginBottom: "16px",
                    color: pack.color,
                  }}
                >
                  {pack.label}
                </h4>
                <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                  {pack.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        color: "#fff",
                        padding: "3px 0",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

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
                {/* CLASES PARTICULARES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
            marginTop: "20px",
          }}
          className="service-grid"
        >
          {/* Foto izquierda */}
          <div
            style={{
              backgroundColor: "#efd57a",
              borderRadius: "16px",
              minHeight: "380px",
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

          {/* Texto derecha */}
          <div>
            <h3
              style={{
                fontFamily: "'MoreSugar', cursive",
                fontSize: "1.8rem",
                fontWeight: 400,
                marginBottom: "20px",
                color: "#efd57a",
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
                textAlign: "justify",
                marginBottom: "20px",
              }}
            >
              Al tener estudiantes del cole con experiencia en las asignaturas, esto permite conocer las técnicas de cada asignatura y profesor con mayor profundidad.
            </p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: "1rem", color: "#222", marginBottom: "8px" }}>
              Las asignaturas incluidas son:
            </p>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: "1rem", color: "#222", lineHeight: 2 }}>
              -Maths<br />
              -Social/natural science<br />
              -Lengua castellana<br />
              -English. Con alumnos con certificados B2 y C1.<br />
              -y muchas más...
            </p>
            <p style={{ marginTop: "20px", fontFamily: "'Quicksand', sans-serif", fontWeight: 500, fontSize: "1rem", color: "#222", textAlign: "justify" }}>
              Contamos con monitores con titulo de conservatorio que impartiran refuerzo de lenguaje musical y piano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
