
const Exp = () => {

    const exp = [
        {
            time: "12/2022 - 05/2023",
            role: "Frontend Intern @ AECINSPIRE",
        },
        {
            time: "05/2023 - 01/2025",
            role: "Junior UI Developer @ AECINSPIRE",
            comment: "In this time period I transitioned from UI to full fledged Frontend Role."
        },
        {
            time: "01/2025 - Present",
            role: "Software Developer Engineer 2 @ AECINSPIRE",
            comment: "As the company structure was reformed I was assigned role of SDE 2 but this is equivalent to SDE 1 compared to market standards."
        }
    ]

    return (
        <section className="mt-16" id="Experience">
            <p className="text-xl font-semibold mb-4">Experience</p>
            <div>
                <dl className="space-y-4">
                    {
                        exp.reverse().map((e) => (
                            <div>
                                <div className="font-semibold">
                                    <dt>
                                        {e.time}
                                    </dt>
                                    <dd>{
                                        e.role
                                    }</dd>
                                </div>
                                {
                                    e.comment && <p className="italic text-neutral-500">{e.comment}</p>
                                }
                            </div>
                        ))
                    }

                </dl>
            </div>
        </section>
    )
}

export default Exp