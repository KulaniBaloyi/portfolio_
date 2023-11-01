import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu';
import ToastProvider from './providers/toast-provider';

import './globals.css'

export const metadata = {
  title: 'Kulani Baloyi',
  description: 'Personal portfolio website',
  icons:{
    icon:'/profile.jpg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider/>
    
        <Header/>
        <Menu/>
        <main>
          
        {children}
        </main>
        <Footer/>
       
        </body>
    </html>
  )
}
