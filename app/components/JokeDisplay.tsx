import { useState } from 'react'
import { ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react'

interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

interface JokeDisplayProps {
  joke: Joke | null
  fetchJoke: () => void
  isLoading: boolean
  error: string | null
}

export default function JokeDisplay({ joke, fetchJoke, isLoading, error }: JokeDisplayProps) {
  const [showPunchline, setShowPunchline] = useState(false)
  const [rating, setRating] = useState<'up' | 'down' | null>(null)

  if (isLoading) {
    return (
      <section id="jokes" className="mb-8 w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <p className="text-center">Loading joke...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="jokes" className="mb-8 w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <p className="text-center text-red-500 dark:text-red-400">{error}</p>
          <button
            onClick={() => fetchJoke()}
            className="mt-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 mx-auto block"
          >
            Try Another Joke
          </button>
        </div>
      </section>
    )
  }

  if (!joke) {
    return (
      <section id="jokes" className="mb-8 w-full">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <p className="text-center">No joke available. Try another category or refresh.</p>
          <button
            onClick={() => fetchJoke()}
            className="mt-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 mx-auto block"
          >
            Get a Joke
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="jokes" className="mb-8 w-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-center">{joke.type || 'Random'} Joke</h2>
        <p className="text-lg mb-4 text-center">{joke.setup}</p>
        {showPunchline ? (
          <p className="text-xl font-semibold mb-4 text-center">{joke.punchline}</p>
        ) : (
          <button
            onClick={() => setShowPunchline(true)}
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 mx-auto block"
          >
            Reveal Punchline
          </button>
        )}
        {showPunchline && (
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={() => setRating('up')}
              className={`p-2 rounded-full ${rating === 'up' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <ThumbsUp size={20} />
            </button>
            <button
              onClick={() => setRating('down')}
              className={`p-2 rounded-full ${rating === 'down' ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <ThumbsDown size={20} />
            </button>
            <button
              onClick={() => {
                setShowPunchline(false)
                setRating(null)
                fetchJoke()
              }}
              className="flex items-center bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              <RefreshCw size={16} className="mr-2" />
              Next Joke
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
