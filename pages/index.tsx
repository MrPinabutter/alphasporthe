import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Logo from "../public/logo.png";

const Home: NextPage = () => {
  const camisas = [
    {
      id: 1,
      name: "Camisa 1",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 2,
      name: "Camisa 2",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 3,
      name: "Camisa 3",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 4,
      name: "Camisa 1",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 5,
      name: "Camisa 2",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 6,
      name: "Camisa 2",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 7,
      name: "Camisa 2",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
    {
      id: 8,
      name: "Camisa 2",
      image:
        "https://flamengo.vteximg.com.br/arquivos/ids/164071-1000-1000/H18340_1-removebg-preview.png?v=637807439979400000",
      price: 100,
    },
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const effectTitle = () => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      titleRef.current?.addEventListener("mouseover", (e: any) => {
        let count = 0;
        const interval = setInterval(() => {
          e.target.innerText = e.target.innerText
            .split("")
            .map((letter: string, idx: number) => {
              if (idx < count) return e.target.dataset.value[idx];

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (count === e.target.innerText.length) clearInterval(interval);
          count += 1;
        }, 40);
      });
    };
    if (titleRef) effectTitle();
  }, []);

  return (
    <main className="h-full">
      <header className="items-center p-4 bg-gradient-to-tr to-[#24264299] from-[#4a288799] w-full flex justify-center gap-2 shadow-lg">
        <Image src={Logo} quality={1} height={48} width={48} />
        <h1
          ref={titleRef}
          data-value="ALPHA SPORTS"
          className="
            font-['Courier_Prime'] 
            text-2xl text-white"
        >
          ALPHA SPORTS
        </h1>
      </header>

      <section className="flex w-full justify-center">
        <section className="w-full p-4 flex flex-col gap-4 md:max-w-7xl">
          <h1 className="text-white font-semibold font-['Poppins'] text-xl">
            Camisas de time
          </h1>
          <div className="flex-none w-full flex-wrap flex gap-4 overflow-auto scrollbar-hide">
            {camisas.map((comment) => (
              <Card
                key={comment.id}
                name={comment.name}
                image={comment.image}
                price={comment.price}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

interface CardProps {
  name: string;
  image: string;
  price: number;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="flex-none w-36 p-2 bg-white bg-opacity-50 rounded-lg shadow-lg">
      <img src={props.image} alt={props.name} className="w-full rounded" />
      <h1 className="font-semibold text-black text-lg mt-1">{props.name}</h1>
      <h1 className="font-semibold text-black text-2xl font-['Poppins']">
        <span className="text-sm font-['Vollkorn']">R$ </span>
        {props.price}
      </h1>

      <button className="font-['Poppins'] mt-2 text-md w-full font-semibold transition-all rounded-md bg-cyan-700 hover:bg-cyan-900 text-white px-3 py-2">
        Comprar
      </button>
    </div>
  );
};

export default Home;
