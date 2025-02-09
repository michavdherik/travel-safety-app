import React, { useState, useEffect } from 'react';
import CountryStatus from '../components/CountryStatus';
import { fetchCountryStatus } from '../utils/api';

const HomePage: React.FC = () => {
    const [country, setCountry] = useState<string>('');
    const [status, setStatus] = useState<string | null>(null);

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    const checkStatus = async () => {
        if (country) {
            const safetyStatus = await fetchCountryStatus(country);
            setStatus(safetyStatus);
        }
    };

    useEffect(() => {
        if (country) {
            checkStatus();
        }
    }, [country]);

    return (
        <div>
            <h1>Travel Safety Checker</h1>
            <input
                type="text"
                placeholder="Enter country name"
                value={country}
                onChange={handleCountryChange}
            />
            <CountryStatus country={country} status={status} />
        </div>
    );
};

export default HomePage;