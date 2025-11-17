import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax({ children, className = '', strength = 40 }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -strength])
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
