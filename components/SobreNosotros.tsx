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
            fontFamily: "'MoreSugar', cursive",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "50px",
            color: "#6a8cb8",
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
              Contamos con el apoyo y la confianza de Edelweiss School, que nos han brindado la oportunidad de lanzar nuestro proyecto.
            </p>
          </div>

           <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/26Qx2EJ2R2o"
              title="Entre Peques"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

 
      </div>
    </section>
  );
}
