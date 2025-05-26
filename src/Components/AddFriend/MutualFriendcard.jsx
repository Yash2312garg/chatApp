import React from 'react';
import './MutualFriendCard.css';
import { PiUserCircle } from "react-icons/pi";
import {Button, ButtonGroup} from '../Button/Button';

const MutualFriendCard = ({
  user = {},
  onAddFriend,
  size = 'md',
  theme = 'light',
  showAddButton = true,
  addButtonText = 'Add Friend',
  className = ''
}) => {
  // Default user properties if not provided
  const {
    name = '',
    userName = '',
    profileImage = null,
    mutuals = 0
  } = user;

  // Generate class names based on props
  const cardClasses = [
    'mfc',
    `mfc-size-${size}`,
    `mfc-theme-${theme}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      <div className="mfc-avatar">
        {profileImage ? (
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="mfc-avatar-img"
          />
        ) : (
          <PiUserCircle className="mfc-avatar-placeholder" />
        )}
      </div>

      <div className="mfc-info">
        {name && <h4 className="mfc-name">{name}</h4>}
        {userName && <span className="mfc-username">@{userName}</span>}
        <span className="mfc-mutual-count">
          {mutuals} {mutuals === 1 ? 'Mutual Friend' : 'Mutual Friends'}
        </span>
      </div>

      {showAddButton && (
        <div className="mfc-action">
          <Button
            className=''
            variant="secondary"
            outlined = {false}
            onClick={onAddFriend}
          >
            {addButtonText}
          </Button>
          {/* <ButtonGroup/> */}
        </div>
      )}
    </div>
  );
}

export default MutualFriendCard;