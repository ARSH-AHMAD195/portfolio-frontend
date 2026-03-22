'use client';
import Link from "next/link";
import { Icons } from "../utils/images"
import Image from "next/image";


function Footer() {
    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "BLOGS", href: "/blogs" },
        { name: "PROJECTS", href: "/projects" },
        { name: "CONTACT", href: "/contact" },
        { name: "ABOUT", href: "/about" }
    ];

    return (
        <section className="w-sm sm:w-full bg-[#dcfd00] rounded-t-3xl overflow-hidden px-6 py-16 flex flex-col justify-between">
            {/* NORMAL CONTENT */}
            <div className="z-10 h-70 md:h-90 md:p-10 flex flex-col justify-between text-black">
                <div className="w-full h-40 flex justify-start gap-5 sm:gap-20">
                    <div className="flex flex-col">
                        <h1 className="w-40 mb-5 border-b-4 text-xl">Useful Links</h1>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-xl hover:font-bold">
                            {link.name}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <h1 className="w-40 mb-5 border-b-4 text-xl">Contact</h1>
                            <p>Mobile: </p>
                            <p>Email: </p>
                            <div className="mt-5 flex justify-start gap-5">
                                <a href="https://github.com/ARSH-AHMAD195" target="_blank">
                                    <button className="w-15 h-15 flex justify-center items-center outline-3 rounded-full cursor-pointer hover:shadow-[0px_0px_20px_#000]">
                                        <Image src={Icons.GitHubLogo} width={30} alt="GithubLogo"></Image>
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com/in/arsh-ahmad-771baa290" target="_blank">
                                    <button className="w-15 h-15 flex justify-center items-center outline-3 rounded-full cursor-pointer hover:shadow-[0px_0px_20px_#000]">
                                        <Image src={Icons.LinkedInLogo} width={30} alt="GithubLogo"></Image>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-xl">MADE WITH LOVE BY <span className="font-extrabold">ARSH AHMAD</span></p>
                </div>
            </div>

            {/* HUGE BACKGROUND TEXT */}
            <div className="relative w-full h-10 md:h-30">
                <h1 className="absolute -bottom-20 md:-bottom-25 left-2 md:left-50 w-full text-[70px]  md:text-[250px] font-black text-black/60 leading-none whitespace-nowrap">
                    Arsh.dev
                </h1>
            </div>
        </section>
    )
}
export default Footer
