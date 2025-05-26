import React, { useState, useMemo, useContext } from 'react';
import './UserCards.css';
import { PiUserCirclePlus, PiUserCircle } from "react-icons/pi";
// import { FaEllipsisV  } from "react-icons/io";
import { FaEllipsisV } from "react-icons/fa";
import Button from '../Button/Button';
import { generalFriendsApiFunctions } from './utils';
// import DarkThemeButton from './Components/Buttons';
import ThemedButton from './Components/Buttons';
import { UserContext } from '../../Context/UserContext';
const UserCardsComponent = ({
  user = {},
  onAddFriend,
  size = 'md',
  theme = 'light',
  showAddButton = true,
  addButtonText = 'Add +',
  className = '',
  friendship = [],
  status = null
}) => {
  // Default user if not provided
  const { fullName = '', username = '', profileImage = null } = user;
  const [openExtra, setExtra] = useState(false)
  const { id } = useContext(UserContext)


  // console.log(friendship)
  // const [mode, setMode] = useState({})
  // Generate class names based on props
  const cardClasses = [
    'ucards',
    `ucards-size-${size}`,
    `ucards-theme-${theme}`,
    className
  ].filter(Boolean).join(' ');

  // Determine icon size based on card size
  const getIconSize = () => {
    switch (size) {
      case 'sm': return 12;
      case 'lg': return 36;
      default: return 24; // medium
    }
  };

  const getClassName = () => {
    switch (size) {
      case 'sm': return "ucard-sm-btn";
      case 'lg': return 'ucard-lg-btn';
      default: return 'uscard-df-btn'
    }
  }


  const mode = useMemo(() => {

    switch (status ? status : "") {
      case "blocked":
        return { primary: { functionality: "unblock", name: "Un Block" }, secondary: [{ functionality: "viewProfile", name: "View" }] };
      case "connected":
        return { primary: { functionality: "unfriend", name: "Un Friend" }, secondary: [{ functionality: "block", name: "Block" }, { functionality: "viewProfile", name: "View" }] };
      case "pending":
        return { primary: { functionality: "cancel", name: "Cancel" }, secondary: [{ functionality: "viewProfile", name: "View" }] };
      case "accept":
        return { primary: { functionality: "accept", name: "Accept" }, secondary: [{ functionality: "reject", name: "Reject" }, { functionality: "viewProfile", name: "View" }] };
      default:
        return { primary: { functionality: "add", name: "add +" }, secondary: [{ functionality: "block", name: "Block" }, { functionality: "viewProfile", name: "View" }] };
    }
  }, [status]);
  console.log()


  return (
    <div className={cardClasses}>
      <div className="ucards-avatar">
        {profileImage ? (
          <img
            src={profileImage}
            alt={`${fullName}'s profile`}
            className="ucards-avatar-img"
          />
        ) : (
          <PiUserCircle size={getIconSize() * 2} className="ucards-avatar-placeholder" />
        )}
      </div>

      <div className="ucards-info">
        {fullName && <span className="ucards-name">{fullName}</span>}
        {username && <span className="ucards-username">@{username}</span>}
      </div>

      {showAddButton && (
        <div className="ucards-action">
          <Button
            className={getClassName()}
            variant="primary"
            outlined={true}
            onClick={() => generalFriendsApiFunctions(mode.primary.functionality, id, user._id)}
          >
            <span className="ucards-button-text">{mode.primary.name}</span>
          </Button>
          {mode.secondary && mode.secondary.length > 0 &&
            <>
              <button className={getClassName()}
                variant="primary"
                outlined={true}
                onClick={() => setExtra(prev => !prev)}><FaEllipsisV size={getIconSize()} className="ucards-avatar-placeholder" /></button>

              {openExtra && <div className='ucards-button-secondary-container'>{(mode.secondary.map((option, index) => {
                return (<span key={index} onClick={() => generalFriendsApiFunctions(option.functionality, id, user._id)}>
                  {option.name}
                </span>)
              }))}
              </div>
              }
            </>

          }
        </div>
      )}
    </div>
  );
}

export default UserCardsComponent;