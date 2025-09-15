import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function WeatherLayoutAlt() {
    const hourly = [
        { time: '7:00', temp: '30°C' },
        { time: '9:00', temp: '29°C' },
        { time: '11:00', temp: '30°C' },
        { time: '1:00', temp: '31°C' },
        { time: '3:00', temp: '29°C' },
        { time: '5:00', temp: '28°C' },
        { time: '5:00', temp: '28°C' },
        { time: '5:00', temp: '28°C' },
        { time: '5:00', temp: '28°C' },
        { time: '5:00', temp: '28°C' },
        { time: '5:00', temp: '28°C' },
        { time: '5:00', temp: '28°C' },
    ];

    const weekly = [
        { day: 'Saturday', temp: '29°C', desc: 'Partly Cloudy' },
        { day: 'Sunday', temp: '31°C', desc: 'Sunny' },
        { day: 'Monday', temp: '29°C', desc: 'Partly Cloudy' },
        { day: 'Tuesday', temp: '29°C', desc: 'Cloudy' },
        { day: 'Wednesday', temp: '29°C', desc: 'Sunny' },
        { day: 'Thursday', temp: '29°C', desc: 'Partly Cloudy' },
        { day: 'Friday', temp: '29°C', desc: 'Partly Cloudy' },
    ];

    const navItems = [
            { icon: faHouse, label: 'Home'},
            { icon: faLocationDot, label: 'Map', bg: 'bg-sky-100' },
            { icon: faBell, label: 'Alerts' },
            { icon: faUser, label: 'Menu' }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-sky-300 to-emerald-200 text-slate-900 flex flex-col">
            <header className="rounded-b-[28px] bg-sky-300/40 p-5 pt-7 shadow-inner">
                <div className="flex items-center gap-2 text-slate-800">
                    <span className="i-heroicons-map-pin-20-solid" aria-hidden="true"></span>
                    <span className="text-xl font-semibold">Zamboanga</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-end gap-2">
                        <div className="text-6xl md:text-7xl font-bold leading-none">30°C</div>
                    </div>
                    <div className="relative w-28 h-20">
                        <span className="absolute right-2 top-1 w-14 h-14 rounded-full bg-yellow-300 shadow-[0_0_0_14px_rgba(253,224,71,.25)]"></span>
                        <span className="absolute left-0 bottom-0 w-[92px] h-12 rounded-full bg-white/90"></span>
                    </div>
                </div>
                <p className="mt-1 text-lg">Partly Cloudy</p>
                <p className="m-0 text-slate-700">Friday, 07:53 am</p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[{ label: 'Humidity', value: '75%', note: 'Less humid than yesterday' }, { label: 'Wind', value: '2 km/h', note: 'More windy than yesterday' }, { label: 'Rain Amount', value: '0.01 mm', note: 'less rain amount than yesterday' }].map((m) => (
                        <div key={m.label} className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur p-4">
                            <div className="text-slate-600 font-semibold">{m.label}</div>
                            <div className="mt-1 text-2xl font-bold">{m.value}</div>
                            <div className="mt-1 text-xs text-slate-600">{m.note}</div>
                        </div>
                    ))}
                </div>
            </header>

            <main className="flex-1 bg-white/60 backdrop-blur rounded-t-[28px] mt-4 p-4 md:p-6 shadow-[-0_-20px_40px_-20px_rgba(0,0,0,.15)]">
                <section>
                    <h3 className="text-2xl font-semibold mb-3">Today</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {hourly.map((h) => (
                            <div key={h.time} className="w-24 shrink-0 rounded-2xl bg-white shadow-md p-3 text-center">
                                <div className="text-sm text-slate-600">{h.time}</div>
                                <div className="relative mx-auto w-12 h-10 my-2">
                                    <span className="absolute right-0 top-0 w-6 h-6 rounded-full bg-yellow-300"></span>
                                    <span className="absolute left-0 bottom-0 w-8 h-5 rounded-full bg-slate-100"></span>
                                </div>
                                <div className="text-sm font-semibold">{h.temp}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-6 rounded-3xl bg-white p-4 md:p-5 shadow-xl">
                    <h3 className="text-xl font-semibold mb-2">Weekly Forecast</h3>
                    <ul className="divide-y divide-slate-200">
                        {weekly.map((d) => (
                            <li key={d.day} className="py-3 flex items-center justify-between gap-3">
                                <span className="w-28 text-slate-800">{d.day}</span>
                                <span className="w-16 font-semibold">{d.temp}</span>
                                <div className="relative w-10 h-7">
                                    <span className="absolute right-0 top-0 w-5 h-5 rounded-full bg-yellow-300"></span>
                                    <span className="absolute left-0 bottom-0 w-6 h-4 rounded-full bg-slate-100"></span>
                                </div>
                                <span className="ml-auto text-slate-600">{d.desc}</span>
                            </li>
                        ))}
                    </ul>
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