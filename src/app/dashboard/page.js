import React from 'react'
import DashboardLayout from './DashboardLayout'
import FilterPanel from '@/app/components/FilterPanel';
import SubHeader from '@/app/components/shared/SubHeader';


const Dashboard = () => {
  return (
    <div className='bg-background flex h-screen-64 flex-col items-center justify-between'>
      <DashboardLayout FilterPanel={FilterPanel}
        SubHeader={SubHeader}
      />
    </div>
  )
}

export default Dashboard