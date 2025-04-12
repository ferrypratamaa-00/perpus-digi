import { CardProps } from "./Card.types";

export const Card = ({ text, total }: CardProps) => {
    return (
        <>
            <div className="card bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="card-title">{text}</h2>
                    <p>
                        {total} Total {text}
                    </p>
                </div>
            </div>
        </>
    );
};
