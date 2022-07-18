import ButtonLink from "../links/ButtonLink";
import UnstyledLink from "../links/UnstyledLink";

export default function NavBar() {
    
    return (
        <div>
            <div className="flex flex-row justify-between items-center w-full h-16 bg-white font-montserrat shadow shadow-rose-600 fixed z-30 px-7">
                <div className="font-extrabold text-2xl text-rose-700">
                    <UnstyledLink href="/" target='_self'>My Vision Initiative</UnstyledLink>
                </div>
                <div className="font-semibold text-rose-700 space-x-10">
                    <UnstyledLink href="#" target="_self">
                        Our Programs
                    </UnstyledLink>
                    <UnstyledLink href="#" target="_self">
                        Mission and Values 
                    </UnstyledLink>
                    <ButtonLink href="#" target="_self" className="text-rose-900 shadow-none border-rose-900 border-2">
                        Get in touch
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}