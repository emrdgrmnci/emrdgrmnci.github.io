export default {
  comments: (
    <>
    <div className="w-5/6 mx-auto" dangerouslySetInnerHTML={{ __html: '<script src="https://giscus.app/client.js" data-repo="officialrajdeepsingh/officialrajdeepsingh.dev" data-repo-id="R_kgDOIs4gPw" data-category="Q&A" data-category-id="DIC_kwDOIs4gP84CTV3Q" data-mapping="pathname" data-strict="1" data-reactions-enabled="1"data-emit-metadata="0" data-input-position="top" data-theme="dark_protanopia" data-lang="en" data-loading="lazy" crossorigin="anonymous" async></script>' }}>
    </div>
    </>
  ),
  footer: (<div className="my-24  border-t-2  mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-sm text-gray-500">
        <a href="https://twitter.com/emrdgrmnci" className="text-gray-600" rel="noopener noreferrer" target="_blank">@emrdgrmnci</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
        <a target="_blank" href="https://www.linkedin.com/in/aemrdgrmnci/" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>

  ),
  unstable_faviconGlyph: "👋",
  navs: [
    {
      url: "/feed.xml",
      name: "RSS",
      "newWindow": true
    },
    {
      url: "https://www.github.com/emrdgrmnci/",
      name: "Github",
      "newWindow": true
    },
  ],
  readMore: 'Read Now',
  postFooter: (
  <div className="max-w-screen-xl mx-auto py-8 my-4">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for my newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required={true} />
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
  ),
  darkMode: true,
};
