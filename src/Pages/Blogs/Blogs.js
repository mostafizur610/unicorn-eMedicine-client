import { Accordion } from 'flowbite-react';
import React from 'react';
import img from '../../assets/faq/faq1.png'
import img2 from '../../assets/faq/jwt.png'
import img3 from '../../assets/faq/faq3.jpg'
import img4 from '../../assets/faq/faq4.jpeg'
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <Accordion className='m-12 bg-gray-300'>

            <Accordion.Panel>
                <Accordion.Title>
                    Difference between SQL and NoSQL?
                </Accordion.Title>
                <Accordion.Content>
                    <div className='flex justify-center my-4'>
                        <img src={img} alt="" />
                    </div>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    What is JWT, and how does it work?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                    </p>
                    <div className='flex justify-center my-4'>
                        <img src={img2} alt="" />
                    </div>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    What is the difference between javascript and NodeJS?
                </Accordion.Title>
                <Accordion.Content>
                    <div className='flex justify-center my-4'>
                        <img src={img3} alt="" />
                    </div>
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    How does NodeJS handle multiple requests at the same time?
                </Accordion.Title>
                <Accordion.Content>
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                    <div className='flex justify-center my-4'>
                        <img src={img4} alt="" />
                    </div>
                </Accordion.Content>
            </Accordion.Panel>


        </Accordion>
    );
};

export default Blogs;