import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <main className="text-left py-6 font-light">
        <figure>
          <div className="h-64 overflow-hidden">
            <img
              alt="Wall of hammers"
              src="https://www.juritroy.com/uploaded-pics/realtime-resized-images/ori-hammer71524734972-1219294-2000x0.jpg"
            />
          </div>
          <figcaption className="text-right text-xs text-gray-500">
            Image from https://www.juritroy.com/en/office/hammer-collection
          </figcaption>
        </figure>

        <p className="mt-4">
          <strong className="font-semibold">Hammer Review</strong> is a sample
          application created with the{' '}
          <a
            className="underline"
            href="https://github.com/hammerframework/hammer"
          >
            Hammer Framework
          </a>{' '}
          to demonstrate common usage patterns and guide new adopters of the
          framework. It demonstrates many of the core Hammer concepts including:
        </p>
        <ul className="mt-4 ml-8 list-disc list-outside">
          <li>
            Routing using <strong className="font-semibold">pages</strong>
          </li>
          <li>
            Wrapping pages in <strong className="font-semibold">layouts</strong>
          </li>
          <li>
            Authentication using{' '}
            <strong className="font-semibold">Netlify Identity</strong>
          </li>
          <li>
            Components which handle their own data access, loading placeholders
            and display we call <strong className="font-semibold">cells</strong>
          </li>
          <li>
            Remote data access via{' '}
            <strong className="font-semibold">GraphQL</strong>
          </li>
          <li>
            A serverless API deployed somewhere like{' '}
            <strong className="font-semibold">Netlify</strong>
          </li>
          <li>
            Component documentation using{' '}
            <strong className="font-semibold">Storybook</strong>
          </li>
          <li>
            Testing using <strong className="font-semibold">Jest</strong>
          </li>
        </ul>
        <p className="mt-4">
          Check out the code at in the{' '}
          <a
            href="https://github.com/hammerframework/example-blog"
            className="underline"
          >
            example-blog
          </a>{' '}
          and read the{' '}
          <a
            href="https://github.com/hammerframework/example-blog/tree/master/README.md"
            className="underline"
          >
            README
          </a>{' '}
          for more info. repo.
        </p>
      </main>
    </BlogLayout>
  )
}

export default AboutPage
