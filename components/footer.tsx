"use client"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold tracking-[0.18em] uppercase select-none mb-4 text-center
      bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
              style={{
                fontFamily: "'Inter', 'Geist', 'Montserrat', 'Segoe UI', Arial, sans-serif",
                textShadow: "0 0 20px rgba(59, 130, 246, 0.54), 0 0 40px rgba(37, 99, 235, 0.38)",
                filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.38))"
              }}
            >
              SKYGNOSIS
            </h3>
            <p className="text-slate-300 text-sm text-center">
              Transforming businesses through AI and strategic innovation.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: ["Solutions", "Services", "Pricing", "Security"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Resources",
              links: ["Documentation", "API Docs", "Case Studies", "Templates"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground/80 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/50 text-sm">
          <p>&copy; 2025 Braintech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
