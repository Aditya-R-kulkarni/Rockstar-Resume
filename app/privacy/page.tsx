export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#030303] px-8 py-16 text-white sm:px-14">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-xs uppercase tracking-[0.28em] text-red-500"
        >
          ← Home
        </a>

        <div className="mt-14">
          <div className="text-[10px] tracking-[0.4em] text-red-500">
            LEGAL
          </div>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            Privacy <span className="text-red-500">Policy.</span>
          </h1>

          <p className="mt-6 text-sm text-white/35">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 text-sm leading-7 text-white/50">
          <section>
            <h2 className="text-lg font-medium text-white">
              1. Overview
            </h2>

            <p className="mt-3">
              This website is the personal portfolio of Aditya R Kulkarni.
              It presents professional information, projects, technical
              work and ways to get in contact.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              2. Information you provide
            </h2>

            <p className="mt-3">
              If you contact me through the email address or external
              platforms linked on this website, information you choose to
              provide may be received and used to respond to your message.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              3. Automatically collected information
            </h2>

            <p className="mt-3">
              This website may receive standard technical information from
              hosting, security or analytics services, such as browser,
              device and request information. The specific information
              collected depends on the services enabled on the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              4. Third-party services
            </h2>

            <p className="mt-3">
              This website may link to third-party services including
              GitHub, LinkedIn and email services. Their respective privacy
              policies and terms apply when you use those services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              5. Data security
            </h2>

            <p className="mt-3">
              Reasonable measures are taken to protect information handled
              through this website. However, no internet transmission or
              online service can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              6. Changes to this policy
            </h2>

            <p className="mt-3">
              This policy may be updated when the website or its services
              change. The updated version will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              7. Contact
            </h2>

            <p className="mt-3">
              For privacy-related questions, you can contact me at{" "}
              <a
                href="mailto:adityakulkarni2143@gmail.com"
                className="text-red-400 hover:text-red-300"
              >
                adityakulkarni2143@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}