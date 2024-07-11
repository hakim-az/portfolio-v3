/* eslint-disable react/react-in-jsx-scope */
import { motion, useCycle } from 'framer-motion'
import MenuToggle from './MenuToggle'
import Logo from '../../assets/logo.svg'

interface PropsType {
  sectionId: string
}

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
}

// Menu item
const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Header = ({ sectionId }: PropsType) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  // navigation links
  const NavLinks = [
    {
      name: 'About',
      path: '#about',
    },
    {
      name: 'Experience',
      path: '#experience',
    },
    {
      name: 'Portfolio',
      path: '#portfolio',
    },
    {
      name: 'Contact',
      path: '#contact',
    },
  ]

  return (
    <motion.header className="w-full h-20 bg-primaryDark sticky top-0 shadow-md">
      {/* navbar container */}
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className="flex items-center justify-between w-[90%] max-w-[1280px] h-full mx-auto">
        {/* logo */}
        <a onClick={() => toggleOpen(0)} href="#">
          <img src={Logo} alt="logo" />
        </a>
        {/* hamburger */}
        <motion.div
          className="fixed inset-0 right-0 top-20 w-full bg-primaryDark md:hidden z-50"
          variants={sidebar}
        />
        {/* navlinks mobile */}
        <motion.ul
          variants={variants}
          className="flex flex-col items-center justify-center z-50 gap-10 fixed w-full h-[calc(100vh-80px)] top-20 left-0 md:hidden">
          {NavLinks.map((item, index) => (
            <motion.li variants={MenuItemVariants} key={index}>
              <a
                onClick={() => toggleOpen()}
                href={item.path}
                className={`text-textColor py-3 px-10 border-b border-b-transparent ${sectionId === item.path && 'text-primaryGreen border-b-primaryGreen'}`}>
                {item.name}
              </a>
            </motion.li>
          ))}
          {/* resume button */}
          <motion.li
            variants={MenuItemVariants}
            className="flex items-center justify-center relative mt-16">
            <span className="flex items-center justify-center bg-primaryDark text-primaryGreen border border-primaryGreen w-40 h-12 rounded z-10">
              Resume
            </span>
            <span className="left-1 top-1 text-primaryGreen border border-primaryGreen w-40 h-12 rounded inline-block absolute" />
          </motion.li>
        </motion.ul>
        {/* navlinks desktop */}
        <ul className="hidden md:flex items-center justify-center gap-8 text-textColor">
          {NavLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className={`p-2 cursor-pointer border-b border-b-transparent hover:text-primaryGreen hover:border-b-primaryGreen transition-all ease-in-out delay-75 ${sectionId === item.path && 'text-primaryGreen border-b-primaryGreen'}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* toggle menu */}
        <MenuToggle toggle={toggleOpen} />
      </motion.nav>
    </motion.header>
  )
}

export default Header
