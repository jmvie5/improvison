import * as React from "react"
import NavLinks from "./NavLinks"

const Layout = ({pageTitle, children}) => {

    return (
        <main className="bg-bleu-pale min-h-screen font-josef">
            <NavLinks />
            <div className="md:ml-24 mr-6 p-6 bg-bleu-fonce rounded-xl text-white">
                <h1 className="text-2xl font-bold pb-4">{pageTitle}</h1>
                {children}
            </div>
            
        </main>
        
    )
}

export default Layout