
const pillars = [
  {
    title: 'Contract Farming & Buy-Backs',
    desc: 'Transparent digital agreements with fixed terms and assured procurement.',
    icon: '/products.png'
  },
  {
    title: 'Digital Monitoring',
    desc: 'Weekly crop analytics and advisories through DigiCrop.ai.',
    icon: '/digicrop.png'
  },
  {
    title: 'Rural Franchise Centers',
    desc: 'Verified local hubs for inputs, mechanization, and training.',
    icon: '/store.png'
  },
  {
    title: 'Marketplace',
    desc: 'Manufacturer-only listings for authentic inputs and services.',
    icon: '/product.png'
  },
  {
    title: 'FPO ERP Tools',
    desc: 'End-to-end transparency in procurement, inventory, and sales.',
    icon: '/output1.png'
  },
  {
    title: 'Finance & Carbon Credits',
    desc: 'Traceable sustainability incentives and financial access.',
    icon: '/security2.png'
  }
]

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Ecosystem</h2>
          <p className="text-lg text-gray-700">A connected network delivering trust, quality, and outcomes</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 hover:border-green-300 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center mb-4 text-white shadow relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <img src={p.icon} alt={p.title} className="w-8 h-8 object-contain relative z-10" onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = 'none';
                  const fallback = t.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }} />
                <svg className="fallback-icon hidden w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l-4-4 1.5-1.5L11 12l5.5-5.5L18 8l-7 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem





