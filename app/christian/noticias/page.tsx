const newsItems = [
  {
    id: 1,
    title: "Notícia Importante",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "10 Dec 2024",
  },
  {
    id: 2,
    title: "Atualização do Sistema",
    excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "9 Dec 2024",
  },
  {
    id: 3,
    title: "Novos Recursos",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    date: "8 Dec 2024",
  },
]

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-[#008000] p-4">
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">Notícias</h1>
        
        <div className="space-y-4">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="rounded-lg bg-white/10 p-4 text-white"
            >
              <h2 className="mb-2 text-lg font-bold">{news.title}</h2>
              <p className="mb-2 text-sm text-white/80">{news.excerpt}</p>
              <time className="text-xs text-white/60">{news.date}</time>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

