import './global.css'
import { personalData } from "../data/page-data"
import Sidebar from "./components/sidebar"


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      
      <body className='flex flex-col sm:flex-row'>
      <Sidebar data={personalData}/>
      <main className='grow-full p-8 w-full sm:basis-2/3 ml-auto'>
					{children}
				</main>
      </body>
    </html>
  )
}
