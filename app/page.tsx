export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Éclat d'Or"
        className="w-[780px] max-w-[90%] h-auto mb-8"
      />

      {/* TAGLINE */}
      <p className="text-[#D4AF37] text-[10px] tracking-[0.65em] uppercase font-light mb-12 text-center opacity-80">
        The Nouvelle Ère of Modest Couture
      </p>

      {/* ENTER BUTTON */}
      <button className="border border-[#D4AF37] text-[#D4AF37] px-12 py-3 tracking-[0.45em] text-[11px] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
        Enter
      </button>

    </div>
  );
}