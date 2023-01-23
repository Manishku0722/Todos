function Footer() {
    let footerStyle={
        // position: "absolute",
        top: "93vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
export default Footer;