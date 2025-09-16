import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import cities from '../data/cities';

export default function WeatherCard({ isCelsius, unit = 'C' }) {
    const { cityName } = useParams();

    const formattedName = cityName
        ? cityName
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")
        : "";

    const cityData = (formattedName && cities[formattedName]) || null;

    if (!cityData) {
        return <h2 className="text-center mt-10">City not found</h2>;
    }

    const navItems = [
        { icon: faHouse, label: 'Home', to: '/' },
        { icon: faLocationDot, label: 'Map', to: `/weather/${formattedName}`, bg: 'bg-sky-100' },
    ];

    const convertTemp = (tempStr) => {
        const celsius = parseInt(String(tempStr), 10);
        if (Number.isNaN(celsius)) return String(tempStr);
        if (isCelsius) return `${celsius}°C`;
        const fahrenheit = Math.round((celsius * 9) / 5 + 32);
        return `${fahrenheit}°F`;
    };

    const now = new Date();
    const timeString = now.toLocaleString(undefined, {
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-sky-300 to-emerald-200 text-slate-900 flex flex-col">
            <header className="rounded-b-[28px] bg-sky-300/40 p-5 pt-7 shadow-inner">
                <div className="flex items-center gap-2 text-slate-800">
                    <span className="i-heroicons-map-pin-20-solid" aria-hidden="true"></span>
                    <span className="text-xl font-semibold">{formattedName}</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-end gap-2">
                        <div className="text-6xl md:text-7xl font-bold leading-none">
                            {convertTemp(cityData.Hourly?.[0]?.temp)}
                        </div>
                    </div>
                    <div className="relative w-28 h-20">
                        <span className="absolute right-2 top-1 w-14 h-14 rounded-full bg-yellow-300 shadow-[0_0_0_14px_rgba(253,224,71,.25)]"></span>
                        <span className="absolute left-0 bottom-0 w-[92px] h-12 rounded-full bg-white/90"></span>
                    </div>
                </div>
                <p className="mt-1 text-lg">{cityData.Weekly?.[0]?.desc || '—'}</p>
                <p className="m-0 text-slate-700">{timeString}</p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                        { label: 'Humidity', value: cityData.Humidity || '—', note: 'Relative humidity' },
                        { label: 'Wind', value: cityData.Wind || '—', note: 'Wind speed' },
                        { label: 'Rain Amount', value: cityData.Rain || '—', note: 'Precipitation' },
                    ].map((m) => (
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
                        {(cityData.Hourly || []).map((h) => (
                            <div key={h.time} className="w-24 shrink-0 rounded-2xl bg-white shadow-md p-3 text-center">
                                <div className="text-sm text-slate-600">{h.time}</div>
                                <div className="relative mx-auto w-12 h-10 my-2">
                                    <span className="absolute right-0 top-0 w-6 h-6 rounded-full bg-yellow-300"></span>
                                    <span className="absolute left-0 bottom-0 w-8 h-5 rounded-full bg-slate-100"></span>
                                </div>
                                <div className="text-sm font-semibold">{convertTemp(h.temp)}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-6 rounded-3xl bg-white p-4 md:p-5 shadow mb-20">
                    <h3 className="text-xl font-semibold mb-2">Weekly Forecast</h3>
                    <ul className="divide-y divide-slate-200">
                        {(cityData.Weekly || []).map((d) => (
                            <li key={d.day} className="py-3 flex items-center justify-between gap-3">
                                <span className="w-28 text-slate-800">{d.day}</span>
                                <span className="w-16 font-semibold">{convertTemp(d.temp)}</span>
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

            <nav className="fixed left-3 right-3 bottom-3 grid grid-cols-2 gap-2 rounded-[28px] bg-white/90 shadow-2xl p-2">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        aria-label={item.label}
                        className={`h-12 rounded-full flex items-center justify-center ${item.bg || "hover:bg-sky-200"}`}
                        to={item.to}
                    >
                        <FontAwesomeIcon icon={item.icon} className="text-sky-800 text-xl" />
                    </Link>
                ))}
            </nav>
        </div>
    );
}