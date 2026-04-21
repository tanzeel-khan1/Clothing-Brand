function Navbar({ cartCount, onOpenCart, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="cursor-pointer font-serif text-xl uppercase tracking-[0.35em] text-stone-950 md:ml-0 ml-4"
        >
          VELORA
        </button>

        <nav className="hidden items-center gap-8 md:flex">
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

        <button
          type="button"
          onClick={onOpenCart}
          className="relative cursor-pointer rounded-full border border-stone-200 bg-white p-3 text-stone-900 transition hover:-translate-y-0.5 hover:shadow-md"
          aria-label="Open cart"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
            <circle cx="10" cy="19" r="1.2" />
            <circle cx="18" cy="19" r="1.2" />
          </svg>

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
