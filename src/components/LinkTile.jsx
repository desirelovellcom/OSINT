function LinkTile({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-black/30
        rounded-lg
        p-4
        mb-3
        w-full
        flex
        items-center
        justify-center
        text-center
        text-white
        font-medium
        transition-colors
        duration-200
        hover:bg-black/40
      "
    >
      {link.name}
    </a>
  )
}

export default LinkTile
