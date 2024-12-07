import { Smile } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mb-8 w-full">
      <h1 className="text-4xl font-bold mb-4">Laughing Made Easy!</h1>
      <p className="text-xl mb-8">Get your daily dose of laughter with our joke website</p>
      <Smile className="mx-auto mb-4" size={48} />
    </section>
  )
}

