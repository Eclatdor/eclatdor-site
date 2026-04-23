export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center text-center">

        <img
          src="/logo.png"
          alt="Éclat d'Or"
          className="w-[700px] max-w-[90%] h-auto"
        />

        <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-light mt-6 opacity-80">
          The Nouvelle Ère of Modest Couture
        </p>

        <button className="mt-12 border border-[#D4AF37] text-[#D4AF37] px-12 py-3 tracking-[0.3em] text-xs uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
          Enter
        </button>

      </div>
    </main>
  );
}