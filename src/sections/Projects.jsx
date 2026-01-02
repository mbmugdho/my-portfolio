import SectionWrapper from "../components/layout/SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral md:text-3xl">
        Selected Works
      </h2>
      <p className="mt-4 text-sm text-neutral/70">
        At least six projects will be showcased here with a layout inspired by
        the reference design.
      </p>
    </SectionWrapper>
  );
}