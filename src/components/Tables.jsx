import React, { useEffect, useState } from 'react'

{
    /*Props 
    
    const columns = [{key: 'name', header: 'Name'}];

    const [userData] = useState([
        {name: 'exampleName'}
    ]);

    To render: -
    <Tables columns={columns} data={userData} />
    */
}



export default function Tables({ columns, data }) {
    const [openRowIndex, setOpenRowIndex] = useState(null)

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') setOpenRowIndex(null)
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const displayColumns = (columns || []).filter((c) => c.key !== 'method')

    const selectedRow = openRowIndex !== null ? data[openRowIndex] : null

    return (
        <div className="w-[85%] mt-10 mx-auto overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <table className="w-full caption-bottom text-sm">
        
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                {displayColumns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className="h-10 px-4 text-left align-middle font-medium text-gray-600 dark:text-gray-200"
                  >
                    {col.header}
                  </th>
                ))}
                <th scope="col" className="h-10 px-4 text-right align-middle font-medium text-gray-600 dark:text-gray-200">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-150">
                  {displayColumns.map((col) => (
                    <td
                      key={`${col.key}-${rowIndex}`}
                      className="p-4 align-middle text-gray-700 dark:text-gray-100 whitespace-nowrap"
                    >
                      {col.key.split('.').reduce((o, i) => (o ? o[i] : ''), row)}
                    </td>
                  ))}
                  <td className="p-4 align-middle text-right whitespace-nowrap">
                    <button
                      aria-label="Row actions"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-900"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenRowIndex((prev) => (prev === rowIndex ? null : rowIndex))
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>
    
    {openRowIndex !== null && selectedRow && (
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenRowIndex(null)
        }}
      >
        <div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Member details</h3>
            <button
              aria-label="Close"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
              onClick={() => setOpenRowIndex(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="mt-2 border-t border-gray-200 pt-3 dark:border-gray-800">
            <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <div className="text-gray-500 dark:text-gray-400">Name</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{selectedRow?.customer?.name || selectedRow?.name || '—'}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">College ID</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{selectedRow?.collegeId || '—'}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Email</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{selectedRow?.customer?.email || selectedRow?.email || '—'}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Year</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{selectedRow?.year || '—'}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Phone No</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{selectedRow?.phoneNo || '—'}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Gender</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{selectedRow?.gender || '—'}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-gray-500 dark:text-gray-400 mb-2">Accommodation</div>
                <div>
                  {selectedRow?.accommodation ? (
                    <span className="inline-flex items-center rounded-md bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/30">Yes</span>
                  ) : (
                    <span className="inline-flex items-center rounded-md bg-red-500/15 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/30">No</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a
                href={selectedRow?.aadharPhotoUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex flex-1 items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-colors ${selectedRow?.aadharPhotoUrl ? 'border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900' : 'cursor-not-allowed border-gray-200 text-gray-400 dark:border-gray-800 dark:text-gray-600'}`}
              >
                Aadhar Card Photo
              </a>
              <a
                href={selectedRow?.collegeIdPhotoUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex flex-1 items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-colors ${selectedRow?.collegeIdPhotoUrl ? 'border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900' : 'cursor-not-allowed border-gray-200 text-gray-400 dark:border-gray-800 dark:text-gray-600'}`}
              >
                College ID Photo
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>  
  )
}