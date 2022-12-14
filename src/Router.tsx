import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Post">
          <Route path=":repo/:issueNumber" element={<Post />}></Route>
        </Route>
      </Route>
    </Routes>
  )
}
