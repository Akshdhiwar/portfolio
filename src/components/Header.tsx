
const navItems = [
  "About", "Experience", "Projects"
]

const Header = () => {
  return (
    <section className="flex gap-4">
      <img className="h-16 w-16 rounded-full" src="https://github.com/shadcn.png" alt="@Akash" />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold sm:text-2xl">Akash Dhiwar</p>
        <div className="text-green-500 flex divide-dashed divide-x divide-green-500">
          {
            navItems.map((name) => (
              <a href={`#${name}`}
                key={name}
                className="underline-offset-2 hover:underline hover:cursor-pointer px-3 first:pl-0 last:pr-0 p-0"
              >
                {name}
              </a>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Header