import FormSection from "./components/FormSection"
import ResultSection from "./components/ResultSection"
import { InputProvider } from "./context/InputContext"

function App() {
  return (
    <main className="bg-off_white min-h-screen grid place-items-center font-poppins p-6 overflow-hidden">
      <div className="max-w-[840px] md:p-[50px] p-[20px] w-full md:min-h-[650px] min-h-[500px] bg-white rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-[150px] grid content-center md:gap-0 gap-10">
        <InputProvider>
          <FormSection />
          <ResultSection />
        </InputProvider>
      </div>
    </main>
  )
}

export default App
