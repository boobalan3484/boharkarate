import React, { useEffect, useState } from 'react'
import { IoRibbonSharp } from "react-icons/io5";

import { app } from '../../../Utils/firebaseIP';

import {
    getFirestore,
    collection,
    getDocs,
    doc,

} from "firebase/firestore";


const Team = () => {

    const db = getFirestore(app);

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaffs = async () => {
            const querySnapshot = await getDocs(collection(db, "staff"));
            const staffData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setStaff(staffData);
            // console.log(staffData);
        };

        fetchStaffs();
    }, []);

    return (
        <section id='team' className="pb-14 pt-24">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl" data-aos="zoom-in">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        We have a experienced instructors provide expert guidance for all levels, from beginners to advanced practitioners.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {staff.map((item, i) => (
                            <li key={i} className="flex gap-4 items-center"
                                data-aos="zoom-in"
                                data-aos-delay={i * 400}
                            >
                                <div className="flex-none w-24 h-24">
                                    <img
                                        src={item.Picture}
                                        className="w-full h-full rounded-full"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-gray-700 font-semibold sm:text-lg capitalize"> {item.Name} </h4>
                                    <p className="text-indigo-600 capitalize"> {item.Specialization} </p>
                                    <div className="mt-3 flex gap-4 text-gray-400">
                                        {/* <a href={item.Records} target='_blank' rel="noreferrer noopener">
                                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                        </a>
                                        <a href={item.District} target='_blank' rel="noreferrer noopener">
                                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                        </a> */}
                                        <p className='flex items-center gap-2 capitalize'>
                                            <IoRibbonSharp />
                                            {item.Records}
                                        </p>
                                        <p className='flex items-center capitalize'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {item.City}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Team