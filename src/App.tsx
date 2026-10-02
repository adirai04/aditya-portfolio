"use client";

import { useEffect, useRef, useState } from "react";
import { CodeXml as Github, ContactRound as Linkedin, Code2, Menu, X, Plus, Minus, Sun, Moon, Layers, Braces, Globe } from "lucide-react";

const profiles = [
  { name: "GitHub", handle: "@adirai04", url: "https://github.com/adirai04", Icon: Github, description: "The code behind the projects." },
  { name: "LinkedIn", handle: "Aditya Rai", url: "https://www.linkedin.com/in/aditya-rai-25625129a/", Icon: Linkedin, description: "Let’s make a connection." },
  { name: "LeetCode", handle: "@rai_aditya", url: "https://leetcode.com/u/rai_aditya/", Icon: Code2, description: "One problem at a time." },
];
const projects = [
  { id: "01", name: "Car Rental", kind: "WEB APPLICATION", category: "Websites", label: "Explore live site", url: "https://car-rental-nine-cyan.vercel.app/", description: "A car rental web project that brings a practical, everyday service to the browser.", detail: "Explore the live application to see the interface and experience the project firsthand.", theme: "rental", word: "Let's go.", tags: ["Web experience", "Car rental"] },
  { id: "02", name: "Bank System", kind: "SOFTWARE PROJECT", category: "Code", label: "View repository", url: "https://github.com/adirai04/bank-system", description: "A banking system project, with the implementation available to explore on GitHub.", detail: "Take a closer look at the source code, project structure, and implementation in the repository.", theme: "bank", word: "Logic.\nStructured.", tags: ["Banking", "Source code"] },
  { id: "03", name: "Shubham Industries", kind: "BUSINESS WEBSITE", category: "Websites", label: "Explore live site", url: "https://shubham-industries-portfolio-zeta.vercel.app/", description: "A portfolio website for Shubham Industries, giving the business a dedicated digital presence.", detail: "Visit the live website to explore the business presentation and its visual identity.", theme: "industry", word: "Built for\nthe real world.", tags: ["Business", "Digital presence"] },
];

