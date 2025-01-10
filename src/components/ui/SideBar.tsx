import { FaGithub } from "react-icons/fa"
import { ColorMode } from "./ThemeProvider"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="icons-club">
        <ColorMode />
        <FaGithub />
      </div>
    </div>
  )
}

export default SideBar
