function LinkTile({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-black/40
        hover:bg-black/50
        rounded-xl
        p-4
        mb-3
        w-full
        flex
        items-center
        justify-center
        text-center
        text-white
        font-medium
        text-lg
        transition-all
        duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
        shadow-lg
        backdrop-blur-sm
      "
    >
      {link.name}
    </a>
  )
}

export default LinkTile
