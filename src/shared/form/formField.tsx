
interface Iform {
    name?: any,
    value?: any,
    onChange?: any,
    styleInput?: any,
    nameLabel?: any,
    description?: any,
    type?: any,
    error?: any
}
interface Ierrors {
    idNumber: number,
    street: string,
    date: Date,
    mip: number,
}

const FormField = ({
    name,
    value,
    onChange,
    // styleInput,
    nameLabel,
    description,
    type,
    error
}:Iform) => {
    return (
        <div className="flex flex-col-reverse  border-1 border-grey-200 rounded-xl m-4"
        style={{color: "grey" }}
        >
            {error && <p style={{ fontSize: "20px", color: "tomato" }} >{error}</p>}
            <input
                className="m-auto p-2 text-center cursor-pointer hover:bg-[#deffa8]"
                style={{ fontSize: "16px", color: "grey" }}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={description}
            />
            <label
                style={{ fontSize: "16px", color: "grey" }}
                className="pt-3 text-center"
                htmlFor={name}
                >
                {nameLabel}
            </label>
        </div>
    );
};

export default FormField;