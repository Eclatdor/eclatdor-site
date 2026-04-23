export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Éclat d'Or"
        className="w-[750px] max-w-[90%] h-auto mb-6"
      />

      {/* TAGLINE */}
      <p className="text-[#D6B36A] text-[10px] tracking-[0.6em] uppercase font-light mb-10 text-center opacity-80">
        The Nouvelle Ère of Modest Couture
      </p>

      {/* ENTER BUTTON */}
      <button className="border border-[#D6B36A] text-[#D6B36A] px-10 py-3 tracking-[0.4em] text-sm hover:bg-[#D6B36A] hover:text-black transition-all duration-300">
        ENTER
      </button>

    </div>
  );
}