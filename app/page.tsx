export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">ReadabilityCheck</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded font-semibold text-sm hover:bg-[#79b8ff] transition-colors">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">WCAG Readability Compliance</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ensure Content Meets<br />
          <span className="text-[#58a6ff]">Accessibility Reading Levels</span>
        </h1>
        <p className="text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Scan blog posts, product descriptions, and marketing copy for WCAG readability compliance. Get instant Flesch-Kincaid, SMOG scores, and actionable improvement suggestions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#79b8ff] transition-colors">Start Free Trial</a>
          <a href="#pricing" className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-lg font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">See Pricing</a>
        </div>

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["Flesch-Kincaid Grade","SMOG Index","Coleman-Liau","WCAG 2.1 AA","Bulk Analysis","Improvement Tips"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#21262d] text-[#8b949e] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>

        {/* Mock dashboard */}
        <div className="mt-16 bg-[#161b22] border border-[#21262d] rounded-xl p-6 text-left max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-[#8b949e] text-xs">ReadabilityCheck Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[{label:"Flesch-Kincaid",score:"72",status:"Pass",color:"text-green-400"},{label:"SMOG Index",score:"8.2",status:"Pass",color:"text-green-400"},{label:"WCAG Level",score:"AA",status:"Compliant",color:"text-[#58a6ff]"}].map((m) => (
              <div key={m.label} className="bg-[#0d1117] border border-[#21262d] rounded-lg p-4">
                <div className="text-[#8b949e] text-xs mb-1">{m.label}</div>
                <div className="text-white text-2xl font-bold">{m.score}</div>
                <div className={`text-xs font-medium mt-1 ${m.color}`}>{m.status}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1117] border border-[#21262d] rounded-lg p-4">
            <div className="text-[#8b949e] text-xs mb-2">Suggestion</div>
            <p className="text-[#c9d1d9] text-sm">Sentence on line 3 exceeds 25 words. Consider splitting into two shorter sentences to improve readability for users with cognitive disabilities.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything your content team needs.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {["Unlimited content scans","Flesch-Kincaid, SMOG, Coleman-Liau","WCAG 2.1 AA/AAA compliance","Bulk upload & batch analysis","Improvement suggestions","Export reports as PDF/CSV","Priority email support"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] py-3 rounded-lg font-bold text-base hover:bg-[#79b8ff] transition-colors text-center">Start Free Trial</a>
          <p className="text-[#8b949e] text-xs mt-3">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {q:"What readability algorithms do you support?",a:"We support Flesch-Kincaid Grade Level, Flesch Reading Ease, SMOG Index, Coleman-Liau Index, and Automated Readability Index — all mapped to WCAG 2.1 success criteria for cognitive accessibility."},
            {q:"What WCAG guidelines does this cover?",a:"ReadabilityCheck targets WCAG 2.1 Success Criterion 3.1.5 (Reading Level) and related criteria. We flag content that exceeds a lower secondary education reading level and suggest rewrites to achieve AA or AAA compliance."},
            {q:"Can I analyze content in bulk?",a:"Yes. Upload CSV files or paste multiple URLs to analyze entire content libraries at once. Results are available as downloadable PDF or CSV reports for your compliance records."}
          ].map(({q,a}) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] px-6 py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} ReadabilityCheck. Built for content teams who care about accessibility.</p>
      </footer>
    </main>
  );
}
