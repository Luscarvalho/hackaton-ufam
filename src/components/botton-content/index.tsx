import RetroImg from "../../assets/images/image-retro-pcs.jpg"
import LaptopImg from "../../assets/images/image-top-laptops.jpg"
import GamingImg from "../../assets/images/image-gaming-growth.jpg"

export default function BottonContent() {
    return (
        <>
            <div className="flex justify-center gap-10">
                <div className="flex gap-4 w-96">
                    <img src={RetroImg} alt="pc retro" className="h-40" />
                    <div className="flex flex-col gap-3">
                        <span className="text-4xl font-extrabold text-grayish-blue">01</span>
                        <h4 className="text-very-dark-blue text-xl font-extrabold hover:text-soft-red">Reviving Retro PCs</h4>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="flex gap-4 w-96">
                    <img src={LaptopImg} alt="laptop" className="h-40" />
                    <div className="flex flex-col gap-3">
                        <span className="text-4xl font-extrabold text-grayish-blue">02</span>
                        <h4 className="text-very-dark-blue text-xl font-extrabold hover:text-soft-red">Top 10 Laptops of 2022</h4>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="flex gap-4 w-96">
                    <img src={GamingImg} alt="controle playstation" className="h-40" />
                    <div className="flex flex-col gap-3">
                        <span className="text-4xl font-extrabold text-grayish-blue">01</span>
                        <h4 className="text-very-dark-blue text-xl font-extrabold hover:text-soft-red">The Growth of Gaming</h4>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </>
    )
}