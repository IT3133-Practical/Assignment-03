import { useState } from 'react'
import '../../assets/css/compo.css'
import Profile from '../profile/Profile'

const StudentTable = (props) => {
    const [stu, setStu] = useState(props.students[0])

    return (
        <div className="outerDiv">
            <div className="leftDiv">
                <table border={1}>
                    <thead>
                        <tr>
                            <td>
                                first name

                            </td>
                            <td>
                                last name

                            </td>
                            <td>
                                course

                            </td>
                            <td>
                                country

                            </td>
                            <td>
                                profile

                            </td>
                        </tr>
                    </thead>
                    
                </table>
            </div>
            <div className='rightDiv'>
                <Profile stu={stu} />
            </div>
        </div>
    )
    //studentId, firstName, lastName, age, course, gender, address, skills, profilePic 
}

export default StudentTable
