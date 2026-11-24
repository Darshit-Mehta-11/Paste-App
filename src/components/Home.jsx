import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  //If any reason paste was undefined so app was don't crash
  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);

      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after Creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  
  return (
    <div className="w-full max-w-[900px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
        <input
          type="text"
          placeholder="Enter title here"
          className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-full shadow-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition-colors shadow-md whitespace-nowrap w-full sm:w-auto"
        >
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      
      <div className="mt-6">
        <textarea
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl p-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm resize-none"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={15}
        />
      </div>
    </div>
  );
};

export default Home;



// import React from "react";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { addToPastes, updateToPastes } from "../redux/pasteSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Home = () => {
//   const [title, setTitle] = useState("");
//   const [value, setValue] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const pasteId = searchParams.get("pasteId");
//   const dispatch = useDispatch();
//   const allPastes = useSelector((state) => state.paste.pastes);

//   //If any reason paste was undefined so app was don't crash
//   useEffect(() => {
//     if (pasteId) {
//       const paste = allPastes.find((p) => p._id === pasteId);

//       if (paste) {
//         setTitle(paste.title);
//         setValue(paste.content);
//       }
//     }
//   }, [pasteId, allPastes]);
//   // useEffect(() => {
//   //     if(pasteId){
//   //       const paste = allPastes.find((p) => p._id === pasteId);
//   //     setTitle(paste.title);
//   //     setValue(paste.content);
//   //     }
//   //   }, [pasteId])

//   function createPaste() {
//     const paste = {
//       title: title,
//       content: value,
//       _id: pasteId || Date.now().toString(36),
//       createdAt: new Date().toISOString(),
//     };

//     if (pasteId) {
//       //update
//       dispatch(updateToPastes(paste));
//     } else {
//       //create
//       dispatch(addToPastes(paste));
//     }

//     //after Creation or updation
//     setTitle("");
//     setValue("");
//     setSearchParams({});
//   }
//   return (
//     <div>
//       <div className="flex flex-row gap-7 place-content-between">
//         <input
//           type="text"
//           placeholder="Search Pastes"
//           className="border-2 border-gray-300 rounded-md p-2 mt-2 place-content-evenly w-[66%] pl-4"
//           type="text"
//           placeholder="enter title here"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <button
//           onClick={createPaste}
//           className="border-2 border-gray-300 rounded-md p-2 mt-2 place-content-evenly"
//         >
//           {pasteId ? "Update Paste" : "Create My Paste"}
//         </button>
//       </div>
//       <div className="mt-8">
//         <textarea
//           className="rounded-2xl mt-4 min-w-[500px] p-4"
//           value={value}
//           placeholder="enter content here"
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
