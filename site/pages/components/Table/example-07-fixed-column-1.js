/**
 * cn - 固定列
 * en - Fixed column
 */
import React from 'react'
import { Table } from 'shineout'
import { fetchSync } from 'doc/data/table'

const data = fetchSync(20)

const columns = [
  { title: 'id', render: 'id', width: 36 },
  {
    title: 'First Name',
    group: 'Name',
    render: 'firstName',
    width: 100,
  },
  {
    title: 'Last Name',
    fixed: 'left',
    group: 'Name',
    render: 'lastName',
    width: 100,
  },
  { title: 'Country', render: 'country' },
  { title: 'Position', render: 'position' },
  { title: 'Office', render: 'office' },
  { title: 'Start Date', render: 'start' },
  {
    title: 'Salary',
    fixed: 'right',
    width: 100,
    render: d => `$${d.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`,
  },
]

export default function () {
  return (
    <Table
      bordered
      fixed="both"
      keygen="id"
      width={1500}
      style={{ height: 300 }}
      columns={columns}
      data={data}
    />
  )
}