# The Wild Oasis

This repository contains the code and notes for the **The Wild Oasis Website** project built during the Next.js course. The project will be deployed via Vercel upon completion.

## Project Overview

**The Wild Oasis** is a fictional website that demonstrates key features of Next.js, including server-side rendering (SSR), static site generation (SSG), dynamic routing, API routes, and more. The project is built step-by-step throughout the course.

## Current Progress

- [x] Project Initialization
- [x] Pages and Routing
- [x] Data Fetching
- [x] Dynamic Routing
- [x] Error Handling
- [x] Data Cashing
- [ ] Styling
- [ ] Deployment to Vercel

## Themes

- [default Loader](./app/loading.js)
- [setting font](./app/layout.js)
- [optimizing Images](./app/_components/Logo.js)
- [nested Layout](./app/account/layout.js)
- [fetch Data](./app/_lib/data-service.js)
- [Suspense functionallity](./app/cabins/page.js)
- [dynamic Route Segments | dynamic Metadata](./app/cabins/[cabinId]/page.js)
- [Error Boundary](./app/error.js)
- [manually trigger `Not-Found Page`](./app/_lib/data-service.js)
- [generating static pages with `generateStaticParams` function](./app/cabins/[cabinId]/page.js)
- [revalidating Data Cash at the Route Level](./app/cabins/page.js)
- [revalidating Data Cash at the Component Level](./app/_components/CabinList.js)
- [searchParams prop in Server Component makes it a dynamic Page](./app/cabins/page.js)
- [using Client Filter Component to share URL's params](./app/_components/Filter.js)
- [getting and rendering Server Component as a Prop](./app/_components/UpdateProfileForm.js)
- [using context API to provide reserved range of dates](./app/layout.js)
- [creating API custom End Point](./app/api/cabins/[cabinId]/route.js)

## Reminders

- _To start project_:

  ```
  	npx create-react-app@latest [project name]
  ```
