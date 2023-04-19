export default function LabelsIndexPage() {
    return (
        <div className="bg-white w-full h-full py-8 px-6 rounded-2xl max-w-4xl mx-auto">
            <header className="flex justify-between border-b border-gray-500 pb-3">
                <h2 className="text-2xl font-semibold">Метки</h2>
                <button className="flex gap-2 items-center">
                    <svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" /></svg>
                </button>
            </header>
            <section>
                <table className="w-full mt-4">
                    <thead className="bg-gray-50">
                        <tr className="text-left">
                            <th className="px-3 py-2">Тип метки</th>
                            <th className="px-3 py-2">Название метки</th>
                            <th className="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="px-3 py-4">Предназначение</td>
                            <td className="px-3 py-2">Баскетбол</td>
                            <td className="text-right">
                                <div className="flex items-center gap-1 justify-end">
                                    <button className="p-2 hover:bg-gray-200 rounded-xl shadow-md transition">
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 hover:bg-red-300 rounded-xl shadow-md  transition">
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
                                            <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
                                            <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-4">Предназначение</td>
                            <td className="px-3 py-2">Баскетбол</td>
                            <td className="text-right">
                                <div className="flex items-center gap-1 justify-end">
                                    <button className="p-2 hover:bg-gray-200 rounded-xl shadow-md transition">
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 hover:bg-red-300 rounded-xl shadow-md  transition">
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
                                            <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
                                            <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-4">Предназначение</td>
                            <td className="px-3 py-2">Баскетбол</td>
                            <td className="text-right">
                                <div className="flex items-center gap-1 justify-end">
                                    <button className="p-2 hover:bg-gray-200 rounded-xl shadow-md transition">
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 hover:bg-red-300 rounded-xl shadow-md  transition">
                                        <svg
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
                                            <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
                                            <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}