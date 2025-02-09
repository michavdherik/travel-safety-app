import React from 'react';

interface CountryStatusProps {
    countryName: string;
    safetyStatus: string;
}

const CountryStatus: React.FC<CountryStatusProps> = ({ countryName, safetyStatus }) => {
    return (
        <div className="country-status">
            <h2>Travel Safety Status for {countryName}</h2>
            <p>Status: {safetyStatus}</p>
        </div>
    );
};

export default CountryStatus;