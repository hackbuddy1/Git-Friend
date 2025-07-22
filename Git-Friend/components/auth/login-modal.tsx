"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { X, GitBranch } from "lucide-react"
import { motion } from "framer-motion"


interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  
  const { } = useAuth() 
  

  if (!isOpen) return null

  
}