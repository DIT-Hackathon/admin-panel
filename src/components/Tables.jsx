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


    return (
        <div className="w-full overflow-x-auto rounded-lg shadow-md border border-black">
          <table className="min-w-full bg-white">
        
            <thead className="bg-gray-600 border-b border-black">
            <tr>
                {columns.map((col) => (
                <th
                    key={col.key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                >
                    {col.header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-gray-400">
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-200 text-black transition-colors  duration-200">
                {columns.map((col) => (
                <td key={`${col.key}-${rowIndex}`} className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {col.key.split('.').reduce((o, i) => (o ? o[i] : ''), row)}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
      </table>
    </div>  
  )
}