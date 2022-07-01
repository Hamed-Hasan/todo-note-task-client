import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Task from './Task';
import TaskList from './TaskList';

const Home = () => {
    return (
        <div>
            <Header />
            <Task />
            <TaskList />
            <Footer />
        </div>
    );
};

export default Home;