import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <form>
                    <label for="username">Username:</label>
                    <input id="username" type="text" placeholder="username"></input>
                    <label for="password">Password:</label>
                    <input id="password" type="password" placeholder="password"></input>
                    <button onClick={props.handleClick}>Submit</button>
                </form>
            ) : (
                <button onClick={props.handleClick}>Log in</button>
            )
        }
    </div>
  )
}

export default NavBarChild