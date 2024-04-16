import React from 'react'

const people = [
    {
      name: 'Dr. Earnest Salifu',
      role: 'Co-Founder / CEO',
      imageUrl:
        './earnestavater.png',
    },
    {
        name: 'Dr. Earnest Salifu',
        role: 'Co-Founder / CEO',
        imageUrl:
          './earnestavater.png',
      },
      {
        name: 'Dr. Earnest Salifu',
        role: 'Co-Founder / CEO',
        imageUrl:
          './earnestavater.png',
      },
      {
        name: 'Dr. Earnest Salifu',
        role: 'Co-Founder / CEO',
        imageUrl:
          './earnestavater.png',
      },
      {
        name: 'Dr. Earnest Salifu',
        role: 'Co-Founder / CEO',
        imageUrl:
          './earnestavater.png',
      },
      {
        name: 'Dr. Earnest Salifu',
        role: 'Co-Founder / CEO',
        imageUrl:
          './earnestavater.png',
      },
      {
          name: 'Dr. Earnest Salifu',
          role: 'Co-Founder / CEO',
          imageUrl:
            './earnestavater.png',
        },
        {
          name: 'Dr. Earnest Salifu',
          role: 'Co-Founder / CEO',
          imageUrl:
            './earnestavater.png',
        },
        {
          name: 'Dr. Earnest Salifu',
          role: 'Co-Founder / CEO',
          imageUrl:
            './earnestavater.png',
        },
        {
          name: 'Dr. Earnest Salifu',
          role: 'Co-Founder / CEO',
          imageUrl:
            './earnestavater.png',
        },
    // More people...
  ]

const Team = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
          At QuickMed, our team is at the heart of everything we do. 
          Comprising fast selling skilled medical professionals, health care service providers, 
          tech developers and dedicated 
          support staff, we work together to bring you exceptional 
          healthcare services. Learn more about our passionate and 
          experienced team committed to providing you with the best 
          possible care.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-100">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-orange-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team