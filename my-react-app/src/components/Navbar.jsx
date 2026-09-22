function Navbar({ cartCount, onOpenCart, onNavigate }) {
  return (
    <>
      <div className="bg-ink py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory">
        Complimentary worldwide shipping <span className="mx-2 inline-block h-1 w-1 rounded-full bg-gold align-middle" />
        The Autumn Atelier Collection
      </div>

      <header className="sticky top-0 z-50 border-b border-sand/60 bg-ivory/85 shadow-[0_1px_0_rgba(120,100,60,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="group cursor-pointer font-serif text-2xl tracking-[0.34em] text-ink"
          >
            VELORA
            <span className="ml-1 align-middle text-base tracking-normal text-gold transition group-hover:text-coffee">*</span>
          </button>

          <nav className="hidden items-center gap-10 md:flex">
            <button type="button" onClick={() => onNavigate('about')} className="nav-link cursor-pointer">
              About
            </button>
            <button type="button" onClick={() => onNavigate('products')} className="nav-link cursor-pointer">
              Shop
            </button>
            <button type="button" onClick={() => onNavigate('contact')} className="nav-link cursor-pointer">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenCart}
              className="relative cursor-pointer rounded-full border border-sand bg-white/70 p-3 text-ink transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold hover:shadow-rim"
              aria-label="Open cart"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
                <circle cx="10" cy="19" r="1.2" />
                <circle cx="18" cy="19" r="1.2" />
              </svg>

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-white shadow">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar