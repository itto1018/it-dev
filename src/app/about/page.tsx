import { career, skills, getProfileData } from '@/app/data/about'
import Image from 'next/image'
import parse from 'html-react-parser'

export default async function AboutPage() {
  const profile_data = await getProfileData()
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Page title */}
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          About <span className="text-[#a3e635]">Me</span>
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
      </div>

      {/* Self intro */}
      <section className="mb-14 flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-[#a3e635]/20">
            <Image src={profile_data.image?.url ?? ''} alt='profile image' width={200} height={200} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Profile</h2>
          <p className='text-black leading-relaxed mb-4'>
            {profile_data.name} / {profile_data.position}
          </p>
          <div className="prose prose-sm text-gray-600 leading-relaxed mb-4">
            {parse(profile_data.description)}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-6">スキルセット</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-[#a3e635] h-2 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'microCMS',
            'Supabase',
            'Vercel',
            'GitHub Actions',
            'Figma',
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-[#a3e635]/15 text-[#65a30d] border border-[#a3e635]/30 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Career */}
      <section>
        <h2 className="text-xl font-bold mb-6">経歴</h2>
        <div className="relative border-l-2 border-[#a3e635]/40 pl-6 space-y-8">
          {career.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#a3e635] border-2 border-white shadow" />
              <p className="text-xs font-semibold text-[#84cc16] mb-1">
                {item.year}
              </p>
              <p className="font-bold mb-1">{item.role}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
