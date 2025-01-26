
const Tech = () => {

    const langs = [
        {
            title: "Programming Languages",
            list: ["Typescript", "Golang", "C++"]
        },
        {
            title: "UI Frameworks",
            list: ["React", "Angular", "Tailwind"]
        },
        {
            title: "Database",
            list: ["Postgres"]
        },
        {
            title: "Platform/Cloud",
            list: [
                "I'm exploring different areas now, but it's in my future plans."]
        },
    ]

    return (
        <section className="mt-16">
            <p className="text-xl font-semibold mb-4">Technologies I have worked with</p>
            <p className="mb-4">The below mentioned list is a subset of all type of stack I have worked with, you can checkout my <a href="" className="underline">projects</a>  to know more.</p>
            <div>
                <dl className="space-y-4">
                    {
                        langs.map((e) => (
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <dt>
                                    <span className="font-semibold underline underline-offset-2">{e.title}</span>
                                    <span> : </span>

                                </dt>
                                <dd>{
                                    e.list.map((i, index) => (
                                        <span>{i}{e.list.length - 1 === index ? "" : ", "}</span>
                                    ))
                                }</dd>
                            </div>
                        ))
                    }

                </dl>
            </div>
        </section>
    )
}

export default Tech