export default function Home() {
 const [menu, setMenu] = useState(false);
 const [light, setLight] = useState(false);
 const [filter, setFilter] = useState("All projects");
 const [expanded, setExpanded] = useState<string | null>(null);
 const [active, setActive] = useState("home");
 const heroRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
  setLight(localStorage.getItem("aditya-theme") === "light");
  const sections = document.querySelectorAll("main > section[id]");
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-20% 0px -55% 0px" });
  sections.forEach(s => observer.observe(s));
  return () => observer.disconnect();
 }, []);
 function toggleTheme() { setLight(v => {localStorage.setItem("aditya-theme", v ? "dark" : "light"); return !v;}); }
 return <div className={`portfolio ${light ? "light" : ""}`}>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="header">
   <a href="#home" className="wordmark" aria-label="Aditya Rai home">ar<span>.</span></a>
   <nav className={menu ? "navigation open" : "navigation"} aria-label="Main navigation">
    {[ ["work", "Work"], ["about", "About"], ["connect", "Connect"]].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className={active === id ? "active" : ""}>{label}</a>)}
   </nav>
   <div className="flex items-center gap-3"><button className="icon-button" onClick={toggleTheme} aria-label={light ? "Switch to dark theme" : "Switch to light theme"}>{light ? <Moon size={18}/> : <Sun size={18}/>}</button><a className="header-contact" href={profiles[1].url} target="_blank" rel="noopener noreferrer">Let’s talk</a><button className="icon-button menu-button" aria-expanded={menu} aria-label={menu ? "Close navigation" : "Open navigation"} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
  </header>
  <main id="main">
   <section id="home" className="hero section-shell" ref={heroRef} onPointerMove={e => { if(e.pointerType === "mouse" && heroRef.current) { const r=heroRef.current.getBoundingClientRect(); heroRef.current.style.setProperty("--pointer-x", `${(e.clientX-r.left)/r.width*100}%`); heroRef.current.style.setProperty("--pointer-y", `${(e.clientY-r.top)/r.height*100}%`); } }}>
    <div className="hero-top"><span className="eyebrow">ADITYA RAI / DEVELOPER</span><span className="hero-note">Curiosity meets code.</span></div>
    <h1>Thoughtful code.<br/><span className="accent-line">Real experiences<span className="period">.</span></span></h1>
    <div className="hero-bottom"><div><p className="hero-description">Hi, I’m Aditya. I turn ideas into web experiences<br className="desktop-break"/> and sharpen my thinking through code.</p><div className="hero-actions"><a href="#work" className="button primary">Explore my work</a><a href="#about" className="text-link">A little about me</a></div></div><div className="hero-index"><span className="index-label">SELECTED WORK</span><span className="index-number">01—03</span><span className="index-caption">Built. Learned. Iterated.</span></div></div>
    <div className="hero-footer"><span>DEVELOPMENT & PROBLEM SOLVING</span><div className="flex gap-5">{profiles.map(p=><a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}><p.Icon size={19}/></a>)}</div></div>
   </section>
   <section id="work" className="work section-shell">
    <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Ideas, made tangible<span>.</span></h2></div><p>Three projects.<br/>Different problems to explore.</p></div>
    <div className="filters" role="group" aria-label="Filter projects">{["All projects", "Websites", "Code"].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f} className={filter===f ? "selected" : ""}>{f}<span>{f === "All projects" ? "03" : f === "Websites" ? "02" : "01"}</span></button>)}</div>
    <div className="projects" aria-live="polite">{projects.filter(p=>filter==="All projects"||p.category===filter).map(p=><article className="project" key={p.id}>
     <a className={`project-art ${p.theme}`} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${p.label}`}><div className="art-top"><span>{p.kind}</span><span>{p.id} / 03</span></div><div className="project-word">{p.word}</div><div className="art-bottom"><span>{p.name}</span><span className="art-icon">{p.theme==="bank" ? <Braces size={27}/> : p.theme==="industry" ? <Layers size={27}/> : <Globe size={27}/>}</span></div></a>
     <div className="project-info"><div className="project-title-row"><h3>{p.name}</h3><button className="expand" aria-label={`${expanded===p.id ? "Hide" : "Show"} details for ${p.name}`} aria-expanded={expanded===p.id} aria-controls={`detail-${p.id}`} onClick={()=>setExpanded(expanded===p.id ? null:p.id)}>{expanded===p.id ? <Minus size={20}/> : <Plus size={20}/>}</button></div><p>{p.description}</p><div id={`detail-${p.id}`} hidden={expanded!==p.id} className="project-detail">{p.detail}</div><div className="project-info-bottom"><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">{p.label}</a></div></div>
    </article>)}</div>
   </section>
   <section id="about" className="about section-shell"><div><span className="eyebrow">02 / A LITTLE ABOUT ME</span><h2>A builder’s mindset.<br/><span className="muted-heading">A learner’s curiosity.</span></h2></div><div className="about-copy"><p>I’m Aditya Rai, a developer who enjoys turning an idea into something you can use.</p><p>My work spans web applications, business websites, and software projects. Alongside building, I practice problem solving and explore the thinking behind good code.</p><p>I care about the details: how an interface feels, how a solution is structured, and what I can improve with the next iteration.</p><div className="focus-grid"><div><Code2/><h3>Build for the web</h3><p>Interfaces with a clear purpose.</p></div><div><Braces/><h3>Think it through</h3><p>Problems that stretch my thinking.</p></div></div></div></section>
   <section id="connect" className="connect section-shell"><span className="eyebrow">03 / ELSEWHERE ON THE INTERNET</span><div className="connect-heading"><h2>Good things start<br/>with a conversation<span>.</span></h2><p>Explore the code, follow the journey,<br/>or simply say hello.</p></div><div className="profile-grid">{profiles.map(p=><a className="profile-card" key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"><div className="profile-top"><p.Icon size={25}/><span>{p.handle}</span></div><h3>{p.name}</h3><p>{p.description}</p></a>)}</div></section>
  </main>
  <footer className="section-shell footer"><a href="#home" className="wordmark" aria-label="Back to top">ar<span>.</span></a><p>© {new Date().getFullYear()} Aditya Rai</p><a href="#home">Back to top</a></footer>
 </div>
}
