const Footer = () => {
    return (
        <footer className="bg-gray-100 text-[#29af8a] text-center py-10">
            <p className="text-xl font-bold">Dishari</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Dishari. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
