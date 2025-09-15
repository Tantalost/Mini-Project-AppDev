import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function WeatherLayout() {
    const locations = [
        { name: 'Isabela', temp: '29°C' },
        { name: 'Lamitan', temp: '28°C' },
        { name: 'Pagadian', temp: '27°C' },
        { name: 'Dipolog', temp: '26°C' }
    ];

    const navItems = [
        { icon: faHouse, label: 'Home', bg: 'bg-sky-100' },
        { icon: faLocationDot, label: 'Map' },
        { icon: faBell, label: 'Alerts' },
        { icon: faUser, label: 'Menu' }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-sky-300 to-emerald-200 text-slate-900 flex flex-col">
            <header className="relative p-6 pt-7">
                <div>
                    <h1 className="m-0 text-3xl font-bold tracking-tight">
                        Hello, <span className="text-sky-50">User</span>
                    </h1>
                    <p className="mt-1 text-lg text-cyan-950/85">Welcome back!</p>
                </div>
            </header>

            <main className="px-4 pb-28 grid gap-4 md:grid-cols-[1.2fr_.8fr] md:gap-6 md:px-6">
                <div className="md:col-span-2 inline-flex items-center gap-1 rounded-full bg-cyan-50/80 p-1 w-fit">
                    <button className="rounded-full px-3 py-1 text-sm font-semibold bg-sky-500 text-white">
                        °C
                    </button>
                    <button className="rounded-full px-3 py-1 text-sm font-semibold text-sky-800">
                        °F
                    </button>
                </div>

                <section className="rounded-2xl bg-white/90 backdrop-saturate-150 shadow-xl p-4">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h3 className="m-0 text-slate-500 font-semibold">Current Location</h3>
                            <h2 className="m-0 text-[26px] font-semibold">Zamboanga City</h2>
                            <p className="mt-1 text-sm text-slate-500">Friday, 07:53 am</p>
                        </div>
                        <div className="relative w-24 h-16">
                            <span className="absolute right-1 top-0 w-11 h-11 rounded-full bg-yellow-300 shadow-[0_0_0_10px_rgba(253,224,71,.25)]" />
                            <span
                                className="absolute left-0 bottom-0 h-11 rounded-full bg-slate-100"
                                style={{ width: '84px' }}
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="m-0 text-slate-700">Partly Cloudy</p>
                        <div className="font-bold text-xl">30°C</div>
                    </div>
                </section>

                <section className="rounded-2xl bg-white/50 backdrop-blur p-4 md:sticky md:top-5">
                    <h3 className="text-[22px] font-semibold mb-3 ml-1">Other Locations</h3>

                    {locations.map((c) => (
                        <article
                            key={c.name}
                            className="rounded-xl bg-white shadow-lg hover:bg-sky-100 hover:text-gray-600 p-4 mb-3 last:mb-0"
                        >
                            <div className="flex items-center cursor-pointer justify-between">
                                <div>
                                    <h4 className="m-0 text-xl font-semibold">{c.name}</h4>
                                    <p className="mt-1 text-xs text-slate-500">See more &gt;&gt;</p>
                                </div>
                                <div className="relative w-24 h-16 scale-75">
                                    <span className="absolute right-1 top-0 w-11 h-11 rounded-full bg-yellow-300 shadow-[0_0_0_10px_rgba(253,224,71,.25)]" />
                                    <span
                                        className="absolute left-0 bottom-0 h-11 rounded-full bg-slate-100"
                                        style={{ width: '84px' }}
                                    />
                                </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <p className="m-0 text-slate-700">Partly Cloudy</p>
                                <div className="font-bold">{c.temp}</div>
                            </div>
                        </article>
                    ))}
                </section>
            </main>

            <nav className="fixed left-3 right-3 bottom-3 grid grid-cols-4 gap-2 rounded-[28px] bg-white/90 shadow-2xl p-2">
                {navItems.map((item, index) => (
                    <button
                        key={item.label}
                        aria-label={item.label}
                        className={`h-12 rounded-full cursor-pointer flex items-center justify-center 
                            ${item.bg || 'hover:bg-sky-200 hover:text-gray-600'}`}
                    >
                        <FontAwesomeIcon icon={item.icon} className="text-sky-800 text-xl" />
                    </button>
                ))}
            </nav>
        </div>
    );
}