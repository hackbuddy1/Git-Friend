"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { LogOut } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserProfileAvatar } from "@/components/ui/user-profile-avatar"

export function UserAuthButton() {
  const { user, loading, signOut } = useAuth()
  

  if (loading) {
    return (
      <Button variant="outline" size="sm" disabled>
        <span className="h-4 w-4 mr-2 rounded-full animate-pulse bg-muted-foreground/30"></span>
        Loading...
      </Button>
    )
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full p-0">
            <UserProfileAvatar user={user} size="sm" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex flex-col">
            <span className="font-medium">{user.displayName || "User"}</span>
            {user.email && <span className="text-xs text-muted-foreground">{user.email}</span>}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  
  return null
}