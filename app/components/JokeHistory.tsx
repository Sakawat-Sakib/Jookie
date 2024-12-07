import { useState } from 'react'
import { Star } from 'lucide-react'

interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

export default function JokeHistory({ history }: { history: Joke[] }) {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (joke: Joke) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(joke.id)
        ? prevFavorites.filter((id) => id !== joke.id)
        : [...prevFavorites, joke.id]
    )
  }

  return (
    <section id="history" className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">Joke History</h2>
      <div className="space-y-4">
        {history.map((joke, index) => (
          <div key={`${joke.id}-${index}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{joke.type || 'Random'} Joke</h3>
                <p className="mb-2">{joke.setup}</p>
                <p className="font-semibold">{joke.punchline}</p>
              </div>
              <button
                onClick={() => toggleFavorite(joke)}
                className={`p-2 rounded-full ${
                  favorites.includes(joke.id) ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <Star size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
