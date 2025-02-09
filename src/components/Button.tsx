"use client"

interface ButtonProps {
    name: string;
    isBeam?: boolean;
    containerClass?: string;
}

const Button = ({name, isBeam = false, containerClass}: ButtonProps) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping bg-[#4ADE80]" />
                    
                    <span className="btn-ping_dot bg-[#22C55E]" />
                </span>
            )}
            {name}
        </button>
    )
}

export default Button