import classNames from "classnames"

export default function Input(props) {

    const { type, errorMessage, touched, placeholder, ...inputProps} = props

    return (
        <div className="w-full">
            <label className="relative block cursor-text">
                <input type={type} className={classNames("h-14 w-full border border-primary rounded-lg outline-none px-4 peer ",{
                    "pt-2" : type !== "date",
                    "border-danger" : errorMessage && touched
                })} required {...inputProps}  />
                {type === "date" ? "" : (<span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs transition-all duration-300 peer-valid:h-7 peer-valid:text-xs">{placeholder}</span>)}
            </label>
            {touched && <span className="text-xs text-danger">{errorMessage}</span>}
        </div>
    )
}
