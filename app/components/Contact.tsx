function Contact() {
  return (
    <section className="w-full h-fit md:h-screen my-5 md:my-20 px-3 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-5xl h-full px-5 flex flex-col justify-evenly">
            <div className="w-full h-fit my-5 text-white">
                <h1 className="text-[12px] font-extralight">CONTACT</h1>
                <h1 className="font-extrabold text-4xl md:text-6xl">Get in Touch</h1>
                <p className="md:w-2xl text-[14px] md:text-md">
                    Connect with a Software Engineer building fast, scalable digital products. <br /> Available for collaborations, consulting, and sharing developer insights. <br /> Let's build systems that actually work.
                </p>
            </div>
            <form action="#" method="POST" className="w-full h-fit p-5 bg-[#0a0a0a] text-white border-white/30 border-2 text-sm rounded-2xl">
                <div className="h-16 mb-5 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Your Name" className="mt-1 p-3 outline-1 outline-white/30 rounded-md" />
                </div>
                <div className="h-16 mb-5 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="your_email@example.com" className="mt-1 p-3 outline-1 outline-white/30 rounded-md" />
                </div>
                <div className="h-16 mb-5 flex flex-col">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" placeholder="+(91) 123-456-7890" className="mt-1 p-3 outline-1 outline-white/30 rounded-md" />
                </div>
                <div className="h-16 mb-5 flex flex-col">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" placeholder="What's this about?" className="mt-1 p-3 outline-1 outline-white/30 rounded-md" />
                </div>
                <div className="mb-5 flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="messageBox" required rows={6} className="w-full mt-1 p-3 outline-1 outline-white/30 rounded-md resize-none" placeholder="Tell me about your idea, question, collaboration or project..."></textarea>
                </div>
                <div>
                    <input type="submit" value="Send Message" className="w-full p-3 rounded-2xl text-lg text-[#dcfd00] font-black border-2 border-[#dcfd00] cursor-pointer hover:text-black hover:bg-[#dcfd00] transition-all duration-300"/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
