
const Button = (props: { name: string }) => {
    return (
        <button style={{
            backgroundColor: "#133D7A",
            border: "none",
            color: "#FFFFFF",
            fontFamily: "open-sans",
            paddingBlock: "8px",
            borderRadius: "4px",
            paddingInline: "25px"
        }}> {props.name}</button >
    )
}

export default Button