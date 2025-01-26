import { Github, Linkedin, Twitter } from "lucide-react"

const About = () => {

    const socials = [
        {
            icon: Linkedin,
            link: "",
            color : "#0A66C2"
        },
        {
            icon: Twitter,
            link: "",
            color : "#1DA1F2"
        },
        {
            icon: Github,
            link: "",
            color : "#d4d4d4"
        }
    ]

    return (
        <section className='pt-16'>
            <p className="text-xl font-semibold">Hi there,</p>
            <p className="pt-4">
                Building <a href="" className="underline underline-offset-4">Documentthing</a> - a code documentation creation platform that seamlessly integrates with github. With some side projects have 2+ years of experience in creating, breaking, fixing UI's and Functionality across the web. Tinkering around to gain knowledge how to build high-scalable systems and architectural stuff.
            </p>
            <div className="pt-6 flex items-center gap-3">
                <p>Find me on</p>
                <div className="flex gap-2">
                    {
                        socials.map(social => (
                            <a href={social.link}>
                                <social.icon fill={social.color} color={social.color}  height={22}></social.icon>
                            </a>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default About