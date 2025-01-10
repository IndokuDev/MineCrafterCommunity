import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'react-router'
import HomePage from './pages/HomePage'
import PageLayout from './components/ui/PageLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PageLayout>
            <HomePage />
          </PageLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
