import type { Metadata } from 'next'
import Image from 'next/image'
import parse from 'html-react-parser'

import { getCareerData, getProfileData, getSkillsData } from '@/app/data/about'

export const metadata: Metadata = {
  title: 'About | it_dev',
  description: 'It（イット）の紹介ページ',
}

export default async function AboutPage() {
  const profile_data = await getProfileData()
  const { contents: display_skills } = await getSkillsData(true)
  const { contents: skills } = await getSkillsData()
  const { contents: career } = await getCareerData()

  const toYYYYMM = (isoString: string): string => {
    return isoString.slice(0, 7).replace('-', '')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Page title */}
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          About <span className="text-[#a3e635]">Me</span>
        </h1>
        <div className="w-[137.5px] md:w-41 h-1 bg-[#a3e635] rounded" />
      </div>

      {/* Self intro */}
      <section id="self_intro" className="mb-14 flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-[#a3e635]/20">
            <Image
              src={profile_data.image?.url ?? ''}
              alt="profile image"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">Profile</h2>
          <p className="text-black leading-relaxed mb-4">
            {profile_data.name} / {profile_data.position}
          </p>
          <div className="prose prose-sm md:prose-base text-gray-600 leading-relaxed mb-4">
            {parse(profile_data.description)}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-14">
        {/* displaySkills */}
        <h2 className="text-xl font-bold mb-6">スキルセット</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {display_skills.map((item) => (
            <div key={item.title}>
              <div className="flex justify-between text-sm mb-1">
                <div>
                  <span className="font-medium pr-2">{item.title}</span>
                  <span className="text-gray-400">{item.category}</span>
                </div>
                <span className="text-gray-400">{item.level[0]}/5</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-[#a3e635] h-2 rounded-full transition-all"
                  style={{ width: `${Number(item.level[0]) * 20}%` }}
                />
              </div>
              <div className="text-gray-500 text-xs">{item.discription}</div>
            </div>
          ))}
        </div>

        {/* displaySkills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.title}
              className={`text-xs font-medium px-3 py-1 rounded-full border ${!skill.categoryColor ? 'bg-[#a3e635]/15 text-[#65a30d] border-[#a3e635]/30' : ''}`}
              style={
                skill.categoryColor
                  ? {
                      backgroundColor: skill.categoryColor + '26',
                      color: skill.categoryColor,
                      borderColor: skill.categoryColor + '4D',
                    }
                  : undefined
              }
            >
              {skill.title}
            </span>
          ))}
        </div>
      </section>

      {/* Career */}
      <section id="career">
        <h2 className="text-xl font-bold mb-6">経歴</h2>
        <div className="relative border-l-2 border-[#a3e635]/40 ml-5 pl-3 space-y-8">
          {career.map((item) => (
            <div key={toYYYYMM(item.startDate)} className="relative">
              <span className="absolute -left-4.75 top-1 w-3 h-3 rounded-full bg-[#a3e635] border-2 border-white shadow" />
              <p className="text-xs font-semibold text-[#84cc16] pt-[1.5px] mb-1.5">
                {toYYYYMM(item.startDate)}
              </p>
              <div className="mb-3">
                <p className="font-bold mb-0.5">{item.company}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
              <p className="text-gray-500 text-sm">{item.discription}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
