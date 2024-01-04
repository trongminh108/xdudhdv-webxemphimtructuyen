'use client';

import './avatar.scss';

import Cookies from 'js-cookie';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';

import removeCookiesUser from '@/features/removeCookies';
import { useData } from '../context/context';

let optionData = [
    {
        title: 'Sign in',
    },
    {
        title: 'Sign up',
    },
];

function Avatar() {
    const avaContainer = useRef<HTMLDivElement>(null);
    const [username, setUsername] = useState('Sign in');
    const cookieName = Cookies.get('access_token_username');
    const { setData } = useData();

    useEffect(() => {
        if (cookieName) {
            setUsername(cookieName);
            optionData = [
                {
                    title: 'Profile',
                },
                {
                    title: 'Setting',
                },
                {
                    title: 'Sign out',
                },
            ];
        } else {
            setUsername('Sign in');
            optionData = [
                {
                    title: 'Sign in',
                },
                {
                    title: 'Sign up',
                },
            ];
        }
    }, [cookieName]);

    const handleSignOut = () => {
        // Xóa cookie khi sign out

        alert(`Sign out ${username}`);
        removeCookiesUser();
        setData('');

        // Cập nhật displayText khi sign out
        setUsername('Sign in');
        optionData = [
            {
                title: 'Sign in',
            },
            {
                title: 'Sign up',
            },
        ];
    };

    function handleOnClickAvatar() {
        const options: any =
            avaContainer.current?.querySelector('.options-avatar');
        options.classList.toggle('visible');
    }

    function handleOptionClick(item: any) {
        if (item.title === 'Sign out') {
            handleSignOut();
        }
    }

    return (
        <div className="container-avatar" ref={avaContainer}>
            <Link
                href={`/pages/signin`}
                className="text-decoration-none text-white"
            >
                <div className="btn-signin">{username}</div>
            </Link>
            <div className="avatarImage" onClick={handleOnClickAvatar}></div>
            <div className="options-avatar">
                {optionData.map((item) => {
                    let url = '';
                    if (item.title === 'Profile')
                        url = `/pages/profile/${Cookies.get(
                            'access_token_username'
                        )}`;
                    else if (item.title === 'Sign in') url = `/pages/signin`;
                    else if (item.title === 'Sign up') url = `/pages/signup`;
                    return (
                        <Link
                            href={url}
                            key={item.title}
                            className="option text-decoration-none text-dark"
                            onClick={handleOnClickAvatar}
                        >
                            <div
                                onClick={() => {
                                    handleOptionClick(item);
                                }}
                            >
                                {item.title}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Avatar;
