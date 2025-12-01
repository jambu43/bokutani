"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Icon component
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 mt-30">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-black" />
            </Link>
            <h1 className="text-4xl font-black text-black">NOUS CONTACTER</h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-700 mb-8">
            Pour une demande de privatisation ou d'organisation d'événement, nous vous invitons à cliquer{" "}
            <Link href="/reservation" className="text-[#0ba0da] underline hover:opacity-80">
              ici
            </Link>
            .
          </p>

          <form className="space-y-6">
            {/* Prénom */}
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom
              </label>
              <Input id="prenom" type="text" className="w-full" required />
            </div>

            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <Input id="nom" type="text" className="w-full" required />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input id="email" type="email" className="w-full" required />
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <Input id="telephone" type="tel" className="w-full" required />
            </div>

            {/* Salle souhaitée */}
            <div>
              <label htmlFor="salle" className="block text-sm font-medium text-gray-700 mb-2">
                Salle souhaitée
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez une arène" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dijon">BOKUTANI Kinshasa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea id="message" rows={6} className="w-full resize-none" required />
              <p className="text-sm text-gray-500 mt-2">
                Merci de nous fournir l'heure souhaitée, le nombre estimé de participants, et tout autre détail utile.
              </p>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-[#0ba0da] hover:bg-[#0ba0da] text-white font-bold py-6 text-lg">
              CONFIRMER
            </Button>

            {/* Footer Links */}
            <div className="flex justify-center gap-6 text-sm">
              <Link href="#" className="text-[#0ba0da] hover:underline">
                d'utilisation
              </Link>
              <Link href="#" className="text-[#0ba0da] hover:underline">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-[#0ba0da] hover:underline">
                Conditions
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
