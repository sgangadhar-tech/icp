import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import WhyICP from "./pages/WhyICP"
import Framework from "./pages/Framework"
import Checklist from "./pages/Checklist"
import Resources from "./pages/Resources"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why" element={<WhyICP />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Layout>
  )
}

export default App