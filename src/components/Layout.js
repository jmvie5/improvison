import * as React from "react"
import { Link } from "gatsby"
import NavLinks from "./NavLinks"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({pageTitle, children}) => {

    return (
        <body className="flex bg-bleu-fonce min-h-screen text-white font-josef text-lg justify-center">
            <div className="flex flex-col justify-between max-w-screen-xl">
                <div className="flex flex-col sm:flex-row justify-between xl:mt-4 w-full">
                    <header>
                        <div className="flex flex-col justify-center sm:justify-start sm:w-60 shrink-0">
                            <Link to="/" className="m-4 max-w-xxs self-center sm:self-start">
                                <StaticImage src="../images/improvison_accueil.png" alt="Logo Improvison"/>
                            </Link>
                            <NavLinks/>
                        </div>
                    </header>
                    
                    <div className="">
                        <div className="flex flex-row-reverse">
                            <h1 className="text-4xl font-bold p-4 sm:my-10 my-6 mx-4 border-b">Apprendre à improviser en jouant</h1>
                        </div>
                        
                        <div className="mx-6 ">
                            <h1 className="text-2xl font-bold mb-6">{pageTitle}</h1>
                            <main>
                                {children}
                            </main>
                            
                        </div>
                    </div>
                </div>
                
                <footer className="mx-4 mt-4 p-4 border-t">
                    <p>Contact :</p>
                    <a href="mailto:info@improvison.ca" className="hover:underline">info@improvison.ca</a>
                </footer>
            </div>
            
            
        </body>
        
    )
}

export default Layout