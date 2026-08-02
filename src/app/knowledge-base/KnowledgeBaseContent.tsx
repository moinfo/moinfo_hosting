"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@mantine/core";
import { kbArticleCount, kbCategories } from "@/data/knowledgeBase";
import classes from "./KnowledgeBase.module.css";

const isExternal = (href: string) => href.startsWith("http");

export function KnowledgeBaseContent() {
  const [query, setQuery] = useState("");

  // Client-side filter over the stub index. Once articles come from the API
  // this becomes a server query, but the interaction stays the same.
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return kbCategories;
    return kbCategories
      .map((c) => ({
        ...c,
        articles: c.articles.filter((a) => a.title.toLowerCase().includes(q)),
      }))
      .filter((c) => c.articles.length > 0);
  }, [query]);

  const matchCount = results.reduce((n, c) => n + c.articles.length, 0);

  return (
    <>
      <nav className={classes.breadcrumb} aria-label="Breadcrumb">
        <Container size="xl" className={classes.crumbInner}>
          <Link href="/" className={classes.crumbLink}>
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className={classes.crumbCurrent}>Knowledge Base</span>
        </Container>
      </nav>

      <section className={`${classes.hero} dcWash`}>
        <div className="dcGrid" aria-hidden="true" />
        <Container size="xl" className={classes.heroInner}>
          <div className={classes.eyebrow}>
            <span className={classes.eyebrowRule} aria-hidden="true" />
            {kbArticleCount} guides
          </div>
          <h1 className={classes.title}>Knowledge base</h1>
          <p className={classes.lede}>
            Written answers to what customers ask us most. If none of these
            help, open a ticket and a person will.
          </p>

          <div className={classes.searchPanel}>
            <div className={classes.searchHead}>
              <span>SEARCH GUIDES</span>
              <span>
                {matchCount} / {kbArticleCount}
              </span>
            </div>
            <div className={classes.field}>
              <span className={classes.prompt} aria-hidden="true">
                ⌕
              </span>
              <input
                className={classes.input}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                placeholder="nameservers, spam, invoice…"
                aria-label="Search the knowledge base"
              />
            </div>
          </div>
        </Container>
      </section>

      {results.length === 0 ? (
        <section className={classes.group}>
          <Container size="xl">
            <div className={classes.empty}>
              <div className={classes.emptyTitle}>
                Nothing matches “{query.trim()}”
              </div>
              <p className={classes.emptyText}>
                Try a shorter word, or ask us directly — we answer on WhatsApp
                within the hour.
              </p>
              <Link className={classes.emptyCta} href="/contact">
                Contact us
              </Link>
            </div>
          </Container>
        </section>
      ) : (
        results.map((group, i) => (
          <section
            key={group.key}
            className={`${classes.group} ${i % 2 === 0 ? classes.groupAlt : ""}`}
          >
            <Container size="xl">
              <div className={classes.groupHead}>
                <div className={classes.groupEyebrow}>{group.eyebrow}</div>
                <h2 className={classes.groupTitle}>{group.title}</h2>
                <p className={classes.groupDesc}>{group.description}</p>
              </div>

              <div className={classes.list}>
                {group.articles.map((a) =>
                  isExternal(a.href) ? (
                    <a
                      key={a.title}
                      className={classes.row}
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={classes.rowTitle}>{a.title}</span>
                      <span className={classes.rowMeta}>{a.minutes} min</span>
                    </a>
                  ) : (
                    <Link key={a.title} className={classes.row} href={a.href}>
                      <span className={classes.rowTitle}>{a.title}</span>
                      <span className={classes.rowMeta}>{a.minutes} min</span>
                    </Link>
                  ),
                )}
              </div>
            </Container>
          </section>
        ))
      )}
    </>
  );
}
