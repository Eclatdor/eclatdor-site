export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">

        <img
          src="/logo.png"
          alt="Éclat d'Or"
          className="w-[700px] max-w-[90%] h-auto mx-auto"
        />

        <div className="flex items-center justify-center mt-6 mb-4">
          <div className="w-20 h-[1px] bg-[#CFAF6A]"></div>
          <div className="mx-3 text-[#CFAF6A] text-lg">✦</div>
          <div className="w-20 h-[1px] bg-[#CFAF6A]"></div>
        </div>

        <p className="text-[#CFAF6A] text-[10px] tracking-[0.6em] uppercase font-light">
          The Nouvelle Ère of Modest Couture
        </p>

      </div>
    </div>
  );
}