'use client'

// Hooks
import { useState } from 'react'

import Image from 'next/image'

const pastEvents = [
  {
    title: 'Jazmyn @ CJS',
    description: 'Description for Event 1',
    date: 'October 15, 2023',
    location: "Cosy Jet Sessions' studio",
  },
  {
    title: 'Root Mean Square @ CJS',
    description: 'Description for Event 2',
    date: 'September 5, 2023',
    location: "Cosy Jet Sessions' studio",
  },
  {
    title: 'Ozya @ CJS',
    description: 'Description for Event 1',
    date: 'October 15, 2023',
    location: "Cosy Jet Sessions' studio",
  },
  {
    title: 'Colt @ CJS',
    description: 'Description for Event 2',
    date: 'September 5, 2023',
    location: "Cosy Jet Sessions' studio",
  },
  // Add more events as needed
]
const upcomgEvents = [
  {
    title: 'Mia Lena @ CJS',
    description: 'Description for Event 1',
    date: 'December 15, 2023',
    location: "Cosy Jet Sessions' studio",
  },
  {
    title: 'Staace @ CJS',
    description: 'Description for Event 2',
    date: 'January 5, 2024',
    location: "Cosy Jet Sessions' studio",
  },
  // Add more events as needed
]
const eventTabs = [
  {
    title: 'Upcoming',
    events: upcomgEvents,
  },
  {
    title: 'Past',
    events: pastEvents,
  },
  {
    title: 'All',
    events: upcomgEvents.concat(pastEvents),
  },
]

export default function EventsContent() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="mt-24 p-8">
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-cjsPink md:me-4 mb-4 md:mb-0">
          {eventTabs.map((tab, index) => {
            return (
              <li onClick={() => setSelected(index)} key={index}>
                <a
                  href="#"
                  className={`inline-flex items-center px-4 py-3 text-cjsWhite bg-cjsBrown ${
                    selected === index ? 'bg-opacity-100' : 'bg-opacity-70'
                  } rounded-lg active w-full hover:bg-opacity-100 transition duration-300`}
                  aria-current="page"
                >
                  <svg
                    className="w-4 h-4 me-2 text-cjsWhite"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  {tab.title}
                </a>
              </li>
            )
          })}
        </ul>

        {eventTabs.map((tab, index) => {
          return (
            selected === index && (
              <div
                className="px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 m-auto"
                key={index}
              >
                {tab.events.map(event => (
                  <EventCard
                    key={event.title}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    location={event.location}
                  />
                ))}
              </div>
            )
          )
        })}
      </div>
    </section>
  )
}

type EventCardProps = {
  title: string
  description: string
  date: string
  location: string
  imageUimgrl?: string
}

const EventCard = ({
  title,
  description,
  date,
  location,
  imageUimgrl,
}: EventCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-40 object-cover object-center"
        src="/images/decor.png"
        width={900}
        height={900}
        alt={title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-cjsPink mb-4">{description}</p>
        <p className="text-cjsPink mb-2">Date: {date}</p>
        <p className="text-cjsPink mb-4">Location: {location}</p>
        <div className="flex justify-end">
          <button className="bg-cjsBrown bg-opacity-70 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded m-auto transition duration-300">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
