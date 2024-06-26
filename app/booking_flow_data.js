/**
 * Use this file to get the data for the model for your route as if it's coming back from the server.
 *
 * @typedef {Object} activity - Represents an activity that can be booked; hasMany tickets
 * @typedef {Object} ticket - Represents a ticket type that can be selected for the activity; belongsTo an activity
 *
 * @property {string} id - Unique identifier of the activity
 * @property {string} name - Name of the activity
 * @property {string} description - Description of the activity
 * @property {array.<ticket>} tickets - Tickets that are available to book on the activity
 *   @property {string} ticket.id - Unique identifier of the ticket
 *   @property {string} ticket.name - Name of the ticket
 *   @property {object} ticket.price - Price details for how much an individual ticket costs
 *     @property {string} price.amount - Raw string for the price amount
 *     @property {string} price.currency - Currency code for the price
 *     @property {string} price.formatted - Formatted version of the price with currency
 **/

const activity = {
  id: 'activity_1',
  name: 'Kayaking Tour in Crystal Springs, Florida',
  description:
    "Experience the serene beauty of Crystal Springs, Florida, with our guided kayaking tours. Paddle through crystal-clear waters surrounded by lush greenery and diverse wildlife. Whether you're a seasoned kayaker or a beginner, our tours offer a perfect blend of adventure and tranquility. Enjoy the peaceful environment, spot manatees, and immerse yourself in nature's splendor. Book your kayaking adventure today for an unforgettable outdoor experience!",
  tickets: [
    {
      id: 'ticket_1',
      name: 'Adult',
      price: {
        amount: '10.00',
        currency: 'USD',
        formatted: '$10.00',
      },
    },
    {
      id: 'ticket_2',
      name: 'Child',
      price: {
        amount: '5.00',
        currency: 'USD',
        formatted: '$5.00',
      },
    },
  ],
};

/**
 * @typedef {Object} availabilityDate - Represents a date that could be potentially booked for the activity; hasMany availabilityTimes
 * @typedef {Object} availabilityTime - Represents a time that could be potentially booked for the activity; belongsTo an availabilityDate
 *
 * @property {string} date {string} - Date in YYYY-MM-DD format
 * @property {string} status (AVAILABLE, SOLD_OUT) - String that indicates whether tickets can be booked for that date (if all the times for that date are sold out, the status will be "SOLD_OUT", otherwise the status will be "AVAILABLE")
 * @property {array.<availabilityTime>} availabilityTimes - (Potentially) available times for the date
 *   @property {string} availabilityTime.time - Time in HH:MM A format
 *   @property {number} availabilityTime.spotsLeft - Number of tickets that can still be booked on the time
 *   @property {string} availabilityTime.status (AVAILABLE, SOLD_OUT) - String that indicates whether tickets can be booked for that time (if spotsLeft is 0, the status will be "SOLD_OUT", otherwise the status will be "AVAILABLE")
 **/
const availabilityDates = [
  {
    date: '2024-06-01',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 8,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 8,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 8,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-02',
    status: 'SOLD_OUT',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
      {
        time: '12:00 PM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
      {
        time: '3:00 PM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
    ],
  },
  {
    date: '2024-06-03',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 3,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 8,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-04',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
      {
        time: '3:00 PM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
    ],
  },
  {
    date: '2024-06-05',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 3,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 9,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 10,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-06',
    status: 'SOLD_OUT',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
      {
        time: '12:00 PM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
      {
        time: '3:00 PM',
        spotsLeft: 0,
        status: 'SOLD_OUT',
      },
    ],
  },
  {
    date: '2024-06-07',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-08',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-09',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-10',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-11',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-12',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-13',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-14',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-15',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-16',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-17',
    status: 'SOLD_OUT',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-18',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-19',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-20',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-21',
    status: 'SOLD_OUT',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-22',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-23',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-24',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-25',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-26',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-27',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-28',
    status: 'SOLD_OUT',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-29',
    status: 'SOLD_OUT',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-06-30',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-07-01',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-07-02',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-07-03',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
  {
    date: '2024-07-04',
    status: 'AVAILABLE',
    availabilityTimes: [
      {
        time: '8:00 AM',
        spotsLeft: 6,
        status: 'AVAILABLE',
      },
      {
        time: '12:00 PM',
        spotsLeft: 2,
        status: 'AVAILABLE',
      },
      {
        time: '3:00 PM',
        spotsLeft: 1,
        status: 'AVAILABLE',
      },
    ],
  },
];

export default { activity, availabilityDates };
