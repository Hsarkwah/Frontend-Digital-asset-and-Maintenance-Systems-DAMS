/**
 * @file TableHead.tsx is the table head component for the table
 * @since 2021-04-01
 * @version 1.0
 * @description The TableHead component is a child component of
 * the Table component. It is responsible for rendering the
 * table head of the table.
 * @exports TableHead
 * @component
 * @param {string[]} columns - The columns of the table
 * @return {JSX.Element} - Rendered component
 * @example
 * return (
 *  <TableHead
 *  columns={[
 *  'ID',
 *  'Serial number',
 *  'Type',
 *  'Brand',
 *  'Model',
 *  'Display',
 *  'Warranty',
 *  'Date added'
 * ]}
 * />)
 *
 */

import '../../assets/css/Table.css'

const TableHead = ({ columns }: { columns: string[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
