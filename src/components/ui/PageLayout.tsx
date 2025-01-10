import TopBar from "./TopBar"

import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <TopBar />
      <div className="pages">
        {children}
      </div>
    </div>
  )
}

export default PageLayout
