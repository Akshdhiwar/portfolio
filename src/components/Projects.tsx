import { ArrowUpRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

const Projects = () => {

    const projects = [
        {
            name: "Documentthing",
            tools: "[React, Golang , Tailwind , Redis]",
            active: true,
            tags: [
                {
                    title: "[P]",
                    color: "text-blue-500"
                },
                {
                    title: "[SAAS]",
                    color: "text-red-500"
                }
            ],
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat accusantium, sint quisquam omnis nesciunt beatae corporis architecto placeat quas. A ut beatae numquam culpa consequatur praesentium quasi similique, iste commodi eum possimus officiis delectus in assumenda alias. Et vel dicta alias molestiae, nihil iste, corrupti explicabo hic quibusdam odio a rerum iusto sed reiciendis enim debitis. Odit cum ad, numquam iure ratione recusandae provident aliquam. Quibusdam, unde veniam. Assumenda, maiores corrupti. Obcaecati nulla non ratione sequi maxime veniam tempora. Veritatis, temporibus placeat repellat deleniti itaque maiores esse eos vitae voluptas quaerat rem ex voluptatibus atque illo vero. Quisquam, quae.",
            link: "https://www.documentthing.com"
        },
        {
            name: "Dumbles.io",
            tools: "[React, Golang , Tailwind , Redis, Stripe]",
            active: false,
            tags: [
                {
                    title: "[P]",
                    color: "text-blue-500"
                }
            ],
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat accusantium, sint quisquam omnis nesciunt beatae corporis architecto placeat quas. A ut beatae numquam culpa consequatur praesentium quasi similique, iste commodi eum possimus officiis delectus in assumenda alias. Et vel dicta alias molestiae, nihil iste, corrupti explicabo hic quibusdam odio a rerum iusto sed reiciendis enim debitis. Odit cum ad, numquam iure ratione recusandae provident aliquam. Quibusdam, unde veniam. Assumenda, maiores corrupti. Obcaecati nulla non ratione sequi maxime veniam tempora. Veritatis, temporibus placeat repellat deleniti itaque maiores esse eos vitae voluptas quaerat rem ex voluptatibus atque illo vero. Quisquam, quae.",
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
                                        } <a href={e.link} className="animate-bounce"><ArrowUpRight height={20} /></a>
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