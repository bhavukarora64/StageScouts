import './App.css'
import ImagePublish from './pages/ImagePublish'
import Navbar from './components/Navbar'
import Register from './pages/RegisterForm'
import SignIn from './pages/SigninForm'
import DashboardPage from './pages/DashboardPage'
import ImageLibraryPage from './pages/ImageLibraryPage'
import { StadiumProvider } from './context/stadiumContext'
import { UserLoginProvider, UserLoginContext} from './context/userLoginContext'
import { UserProvider } from './context/userContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage'
import { ImageLibrarayProvider } from './context/imageLibrarayContext'


function App() {

  return (
    <StadiumProvider>
      <UserProvider>
        <UserLoginProvider>
          <ImageLibrarayProvider>
            <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/imageupload" element={<ImagePublish />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/imagelibrary" element={<ImageLibraryPage />} />
                <Route path="/orignalImage/:sourceURL" element={<orignalImage />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </BrowserRouter>
          </ImageLibrarayProvider>
        </UserLoginProvider>
      </UserProvider>
    </StadiumProvider>

  )
}

export default App
