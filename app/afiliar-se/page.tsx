"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { UserPlus, Share2, DollarSign, BarChart3, Headphones } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AfiliarSePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CE921]/20 via-white to-white" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4CE921]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#4CE921]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Expanda Seus Horizontes: Cresça Juntos com a Parceria <span className="text-[#4CE921]">Dug Dug</span>.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Expanda seu alcance, fidelize clientes e gere novos negócios fazendo parte da nossa rede de benefícios
                exclusivos.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Image
                src="/parceria-illustration.png"
                alt="Parceria Dug Dug"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600">Em apenas 3 passos simples</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Cadastre-se como Apoiador</h3>
              <p className="text-gray-600">Crie sua conta gratuita e acesse seu painel exclusivo</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Compartilhe seu cupom exclusivo</h3>
              <p className="text-gray-600">Divulgue seu cupom personalizado nas redes sociais</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Receba até 5% de comissão</h3>
              <p className="text-gray-600">Ganhe dinheiro por comissão a cada venda</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Benefícios de ser um Apoiador
            </h2>
            <p className="text-lg text-gray-600">Vantagens exclusivas para nossos parceiros</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comissões por venda</h3>
              <p className="text-gray-600">Ganhe até 5% de comissão em cada venda realizada</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Painel de Desempenho</h3>
              <p className="text-gray-600">Acompanhe suas métricas e performance em tempo real</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#4CE921] rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte dedicado</h3>
              <p className="text-gray-600">Atendimento prioritário para apoiadores</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              O que dizem nossos Apoiadores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">Maria Silva</h4>
                  <p className="text-sm text-gray-500">Apoiadora há 6 meses</p>
                </div>
              </div>
              <p className="text-gray-600">"Já ganhei mais de R$500 só indicando! É incrível como é fácil!"</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">João Santos</h4>
                  <p className="text-sm text-gray-500">Apoiador há 1 ano</p>
                </div>
              </div>
              <p className="text-gray-600">"Além das comissões, já ganhei 3 prêmios nas sorteios!"</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">Ana Costa</h4>
                  <p className="text-sm text-gray-500">Apoiadora há 8 meses</p>
                </div>
              </div>
              <p className="text-gray-600">"O suporte é excelente e o painel muito fácil de usar!"</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pronto para começar?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Junte-se a centenas de apoiadores que já estão ganhando dinheiro
            </p>
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-12 py-6 text-lg font-semibold">
              Criar Conta como Apoiador
            </Button>
            <p className="text-sm text-gray-500 mt-4">É grátis e você pode sair quando quiser</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#4CE921]/5 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4CE921]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ainda ficaram dúvidas?</h2>
            <p className="text-lg text-[#4CE921] font-semibold">separamos algumas perguntas frequentes!</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  Como o uso do meu cupom exclusivo é rastreado para garantir minhas comissões?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Cada cupom possui um código único vinculado à sua conta. Todas as vendas realizadas com seu cupom são
                  automaticamente rastreadas em nosso sistema e creditadas em seu painel de desempenho.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  O que acontece se o cliente usar meu cupom, mas não clicar no meu link de afiliado ou não atribuir a
                  mim?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  O sistema identifica automaticamente o uso do cupom, independente do link. A comissão será creditada a
                  você desde que o cupom exclusivo seja utilizado na compra.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  Qual a porcentagem de comissão ou benefícios que recebo por vendas geradas pelo meu cupom?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Você recebe até 5% de comissão sobre cada venda realizada com seu cupom exclusivo. O valor é calculado
                  sobre o total da compra e creditado em sua conta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  Há alguma restrição ou validade específica (produtos, valor mínimo, prazo) no cupom que devo informar
                  ao meu público?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Não há restrições de produtos ou valor mínimo. Seu cupom é válido para todos os planos e serviços Dug
                  Dug, sem prazo de validade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  Posso criar cupons personalizados (com meu nome, por exemplo) para aumentar a identificação com meu
                  público?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Sim! Você pode personalizar seu cupom com seu nome ou marca pessoal para facilitar a identificação e
                  aumentar o engajamento com seu público.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  Onde posso acompanhar em tempo real as vendas e comissões através do meu código de cupom?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Você tem acesso a um painel completo onde pode acompanhar todas as métricas em tempo real: vendas,
                  comissões, cliques e performance do seu cupom.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
