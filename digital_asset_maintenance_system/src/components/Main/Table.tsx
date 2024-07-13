/**
 * @file Table component
 * @since 2021-04-01
 * @version 1.0
 * @description The Table component is responsible for
 * rendering the table and its children components.
 * @exports Table
 * @component
 * @return {JSX.Element} - Rendered component
 * @example
 * return (
 * <Table />)
 *
 */

import TableHead from './TableHead'
import TableRow from './TableRow'
import '../../assets/css/Table.css'
import { ForwardIcon, BackwardIcon } from '@heroicons/react/24/solid'

const Table = () => {
  return (
    <section className='records-table'>
      <table>
        <TableHead
          columns={[
            'ID',
            'Serial number',
            'Type',
            'Brand',
            'Model',
            'Display',
            'Warranty',
            'Date added',
            'Actions'
          ]}
        />
        <tbody>
          <TableRow
            data={[
              '141f-1239-ae22-adk0',
              'adA123JJKL',
              'Laptop',
              'Asus',
              'Turf',
              '14"',
              '12 months',
              '22/07/1999'
            ]}
          />
        </tbody>
      </table>
      <div className='flex justify-between items-center'>
        <p className='text-[0.8rem]'>Showing 50 of 200</p>
        <div className='flex gap-3'>
          <BackwardIcon className='table-icons' title='Previous' />
          <ForwardIcon className='table-icons' title='Next' />
        </div>
      </div>
    </section>
  )
}

export default Table
