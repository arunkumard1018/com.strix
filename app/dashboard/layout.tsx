import AuthProvider from '@/providers/AuthProvider'
import React from 'react'

function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div>
        {children}
      </div>
    </AuthProvider>
  )
}

export default Dashboardlayout