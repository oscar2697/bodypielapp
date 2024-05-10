import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full">
            <div className="max_padd_container relative top-32 xs:top-52">
                <h1 className="h1 capitalize max-w-[37rem] text-white">Body Piel</h1>
                <p className="text-white regular-16 mt-6 max-w-[33rem]">
                    ¡Bienvenido a Bodypiel! Nuestro Spa te ofrece una experiencia completa de bienestar con masajes relajantes, 
                    cauterización de lunares, reducción de medidas y una gama exclusiva de productos para la hidratación de la piel. 
                    Déjate consentir en un ambiente de serenidad y confort donde cada visita es una renovación para cuerpo y alma. 
                    Descubre el arte de cuidarte en Bodypiel.
                </p>

                <div className="flex !items-center gap-x-4 my-10">

                    <div className="bold-16 sm:bold-20 text-white">
                        Agenda una Cita
                    </div>
                </div>

                <div className="flex gap-2">
                    <NavLink 
                        to={'https://api.whatsapp.com/send?phone=593939535468'} 
                        className={'btn_dark_rounded flexCenter'}>
                        +593 93 953 5468
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Hero;
