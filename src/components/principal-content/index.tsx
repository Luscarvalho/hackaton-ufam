import PrincipalImg from "../../assets/images/image-web-3-desktop.jpg"

export default function PrincipalContent() {
    return (
        <>
            <div className="flex flex-wrap">
                <img className="mb-7" src={PrincipalImg} alt="imagen principal" />
                <div className="w-1/2">
                    <h1 className="font-bold text-3xl">The Bright Future of Web 3.0?</h1>
                </div>
                <div className="w-1/2 flex flex-col gap-5">
                    <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?s</p>
                    <div>
                        <a className="p-2 ps-6 pe-6 text-off-white bg-very-dark-blue hover:bg-soft-red">READ MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}