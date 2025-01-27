import About from "./components/About"
import Exp from "./components/Exp"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import { ScrollArea } from "./components/ui/scroll-area"

const App = () => {
  return (
    <ScrollArea className='bg-zinc-900 h-dvh max-h-dvh font-mono text-neutral-300'>
      <div className="max-w-3xl mx-auto px-4 pt-16 font-mono text-sm font-normal antialiased sm:px-2 tracking-wide motion-preset-focus">
        <Header></Header>
        <About></About>
        <Tech></Tech>
        <Exp></Exp>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </ScrollArea>
  )
}

export default App