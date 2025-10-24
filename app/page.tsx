"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuemSomosSection } from "@/components/quem-somos-section"
import { CelularBeneficiosSection } from "@/components/celular-beneficios-section"
import { NumerosSection } from "@/components/numeros-section"
import { DepoimentosSection } from "@/components/depoimentos-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function DugDugLanding() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <QuemSomosSection />
      <CelularBeneficiosSection />
      <NumerosSection />
      <DepoimentosSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
