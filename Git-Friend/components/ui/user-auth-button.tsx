"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context" // Keep useAuth for signOut functionality
import { LogOut } from "lucide-react"
// REMOVED: import { FcGoogle } from "react-icons/fc" // Remove Google icon import
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
  const { user, loading, signOut } = useAuth() // Removed signInWithGoogle
  // REMOVED: const [isSigningIn, setIsSigningIn] = useState(false) // No longer needed
  // REMOVED: const handleSignIn = async () => { ... } // No longer needed

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

  // If user is not logged in AND not loading, we simply return null
  // This will remove the button entirely from the header when not logged in.
  return null;
}