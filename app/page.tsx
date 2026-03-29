import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Team from "@/components/landing/Team";
import Subjects from "@/components/landing/Subjects";
import Schedule from "@/components/landing/Schedule";
import Feedback from "@/components/landing/Feedback";
import RegisterForm from "@/components/landing/RegisterForm";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Subjects />
        <Schedule />
        <Feedback />
        <RegisterForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}