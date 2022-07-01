import React from 'react';

const EditModal = ({ open }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const details = e.target.details.value;
        const edited = {
            title: title,
            details: details
        }
        fetch(`https://fathomless-forest-06716.herokuapp.com/task/${open._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(edited)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div>
            <input type="checkbox" id="Edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="title" placeholder='Title' /> <br />
                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="details" placeholder='Details' />
                        <input type="submit" value="" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default EditModal;