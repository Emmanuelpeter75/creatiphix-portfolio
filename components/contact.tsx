"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send, Instagram } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch("https://formspree.io/f/mwvylwlp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
              Ready to Scale Your E-commerce Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              {"Let's discuss how we can help you build, optimize, or scale your Shopify store. Get a free consultation and store audit to identify growth opportunities."}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">creatiphixdesign@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">+234 707 266 1266</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <Link 
                  href="https://web.facebook.com/profile.php?id=61569988424898" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="https://www.instagram.com/creatiphix_d/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </Link>
                <Link 
                  href="https://x.com/creatiphix_d/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-muted/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-muted/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Project</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I need help with my Shopify store..."
                  rows={4}
                  required
                  className="bg-muted/30 resize-none"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {isSubmitted && (
                <p className="text-center text-sm text-green-600 font-medium">
                  Thank you! We&apos;ll be in touch shortly.
                </p>
              )}
            </form>

            {/* Fiverr Call-out Box */}
            <div className="mt-8 bg-sky-50 border border-sky-200 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Or, work with us on Fiverr
              </h4>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-medium"
              >
                <Link 
                  href="https://www.fiverr.com/s/wbALeDv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Image 
                    src="/fiverr-logo.png" 
                    alt="Fiverr" 
                    width={20} 
                    height={20} 
                    className="rounded-full"
                  />
                  Order on Fiverr
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
