import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {

  const pastes = useSelector((state)=> state.paste.pastes);
  const [serachTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filterdData = pastes.filter(
  (paste) => paste.title.
  toLowerCase().includes
  (serachTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  
  return (
    <div className="w-full max-w-[900px] mx-auto px-4">
      <input 
      className='w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-4 mb-6 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm'
      type='search'
      placeholder='Search here...'
      value={serachTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-4'>
      {
        filterdData.length > 0 && 
        filterdData.map(
          (paste) => {
            return (
              <div className='bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col sm:flex-row justify-between gap-4 hover:border-gray-500 transition-all shadow-sm' key={paste?._id}>
                
                <div className='flex flex-col gap-2 flex-1'>
                  <div className='text-2xl font-bold text-white'>
                    {paste.title}
                  </div>
                  <div className='text-gray-400 line-clamp-3'>
                    {paste.content}
                  </div>
                </div>

                <div className='flex flex-col justify-between items-start sm:items-end gap-4'>
                  <div className='flex flex-wrap gap-2'>
                    <button className='bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors'>
                      <a href={`/?pasteId=${paste?._id}`} className="block w-full h-full">
                      Edit
                      </a>
                    </button>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors'>
                      <a href={`/pastes/${paste?._id}`} className="block w-full h-full">
                      View
                      </a>
                    </button>
                    <button 
                      className='bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors'
                      onClick= {()=> handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button 
                      className='bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors'
                      onClick={() =>{
                      navigator.clipboard.writeText
                      (paste?.content)
                      toast.success("copied to clipboard")
                    }}>
                      Copy
                    </button>
                  </div>
                  
                  <div className='text-gray-500 text-sm font-medium'>
                    {paste.createdAt}
                  </div>
                </div>
              </div>
            )
          }
        )
      }
      </div>
    </div>
  )
}

export default Paste;




// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { removeFromPastes } from '../redux/pasteSlice';
// import toast from 'react-hot-toast';

// const Paste = () => {

//   const pastes = useSelector((state)=> state.paste.pastes);
//   const [serachTerm, setSearchTerm] = useState('');

//   const dispatch = useDispatch();

//   const filterdData = pastes.filter(
//   (paste) => paste.title.
//   toLowerCase().includes
//   (serachTerm.toLowerCase())
//   );

//   function handleDelete(pasteId) {
//     dispatch(removeFromPastes(pasteId));
//   }
//   return (
//     <div>
//       <input 
//       className='p-2 rounded-2xl min-w-[600px] mt-5'
//       type='search'
//       placeholder='search here'
//       value={serachTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className='flex flex-col gap-5 mt-5'>
//       {
//         filterdData.length > 0 && 
//         filterdData.map(
//           (paste) => {
//             return (
//               <div className='border-red-500' key={paste?._id}>
//                 <div>
//                   {paste.title}
//                 </div>
//                 <div>
//                   {paste.content}
//                 </div>
//                 <div className='flex flex-row gap-4
//                 place-content-evenly'>
//                   <button>
//                     <a href={`/?pasteId=${paste?._id}`}>
//                     Edit
//                     </a>
//                   </button>
//                   <button>
//                     <a href={`/pastes/${paste?._id}`}>
//                     View
//                     </a>
//                   </button>
//                   <button onClick= {()=> handleDelete(paste?._id)}>
//                     Delete
//                   </button>
//                   <button onClick={() =>{
//                     navigator.clipboard.writeText
//                     (paste?.content)
//                     toast.success("copied to clipboard")
//                   }}>
//                     Copy
//                   </button>
//                   {/* Optinal */}
//                   {/* <button>
//                     Share
//                   </button>  */}
//                 </div>
//                 <div>
//                   {paste.createdAt}
//                 </div>
//               </div>
//             )
//           }
//         )
//       }
//       </div>
//     </div>
//   )
// }

// export default Paste
