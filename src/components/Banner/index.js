
const FeatureList = [
  {
    value: "100%",

    description: "Free and open source",
  },

  {
    value: "10M+",
    description: "Over 10 million downloads",
  },

  {
    value: "2M+",
    description: "Over 2 million stars on GitHub",
  },
];

function Feature({ value, description }) {
  return (
    <div className="flex flex-col items-center justify-items-center gap-5">
        <h3 className="text-blue-600 text-5xl">{value}</h3>
        <p className="text-slate-500 text-xl text-balance text-center">{description}</p>
 
    </div>
  );
}

export default function Banner() {
  return (
    <section className=" py-20 ">
      <h2 className="w-3/5 mx-auto text-3xl leading-9 font-extrabold md:text-4xl md:leading-10 text-center text-balance mb-10">
        Ya confian en nuestras herramientas para construir sitios web
      </h2>
      <div className="w-3/5 mx-auto p-10 rounded-xl bg-white dark:bg-slate-800 flex flex-col sm:flex-row justify-center items-center gap-10 shadow-lg">
        {FeatureList.map((props, idx) => (
          <Feature
            key={idx}
            {...props}
          />
        ))}
      </div>
    </section>
  );
}
