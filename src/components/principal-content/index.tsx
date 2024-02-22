import PrincipalImg from "../../assets/images/image-web-3-desktop.jpg";

export default function PrincipalContent() {
  return (
    <section className="col-span-2 flex flex-wrap gap-y-5">
      <img src={PrincipalImg} alt="Imagen Principal" />
      <div className="w-1/2">
        <h1 className="font-extrabold text-5xl">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="w-1/2">
        <p className="text-sm mb-3">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?s
        </p>

        <a
          href="#"
          className="p-2 text-off-white bg-very-dark-blue hover:bg-soft-red"
        >
          READ MORE
        </a>
      </div>
    </section>
  );
}
