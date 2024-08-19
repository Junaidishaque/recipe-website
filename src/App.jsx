import Footer from "./components/Footer"
import Header from "./components/Header"
import Recipes from "./components/Recipes"
import { Container } from "react-bootstrap"
function App() {
 
  return (
  <>
  <Header/>
  <Container>
    <Recipes/>
    </Container>
    <Footer/>
  </>
  )
}

export default App
