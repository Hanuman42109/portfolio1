import Navbar     from '@/components/sections/Navbar'
import Hero       from '@/components/sections/Hero'
import Skills     from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects   from '@/components/sections/Projects'
import Education  from '@/components/sections/Education'
import Contact    from '@/components/sections/Contact'
import Footer     from '@/components/sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}