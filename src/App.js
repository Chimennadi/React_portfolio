import GlobalStyle from "./theme/GlobalStyle"
import Layout from "./default/Layout"
import Hero from "./components/Hero"


function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

export default App
