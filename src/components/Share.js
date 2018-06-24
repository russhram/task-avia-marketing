import React from 'react';
import {connect} from 'react-redux';

import {
  VKShareButton,
  VKIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  OKShareButton,
  OKIcon,
} from 'react-share';

import {updateUser} from './../actions';
import {userSelector} from './../selectors';
import './Share.css';

const socials = [
  {
    button: VKShareButton,
    icon: VKIcon,
  },
  {
    button: FacebookShareButton,
    icon: FacebookIcon,
  },
  {
    button: TwitterShareButton,
    icon: TwitterIcon,
  },
  {
    button: OKShareButton,
    icon: OKIcon,
  },
];

const enhance = connect(userSelector, {updateUser});
const shareUrl = 'https://kandidat.aviasales.ru/';

const Share = ({user, updateUser}) => {
  return (
    <div className="share">
      {socials.map(({button: Button, icon: Icon}, idx) => (
        <div className="share__item" key={idx}>
          <Button
            url={shareUrl}
            onShareWindowClose={() => updateUser(user.set('shared', true))}
          >
            <Icon
              size={57}
              round
            />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default enhance(Share);
