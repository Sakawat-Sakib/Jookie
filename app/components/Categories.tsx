import { Globe, Code, Coffee } from 'lucide-react'

interface Category {
  name: string
  icon: React.ElementType
}

interface CategoriesProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const categories: Category[] = [
  { name: 'Any', icon: Globe },
  { name: 'Programming', icon: Code },
  { name: 'General', icon: Coffee },
]

export default function Categories({ selectedCategory, setSelectedCategory }: CategoriesProps) {
  return (
    <section id="categories" className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
              selectedCategory === category.name
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <category.icon size={16} className="mr-2" />
            {category.name}
          </button>
        ))}
      </div>
    </section>
  )
}
