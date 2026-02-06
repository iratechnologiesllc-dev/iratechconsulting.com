export default function Hero() {
  return (
    <section
      className="h-[75vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Trusted IT Staffing & Consulting Services
          </h1>
          <p className="text-xl max-w-2xl mb-6">
            We help organizations build high-performing technology teams through
            expert staffing and consulting solutions.
          </p>
          <a
            href="#/contact"
            className="bg-white text-primary px-6 py-3 font-semibold rounded"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}