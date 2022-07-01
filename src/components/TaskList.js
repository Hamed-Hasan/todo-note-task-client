import React, { useState } from 'react';
import { useQuery } from 'react-query'

const TaskList = () => {
    const [edit, setEdit] = useState({})
    const { data: taskList, isLoading, refetch } = useQuery('taskList', () => fetch('https://fathomless-forest-06716.herokuapp.com/task', {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <div className='flex justify-center mt-5'><button className="btn btn-square loading"></button></div>
    }
    const handleDelete = id => {
        const task = {
            id: id._id,
            title: id.title,
            details: id.details
        }
        fetch(`https://fathomless-forest-06716.herokuapp.com/complete`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                const url = `https://fathomless-forest-06716.herokuapp.com/task/${id._id}`
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                    })

            })
    }
    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const details = e.target.details.value;
        const edited = {
            title: title,
            details: details
        }
        fetch(`https://fathomless-forest-06716.herokuapp.com/task/${edit}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(edited)
        })
            .then(res => res.json())
            .then(result => {
                e.target.title.value = '';
                e.target.details.value = '';
            })
    }


    return (
        <div className='min-h-screen'>
            {
                taskList.map(task =>
                    <div key={task._id} className='pl-10 p-2'>
                        <div className='flex items-center gap-4'>

                            <input onClick={() => handleDelete(task)} type="checkbox" className="checkbox-xs" />

                            <div onClick={() => setEdit(task._id)} className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div>

                                        <h2 className='font-bold'>{task.title}</h2>
                                    </div>
                                </div>
                                <p className='ml-8'>{task.details}</p>
                                <div className="collapse-content">
                                    <form onSubmit={handleSubmit}>
                                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="title" placeholder='Edit Title' /> <br />
                                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="details" placeholder='Edit Details' />
                                        <input type="submit" value="" />
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default TaskList;