import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col border border-black rounded-lg 2xl:w-1/4 2xl:h-3/6 xl:w-4/12 lg:w-2/4 lg:h-3/6 shadow-3xl max-sm:w-3/4 max-sm:h-1/2">
      <header className="flex justify-center w-full mt-10 text-5xl font-black max-sm:w-full">
        <h1 className="text-primary">Login</h1>
      </header>
      <div className="flex flex-col justify-center items-center mt-16 gap-5">
        <input type="email" className="w-3/4 h-10 rounded-md text-primary p-2 shadow-xl bg-secundary " placeholder="E-mail"/>
        <input type="password" className="w-3/4 h-10 rounded-md text-primary p-2 shadow-xl bg-secundary " placeholder="Senha"/>
        <button className="w-3/4 h-10 rounded-md text-white hover:shadow-2xl transition-all p-2  bg-primary mt-5">Entrar</button>
      </div>
    </main>
  );
}
