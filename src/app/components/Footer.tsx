export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-lg">
          <span className="text-[#a3e635]">&lt;</span>
          it_dev
          <span className="text-[#a3e635]"> /&gt;</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} it_dev. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#84cc16] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#84cc16] transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://zenn.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#84cc16] transition-colors"
          >
            Zenn
          </a>
        </div>
      </div>
    </footer>
  )
}
