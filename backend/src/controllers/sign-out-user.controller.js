const signOutUser = (req, res) => {
    res.cookie("token", "");
    res.status(200).json({message: "User signed out successfully"})
}

export default signOutUser;