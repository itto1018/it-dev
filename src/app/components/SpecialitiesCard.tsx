import { specialties_card } from '@/constants/home-constant'
import React from 'react'

const SpecialitiesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {specialties_card.map((s) => (
        <div
          key={s.title}
          className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#a3e635]/50 transition-all"
        >
          <div className="text-4xl mb-4">{s.icon}</div>
          <h3 className="font-bold text-lg mb-2">{s.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {s.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SpecialitiesCard