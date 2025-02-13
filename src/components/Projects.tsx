import { ArrowUpRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const Projects = () => {

    const projects = [
        {
            name: "Documentthing",
            tools: "[React, Golang , Tailwind , Axios, CloudFlare R2]",
            active: true,
            tags: [
                {
                    title: "[SAAS]",
                    color: "text-cyan-400"
                }
            ],
            description: "Meet DocumentThing — a documentation tool designed to make life easier for developers. I’ve been where you are, battling clunky tools that break your flow. That’s why I created DocumentThing—a simple, powerful solution to help you document your code without the headaches. Save your docs directly to GitHub, collaborate with your teammates, and export in Markdown or HTML with ease. The rich-text editor makes writing a breeze, and inviting your team to contribute is seamless. And soon, you’ll even be able to publish your docs online in just one click. It’s everything you need to document smarter, not harder.",
            link: "https://www.documentthing.com"
        },
        {
            name: "Dumbles.io",
            tools: "[React, Golang , Tailwind , Redis, Axios, Stripe]",
            active: false,
            tags: [],
            description: "To deepen my understanding of modern web development, I built a fully functional e-commerce application using React on the frontend and Go on the backend. This project allowed me to explore key concepts like state management, component design, and API integration in React, while also honing my backend skills with Go for handling secure and efficient server-side operations. I integrated Stripe for seamless payment processing, which provided valuable insights into handling payment workflows and managing sensitive data. This hands-on experience not only strengthened my technical skills but also gave me a holistic view of building and deploying full-stack applications.",
            link: "https://dumbles.vercel.app/dashboard"
        },
    ]

    return (
        <section className="mt-16" id="Projects">
            <p className="text-xl font-semibold mb-4">Projects</p>
            <dl className="space-y-3">
                {
                    projects.map((e) => (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <div className="flex font-semibold">
                                        <p>{e.name}&nbsp;</p>
                                        {
                                            e.tags.map(ele => (
                                                <p className={`${ele.color}`}>{ele.title}&nbsp;</p>
                                            ))
                                        } <a target="_blank" href={e.link} className="animate-pulse"><ArrowUpRight height={20} /></a>
                                    </div>
                                    <div className="text-orange-500">
                                        {e.tools}
                                    </div>
                                </div>
                                {
                                    e.active && <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger >
                                                <span className="relative flex size-3">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Active Development</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                }
                            </div>
                            <div className="text-neutral-500">
                                {
                                    e.description
                                }
                            </div>
                        </div>
                    ))
                }
            </dl>
        </section>
    )
}

export default Projects