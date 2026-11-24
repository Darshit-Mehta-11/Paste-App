import React from "react";
import { useState } from "react";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useParams ,useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ViewPaste = () => {
  // URL se id lena
  const { id } = useParams();

  // Redux store se saare pastes lena
  const allPastes = useSelector((state) => state.paste.pastes);

  // Matching paste find karna
  const paste = allPastes.find((p) => p._id === id);

  // Agar paste na mile
  if (!paste) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl font-bold">
        Paste not found!
      </div>
    );
  }

  return (
    <div className="w-full max-w-[900px] mx-auto px-4">
      <div className="flex w-full">
        <input
          type="text"
          className="w-full bg-gray-800 border border-gray-700 text-gray-400 rounded-lg p-3 outline-none shadow-sm cursor-not-allowed"
          value={paste.title}
          disabled
        />
      </div>

      <div className="mt-6">
        <textarea
          className="w-full bg-gray-800 border border-gray-700 text-gray-400 rounded-xl p-4 outline-none shadow-sm cursor-not-allowed resize-none"
          value={paste.content}
          disabled
          rows={15}
        />
      </div>
    </div>
  );
};

export default ViewPaste;




// import React from "react";
// import { useState } from "react";
// import { addToPastes, updateToPastes } from "../redux/pasteSlice";
// import { useParams ,useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const ViewPaste = () => {
//   // URL se id lena
//   const { id } = useParams();

//   // Redux store se saare pastes lena
//   const allPastes = useSelector((state) => state.paste.pastes);

//   // Matching paste find karna
//   const paste = allPastes.find((p) => p._id === id);

//   // Agar paste na mile
//   if (!paste) {
//     return (
//       <div className="text-center mt-10 text-red-500 text-xl">
//         Paste not found!
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex flex-row gap-7 place-content-between">
//         <input
//           type="text"
//           className="border-2 border-gray-300 rounded-md p-2 mt-2 w-[66%] pl-4"
//           value={paste.title}
//           disabled
//         />
//       </div>

//       <div className="mt-8">
//         <textarea
//           className="border-2 border-gray-300 rounded-md mt-4 w-full p-4"
//           value={paste.content}
//           disabled
//           rows={20}
//         />
//       </div>
//     </div>
//   );
// };

// export default ViewPaste;
// // const ViewPaste = () => {

// //   const {id} = useParams();

// //   const allPastes = useSelector
// //   ((state) => state.paste.pastes);

// //   const paste = allPastes.find((p)
// //   => p._id === id);
// //   console.log("Final Paste:" , paste);

// //   return (
// //     <div>
// //       <div className="flex flex-row gap-7 place-content-between">
// //         <input
// //           type="text"
// //           placeholder="Search Pastes"
// //           className="border-2 border-gray-300 rounded-md p-2 mt-2 place-content-evenly w-[66%] pl-4"
// //           type="text"
// //           placeholder="enter title here"
// //           value={allPastes.title}
// //           disabled
// //           onChange={(e) => setTitle(e.target.value)}
// //         />

// //         {/* <button
// //           onClick={createPaste}
// //           className="border-2 border-gray-300 rounded-md p-2 mt-2 place-content-evenly"
// //         >
// //           {pasteId ? "Update Paste" : "Create My Paste"}
// //         </button> */}
// //       </div>
// //       <div className="mt-8">
// //         <textarea
// //           className="rounded-2xl mt-4 min-w-[500px] p-4"
// //           value={paste.content}
// //           placeholder="enter content here"
// //           disabled
// //           onChange={(e) => setValue(e.target.value)}
// //           rows={20}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// // export default ViewPaste
