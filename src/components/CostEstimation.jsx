import React, { useState } from 'react';

const CostEstimation = () => {

    // DUMMY OBJECTS
    const [items, setItems] = useState([
        {
            itemID: 1,
            'itemName': 'Photography',
            'itemCost': 1000,
            'itemCurrency': '$',
        },
        {
            itemID: 2,
            'itemName': 'Floorplan',
            'itemCost': 200,
            'itemCurrency': '$',
        },
        {
            itemID: 3,
            'itemName': 'Video',
            'itemCost': 400,
            'itemCurrency': '$',
        },
        {
            itemID: 4,
            'itemName': 'Copywriting',
            'itemCost': 150,
            'itemCurrency': '$',
        },
        {
            itemID: 5,
            'itemName': 'Styling',
            'itemCost': 250,
            'itemCurrency': '$',
        },
        {
            itemID: 6,
            'itemName': 'Brochures',
            'itemCost': 200,
            'itemCurrency': '$',
        },
        {
            itemID: 7,
            'itemName': 'Signboard',
            'itemCost': 100,
            'itemCurrency': '$',
        },
        {
            itemID: 8,
            'itemName': 'Mailcards',
            'itemCost': 100,
            'itemCurrency': '$',
        },
        {
            itemID: 9,
            'itemName': 'Social Media',
            'itemCost': 500,
            'itemCurrency': '$',
        },
        {
            itemID: 10,
            'itemName': 'Realestate.com.au',
            'itemCost': 600,
            'itemCurrency': '$',
        },
        {
            itemID: 11,
            'itemName': 'Domain.com.au',
            'itemCost': 300,
            'itemCurrency': '$',
        },
        {
            itemID: 12,
            'itemName': 'Ausrealty.com.au',
            'itemCost': 200,
            'itemCurrency': '$',
        },
        {
            itemID: 13,
            'itemName': 'Auctioneer',
            'itemCost': 300,
            'itemCurrency': '$',
        },
       
        {
            itemID: 14,
            'itemName': 'Agent Contribution',
            'itemCost': 100,
            'itemCurrency': '$ -',
        }

    ]);

    // STATES

    //1.  States to save items
    const [selectedItems, setSelectedItems] = useState([]);
    const [newItemName, setNewItemName] = useState('');
    const [newItemCost, setNewItemCost] = useState('');
    const [newItemCurrency, setNewItemCurrency] = useState('$');
    
    //2.  State to open Add New Item Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // FUNCTIONS

    //1. Calculate subtotal, subtract agent contribution if selected
    const subtotal = selectedItems.reduce((total, item) => {
        if (item.itemName === 'Agent Contribution') {
            return total - item.itemCost;
        }
        return total + item.itemCost;
    }, 0);

    //2. Toggle item selection
    const handleCheckboxChange = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i.itemID !== item.itemID));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    //3. Toggle Modal Open
    const openModal = () => {
        setIsModalOpen(true);
    };
    //4. Toggle Modal Close
    const closeModal = () => {
        setIsModalOpen(false);
    };

    //5. Add New Items
    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            itemID: items.length ? items[items.length - 1].itemID + 1 : 1,
            'itemName': newItemName,
            'itemCost': parseFloat(newItemCost),
            'itemCurrency': newItemCurrency
        };

        setItems([...items, newItem]);

        setNewItemName('');
        setNewItemCost('');
        setNewItemCurrency('$');
        setIsModalOpen(false);
    };

    // HTML STARTS HERE
    return (
        <div className='sm:mx-10 my-20'>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-xl font-semibold mb-4"> <i class="fa-solid fa-list-check mr-2 "></i> Add New Item</h2>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Item Name</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={newItemName}
                                    onChange={(e) => setNewItemName(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Item Cost</label>
                                <input
                                    type="number"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    value={newItemCost}
                                    onChange={(e) => setNewItemCost(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-between'>
                                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                                <i class="fa-regular fa-square-check mr-2"></i>Save
                                </button>
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                                    onClick={closeModal}>
                                    Back
                                    <i class="fa-solid fa-angles-right ml-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className='flex justify-center'>
                <div>
                    <div>
                        <h1 className='text-center text-lg font-bold tracking-widest'>MARKETING</h1>
                        <div className='flex justify-end'>
                            <button
                                onClick={openModal}
                                className='my-5 font-semibold hover:scale-105 hover:text-gray-500 tracking-widest'>
                                ADD NEW
                                <i class="fa-solid fa-plus mx-2"></i>
                            </button>
                        </div>
                    </div>
                    {items.map((itemsMapped) => (
                        <div key={itemsMapped.itemID} className="border-b">
                            <div className='grid grid-cols-2'>

                                <div className='md:pl-2 border-r md:pr-36 pr-3'>
                                    {itemsMapped.itemName}
                                </div>
                                <div className='flex justify-end'>
                                    <div>
                                        {itemsMapped.itemCurrency}{itemsMapped.itemCost}
                                    </div>
                                    <div className=' px-5'>
                                        <input
                                            type="checkbox"
                                            onChange={() => handleCheckboxChange(itemsMapped)}
                                            checked={selectedItems.includes(itemsMapped)}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between border-b px-4'>
                        <span className="font-bold ">TOTAL:</span>
                        <span>{`$${subtotal}`}</span>
                    </div>


                    {/* PAY LATER DIV */}
                    <div className='text-center mt-16  '>

                        <button className='bg-gray-300 px-16 font-semibold rounded-lg hover:bg-transparent hover:border border-black tracking-widest'>PAY LATER</button>
                        <h1 className='mt-6'>OR SAVE 6% AND <button className='hover:underline font-semibold'> PAY NOW </button></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
// Exporting Component
export default CostEstimation;
