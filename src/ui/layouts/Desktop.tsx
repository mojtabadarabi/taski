import React from 'react';

export default function DesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir='ltr'> 
            <body className={`min-h-screen p-3`}>
                <div className="py-3">
                    {children}
                </div>
            </body>
        </html>
    )
}
