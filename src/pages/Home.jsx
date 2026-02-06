import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">IT Staffing</h3>
          <p>Skilled professionals tailored to your business needs.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">IT Consulting</h3>
          <p>Strategic guidance to deliver technology outcomes.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Talent Solutions</h3>
          <p>Flexible engagement models for growing teams.</p>
        </div>
      </section>
    </>
  )
}