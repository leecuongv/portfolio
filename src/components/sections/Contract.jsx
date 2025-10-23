import emailjs from 'emailjs-com'
import { useState } from 'react';

const Contact = () => {

    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            alert("Message Sent!")
            console.log(formData)
            setFormdata({ name: "", email: "", message: "" })
            console.log(result.status)
        } catch (err) {
            alert("Oops! Something went wrong ,Please Try Again.")
            console.log(err)
        }

    }



    return (
        <section id='contact' className="min-h-screen flex flex-col justify-center items-center py-20">
            <div className="w-screen md:w-150 px-4">
                <h2 className="text-3xl font-bold mb-8 text-primary-d40 text-center">
                    Get in touch
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <div className="relative">
                        <input type="text" id="name" name="name" required className="w-full input-bg border outline-color rounded px-4 py-3 text-primary transition focus:outline-none focus:border-primary focus:bg-primary-d20"
                            value={formData.name}
                            onChange={(e) => {
                                setFormdata({ ...formData, name: e.target.value })
                            }}
                            placeholder="Your Name" />
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required className="w-full input-bg border outline-color rounded px-4 py-3 text-primary transition focus:outline-none focus:border-primary focus:bg-primary-d20"
                            value={formData.email}
                            onChange={(e) => {
                                setFormdata({ ...formData, email: e.target.value })
                            }}
                            placeholder="example@email.com" />
                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" required className="w-full input-bg border outline-color rounded px-4 py-3 text-primary transition focus:outline-none focus:border-primary focus:bg-primary-d20"
                            value={formData.message}
                            onChange={(e) => {
                                setFormdata({ ...formData, message: e.target.value })
                            }}
                            placeholder="Your Message.." rows={5} />
                    </div>

                    <button type="submit" className="w-full bg-primary py-3 px-6 text-on-primary font-medium rounded transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(11,87,208,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
            <h6 className='mt-5 text-primary-d40'>or</h6>

            <div className='flex gap-2 items-center mt-5 text-primary'>
                <a href='https://github.com/leecuongv' className='hover:scale-105' aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="transition-colors">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.1.7 2.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.5-5.3 5.8.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                    </svg>
                </a>
                <a href='https://www.linkedin.com/in/leecuongv/' className='hover:scale-105' aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="transition-colors">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.85-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666H9.351V9.5h3.413v1.498h.049c.476-.9 1.637-1.85 3.369-1.85 3.603 0 4.269 2.371 4.269 5.456v6.848zM5.337 8.003a2.065 2.065 0 11.001-4.13 2.065 2.065 0 010 4.13zM6.93 20.452H3.745V9.5H6.93v10.952z" />
                    </svg>
                </a>
            </div>
        </section>

    )
}

export { Contact };