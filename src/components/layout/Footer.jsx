export default function Footer() {
  return (
    <footer className="border-t border-base-200">
      <div className="mx-auto max-w-content px-4 py-6 text-xs text-neutral/60 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Montasir. All rights reserved.</p>
          <p className="text-[11px]">
            Built with Next.js, Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}