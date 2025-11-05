
const stats = [
  { label: 'Traceable Contract Farming', value: '100%' },
  { label: 'Farmers Onboarded via Smart Cards', value: '10,000+' },
  { label: 'FPOs using ERP & Analytics', value: '150+' },
  { label: 'Verified Institutional Buyers & Partners', value: '50+' }
]

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Impact Snapshot</h2>
          <p className="text-lg text-gray-700">Proof of transparency and scale across the value chain</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 text-center border border-green-100 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-2">{s.value}</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact





