// app/page.tsx
// ReciprocityCoop.com
// Landing Page v1
// Next.js 15 + TailwindCSS

export default function HomePage() {
  const stories = [
    {
      title: "The First Egg of Spring",
      text: "A grandmother hen in Aying’s yard laid her first egg after winter. Aying held it in both hands like a small sunrise."
    },
    {
      title: "Children Seeing Chickens for the First Time",
      text: "A boy from the city crouched beside a mother hen for nearly twenty minutes without speaking."
    },
    {
      title: "The Sound of Wooden Doors",
      text: "Every morning at dawn, Aying opens the old wooden door. The flock flies down from the roof beams together."
    }
  ]

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#5b4635]">
      
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-[#d8c7ae] bg-[#f6f1e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          <div>
            <div className="text-3xl tracking-[0.15em]">
              RECIPROCOOP
            </div>

            <div className="mt-1 text-xs tracking-[0.3em] text-[#9c7a57]">
              A LIVING COVENANT
            </div>
          </div>

          <nav className="hidden gap-8 text-sm lg:flex">
            <a href="#" className="hover:text-[#9f6d3d]">
              The Covenant
            </a>

            <a href="#" className="hover:text-[#9f6d3d]">
              Aying’s Yard
            </a>

            <a href="#" className="hover:text-[#9f6d3d]">
              Village Map
            </a>

            <a href="#" className="hover:text-[#9f6d3d]">
              Stories
            </a>

            <a href="#" className="hover:text-[#9f6d3d]">
              Join Us
            </a>
          </nav>
        </div>
      </header>

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden border-b border-[#dbc9b1] bg-[#efe2ce]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <div>
            <div className="mb-5 inline-block rounded-full border border-[#ccb08d] px-4 py-2 text-xs tracking-[0.25em] text-[#9d7348]">
              FROM WUYI MOUNTAIN, CHINA
            </div>

            <h1 className="max-w-3xl text-6xl leading-[1.1] tracking-tight lg:text-7xl">
              A Living Covenant
              <br />
              Between Humans
              <br />
              and Life
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#6d5745]">
              We do not produce chickens.
              <br />
              We are simply a platform that honors the villages that protect them.
            </p>

            <p className="mt-6 max-w-2xl leading-loose text-[#745f4c]">
              In forgotten rural courtyards across China, some people still raise chickens beneath sunlight instead of steel cages.
              Mothers still hatch their own chicks.
              Chickens still sleep on wooden beams at dusk.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#8e6338] px-7 py-4 text-white transition hover:scale-105">
                Explore The Covenant
              </button>

              <button className="rounded-2xl border border-[#8e6338] px-7 py-4 text-[#8e6338] transition hover:bg-[#8e6338] hover:text-white">
                Visit Aying’s Yard
              </button>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              
              <div className="rounded-3xl bg-white/70 p-5 shadow-sm">
                <div className="text-3xl">128</div>
                <div className="mt-2 text-sm text-[#8a7058]">
                  Certified Yards
                </div>
              </div>

              <div className="rounded-3xl bg-white/70 p-5 shadow-sm">
                <div className="text-3xl">36</div>
                <div className="mt-2 text-sm text-[#8a7058]">
                  Rural Villages
                </div>
              </div>

              <div className="rounded-3xl bg-white/70 p-5 shadow-sm">
                <div className="text-3xl">1,286</div>
                <div className="mt-2 text-sm text-[#8a7058]">
                  Support Stories
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-[40px] border border-[#d5c2a7] bg-[#dcc1a1] p-6 shadow-2xl">
              
              <div className="aspect-[4/5] rounded-[32px] bg-[linear-gradient(to_bottom,#b68c61,#6d4c32)] p-8 text-white">

                <div className="flex h-full flex-col justify-between">

                  <div>
                    <div className="text-sm tracking-[0.35em] text-[#f4e3cd]">
                      WUYI MOUNTAIN
                    </div>

                    <h2 className="mt-5 text-5xl leading-tight">
                      At Dawn,
                      <br />
                      Aying Opens
                      <br />
                      The Wooden Door
                    </h2>
                  </div>

                  <div className="rounded-3xl bg-black/20 p-6 backdrop-blur-sm">
                    <p className="leading-relaxed text-[#f6ebdd]">
                      “Protecting a flock is also a spiritual practice.”
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          THE COVENANT
      ========================== */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        
        <div className="text-center">
          <div className="text-sm tracking-[0.4em] text-[#a17d56]">
            THE COVENANT
          </div>

          <h2 className="mt-5 text-5xl leading-tight">
            Humans Protect Life.
            <br />
            Life Nourishes Humans.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="rounded-[32px] border border-[#dcc8ad] bg-white/70 p-8">
            <h3 className="text-3xl">
              Dignity
            </h3>

            <p className="mt-5 leading-loose text-[#6f5946]">
              Chickens are not industrial units.
              They are living beings that seek sunlight, safety, companionship, and motherhood.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#dcc8ad] bg-white/70 p-8">
            <h3 className="text-3xl">
              Transparency
            </h3>

            <p className="mt-5 leading-loose text-[#6f5946]">
              We do not profit from price differences.
              Every yard, every promise, and every support story remains publicly visible.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#dcc8ad] bg-white/70 p-8">
            <h3 className="text-3xl">
              Reciprocity
            </h3>

            <p className="mt-5 leading-loose text-[#6f5946]">
              Humans offer protection.
              Chickens offer nourishment.
              Neither side exists to dominate the other.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          AYING'S YARD
      ========================== */}
      <section className="border-y border-[#dac6aa] bg-[#eee2cf] py-28">
        
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="text-sm tracking-[0.35em] text-[#a17d56]">
              AYING’S YARD
            </div>

            <h2 className="mt-5 text-5xl leading-tight">
              The First Living
              <br />
              Prototype
            </h2>

            <p className="mt-8 text-lg leading-loose text-[#6e5846]">
              Aying never married.
              She spent most of her life protecting more than fifty chickens inside a century-old clay house near Wuyi Mountain.
            </p>

            <p className="mt-6 leading-loose text-[#725d4a]">
              Every morning, when she opens the wooden door, the flock flies down from the roof beams together.
              Her family wanted to demolish the old house for years.
              She refused.
            </p>

            <p className="mt-6 leading-loose text-[#725d4a]">
              She was not protecting a broken house.
              She was protecting a civilization.
            </p>
          </div>

          <div className="rounded-[40px] border border-[#d6c2a7] bg-[#dfc3a2] p-6 shadow-xl">

            <div className="aspect-square rounded-[32px] bg-[linear-gradient(to_bottom_right,#8a6038,#d7b07e)] p-8 text-white">
              
              <div className="flex h-full flex-col justify-between">

                <div>
                  <div className="text-sm tracking-[0.3em] text-[#f6e7d2]">
                    WUYI TEA · SUNLIGHT · EGGS
                  </div>

                  <div className="mt-5 text-5xl leading-tight">
                    Tea-Scented
                    <br />
                    Eggs
                  </div>
                </div>

                <div className="rounded-3xl bg-black/20 p-6 backdrop-blur-sm">
                  “If you deceive life,
                  life will deceive you too.”
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          WHY IT MATTERS
      ========================== */}
      <section className="mx-auto max-w-6xl px-6 py-28">

        <div className="text-center">
          <div className="text-sm tracking-[0.35em] text-[#a17d56]">
            WHY IT MATTERS
          </div>

          <h2 className="mt-5 text-5xl leading-tight">
            The World Has Forgotten
            <br />
            Slow Life
          </h2>
        </div>

        <div className="mt-16 space-y-8">

          <div className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8">
            <h3 className="text-3xl">
              Industrial systems optimize efficiency.
            </h3>

            <p className="mt-5 leading-loose text-[#6f5a47]">
              But life cannot be reduced to efficiency alone.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8">
            <h3 className="text-3xl">
              Children are growing up disconnected from life itself.
            </h3>

            <p className="mt-5 leading-loose text-[#6f5a47]">
              Many children have never touched warm soil, watched a mother hen hatch eggs, or heard chickens calling at dusk.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8">
            <h3 className="text-3xl">
              Rural wisdom is disappearing.
            </h3>

            <p className="mt-5 leading-loose text-[#6f5a47]">
              Old courtyards, wooden beams, clay houses, and slow-growing flocks are vanishing faster every year.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          VILLAGE MAP PREVIEW
      ========================== */}
      <section className="border-y border-[#d7c5a9] bg-[#ede0cd] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <div className="text-sm tracking-[0.35em] text-[#a17d56]">
              VILLAGE MAP
            </div>

            <h2 className="mt-5 text-5xl">
              A Growing Constellation
            </h2>

            <p className="mx-auto mt-8 max-w-3xl leading-loose text-[#6d5845]">
              Every golden light on the map represents a certified yard where life is still protected with dignity.
            </p>
          </div>

          <div className="mt-16 rounded-[40px] border border-[#d6c1a5] bg-[#d9bf9e] p-8 shadow-xl">
            
            <div className="flex aspect-[16/8] items-center justify-center rounded-[32px] bg-[linear-gradient(to_bottom,#b38a60,#6c4b31)] text-center text-white">
              
              <div>
                <div className="text-sm tracking-[0.35em] text-[#f5e4ce]">
                  INTERACTIVE MAP COMING SOON
                </div>

                <div className="mt-6 text-5xl leading-tight">
                  China Village
                  <br />
                  Constellation
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          STORIES
      ========================== */}
      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="text-center">
          <div className="text-sm tracking-[0.35em] text-[#a17d56]">
            STORIES
          </div>

          <h2 className="mt-5 text-5xl">
            Echoes Of The Covenant
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {stories.map((story) => (
            <div
              key={story.title}
              className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8 shadow-sm"
            >
              <h3 className="text-3xl leading-tight">
                {story.title}
              </h3>

              <p className="mt-6 leading-loose text-[#6e5846]">
                {story.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="border-t border-[#d7c3a8] bg-[#e6d5bc]">
        
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <div className="text-4xl tracking-[0.2em]">
            RECIPROCOOP
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-loose text-[#6e5946]">
            We do not produce chickens.
            We simply honor the villages that still protect life with dignity.
          </p>

          <p className="mx-auto mt-6 max-w-4xl leading-loose text-[#7b6550]">
            This planet belongs not only to humans,
            but also to chickens,
            and to all living beings.
          </p>

          <div className="mt-10 text-[#8d6e4f]">
            contact@reciprocoop.com
          </div>

          <div className="mt-10 text-sm tracking-[0.25em] text-[#9b7c5f]">
            A LIVING COVENANT BETWEEN HUMANS AND LIFE
          </div>

        </div>

      </footer>

    </main>
  )
}