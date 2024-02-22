import RetroImg from "../../assets/images/image-retro-pcs.jpg";
import LaptopImg from "../../assets/images/image-top-laptops.jpg";
import GamingImg from "../../assets/images/image-gaming-growth.jpg";

export default function BottonContent() {
  return (
    <section className="w-full flex justify-between gap-10 col-span-3 mb-16 mobile:flex-col mobile:w-4/5">
      <div className="flex gap-4 w-96">
        <img src={RetroImg} alt="pc retro" className="h-40" />
        <div className="flex flex-col gap-3">
          <span className="text-4xl font-extrabold text-grayish-blue mobile:text-lg">
            01
          </span>
          <a
            href="#"
            className="text-very-dark-blue text-xl font-extrabold hover:text-soft-red mobile:text-sm"
          >
            Reviving Retro PCs
          </a>
          <p className="text-sm">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-96">
        <img src={LaptopImg} alt="laptop" className="h-40" />
        <div className="flex flex-col gap-3">
          <span className="text-4xl font-extrabold text-grayish-blue mobile:text-lg">
            02
          </span>
          <a
            href="#"
            className="text-very-dark-blue text-xl font-extrabold hover:text-soft-red mobile:text-sm"
          >
            Top 10 Laptops of 2022
          </a>
          <p className="text-sm">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-96">
        <img src={GamingImg} alt="controle playstation" className="h-40" />
        <div className="flex flex-col gap-3">
          <span className="text-4xl font-extrabold text-grayish-blue mobile:text-lg">
            01
          </span>
          <a
            href="#"
            className="text-very-dark-blue text-xl font-extrabold hover:text-soft-red mobile:text-sm"
          >
            The Growth of Gaming
          </a>
          <p className="text-sm">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
