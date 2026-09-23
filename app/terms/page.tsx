export default function TermsAndConditions() {
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
            Terms <span className="text-red-500">&</span> Conditions.
          </h1>

          <p className="mt-6 text-sm text-white/35">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 text-sm leading-7 text-white/50">
          <section>
            <h2 className="text-lg font-medium text-white">
              1. Website use
            </h2>
            <p className="mt-3">
              This website is a personal portfolio belonging to Aditya R
              Kulkarni. It provides information about professional
              experience, projects, technical work and other related
              activities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              2. Intellectual property
            </h2>
            <p className="mt-3">
              Unless otherwise stated, the content, design, graphics,
              original project materials and written content presented on
              this website belong to Aditya R Kulkarni. Content may not be
              reproduced, modified or redistributed without appropriate
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              3. Project information
            </h2>
            <p className="mt-3">
              Projects and technical work presented on this website are
              provided for informational and portfolio purposes. Technologies,
              implementations and project descriptions may change as the
              projects continue to develop.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              4. External links
            </h2>
            <p className="mt-3">
              This website may contain links to external services including
              GitHub, LinkedIn and email services. These services operate
              under their own terms, policies and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              5. Availability
            </h2>
            <p className="mt-3">
              Reasonable efforts are made to keep this website available and
              accurate, but continuous availability or error-free operation
              cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              6. Changes
            </h2>
            <p className="mt-3">
              These terms may be updated when the website, its content or
              its services change. Updated terms will be published on this
              page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white">
              7. Contact
            </h2>
            <p className="mt-3">
              For questions regarding these terms, you can contact me at{" "}
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