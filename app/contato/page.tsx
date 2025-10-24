"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[#4CE921]">
        {/* Decorative orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#3DD118] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5FF32E] rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Entre em contato com
                <br />o Dug Dug!
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                Estamos aqui para ajudar! Veja as diferentes formas de entrar em contato conosco, de acordo com sua
                necessidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src="/contact-illustration.png"
                alt="Atendimento Dug Dug"
                width={400}
                height={400}
                className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">Entre em contato.</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Por WhatsApp, telefone, mensagem ou e-mail.
                <br />
                Você está a um contato de ter o Dug Dug!
              </p>

              <form className="space-y-5 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-black mb-2 block">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Digite aqui"
                    className="w-full border-gray-300 focus:border-[#4CE921] focus:ring-[#4CE921] rounded-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-black mb-2 block">
                    E-mail corporativo
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite aqui"
                    className="w-full border-gray-300 focus:border-[#4CE921] focus:ring-[#4CE921] rounded-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-black mb-2 block">
                    Número de telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Digite aqui"
                    className="w-full border-gray-300 focus:border-[#4CE921] focus:ring-[#4CE921] rounded-lg"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-black mb-3 block">Preferência de contato</Label>
                  <RadioGroup defaultValue="whatsapp" className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whatsapp" id="whatsapp" className="border-gray-300" />
                      <Label htmlFor="whatsapp" className="text-sm font-normal cursor-pointer">
                        WhatsApp
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-pref" className="border-gray-300" />
                      <Label htmlFor="email-pref" className="text-sm font-normal cursor-pointer">
                        E-mail
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ligacao" id="ligacao" className="border-gray-300" />
                      <Label htmlFor="ligacao" className="text-sm font-normal cursor-pointer">
                        Ligação
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-black mb-2 block">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    placeholder=""
                    rows={4}
                    className="w-full border-gray-300 focus:border-[#4CE921] focus:ring-[#4CE921] rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full px-12 py-6 text-base font-semibold"
                >
                  ENVIAR
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:mt-16"
            >
              <div className="bg-[#4CE921] rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-black">xxxx xxx xxxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-black">xxxxx-xxxxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-black break-all">xxxxxxxxxxx@xxxxxxx.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CE921]" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-black">
                      xxxxxxxxxxx
                      <br />
                      Rua xxxxxxxxx, xxx - xx° Andar
                      <br />
                      xxxxxx, Guarulhos / SP
                      <br />
                      CEP: xxxxx-xxx
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
