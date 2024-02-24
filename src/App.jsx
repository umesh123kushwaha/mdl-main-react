import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./Component/About/AboutPage"
import Awards from "./Component/Awards/Awards"
import Conference from "./Component/Conference/Conference"
import ContactUs from "./Component/ContactUs"
import ErrorPage from "./Component/ErrorPage"
import Footer from "./Component/Footer"
import { GlobalStyle } from "./Component/GlobalStyle"
import Header from "./Component/Header"
import Home from "./Component/Home/Home"
import Journals from "./Component/Journals/Journals"
import Membership from "./Component/ProMembership/Membership"
import Publication from "./Component/Publication/Publication"
import ServerError from "./Component/ServerError"
import Training from "./Component/Training/Training"
import GoTo from "./Component/GoTo"



function App() {
  const theme ={

    colors :{
      darkBlue: "#0a64fa",
      yellow: "#ffff00",
      MinDarkWhite: '#f5f5f5',
      orange: "#fa640a",
      lightBlack: "#363636",
      white: "white",
      black: "black",
      lightBlue: "#0a64fa",
    }
  }

  return (
      <ThemeProvider theme= {theme}>
      <GlobalStyle />
      {/* <ServerError /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about-mazedan" element={<AboutPage />} />
          <Route path="/journals" element={<Journals />}/>
          <Route path="/publication" element={<Publication />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/conference" element={<Conference /> } />
          {/* <Route path="/server-error" element={<ServerError />} /> */}
        </Routes>
        <Footer />
        <GoTo />
      </Router>
      </ThemeProvider>
  )
}

export default App;
