import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Project from "./components/Projects/Project"
import Contact from "./components/Contact/Contact"
import InteractiveBackground from "./components/Background/InteractiveBackground"
import SkillsDashboard from "./components/SkillDashboard/SkillsDashboard"

function App() {
  return(
    <>
      <InteractiveBackground />
      <div className="app-content">
        <Nav></Nav>
        <Home></Home>
        <SkillsDashboard/>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
