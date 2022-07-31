import ButtonLink from "../links/ButtonLink";
import UnstyledLink from "../links/UnstyledLink";

export default function NavBar() {
    
    return (
        <div>
            <div className="flex flex-row justify-between items-center w-full h-16 bg-white font-montserrat shadow shadow-rose-600 fixed z-30 px-7">
                <div className="font-extrabold text-2xl text-rose-700">
                    <UnstyledLink href="/" target='_self'>My Vision Initiative</UnstyledLink>
                </div>
                <div className="hidden md:block font-semibold text-rose-700 space-x-10">
                    <UnstyledLink href="#programs" target="_self">
                        Our Programs
                    </UnstyledLink>
                    {/* <UnstyledLink href="#" target="_self">
                        Mission and Values 
                    </UnstyledLink> */}
                    <ButtonLink href="/contact" target="_self" className="text-rose-700 shadow-none border-rose-700 border-2 ">
                        Get in touch
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}