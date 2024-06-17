import { Button } from '@/components/animations/Button'

type Artist = {
  name: string
  id: string
  bio: string
  image: string
  videos: any[]
}

type AdminTableProps = {
  header: string[]
  rows: any[][]
}

export default function AdminTable({ header, rows }: AdminTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-cjsWhite text-cjsBrown border border-cjsBrown p-4">
      <div className="pb-4 ">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none text-cjsBrown">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block pt-2 ps-10 text-sm 0 rounded-lg w-80 bg-cjsWhite  focus:none focus:outline-none placeholder:text-cjsBrown placeholder:text-opacity-50"
            placeholder="Search for an artist"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs uppercase ">
          <tr>
            {header.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Repeat the following block for each row */}

          {rows.map((row: any, index: number) => (
            <tr className="bg-cjsWhite border-b hover:bg-gray-50">
              <td className="px-6 py-4">{row[0]}</td>
              <td className="px-6 py-4">{row[1]}</td>
              <td className="px-6 py-4">{row[2]}</td>
              <td className="px-6 py-4 cursor-pointer">
                <Button>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
