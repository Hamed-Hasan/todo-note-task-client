import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi'

const Task = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const handleTitleChange = e => {
        setTitle(e.target.value)
    }
    const handleDetailsChange = e => {
        setDetails(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const taskList = {
            title: title,
            details: details
        }
        fetch('https://fathomless-forest-06716.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskList)
        })
            .then(res => res.json())
            .then(data => {
                e.target.title.value = ''
                e.target.details.value = ''

            })
    }
    return (
        <div className='pl-10'>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <div className='flex items-center gap-3 text-blue-600'>
                        <BiEdit />
                        Add a task
                    </div>
                </div>
                <div className="collapse-content">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleTitleChange} className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="title" placeholder='Title' /> <br />
                        <input onChange={handleDetailsChange} className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="details" placeholder='Details' />
                        <input type="submit" value="" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Task;