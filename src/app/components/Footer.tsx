export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col items-center gap-4">
        <div className="font-bold text-lg">
          <span className="text-[#a3e635]">&lt;</span>
          it_dev
          <span className="text-[#a3e635]"> /&gt;</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} it_dev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
