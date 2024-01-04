'use client';

import styles from './page.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const route = useRouter();

    useEffect(() => {
        route.push('/home');
    });

    return <></>;
}
