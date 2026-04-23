export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">

      <div className="flex flex-col items-center">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Éclat d'Or"
          className="w-[650px] max-w-[90%] h-auto"
        />

        {/* TAGLINE */}
        <p className="text-[#D4AF37] text-[11px] tracking-[0.35em] uppercase font-light mt-6 text-center opacity-80">
          The Nouvelle Ère of Modest Couture
        </p>

        {/* ENTER BUTTON */}
        <button className="mt-10 border border-[#D4AF37] text-[#D4AF37] px-10 py-3 tracking-[0.3em] text-xs uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
          Enter
        </button>

      </div>

    </div>
  );
}