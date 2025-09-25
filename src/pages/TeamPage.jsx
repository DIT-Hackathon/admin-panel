import React, { useMemo } from 'react'
import Tables from '../components/Tables.jsx'
import CollapsibleSidebar from '../components/Sidebar.jsx'
function Team() {
  const columns = useMemo(() => [
    { key: 'transactionId', header: 'Transaction ID' },
    { key: 'customer.name', header: 'Member' },
    { key: 'collegeId', header: 'College ID' },
    { key: 'customer.email', header: 'Email' },
    { key: 'amount', header: 'Amount ($)' },
    { key: 'date', header: 'Date' },
    { key: 'status', header: 'Status' },
    { key: 'method', header: 'Method' },
  ], [])

  const data = useMemo(() => [
    {
      transactionId: 'TXN-1001',
      customer: { name: 'Ava Patel', email: 'ava.patel@example.com' },
      amount: 249.99,
      date: '2025-09-10',
      status: 'Paid',
      method: 'Credit Card',
      collegeId: 'CLG-2025-1001',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1001/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1001/1200/800',
      year: '3rd',
      phoneNo: '+91 91234 56780',
      gender: 'Female',
      accommodation: true,
    },
    {
      transactionId: 'TXN-1002',
      customer: { name: 'Liam Johnson', email: 'liam.j@example.com' },
      amount: 79.00,
      date: '2025-09-11',
      status: 'Pending',
      method: 'UPI',
      collegeId: 'CLG-2025-1002',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1002/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1002/1200/800',
      year: '2nd',
      phoneNo: '+91 98765 43210',
      gender: 'Male',
      accommodation: false,
    },
    {
      transactionId: 'TXN-1003',
      customer: { name: 'Sophia Chen', email: 'sophia.chen@example.com' },
      amount: 129.5,
      date: '2025-09-12',
      status: 'Failed',
      method: 'Net Banking',
      collegeId: 'CLG-2025-1003',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1003/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1003/1200/800',
      year: '1st',
      phoneNo: '+91 90123 45678',
      gender: 'Female',
      accommodation: true,
    },
    {
      transactionId: 'TXN-1004',
      customer: { name: 'Noah Garcia', email: 'noah.garcia@example.com' },
      amount: 560.00,
      date: '2025-09-13',
      status: 'Refunded',
      method: 'Debit Card',
      collegeId: 'CLG-2025-1004',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1004/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1004/1200/800',
      year: '4th',
      phoneNo: '+91 90909 09090',
      gender: 'Male',
      accommodation: false,
    },
    {
      transactionId: 'TXN-1005',
      customer: { name: 'Mia Rodriguez', email: 'mia.r@example.com' },
      amount: 39.99,
      date: '2025-09-14',
      status: 'Paid',
      method: 'Wallet',
      collegeId: 'CLG-2025-1005',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1005/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1005/1200/800',
      year: '2nd',
      phoneNo: '+91 93456 78901',
      gender: 'Female',
      accommodation: true,
    },
    {
      transactionId: 'TXN-1006',
      customer: { name: 'Ethan Kumar', email: 'ethan.k@example.com' },
      amount: 999.0,
      date: '2025-09-15',
      status: 'Chargeback',
      method: 'Credit Card',
      collegeId: 'CLG-2025-1006',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1006/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1006/1200/800',
      year: '3rd',
      phoneNo: '+91 94567 89012',
      gender: 'Male',
      accommodation: false,
    },

    {
      transactionId: 'TXN-1007',
      customer: { name: 'mehane Kumar', email: 'methane.k@example.com' },
      amount: 799.0,
      date: '2025-09-15',
      status: 'Chargeback',
      method: 'Credit Card',
      collegeId: 'CLG-2025-1007',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1007/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1007/1200/800',
      year: '1st',
      phoneNo: '+91 95678 90123',
      gender: 'Male',
      accommodation: true,
    },
    {
      transactionId: 'TXN-1008',
      customer: { name: 'Ethan singh', email: 'ethansingh.k@example.com' },
      amount: 999.0,
      date: '2025-09-15',
      status: 'Chargeback',
      method: 'Credit Card',
      collegeId: 'CLG-2025-1008',
      aadharPhotoUrl: 'https://picsum.photos/seed/aadhar1008/1200/800',
      collegeIdPhotoUrl: 'https://picsum.photos/seed/college1008/1200/800',
      year: '4th',
      phoneNo: '+91 96789 01234',
      gender: 'Male',
      accommodation: false,
    },
  ], [])

  return (
    <div className='bg-gray-950 min-h-screen text-white'>
      <div className='flex gap-6'><CollapsibleSidebar/>
     
      <Tables columns={columns} data={data} />
      </div>
      
  
    </div>
  )
}

export default Team