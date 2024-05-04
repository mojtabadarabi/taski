import React from 'react';
import MobileHeader from '../header/Mobile';
import localFont from 'next/font/local'


const diroozFont = localFont({ src: '../../../public/fonts/Dirooz.woff2' })

export default function MobileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="fa" dir={"ltr"}>
            <body className={`min-h-screen ${diroozFont.className}`}>
                <MobileHeader />
                {children}
            </body>
        </html>
    )
}
