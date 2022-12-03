import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
    </Routes>
  )
}
