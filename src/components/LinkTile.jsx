function LinkTile({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-black/30 hover:bg-black/50
        rounded-lg p-3 transition-all duration-200
        flex items-center justify-center text-center
        hover:transform hover:scale-105
        text-white font-medium
      "
    >
      {link.name}
    </a>
  )
}

export default LinkTile
