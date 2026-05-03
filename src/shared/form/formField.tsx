
interface Iform {
    name?: any,
    value?: any,
    onChange?: any,
    styleInput?: any,
    nameLabel?: any,
    description?: any,
    type?: any
}

const FormField = ({
    name,
    value,
    onChange,
    // styleInput,
    nameLabel,
    description,
    type
}:Iform) => {
    return (
        <div className="flex flex-col-reverse  border-1 border-grey-200 rounded-xl m-4">
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