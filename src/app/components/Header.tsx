"use client";
import Img from 'next/image';
import { ShoppingBagIcon } from '@phosphor-icons/react';
import logoIgniteShop from '../assets/logo-ignite-shop.svg';

export function Header() {
    return (
        <header className='flex justify-between m-[32px] items-center'>
            <Img src={logoIgniteShop} alt="" width={130} height={52}/>
            <a className='p-[12] bg-gray-800 rounded-md' href="#">
                <ShoppingBagIcon size={24} color="#8D8D99" weight="fill" />
            </a>
        </header>
    );
}