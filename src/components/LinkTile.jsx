function LinkTile({ link }) {
  // Create a shorter label if the name is too long
  const shortLabel = link.name.length > 12 ? link.name.substring(0, 10) + "..." : link.name

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-gradient-to-r from-black/30 to-black/50
        hover:from-black/40 hover:to-black/60
        rounded-lg p-3 
        flex items-center justify-center text-center
        text-white font-medium
        border border-white/10
        shadow-sm
        transition-all duration-300 ease-in-out
        hover:scale-110
        hover:rotate-1
        hover:shadow-lg hover:shadow-white/10
        hover:border-white/30
        hover:text-white/90
        active:scale-95
        active:rotate-0
        relative
        overflow-hidden
        group
      "
      title={link.name}
    >
      <span className="relative z-10">{shortLabel}</span>
      <span
        className="
        absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300
      "
      ></span>
      <span
        className="
        absolute -inset-1 rounded-lg blur-sm bg-gradient-to-r from-white/0 to-white/10 opacity-0
        group-hover:opacity-70 transition-opacity duration-300 -z-10
      "
      ></span>
    </a>
  )
}

export default LinkTile
