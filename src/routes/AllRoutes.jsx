import { Route, Routes } from "react-router-dom";

import { Contact, PageNotFound,Home, DUI, Criminal, Expungments, Personal, Family, NewsRoom, EmailSender } from "../pages";
import { AboutUs } from "../pages/AboutUs";
import { Privacy } from "../pages/Privacy";
import { AndCase, AndEd, Erica, OurTeam, RyanLe, SethHend } from "../pages/teams";
import { Dsolloway } from "../pages/teams/Dsolloway";
import ProtectedRoute from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dui" element={<DUI />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/criminal" element={<Criminal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expungments" element={<Expungments />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/family" element={<Family />} />
          <Route path="/newsroom" element={<NewsRoom />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/e-seth-hendrick" element={<SethHend />} />
          <Route path="/erika-diaz" element={<Erica />} />
          <Route path="/andrew-m-casey" element={<AndCase />} />
          <Route path="/ryan-loewenstern" element={<RyanLe />} />
          <Route path="/andrew-edward-hutter" element={<AndEd />} />
          <Route path="/dan-solloway" element={<Dsolloway />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/email" element={<ProtectedRoute><EmailSender /></ProtectedRoute>} />

           
          <Route path="*" element={<PageNotFound title='PageNotFound' />} />

        </Routes>
        
    </div>
  )
}