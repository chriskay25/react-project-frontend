import React from 'react';

const User = (props) => {
  console.log("props: ", props)

  let user = props.users.filter(user => user.id == props.match.params.id)[0]

  console.log("user: ", user)

  return (
    <div>
      Username: {user.username}
    </div>
  )
}

export default User