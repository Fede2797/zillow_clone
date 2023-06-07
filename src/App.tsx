import { Footer } from "./Footer"
import { Header } from "./Header"
import { MainContent } from "./MainContent"

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
