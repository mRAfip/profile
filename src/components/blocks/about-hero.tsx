import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden">
              <Image
                src="/rafi.jpg"
                alt="Muhammed"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              Hello! I'm <span className="text-red-500">Muhammed</span>, a product designer and developer.
            </h1>

            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I've been building digital products for over a decade. I specialize in UI/UX design and product development, turning ideas into reality.
              </p>

              <p>
                I started my journey by creating designs and prototypes that solve real problems. Over time, I've expanded to full-stack development, building complete products from concept to launch.
              </p>

              <p>
                My approach combines thoughtful design with modern development practices. I believe in creating products that are both beautiful and functional, focusing on user experience and performance.
              </p>

              <p>
                I work with technologies like React, Next.js, and TypeScript for web development, and I design interfaces that users love to interact with. Every project is an opportunity to create something meaningful.
              </p>

              <p>
                Whether it's a simple website, a complex web application, or a mobile app, I help bring your vision to life with clean code and thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}