"use client"

import { ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
   children?: ReactNode
 }

const Portal = ({ children }: PortalProps) => {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
   }, [])

   // @ts-ignore
   return mounted && typeof window === "object" ? createPortal(children, document.querySelector("#portal-root")) : null
}

export default Portal