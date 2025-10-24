export function OQueTemosSection() {
  const items = [
    {
      icon: "🛍️",
      title: "Acesso o cliente a promos especiais",
      desc: "em grandes marcas e serviços.",
    },
    {
      icon: "❤️",
      title: "Utilize seus benefícios",
      desc: "no home, sem pontos ou burocracias.",
    },
    {
      icon: "🎁",
      title: "Vantagens associadas",
      desc: "com um clique, completamente sem economia.",
    },
    {
      icon: "⭐",
      title: "Experiência premium",
      desc: "para todos os nossos membros.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">O que temos por você</h2>
        <p className="text-center text-gray-600 mb-12">
          Transformamos a sua fidelidade em economia real, instantânea e sem complicação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-green-400 text-white p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-xs mt-2 opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
