
import Head from "next/head";

export default function HomePage() {
  const stories = [
    {
      title: "The First Egg of Spring",
      text: "A grandmother hen in Aying’s yard laid her first egg after winter. Aying held it in both hands like a small sunrise."
    },
    {
      title: "Children Seeing Chickens",
      text: "A boy from the city crouched beside a mother hen for nearly twenty minutes without speaking, witnessing the miracle of life."
    },
    {
      title: "The Sound of Wooden Doors",
      text: "Every morning at dawn, Aying opens the old wooden door. The flock flies down from the roof beams together."
    }
  ];

  return (
    <>
      <Head>
        <title>ReciproCoop – A Living Covenant Between Humans and Life</title>
        <meta
          name="description"
          content="Honoring villages and protecting chickens, sharing the story of humane slow life from Wuyi Mountain, China."
        />
        <meta property="og:image" content="link-to-hero-image.jpg" />
      </Head>

      <main className="min-h-screen bg-[#f6f1e8] text-[#5b4635]">
        {// app/page.tsx
export default function HomePage() {
  const stories = [
    {
      title: "The First Egg of Spring",
      text: "A grandmother hen in Aying’s yard laid her first egg after winter. Aying held it in both hands like a small sunrise."
    },
    {
      title: "Children Seeing Chickens",
      text: "A boy from the city crouched beside a mother hen for nearly twenty minutes without speaking, witnessing the miracle of life."
    },
    {
      title: "The Sound of Wooden Doors",
      text: "Every morning at dawn, Aying opens the old wooden door. The flock flies down from the roof beams together."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#5b4635]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#d8c7ae] bg-[#f6f1e8]/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-[0.15em]">RECIPROCOOP</div>
          <nav className="hidden lg:flex gap-8 text-sm">
            <a href="#covenant" className="hover:text-[#9f6d3d]">The Covenant</a>
            <a href="#aying" className="hover:text-[#9f6d3d]">Aying’s Yard</a>
            <a href="#village" className="hover:text-[#9f6d3d]">Village Map</a>
            <a href="#stories" className="hover:text-[#9f6d3d]">Stories</a>
            <a href="#join" className="hover:text-[#9f6d3d]">Join Us</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#dbc9b1] bg-[#efe2ce]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* LEFT */}
          <div>
            <div className="mb-5 inline-block rounded-full border border-[#ccb08d] px-4 py-2 text-xs tracking-[0.25em] text-[#9d7348]">
              FROM WUYI MOUNTAIN, CHINA
            </div>
            <h1 className="text-6xl lg:text-7xl leading-[1.1] font-bold">
              A Living Covenant<br/>Between Humans<br/>and Life
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-[#6d5745]">
              We do not produce chickens. We are a platform honoring villages that protect them.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#8e6338] px-7 py-4 text-white hover:scale-105 transition">
                Explore The Covenant
              </button>
              <button className="rounded-2xl border border-[#8e6338] px-7 py-4 text-[#8e6338] hover:bg-[#8e6338] hover:text-white transition">
                Visit Aying’s Yard
              </button>
            </div>
          </div>
          {/* RIGHT HERO IMAGE / VIDEO PLACEHOLDER */}
          <div className="rounded-[40px] border border-[#d5c2a7] bg-[#dcc1a1] p-6 shadow-2xl">
            <div className="aspect-[4/5] rounded-[32px] bg-[linear-gradient(to_bottom,#b68c61,#6d4c32)] flex items-center justify-center text-white text-center text-xl">
              Hero Video / Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* THE COVENANT */}
      <section id="covenant" className="mx-auto max-w-6xl px-6 py-28">
        <div className="text-center">
          <div className="text-sm tracking-[0.4em] text-[#a17d56]">THE COVENANT</div>
          <h2 className="mt-5 text-5xl leading-tight">Humans Protect Life. Life Nourishes Humans.</h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-[#dcc8ad] bg-white/70 p-8">
            <h3 className="text-3xl">Dignity</h3>
            <p className="mt-5 leading-loose text-[#6f5946]">
              Chickens are not industrial units. They are living beings that seek sunlight, safety, companionship, and motherhood.
            </p>
          </div>
          <div className="rounded-[32px] border border-[#dcc8ad] bg-white/70 p-8">
            <h3 className="text-3xl">Transparency</h3>
            <p className="mt-5 leading-loose text-[#6f5946]">
              We do not profit from price differences. Every yard, promise, and support story remains publicly visible.
            </p>
          </div>
          <div className="rounded-[32px] border border-[#dcc8ad] bg-white/70 p-8">
            <h3 className="text-3xl">Reciprocity</h3>
            <p className="mt-5 leading-loose text-[#6f5946]">
              Humans offer protection. Chickens offer nourishment. Neither side exists to dominate the other.
            </p>
          </div>
        </div>
      </section>

      {/* AYING'S YARD */}
      <section id="aying" className="border-y border-[#dac6aa] bg-[#eee2cf] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <div className="text-sm tracking-[0.35em] text-[#a17d56]">AYING’S YARD</div>
            <h2 className="mt-5 text-5xl leading-tight">The First Living Prototype</h2>
            <p className="mt-8 text-lg leading-loose text-[#6e5846]">
              Aying never married. She spent her life protecting over fifty chickens inside a century-old clay house near Wuyi Mountain.
            </p>
            <p className="mt-6 leading-loose text-[#725d4a]">
              Every morning, the flock flies down from roof beams together. She was protecting a civilization, not just a house.
            </p>
          </div>
          <div className="rounded-[40px] border border-[#d6c2a7] bg-[#dfc3a2] p-6 shadow-xl">
            <div className="aspect-square rounded-[32px] bg-[linear-gradient(to_bottom_right,#8a6038,#d7b07e)] flex items-center justify-center text-white text-center text-xl">
              Aying’s Yard Image / Video Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="text-center">
          <div className="text-sm tracking-[0.35em] text-[#a17d56]">WHY IT MATTERS</div>
          <h2 className="mt-5 text-5xl leading-tight">The World Has Forgotten Slow Life</h2>
        </div>
        <div className="mt-16 space-y-8">
          <div className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8">
            <h3 className="text-3xl">Industrial systems optimize efficiency.</h3>
            <p className="mt-5 leading-loose text-[#6f5a47]">
              But life cannot be reduced to efficiency alone.
            </p>
          </div>
          <div className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8">
            <h3 className="text-3xl">Children grow disconnected from life.</h3>
            <p className="mt-5 leading-loose text-[#6f5a47]">
              Many children have never touched soil, seen mother hens hatch eggs, or heard chickens call at dusk.
            </p>
          </div>
          <div className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8">
            <h3 className="text-3xl">Rural wisdom is disappearing.</h3>
            <p className="mt-5 leading-loose text-[#6f5a47]">
              Old courtyards, wooden beams, clay houses, and slow-growing flocks vanish every year.
            </p>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <div className="text-sm tracking-[0.35em] text-[#a17d56]">STORIES</div>
          <h2 className="mt-5 text-5xl">Echoes Of The Covenant</h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <div key={story.title} className="rounded-[32px] border border-[#dcc7ab] bg-white/70 p-8 shadow-sm">
              <h3 className="text-3xl leading-tight">{story.title}</h3>
              <p className="mt-6 leading-loose text-[#6e5846]">{story.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d7c3a8] bg-[#e6d5bc] py-20 text-center">
        <div className="text-4xl tracking-[0.2em]">RECIPROCOOP</div>
        <p className="mx-auto mt-8 max-w-4xl text-lg leading-loose text-[#6e5946]">
          We do not produce chickens. We honor the villages that protect life with dignity.
        </p>
        <p className="mx-auto mt-6 max-w-4xl leading-loose text-[#7b6550]">
          This planet belongs not only to humans, but also to chickens, and all living beings.
        </p>
        <div className="mt-10 text-[#8d6e4f]">wuyibrother@126.com</div>
        <div className="mt-10 text-sm tracking-[0.25em] text-[#9b7c5f]">
          A LIVING COVENANT BETWEEN HUMANS AND LIFE
        </div>
      </footer>
    </main>
  );
}}
      </main>
    </>
  );
}
