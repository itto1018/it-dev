import Link from 'next/link'
import { specialties, hero, blog } from '@/constants/home'
import BlogList from '@/app/components/BlogList'
import HeroButton from '@/app/components/Button'
import SpecialitiesCard from '@/app/components/SpecialitiesCard'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#a3e635]/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#a3e635]/10 blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <p className="text-[#84cc16] font-semibold mb-3 tracking-widest text-sm uppercase">
            {hero.position}
          </p>
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">{hero.title}</h1>
          <p className="text-gray-600 text-base md:text-xl max-w-xl md:max-w-2xl mb-10 leading-relaxed">
            {hero.discription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <HeroButton href="/about">It について →</HeroButton>
            <HeroButton href="/contact" variant="outline">
              お問い合わせ
            </HeroButton>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{specialties.title}</h2>
              <p className="text-gray-500 text-sm">{specialties.discription}</p>
            </div>
          </div>
          <SpecialitiesCard />
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm">{blog.discription}</p>
            </div>
            <Link href="/blog" className="text-sm font-medium text-[#84cc16] hover:underline">
              すべて見る →
            </Link>
          </div>
          <BlogList />
        </div>
      </section>
    </div>
  )
}
