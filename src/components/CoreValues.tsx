
const values = [
  { title: 'Transparency', desc: 'Equal access to verified information — no hidden costs, no middlemen.' },
  { title: 'Quality', desc: 'Certified inputs and lab-tested outputs, traceable from origin to destination.' },
  { title: 'Accountability', desc: 'Every action is digitally logged and auditable.' },
  { title: 'Sustainability', desc: 'Carbon-smart, water-efficient, climate-ready operations.' },
  { title: 'Empowerment', desc: 'Data, technology, and training for every farmer and FPO.' }
]

const CoreValues = () => {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Our Core Values</h2>
          <p className="text-lg text-gray-700">Principles that power trust across our ecosystem</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-green-300 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center mb-4 text-white shadow">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues





