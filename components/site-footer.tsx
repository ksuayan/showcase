"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import type { JSX } from "react"

export function SiteFooter(): JSX.Element {
  const { t } = useLanguage()
  const data = t.footer

  return (
    <footer className="border-t py-12 mt-12 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.columns.map((column, index) => (
            <div key={index} className="footer-div">
              <h3 className="text-xl font-serif mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.url}
                        className="text-muted-foreground hover:text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link href={link.url} className="text-muted-foreground hover:text-foreground">
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}

                {column.divider && <hr className="my-4 border-primary w-32" />}

                {column.additionalLinks &&
                  column.additionalLinks.map((link, linkIndex) => (
                    <li key={`additional-${linkIndex}`}>
                      {link.external ? (
                        <a
                          href={link.url}
                          className="text-muted-foreground hover:text-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <Link href={link.url} className="text-muted-foreground hover:text-foreground">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
