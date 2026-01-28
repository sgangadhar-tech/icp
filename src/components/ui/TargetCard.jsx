const TargetCard = ({ value, icon: Icon, text, color = '#44B982', className = '' }) => {
    // Function to create light variant of the color
    const getLightColor = (hexColor) => {
        // Remove # if present
        const hex = hexColor.replace('#', '')
        // Convert to RGB
        const r = parseInt(hex.substr(0, 2), 16)
        const g = parseInt(hex.substr(2, 2), 16)
        const b = parseInt(hex.substr(4, 2), 16)
        // Create light variant with opacity
        return `rgba(${r}, ${g}, ${b}, 0.1)`
    }

    return (
        <div className={`bg-white p-6 rounded-lg shadow-lg relative border border-gray-200 h-42 w-1/3 ${className}`}>
            {Icon && (
                <div className="absolute top-4 right-4 p-2 rounded" style={{ backgroundColor: getLightColor(color) }}>
                    {typeof Icon === 'string' ? (
                        <img src={Icon} alt="icon" className="w-6 h-6" />
                    ) : (
                        <Icon className="w-6 h-6" style={{ color: color }} />
                    )}
                </div>
            )}
            <div className="text-center">
                <div className="text-4xl font-bold my-4" style={{ color: color }}>
                    {value}
                </div>
                <p className="text-gray-600 text-sm w-3/4 mx-auto text-left">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TargetCard