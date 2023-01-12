import React, { useRef } from "react";

export default function Modal({ setConfirmModal, setPage, resData, setEnvType, setResType, setFormData }) {
    const envVersionRef = useRef(null);
    const resTypeRef = useRef(null);
    const resDesRef = useRef(null);

    const handleAddNewRecourceSubmit = () => {
        setResType(resTypeRef.current.value);
        setEnvType(envVersionRef.current.value);
        setFormData({resource_description: resDesRef.current.value})
        setConfirmModal(false)
        setPage('summary')
    }

    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5">
                                <div className="sm:items-start">
                                    <div className="block px-6 pb-0">
                                        <h1 className="text-center">Summary</h1>
                                        <hr className="mt-2 mb-4"></hr>
                                        <form>
                                            <div className="form-group flex grid grid-cols-3 gap-4 items-center mb-6">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                    Environment Version:
                                                </label>
                                                <select ref={envVersionRef} className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name="color" required>
                                                    <option value='env1'>env1</option>
                                                    <option value='env2'>env2</option>
                                                    <option value='env3'>env3</option>
                                                    <option value='env4'>env4</option>
                                                </select>
                                            </div>
                                            <div className="form-group flex grid grid-cols-3 gap-4  items-center mb-6">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                    Resource Type:
                                                </label>
                                                <select ref={resTypeRef} className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name="color" required>
                                                    <option value=''>Select Type</option>
                                                    {
                                                        resData !== null ?
                                                            (
                                                                resData.map((item, index) => (
                                                                    <option value={item.type} key={index}>{item.type}</option>
                                                                ))
                                                            ) : null
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group flex grid grid-cols-3 gap-4  items-center mb-6">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                    Resource Description:
                                                </label>
                                                <input ref={resDesRef} type="text" className="form-control
                                                        block
                                                        col-span-2
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="desc"
                                                    />
                                            </div>
                                            <div className="bg-gray-50 pr-0 px-4 py-3 sm:flex sm:flex-row-reverse sm:pl-6">
                                                <button type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => handleAddNewRecourceSubmit({})}>Submit</button>
                                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setConfirmModal(false)}>Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}