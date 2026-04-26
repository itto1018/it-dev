import type { Metadata } from 'next'
import { FaUserTie, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

import { contactInfo as contactInfoBase, googleFormUrl } from '@/constants/contact'

const iconMap: Record<string, React.ReactNode> = {
  YouTrust: <FaUserTie />,
  GitHub: <FaGithub />,
  'Twitter / X': <FaXTwitter />,
  Email: <MdEmail />,
}
const contactInfo = contactInfoBase.map((item) => ({ ...item, icon: iconMap[item.label] }))

export const metadata: Metadata = {
  title: 'Contact | it_dev',
  description: 'It（イット）への問い合わせページ',
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Contact <span className="text-[#a3e635]">/</span> お問い合わせ
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">フォームもしくは各SNSのDMよりお気軽にご連絡ください</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Contact info */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-bold text-lg mb-4">各アカウント</h2>
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
              <span className="text-xl text-[#a3e635]">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-gray-700">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#84cc16] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            </div>
          ))}
          <div className="bg-[#a3e635]/10 border border-[#a3e635]/30 rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
            通常1〜3営業日以内にご返信いたします。
            お急ぎの場合は、YOUTRUSTもしくはフォーム（Email）でお問い合わせください。
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <div className="h-280 md:h-270 -mx-4 sm:-mx-6 md:mx-0 md:w-full">
            <iframe src={googleFormUrl} width="100%" height="100%">
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
