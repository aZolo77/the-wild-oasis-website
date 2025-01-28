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
- [ ] Authentication
- [ ] Deployment to Vercel

## Themes

- [default Loader](./app/loading.js)
- [setting Font](./app/layout.js)
- [optimizing Images](./app/_components/Logo.js)
- [nested Layout](./app/account/layout.js)
- [fetch Data](./app/_lib/data-service.js)
- [Suspense functionallity](./app/cabins/page.js)
- [dynamic Route Segments | dynamic Metadata](./app/cabins/[cabinId]/page.js)
- [Error Boundary](./app/error.js)
- [manually trigger `Not-Found Page`](./app/_lib/data-service.js)
- [generating static Pages with `generateStaticParams` Function](./app/cabins/[cabinId]/page.js)
- [revalidating Data Cash at the Route Level](./app/cabins/page.js)
- [revalidating Data Cash at the Component Level](./app/_components/CabinList.js)
- [searchParams prop in Server Component makes it a dynamic Page](./app/cabins/page.js)
- [using Client Filter Component to share URL's Params](./app/_components/Filter.js)
- [getting and rendering Server Component as a Prop](./app/_components/UpdateProfileForm.js)
- [using Context API to provide reserved Range of Dates](./app/layout.js)
- [creating API custom End Point](./app/api/cabins/[cabinId]/route.js)
- [authentication Setup](./app/_lib/auth.js)
- [geting Session User Data](./app/_components/Navigation.js)
- [Login Page](./app/login/page.js)
- [Server Actions | Cache Revalidation](./app/_lib/actions.js)
- [adding Client Data to the Supabase on the User Authorization](./app/_lib/auth.js)
- [`useFormStatus` Hook](./app/_components/SubmitButton.js)
- [deleting a Reservation with a Server Action](./app/_lib/actions.js)
- [`useTransition` Hook for loading Spinner](./app/_components/DeleteReservation.js)
- [updating a Reservation](./app/account/reservations/edit/[bookingId]/)
- [`useOptimistic` Hook for UI improvement](./app/_components/ReservationList.js)
- [binding additional Arguments to a Server Action](./app/_components/ReservationForm.js)

## Reminders

- _To start project_:

  ```
  	npx create-react-app@latest [project name]
  ```
