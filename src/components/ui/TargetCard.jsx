const TargetCard = ({ value, icon: Icon, text, iconBg = '', className = '' }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md relative ${className}`}>
            {Icon && (
                <div className={`absolute top-4 right-4 ${iconBg}`}>
                    {typeof Icon === 'string' ? (
                        <img src={Icon} alt="icon" className="w-6 h-6" />
                    ) : (
                        <Icon className="w-6 h-6 text-gray-600" />
                    )}
                </div>
            )}
            <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-4">
                    {value}
                </div>
                <p className="text-gray-600 text-sm">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TargetCard