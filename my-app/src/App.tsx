import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage} from './pages/HomePage.tsx'
import {TagList} from './pages/Tags.tsx'
import {OneTagPage} from './pages/OneTagPage.tsx'
import {ROUTES} from './Routes.tsx'
import NavBar from './components/NavBar.tsx'

function App() {
  return (
    <BrowserRouter basename="/frontend_map_object">
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path = {ROUTES.TAGS} element={ <TagList />} />
        <Route path={`${ROUTES.TAG}/:id`} element={<OneTagPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;