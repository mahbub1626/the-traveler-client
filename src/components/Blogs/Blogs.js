import React from 'react';

const Blogs = () => {
    return (
        <section className="py-12  ">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <ul>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-50 rounded-2xl">
                            <div className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">1</span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">Difference between SQL and NoSQL</h3>
                                    </div>
                                    <div className="mt-4 border-l-2 border-gray-50 pl-4">
                                        <p className="mb-4 text-xl">SQL is the programming language used to interface with relational databases. NoSQL is a class of DBMs that are non-relational and generally do not use SQL, also called document type database and BSON. We can create, edit, and delete data from the database.</p>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-50 rounded-2xl">
                            <div className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">2</span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">What is JWT, and how does it work?</h3>
                                    </div>
                                    <div className="mt-4 border-l-2 border-gray-50 pl-4">
                                        <p className="mb-4 text-xl">JWT is an open standard, securely transmitting information parties as JSON object. When a client wants to access data from the server. The server justifies by token whether this user is trusted or not.</p>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-50 rounded-2xl">
                            <div className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">3</span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">What is the difference between javascript and NodeJS?</h3>
                                    </div>
                                    <div className="mt-4 border-l-2 border-gray-50 pl-4">
                                        <p className="mb-4 text-xl">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. 
Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. and  a cross-platform JavaScript runtime environment. server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services.</p>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-50 rounded-2xl">
                            <div className="flex w-full text-left">
                                <div className="w-auto mr-8">
                                    <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">4</span>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold">How does NodeJS handle multiple requests at the same time?</h3>
                                    </div>
                                    <div className="mt-4 border-l-2 border-gray-50 pl-4">
                                        <p className="mb-4 text-xl">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for EventQueue. </p>

                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Blogs;