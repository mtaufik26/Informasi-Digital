import React from "react";

const Moto = () => {
  const items = [
    {
      title: "Moto",
      content: ["Ilmu yang Amaliah", "Amal yang Ilmiah", "Akhlaqul Karimah"],
      bg: "bg-blue-900",
      textColor: "text-white",
      extraClass: "",
    },
    {
      title: "Sikap",
      content: ["Aku Ada,", "Lingkunganku Bahagia"],
      bg: "bg-blue-900",
      textColor: "text-white",
      extraClass: "",
    },
    {
      title: "Afirmasi",
      content: [
        "Pada-Mu Negeri, Kami Berjanji",
        "Lulus Wikrama",
        "Siap Membangun Negeri",
      ],
      bg: "bg-blue-900",
      textColor: "text-white",
      extraClass: "",
    },
  ];

  return (
    <div className="flex justify-center gap-6 px-6 py-10 relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`group w-1/3 p-6 rounded-lg shadow-md text-center transition 
          duration-300 ease-in-out transform hover:scale-120 hover:bg-white hover:text-gray-900 ${item.bg} ${item.textColor} ${item.extraClass}`}
        >
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <div className="mt-3 space-y-1 text-lg">
            {item.content.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-4 border-t-4 border-orange-500 w-1/2 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default Moto;
