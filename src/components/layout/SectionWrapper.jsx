export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}