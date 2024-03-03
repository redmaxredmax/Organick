import React from "react"
import { MainLayout } from "./layouts/main-layout/main-layout"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { mainRouterData } from "./pages/router"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainRouterData.map((item) =>
            <Route key={item.id} path={item.path} index={item.path ? false : true} element={item.component} />
          )}
        </Route>
      </Routes>
    </div>
  )
}

export default App
