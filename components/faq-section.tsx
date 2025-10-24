"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FAQSection() {
  const faqs = [
    {
      question: "O que é o Dug Dug?",
      answer:
        "Dug Dug é uma plataforma de descontos e vantagens exclusivas para membros, oferecendo acesso a promoções especiais em grandes marcas.",
    },
    {
      question: "Qual é a limite de utilização do Dug Dug?",
      answer: "Não há limite de utilização. Você pode usar seus benefícios quantas vezes quiser durante o mês.",
    },
    {
      question: "Como utilizar os benefícios do Dug Dug?",
      answer: "Acesse o app, escolha o desconto desejado e apresente o código no estabelecimento parceiro.",
    },
    {
      question: "Qual tipo de empresas e Dug Dug oferecida?",
      answer: "Oferecemos descontos em diversos segmentos: alimentação, tecnologia, saúde, educação e muito mais.",
    },
    {
      question: "Como utilizar os benefícios preciso para contratar o Dug Dug?",
      answer: "Basta ter um email válido e criar sua conta. O processo leva menos de 2 minutos.",
    },
    {
      question: "Qual tipo de empresas e Dug Dug oferecida?",
      answer: "Oferecemos parcerias com mais de 1000 empresas em diversos segmentos do mercado.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border-4 border-green-400 rounded-full -z-10"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={headingVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-balance px-4"
          >
            Ainda ficaram dúvidas?
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-center text-green-400 font-semibold mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base"
          >
            Separamos algumas perguntas frequentes!
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem value={`item-${i + 1}`} className="border border-gray-200 rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="hover:no-underline text-left py-4">
                    <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
