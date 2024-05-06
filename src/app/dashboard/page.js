import React from 'react'
import DashboardLayout from './DashboardLayout'
import FilterPanel from '@/app/components/FilterPanel';

const Dashboard = () => {
  return (
    <div className='bg-background flex h-screen-64 flex-col items-center justify-between'>
      <DashboardLayout FilterPanel={FilterPanel} />
    </div>
  )
}

export default Dashboard