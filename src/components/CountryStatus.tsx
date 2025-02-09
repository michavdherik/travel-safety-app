import React from 'react';

interface CountryStatusProps {
    country: string;
    status: any; // Change type to any to handle the response data
}

const CountryStatus: React.FC<CountryStatusProps> = ({ country, status }) => {
    const countryName = status?.name?.common || 'Unknown';
    const countryStatus = status?.status || 'Unknown';

    return (
        <div className="country-status">
            <h2>Country: {countryName}</h2>
            <p>Status: {countryStatus}</p>
        </div>
    );
};

export default CountryStatus;