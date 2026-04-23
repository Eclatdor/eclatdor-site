export default function Home() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      flexDirection: "column",
      textAlign: "center"
    }}>
      
      <img 
        src="/logo.png" 
        style={{ width: "700px", maxWidth: "90%" }} 
      />

      <p style={{
        color: "#D4AF37",
        fontSize: "10px",
        letterSpacing: "0.35em",
        marginTop: "20px",
        opacity: 0.8
      }}>
        The Nouvelle Ère of Modest Couture
      </p>

      <button style={{
        marginTop: "40px",
        border: "1px solid #D4AF37",
        color: "#D4AF37",
        padding: "12px 40px",
        letterSpacing: "0.3em",
        background: "transparent"
      }}>
        Enter
      </button>

    </main>
  );
}