# Peek Booking Challenge

https://bryan-peek-challenge.netlify.app/

## Project Description

This challenge implements a simple booking flow for an activity using Ember.js. The application displays activity information, and allows users to book that activity by selecting a date, time and number of available tickets.

## Features

1. **Activity Information**: Displays name of activity and description
2. **Availability Data**: Used ember-power-calendar to allow users to select a date, times are displayed based on available times for that day.
3. **Ticket Selection**: Users can select the quantity of available tickets for that activity.
4. **Confirmation**: Confirmation screens displays final booking information.

## Notes

- Used Ember 4.12 due to it being the latest LTS version.

- Tried to make the flow as intuitive as possible, ie: disabling the ticket component until a time is selected.

- Utilized ember-power-calendar for date availability display. Set minimum date to currentDay despite mock data having available days in the past (added new dates).

- Since we're only dealing with one booking, didnt use queryParams. If we were to build on this we would not want to hardcode booking_ids

- Included acceptance and integration tests for core requirements

## How to Run the Project

**Ember.js 4.12**

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `ember serve`.
4. Access the application at `http://localhost:4200/booking`.
