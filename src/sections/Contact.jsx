import SectionWrapper from "../components/layout/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-lg">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral md:text-3xl">
          Let's Make It Happen
        </h2>
        <p className="mt-4 text-sm text-neutral/70">
          A clear call to action will go here, with your email and links to
          GitHub, LinkedIn, and X.
        </p>
      </div>
    </SectionWrapper>
  );
}