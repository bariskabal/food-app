import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export default function Layout({ children }) {
    return(
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}