const LogoList = [
  {
    title: "COCA COLA",
    Svg: require("@site/static/img/adobe.svg").default,
  },
  {
    title: "APPLE",
    Svg: require("@site/static/img/apple.svg").default,
  },
  {
    title: "AWS",
    Svg: require("@site/static/img/aws.svg").default,
  },
  {
    title: "COCA COLA",
    Svg: require("@site/static/img/adobe.svg").default,
  },
  {
    title: "APPLE",
    Svg: require("@site/static/img/apple.svg").default,
  },
  {
    title: "AWS",
    Svg: require("@site/static/img/aws.svg").default,
  },{
    title: "COCA COLA",
    Svg: require("@site/static/img/adobe.svg").default,
  },
  {
    title: "APPLE",
    Svg: require("@site/static/img/apple.svg").default,
  },
  {
    title: "AWS",
    Svg: require("@site/static/img/aws.svg").default,
  },{
    title: "COCA COLA",
    Svg: require("@site/static/img/adobe.svg").default,
  },
  {
    title: "APPLE",
    Svg: require("@site/static/img/apple.svg").default,
  },
  {
    title: "AWS",
    Svg: require("@site/static/img/aws.svg").default,
  },
  {
    title: "COCA COLA",
    Svg: require("@site/static/img/adobe.svg").default,
  },
  {
    title: "APPLE",
    Svg: require("@site/static/img/apple.svg").default,
  },
  {
    title: "AWS",
    Svg: require("@site/static/img/aws.svg").default,
  },
];

function ItemList({ Svg, title }) {
  return (

      <div className="col-span-1 flex flex-col items-center justify-items-center justify-center py-2 px-2 text-center">
        <Svg
          className="inline-block h-16 w-16"
          role="img"
        />
        <p>{title}</p>
      </div>

  );
}

export default function HomeLogoUser() {
  return (
    <section className="p-20 mt-8 grid grid-cols-3 gap-0.5 md:grid-cols-4 lg:mt-0 lg:grid-cols-5 mx-auto" >
      {LogoList.map((props, idx) => (
        <ItemList
          key={idx}
          {...props}
        />
      ))}
    </section>
  );
}
