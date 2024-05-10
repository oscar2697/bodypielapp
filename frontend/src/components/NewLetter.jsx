import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const NewLetter = () => {
    return (
        <section className="max_padd_container py-12 xl:py-28 bg-white">
            <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px] ">
                <h3 className="h3">Visitanos en</h3>
                <h4 className="uppercase bold-18">Nuestra Sucursal</h4>

                <div className="!items-center gap-x-4 my-10">
                    <div className="flex items-center gap-x-3">
                        <FaLocationDot/>

                        <div>
                            Coop. Jorge Mahuad Sector 5 Av. Río Chila  y Angelino Medoro 1er piso Alto
                        </div>
                    </div>

                    <div className="flex !items-center gap-x-4 my-10">
                        <MdEmail/>

                        <div className="flex items-center gap-x-3">
                            bodypiel.eb@gmail.com
                        </div>
                    </div>

                    <div className="flex !items-center gap-x-4 my-10">
                        <FaPhone/>

                        <div className="flex items-center gap-x-3">
                            +593 93 953 5468
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewLetter
