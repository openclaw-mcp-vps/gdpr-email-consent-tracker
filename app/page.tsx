export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Email Consent Compliance{" "}
          <span className="text-[#58a6ff]">Across All Your Tools</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Mailchimp, ConvertKit, and more. Automatically detect non-compliant contacts, manage opt-out requests, and stay GDPR-ready — all from one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔗", title: "Multi-Platform Sync", desc: "Connect Mailchimp, ConvertKit, ActiveCampaign and pull consent data automatically." },
            { icon: "🚨", title: "Violation Alerts", desc: "Get instant alerts when a contact's consent status becomes non-compliant." },
            { icon: "✅", title: "Opt-Out Automation", desc: "Process opt-out requests across all platforms in one click, audit trail included." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for GDPR email compliance</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited platform connections",
              "Real-time consent monitoring",
              "Automated violation alerts",
              "One-click opt-out processing",
              "Full audit trail & reports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which email platforms do you support?",
              a: "We currently support Mailchimp, ConvertKit, and ActiveCampaign, with more integrations added regularly."
            },
            {
              q: "How does the opt-out automation work?",
              a: "When a contact submits an opt-out request, our system propagates the unsubscribe across all connected platforms instantly and logs a timestamped audit entry."
            },
            {
              q: "Is my data secure?",
              a: "All API credentials are encrypted at rest. We never store contact email content — only consent metadata needed for compliance tracking."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} GDPR Email Consent Tracker. Built for EU-serving businesses.
      </footer>
    </main>
  );
}
