## RedwoodJS Example Blog: Vercel Deploy

![RedwoodJS Example Blog Screenshot](https://user-images.githubusercontent.com/300/67903394-aced3080-fb28-11e9-85bb-b5fdbb4b6c34.png)

You can view this app live at https://redwoodjs-example-blog.vercel.app

## Table of Contents
- [RedwoodJS Example Blog: Vercel Deploy](#redwoodjs-example-blog-vercel-deploy)
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Installation](#installation)
    - [Posts Administration](#posts-administration)
  - [Deployment](#deployment)
    - [TO DO: Enabling Authentication](#to-do-enabling-authentication)
    - [Enabling Image Uploads](#enabling-image-uploads)
- [TODO](#todo)

## Overview

Here is a full-featured blog engine written with RedwoodJS. It includes:

* Listing all blog posts with first paragraph summaries and pagination (the homepage)
* Reading a single, full blog post
* Searching for blog posts by keyword
* Displaying all posts with a given tag
* Contact form
* Fully responsive at various viewport sizes

The admin includes:

* Create a new blog post with:
    * Title
    * Slug (URL)
    * Author
    * Body
    * Tags
    * Splash image
* Edit existing blog post
* Delete a blog post
* Mark a new post as a Draft and not display it live
* Publish a post live
* Unpublish a post (puts it back to DRAFT status)

On the tech side:

* Data stored in a SQL database (SQLite locally)
* Image uploads and CDN via [Filestack](https://filestack.com)
* CSS styling via [TailwindCSS](https://tailwindcss.com)

## Getting Started

### Installation

Clone the repo:

    $ git clone -b vercel-deploy https://github.com/redwoodjs/example-blog.git
    $ cd example-blog
    $ git remote rm origin

Install dependencies:

    yarn install

Create a local SQLite database and seed it with a few blog posts:

    yarn redwood db up
    yarn redwood db seed

Now you should be able to start a development server:

    yarn redwood dev

Assuming everything worked, open a browser to http://localhost:8910 and you should be seeing the homepage (similar to the screenshot above).

#### Posts Administration
To create, publish, and edit Posts, navigate to http://localhost:8910/admin

> **Admin Error Message:** If you have not set a value for the `FILESTACK_API_KEY` env var, you'll encounter an error when you try to create or edit posts. See the [Enabling Image Uploads](#enabling-image-uploads) section below.

> The /admin routes are enabled by an environment variable `USE_ADMIN=enable` in `env.defaults`. See the file `web/src/Routes.js`. Without this env var, /admin will be disabled when deployed. It is recommended to replace this with proper authentication. See "TO DO: Enabling Authentication" below.

### Deployment

See the section on [Vercel Deployment](https://redwoodjs.com/docs/deploy#vercel-deploy) in the Deploy doc.
1. Set up a production database (Postgres recommended)
2. Configure for Vercel deploy with the command `yarn rw g deploy vercel`
3. Import project from git repo into Vercel

#### TO DO: Enabling Authentication

> **Warning:** Do not use this project in production without adding Authentication to the Admin pages.

To add Redwood Auth to this blog, see the [Authentication](https://redwoodjs.com/docs/authentication) documentation. The Redwood Tutorial provides a walkthrough of [Netlify Identity setup](https://redwoodjs.com/tutorial/authentication), which will give you an overview of the process but will not work on the Vercel platform.

#### Enabling Image Uploads

The blog uses an external service, [Filestack](https://filestack.com) to handle image uploads. If you want to be able to upload images in local development you'll need to create a free account at Filestack and copy the API key. You get 100 uploads per month on their free account which should be plenty to test with.

Once you have logged into Filestack copy the API key shown at the top right of the dashboard:

![Filestack screenshot](https://user-images.githubusercontent.com/300/67905641-40296480-fb2f-11e9-8f86-94fd6ddbb12d.png)

If you haven't already, copy the `.env.example` file in the root of the blog to a new file named `.env`. Edit the `FILESTACK_API_KEY` variable to be equal to the one you just copied. Save `.env` and restart your `yarn dev` process. Now when creating a new blog post http://localhost:8910/admin/new you should see a filepicker towards the bottom of the form:

![New post screenshot](https://user-images.githubusercontent.com/300/67907861-9f3ea780-fb36-11e9-8bca-4e71c38d47e3.png)

## TODO

* Remove file picker if ENV var not set, with instructions for enabling
* In public view don't include posts in Draft state
