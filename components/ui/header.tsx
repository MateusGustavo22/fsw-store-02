'use client'
import { ShoppingCart } from 'lucide-react'
import { Button } from './button'
import { SheetMenu } from './sheet-menu'
import Link from 'next/link'
import { Cart } from './cart'

export function Header() {
  return (
    <div className="w-full bg-background justify-between items-center flex p-6 border-b border-b-border">
      <SheetMenu />
      <Link href="/">
        <h1 className="font-poppins text-lg font-semibold text-white">
          <span className="font-semi text-lg text-dark-purple">FSW</span> Store
        </h1>
      </Link>
      <Cart />
    </div>
  )
}
