import { SearchProps } from "./Search.types";

export const Search = ({ value, onChange, onSubmit }: SearchProps) => {
    return (
        <div className="join">
            <div>
                <label className="input validator join-item">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

                    <input
                        type="search"
                        placeholder="Enter book title"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="input"
                        required
                    />
                </label>
            </div>
            <button className="btn btn-neutral join-item" onClick={onSubmit}>
                Search
            </button>
        </div>
    );
};
