'use client'
import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import JokeDisplay from './components/JokeDisplay'
import RecentJokes from './components/RecentJokes'
import Footer from './components/Footer'

interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

export default function Home() {
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null)
  const [recentJokes, setRecentJokes] = useState<Joke[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Any')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchJoke = async (category = 'Any') => {
    setIsLoading(true)
    setError(null)
    try {
      let url = 'https://official-joke-api.appspot.com/random_joke'
      if (category.toLowerCase() !== 'any') {
        url = `https://official-joke-api.appspot.com/jokes/${category.toLowerCase()}/random`
      }
      const response = await fetch(url)
      const data = await response.json()
      
      let joke: Joke | null = null
      if (Array.isArray(data)) {
        joke = data[0]
      } else if (typeof data === 'object' && data !== null) {
        joke = data
      }

      if (joke && joke.setup && joke.punchline) {
        setCurrentJoke(joke)
        setRecentJokes((prevJokes) => {
          const newJokes = [joke, ...prevJokes] as Joke[]
          return newJokes.slice(0, 5)
        })
      } else {
        throw new Error('Invalid joke format received')
      }
    } catch (error) {
      console.error('Failed to fetch joke:', error)
      setError(`No jokes available for ${category}. Try another category!`)
      setCurrentJoke(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke(selectedCategory)
  }, [selectedCategory])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <HeroSection />
          <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <JokeDisplay 
            joke={currentJoke} 
            fetchJoke={() => fetchJoke(selectedCategory)} 
            isLoading={isLoading}
            error={error}
          />
          <RecentJokes jokes={recentJokes} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
