import Header from "./components/Header"
import { ScrollArea } from "./components/ui/scroll-area"

const App = () => {
  return (
    <ScrollArea className='bg-zinc-900 h-dvh max-h-dvh font-mono text-neutral-300'>
      <div className="max-w-3xl mx-auto mt-12 p-2">
        <Header></Header>
      </div>
    </ScrollArea>
  )
}

export default App