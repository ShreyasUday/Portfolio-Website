import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TimelineProjects } from "@/components/TimelineProjects";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedLink } from "@/components/AnimatedLink";
import { TimelineLearning } from "@/components/TimelineLearning";
import { portfolio } from "@/content/portfolio";
import { DepthCard } from "@/components/DepthCard";
import { TechGlobe } from "@/components/TechGlobe";
import { SplineEmbed } from "@/components/SplineEmbed";
import { FadeIn, FadeInStaggerGroup, FadeInStaggerItem } from "@/components/FadeIn";
import { HeaderLogo } from "@/components/HeaderLogo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <HeaderLogo />
            </div>
            <nav className="hidden items-center gap-5 text-sm text-zinc-300 sm:flex">
              <a className="hover:text-zinc-50" href="#projects">
                Projects
              </a>
              <a className="hover:text-zinc-50" href="#skills">
                Skills
              </a>
              <a className="hover:text-zinc-50" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </Container>
      </header>

      <main>
        <section className="py-16 sm:py-20">
          <Container>
            <FadeIn>
            <div className="relative overflow-hidden sm:rounded-3xl sm:border sm:border-white/10 sm:bg-black/40 px-4 py-8 sm:p-12 sm:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-10">
                <div className="lg:col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
                  {portfolio.name}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                  {portfolio.bio}
                </p>



                <div className="mt-8 w-full max-w-md rounded-2xl border border-white/10 bg-black/50 px-5 py-4 font-mono text-xs text-zinc-300 text-left">
                  <div className="text-zinc-400">$ whoami</div>
                  <div className="mt-2">
                    {portfolio.headline}
                  </div>
                </div>
                </div>

                <div className="flex justify-center lg:col-span-2 lg:block">
                  <div className="relative grid place-items-center">
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-400/10 via-transparent to-sky-400/10 blur-2xl" />
                    {portfolio.hero3d?.provider === "spline" &&
                    portfolio.hero3d.sceneUrl ? (
                      <div className="h-[260px] w-[260px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
                        <SplineEmbed
                          sceneUrl={portfolio.hero3d.sceneUrl}
                          className="h-full w-full"
                        />
                      </div>
                    ) : (
                      <TechGlobe />
                    )}
                  </div>
                </div>
              </div>
            </div>
            </FadeIn>
          </Container>
        </section>

        <Container>
          <Section id="projects" eyebrow="Selected work" title="Projects">
            <TimelineProjects projects={portfolio.projects} />
          </Section>

          <Section id="skills" eyebrow="Learning Path" title="Skills & Evolution">
            <TimelineLearning stages={portfolio.learningPath} />
          </Section>

          <Section id="contact" eyebrow="Let’s talk" title="Contact">
            <FadeInStaggerGroup className="grid gap-8 lg:grid-cols-5">
              <FadeInStaggerItem className="lg:col-span-2 h-full">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex-1 rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
                      Preferred
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <div>
                        <span className="text-zinc-400">Email:</span>{" "}
                        <a className="text-zinc-100 underline" href="mailto:udayshreyas123@gmail.com">
                          udayshreyas123@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="text-zinc-400">LinkedIn:</span>{" "}
                        <a
                          className="text-zinc-100 underline"
                          href="https://www.linkedin.com/in/shreyas-uday-530482286/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          shreyas-uday-530482286
                        </a>
                      </div>
                      <div>
                        <span className="text-zinc-400">Phone:</span>{" "}
                        <a className="text-zinc-100 underline" href="tel:+916299404118">
                          +91 62994 04118
                        </a>
                      </div>
                    </div>

                    <div className="mt-5 text-xs text-zinc-500">
                      This form sends directly to my inbox (configured on Vercel via environment variables).
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
                      Links
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {[...portfolio.links.primary, ...portfolio.links.social].map((l) => (
                        <AnimatedLink key={l.href} href={l.href} label={l.label} />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInStaggerItem>
              <FadeInStaggerItem className="lg:col-span-3 h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-6">
                  <ContactForm />
                </div>
              </FadeInStaggerItem>
            </FadeInStaggerGroup>
          </Section>

          <footer className="border-t border-white/10 py-10 text-sm text-zinc-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-mono">© {new Date().getFullYear()} {portfolio.name}</div>
              <div className="flex items-center gap-4">
                <a className="hover:text-zinc-200" href="#projects">
                  Projects
                </a>
                <a className="hover:text-zinc-200" href="#contact">
                  Contact
                </a>
                <a
                  className="hover:text-zinc-200"
                  href={portfolio.links.social.find((l) => l.label === "GitHub")?.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </Container>
      </main>
    </div>
  );
}


