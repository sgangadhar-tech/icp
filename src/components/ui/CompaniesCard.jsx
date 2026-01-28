const CompaniesCard = ({ icon: Icon, text, className = '' }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center ${className}`}>
            {Icon && (
                <div className="mb-4">
                    {typeof Icon === 'string' ? (
                        <img src={Icon} alt="icon" className="w-12 h-12 mx-auto" />
                    ) : (
                        <Icon className="w-12 h-12 text-gray-600 mx-auto" />
                    )}
                </div>
            )}
            <p className="text-gray-700 text-sm">
                {text}
            </p>
        </div>
    )
}

export default CompaniesCard