'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // Simulating load time
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900"
        >
          <div className="text-center">
            <Image
              src="/images/loading.svg"
              alt="Rotary Logo"
              width={150}
              height={150}
              className="mx-auto mb-8 animate-rotate" 
            />
            <h2 className="text-3xl font-bold text-white mb-4">
              Rotary Club of Kathmandu North
            </h2>
            <p className="text-xl text-blue-200">Loading...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
