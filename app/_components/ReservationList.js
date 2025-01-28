"use client";

import { useOptimistic } from "react";

import ReservationCard from "@/app/_components/ReservationCard";

import { deleteBooking } from "@/app/_lib/actions";

export default function ReservationList({ bookings }) {
  // Create a new optimistic state for the bookings
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      // Remove the booking with the given ID
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
