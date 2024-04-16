import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private healthcare access',
  'Member resources',
  'Entry to annual health conference',
  'Official member certificate',
  'Special discounted pricing',
  'Special Emergency response',
]

const Guide = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
          Experience transparency and peace of mind with QuickMed. 
          Our app offers simple, no-tricks pricing on every request 
          for medical services, so you always know what to expect. 
          Trust in QuickMed for straightforward, reliable healthcare 
          solutions at your fingertips.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-orange-600">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-200">
            Join QuickMed and enjoy a lifetime membership that unlocks a 
            world of healthcare at your service. As a member, 
            you gain unlimited access to our medical services and resources, 
            ensuring your health and well-being are always a priority. Become 
            a part of the QuickMed family for comprehensive, lasting care.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-red-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-200 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-200">Pay once, membership forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-100">N12,657</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-100">Naira</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-100">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide