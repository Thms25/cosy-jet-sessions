// Components
import { Button } from '@/components/animations/Button'

// Assets
import { editPencil, searchIcon } from '@/utils/data/svgData'

// Types

type AdminTableProps = {
  header: string[]
  rows: any[][]
}

// ----------------------------------------------------------

export default function AdminTable({ header, rows }: AdminTableProps) {
  return (
    <div className="hide-scrollbar flex flex-col  overflow-x-auto  h-[400px] shadow-md rounded-lg bg-cjsWhite text-cjsBrown border border-cjsBrown p-4">
      <div className="pb-4 ">
        <div className="flex justify-start items-center gap-2 px-4 text-cjsBrown">
          <div className="">{searchIcon}</div>
          <input
            type="text"
            id="table-search"
            className="text-sm  w-full bg-cjsWhite  focus:none focus:outline-none placeholder:text-cjsBrown placeholder:text-opacity-40"
            placeholder="Search for anything..."
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs uppercase ">
          <tr>
            {header.map((item, index) => (
              <th
                key={index}
                scope="col"
                className="px-4 py-1 overflow-ellipsis"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row: any, index: number) => (
            <tr
              key={index}
              className="bg-cjsBrown bg-opacity-0 border-b hover:bg-opacity-5"
            >
              {row.map((item: any, index: number) => (
                <td key={index} className="px-2 py-1">
                  {item}
                </td>
              ))}
              <td className="px-2 py-1 cursor-pointer">
                <Button>{editPencil}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
