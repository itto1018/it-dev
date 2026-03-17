'use client'

import { useState, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'hello@it-dev.example.com' },
  { icon: '🐦', label: 'Twitter / X', value: '@it_dev' },
  { icon: '💻', label: 'GitHub', value: 'github.com/it-dev' },
  { icon: '📝', label: 'Zenn', value: 'zenn.dev/it_dev' },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: 実際の送信処理（Resend / Formspree など）に置き換える
    setSubmitted(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Contact <span className="text-[#a3e635]">/</span> お問い合わせ
        </h1>
        <div className="w-12 h-1 bg-[#a3e635] rounded" />
        <p className="text-gray-500 mt-4">
          お仕事のご依頼・ご相談はお気軽にどうぞ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="bg-[#a3e635]/10 border border-[#a3e635]/30 rounded-xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="font-bold text-lg mb-2">
                メッセージを送信しました！
              </h2>
              <p className="text-gray-600 text-sm">
                内容を確認の上、できるだけ早くご返信いたします。
              </p>
              <button
                onClick={() => {
                  setForm({ name: '', email: '', subject: '', message: '' })
                  setSubmitted(false)
                }}
                className="mt-6 text-sm font-medium text-[#84cc16] hover:underline"
              >
                別のメッセージを送る
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50 focus:border-[#a3e635]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50 focus:border-[#a3e635]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  件名
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="お仕事のご相談"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50 focus:border-[#a3e635]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  メッセージ <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="ご依頼内容・ご質問などをご記入ください"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#a3e635]/50 focus:border-[#a3e635] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#a3e635] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#84cc16] transition-colors"
              >
                送信する →
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-bold text-lg mb-4">連絡先</h2>
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
            >
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-gray-700">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#a3e635]/10 border border-[#a3e635]/30 rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
            通常 1〜3 営業日以内にご返信いたします。お急ぎの場合は Twitter
            DM よりご連絡ください。
          </div>
        </div>
      </div>
    </div>
  )
}
