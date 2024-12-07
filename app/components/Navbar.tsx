import ThemeToggle from './ThemeToggle'
import AnimatedLogo from './AnimatedLogo'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 flex justify-between items-center">
      <AnimatedLogo />
      <ThemeToggle />
    </nav>
  )
}

