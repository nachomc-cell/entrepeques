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
              Somos Nacho y Carla, dos alumnos de 4º de la ESO. Y con ayuda de más alumnos del cole formamos Entre Peques.
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
              Entre Peques nace de una idea de los entrepreneurs del cole para hacer más fácil y divertida la aventura de ser padres.
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
              Fundamos Entre Peques con la convicción de que cada
              niño merece una atención personalizada, llena de cariño y profesionalidad.
              Contamos con el apoyo y la confianza de Edelweiss School que nos han brindado la oportunidad de lanzar nuestro proyecto.
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

 
      </div>
    </section>
  );
}
