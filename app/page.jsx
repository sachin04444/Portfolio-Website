import Main from "./Main/page"
import Contact from "./Contact/page"
import Skill from "./Skill/page"
import About from "./About.jsx/page"
import Study from "./Study/page"
import Project2 from "./Project2/page"
import Coverpage from "./Coverpage/page"

const page = () => {
  return (
    <>
    <Coverpage />
      <div className="main">
        <div className="left">
          <Main />
          <Contact />
          <Skill />
        </div>
        <div className="right">
          <About />
          <Study />
          <Project2 />
        </div>
      </div>
      
    </>
  )
}

export default page
