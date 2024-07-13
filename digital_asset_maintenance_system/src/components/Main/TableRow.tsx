/**
 * @file TableRow.tsx is the table row component for the table
 * @since 2021-04-01
 * @version 1.0
 * @description The TableRow component is a child component of the
 * Table component. It is responsible for rendering the rows
 * of the table.
 * @exports TableRow
 * @component
 * @param {string[]} data - The data to be displayed in the table row
 * @return {JSX.Element} - Rendered component
 * @example
 * return (
 * <TableRow
 * data={[
 * '141f-1239-ae22-adk0',
 * 'adA123JJKL',
 * 'Laptop',
 * 'Asus',
 * 'Turf',
 * '14"',
 * '12 months',
 * '22/07/1999'
 * ]}
 * />)
 *
 */

import '../../assets/css/Table.css'
import { PencilSquareIcon, EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const TableRow = ({ data }: { data: string[] }) => {
  return (
    <tr>
      {data.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
      <td className='flex items-center gap-2'>
        {/* TODO
        - Change 1 to the device ID
         */}
        <Link to='/devices/1/edit'>
          <PencilSquareIcon className='table-icons' title='Edit device' />
        </Link>
        <Link to='/devices/1'>
          <EyeIcon className='table-icons' title='View device' />
        </Link>
      </td>
    </tr>
  )
}

export default TableRow
