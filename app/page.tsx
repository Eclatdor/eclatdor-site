export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-8">

        <img
          src="/logo.png"
          alt="Éclat d'Or"
          className="w-[650px] max-w-[90%] h-auto mx-auto"
        />

        <p className="text-[#d4af37] text-2xl tracking-[0.4em] uppercase font-light mt-6 text-center">
          The Nouvelle Ère of Modest Couture
        </p>

      </div>
    </div>
  );
}