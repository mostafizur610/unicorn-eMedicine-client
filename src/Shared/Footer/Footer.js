import { Footer } from 'flowbite-react';
import React from 'react';
import img2 from '../../assets/logo/logo02.png'

const FooterDetails = () => {
    return (
        <div>
            <Footer container={true} className='bg-slate-800'>
                <div className="w-full mx-4 text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            src={img2}
                            alt=""
                        />
                        <Footer.LinkGroup className='flex justify-between'>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                        by="Unicorn™"
                        year={2022}
                    />
                </div>
            </Footer>
        </div>
    );
};

export default FooterDetails;