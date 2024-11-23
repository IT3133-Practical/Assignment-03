const Profile = (props) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td rowSpan={7}>
                            <img
                                className="profile"
                                src={require("../../assets/img/profilepic/" + props.stu.profilePic)}
                                alt="profile" />
                        </td>
                        <td>
                            ID: {props.stu.studentId}
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}

export default Profile
