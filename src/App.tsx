
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home.js'
import Navbar from './app/Navbar.js'
import {ToastContainer}  from 'react-toastify'
import {lazy,Suspense}    from 'react'
import Spinner from './app/spinner.js'
const CategoryList = lazy(()=>import('./features/categories/categoryList.js'))
const  AddCategoryForm  = lazy(()=>import('./features/categories/addCategoryForm.js'))
const EditCategoryForm = lazy(()=>import('./features/categories/editCategory.js'))
function App() {
 
 return (
    <>
<ToastContainer theme='colored'  position='top-center'></ToastContainer>
<BrowserRouter>
    <Navbar/>
<Routes>
  <Route  path="/"  element={<Home/>}/>
 
  <Route  path="/categories"  element={<Suspense  fallback={<Spinner/>}><CategoryList/></Suspense>}/>
  <Route  path="/categories/create"  element={<Suspense  fallback={<Spinner/>}><AddCategoryForm/></Suspense>}/>
  <Route  path="/categories/:categoryId"  element={<Suspense  fallback={<Spinner/>}><EditCategoryForm/></Suspense>}/>

</Routes>
</BrowserRouter> 
    </>
  )
}

export default App;
